/* @plotdb/scrolly — a tiny scrollytelling engine + optional d3 chart helpers.
 * Zero hard dependencies: the engine (Scrolly.init) is pure DOM + IntersectionObserver.
 * The chart helpers (Scrolly.chart.*) and map loader (Scrolly.map.*) are thin conveniences
 * that call d3 / pdmaptw / topojson from the global scope ONLY when invoked — so the module
 * is safe to load anywhere; a page that never calls them needs no d3.
 *
 * Usage in an article:
 *   const ctrl = Scrolly.init({ onStep(scene, phase){ DRAW[scene] && DRAW[scene](phase); } });
 * Markup contract:
 *   .step[data-scene][data-phase?]   narrative blocks (left column)
 *   .scene[data-scene]               sticky graphic layers (one shown at a time via .on)
 * The engine toggles `.scene.on` to the active scene, `.step.active` to the active step,
 * calls onStep(scene, phase, stepEl) on each change, and re-calls it (stepEl=null) on resize.
 */
(function () {
  'use strict';

  const nz = s => (s || '').replace(/臺/g, '台');

  // ---- scrollytelling engine ----
  function init(opts) {
    opts = opts || {};
    const steps = [...document.querySelectorAll(opts.stepSel || '.step')];
    const scenes = [...document.querySelectorAll(opts.sceneSel || '.scene')];
    let cur = { scene: steps[0] && steps[0].dataset.scene || null, phase: null };
    function show(scene, phase, el) {
      cur = { scene, phase: phase || null };
      scenes.forEach(s => s.classList.toggle('on', s.dataset.scene === scene));
      if (el) { steps.forEach(s => s.classList.remove('active')); el.classList.add('active'); }
      opts.onStep && opts.onStep(scene, phase || null, el || null);
    }
    const io = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) show(e.target.dataset.scene, e.target.dataset.phase, e.target); });
    }, { rootMargin: opts.rootMargin || '-45% 0px -45% 0px', threshold: 0 });
    steps.forEach(s => io.observe(s));
    if (steps[0]) show(steps[0].dataset.scene, steps[0].dataset.phase, steps[0]);
    let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => opts.onStep && opts.onStep(cur.scene, cur.phase, null), 180); });
    return { show, current: () => cur };
  }

  // ---- d3 chart helpers (call only where d3 is loaded) ----
  function frame(host, M) {
    host.innerHTML = '';
    const W = host.clientWidth || 620, H = host.clientHeight || 420;
    const svg = d3.select(host).append('svg').attr('width', W).attr('height', H).attr('viewBox', `0 0 ${W} ${H}`);
    return { svg, W, H, M: M || {} };
  }
  function grid(svg, y, M, W) {
    svg.append('g').attr('class', 'grid').selectAll('line').data(y.ticks(5)).join('line')
      .attr('x1', M.l).attr('x2', W - M.r).attr('y1', y).attr('y2', y);
  }
  function axisX(svg, x, H, M, fmt) {
    svg.append('g').attr('class', 'axis').attr('transform', `translate(0,${H - M.b})`).call(d3.axisBottom(x).tickFormat(fmt || (d => d)));
  }
  function axisY(svg, y, M, fmt) {
    svg.append('g').attr('class', 'axis').attr('transform', `translate(${M.l},0)`).call(d3.axisLeft(y).ticks(5).tickFormat(fmt || (d => d)));
  }
  function drawIn(path, dur) {
    const L = path.node().getTotalLength();
    path.attr('stroke-dasharray', L).attr('stroke-dashoffset', L).transition().duration(dur || 850).ease(d3.easeCubicOut).attr('stroke-dashoffset', 0);
    return path;
  }
  function legendBar(host, lo, hi, LO, HI, unit) {
    const steps = 6;
    host.innerHTML = `<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--dim)"><span>${(+lo).toFixed(0)}</span><span style="flex:1;height:8px;border-radius:4px;background:linear-gradient(90deg,${Array.from({ length: steps }, (_, i) => d3.interpolateRgb(LO, HI)(i / (steps - 1))).join(',')})"></span><span>${(+hi).toFixed(0)} ${unit || ''}</span></div>`;
  }
  function linreg(xs, ys) {
    const n = xs.length, mx = d3.mean(xs), my = d3.mean(ys);
    let sxy = 0, sxx = 0, syy = 0;
    for (let i = 0; i < n; i++) { const dx = xs[i] - mx, dy = ys[i] - my; sxy += dx * dy; sxx += dx * dx; syy += dy * dy; }
    const m = sxy / sxx;
    return { m, b: my - m * mx, r: sxy / Math.sqrt(sxx * syy) };
  }

  // ---- pdmaptw choropleth helper ----
  async function loadFeatures(name) {
    const { topo, meta } = await pdmaptw.get(name || 'county');
    const objKey = topo.objects.pdmaptw ? 'pdmaptw' : Object.keys(topo.objects)[0];
    const fc = topojson.feature(topo, topo.objects[objKey]);
    fc.features.forEach(f => { const p = f.properties; f.properties.name = nz([meta.name[p.c], meta.name[p.t], meta.name[p.v]].filter(x => x != null && x !== '').join('')); });
    return fc;
  }

  window.Scrolly = {
    init, nz,
    chart: { frame, grid, axisX, axisY, drawIn, legendBar, linreg },
    map: { loadFeatures, nameOf: f => nz(f.properties.name) },
  };
})();

# @plotdb/scrolly

A tiny scrollytelling engine, plus a few optional d3 chart helpers.

- **Engine** (`Scrolly.init`) — pure DOM + `IntersectionObserver`, zero dependencies.
- **Chart helpers** (`Scrolly.chart.*`) and **map loader** (`Scrolly.map.*`) — thin
  conveniences that touch `d3` / `pdmaptw` / `topojson` from the global scope *only when
  called*. A page that never calls them needs no d3.

Written in plain JS. Loads as a classic script and exposes a global `window.Scrolly`.


## Install / include

    <script src="scrolly.min.js"></script>

or via a bundler using `@plotdb/scrolly` (browser/main → `dist/index.min.js`).


## The markup contract

Two kinds of elements, tied together by a shared `data-scene`:

    <!-- narrative: the steps that scroll past -->
    <div class="step" data-scene="intro"></div>
    <div class="step" data-scene="intro" data-phase="zoom"></div>
    <div class="step" data-scene="map"></div>

    <!-- graphic: sticky layers, one shown at a time -->
    <div class="scene" data-scene="intro">…</div>
    <div class="scene" data-scene="map">…</div>

As each `.step` reaches the middle of the viewport, the engine:

- toggles `.on` onto the matching `.scene` (others lose it),
- toggles `.active` onto the current `.step`,
- calls your `onStep(scene, phase, stepEl)`.

You supply the CSS (position the `.scene`s absolutely inside a sticky stage, fade on `.on`).
`data-phase` lets several steps share one scene but request different states.


## Engine

    const ctrl = Scrolly.init({
      onStep(scene, phase, stepEl) {   // called on every step change, and on resize (stepEl=null)
        DRAW[scene] && DRAW[scene](phase);
      },
      // options (all optional):
      stepSel:   '.step',              // step selector
      sceneSel:  '.scene',             // scene selector
      rootMargin:'-45% 0px -45% 0px',  // IntersectionObserver band (default: middle of viewport)
    });

    ctrl.show('map', 'zoom');          // drive it programmatically
    ctrl.current();                    // -> { scene, phase }

On `resize`, `onStep` is re-called (debounced) with the current scene so charts can redraw
to the new size.


## Chart helpers (need global `d3`)

    const { frame, grid, axisX, axisY, drawIn, legendBar, linreg } = Scrolly.chart;

    const { svg, W, H, M } = frame(hostEl, { t:20, r:20, b:28, l:56 }); // clear host, sized <svg>
    grid(svg, y, M, W);                       // horizontal gridlines at y.ticks(5)
    axisX(svg, x, H, M, fmt);                 // bottom axis (optional tickFormat)
    axisY(svg, y, M, fmt);                    // left axis
    drawIn(path, dur);                        // animate a <path> drawing itself in
    legendBar(hostEl, lo, hi, LO, HI, unit);  // horizontal gradient legend
    const { m, b, r } = linreg(xs, ys);       // least-squares slope/intercept + Pearson r


## Map helper (needs global `pdmaptw` + `topojson`)

    const fc = await Scrolly.map.loadFeatures('county'); // topojson -> GeoJSON, names normalised
    const name = Scrolly.map.nameOf(feature);            // normalised (臺->台) place name

`Scrolly.nz(s)` is the same 臺→台 normaliser, exposed for building name→code lookups.


## License

MIT

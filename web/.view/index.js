 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, asseturl, bundleurl, c, defer, hashfile, libLoader, md5, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
var hurl = (typeof(asseturl) == "function") ? asseturl(url, locals.filename) : url;
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", hurl + (hurl == url ? libLoader._v : ""), true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
var hurl = (typeof(asseturl) == "function") ? asseturl(url, locals.filename) : url;
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", hurl + (hurl == url ? libLoader._v : ""), true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
var min = (typeof(cfg.min) == "undefined" || cfg.min);
hashfile({type: "js", name: name, files: urls, src: locals.filename});
// content-addressed url when the bundle has been built. it needs no `_v`: the
// filename already changes with the content. before the first build there is no
// entry yet, so fall back to the plain name ( which does need `_v` ).
var fn = (typeof(bundleurl) == "function") ? bundleurl({type: "js", name: name, min: min, src: locals.filename}) : null;
if(!fn) { fn = "/assets/bundle/" + name + (min ? ".min" : "") + ".js" + libLoader._v; }
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};












































pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1\"\u003E\u003Ctitle\u003E@plotdb\u002Fscrolly — demo\u003C\u002Ftitle\u003E";
pug_mixins["script"]([{name:'d3', path:'d3.min.js'}, {name:'@plotdb/scrolly'}]);
pug_html = pug_html + "\u003Cstyle\u003E:root{--bg:#f7f8fa;--panel:#fff;--line:#e2e6ec;--fg:#1a1d24;--dim:#5a6272;--muted:#949bab;--accent:#1f6feb;--accent2:#0f9d76;--female:#e0447a}\n*{box-sizing:border-box}\nbody{margin:0;background:var(--bg);color:var(--fg);line-height:1.55;font-family:-apple-system,\"Helvetica Neue\",Arial,sans-serif}\na{color:var(--accent)}\n.wrap{max-width:1080px;margin:0 auto;padding:0 20px}\n.hero{padding:64px 0 30px;border-bottom:1px solid var(--line)}\n.hero h1{font-size:40px;letter-spacing:-1px;margin:0 0 10px}\n.hero code{background:#eef1f5;border:1px solid var(--line);border-radius:6px;padding:2px 8px;font-size:15px}\n.hero p{font-size:17px;color:var(--dim);max-width:640px}\n.scrolly{display:grid;grid-template-columns:minmax(0,380px) 1fr;gap:44px;align-items:stretch}\n.narrative{padding:14vh 0}\n.step{min-height:80vh;display:flex;flex-direction:column;justify-content:center}\n.step .card{background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:22px 24px;box-shadow:0 4px 20px rgba(20,25,40,.06);opacity:.5;transform:translateY(8px);transition:.4s}\n.step.active .card{opacity:1;transform:none;box-shadow:0 8px 30px rgba(20,25,40,.09)}\n.step .kick{font-size:12px;color:var(--accent);font-weight:600;letter-spacing:.4px;margin-bottom:6px}\n.step h3{margin:0 0 8px;font-size:20px}\n.step p{margin:0;color:var(--dim);font-size:15.5px;line-height:1.7}\n.sticky{position:sticky;top:24px;height:calc(100vh - 48px)}\n#stage{position:relative;width:100%;height:100%;background:var(--panel);border:1px solid var(--line);border-radius:18px;box-shadow:0 4px 20px rgba(20,25,40,.05);overflow:hidden}\n.scene{position:absolute;inset:0;padding:22px;opacity:0;transition:opacity .5s;pointer-events:none;display:flex;flex-direction:column}\n.scene.on{opacity:1;pointer-events:auto}\n.scene .sh{font-size:16px;font-weight:700;margin:0 0 12px}\n.scene .host{flex:1;position:relative;min-height:0}\nsvg .axis text{fill:var(--muted);font-size:11px}\nsvg .axis line,svg .axis path{stroke:var(--line)}\nsvg .grid line{stroke:var(--line);stroke-opacity:.8}\n.foot{border-top:1px solid var(--line);margin-top:40px;padding:24px 0 60px;color:var(--muted);font-size:13px}\n@media(max-width:860px){.scrolly{grid-template-columns:1fr;gap:0}.sticky{position:sticky;top:12px;height:56vh;order:-1}.narrative{padding:4vh 0}.step{min-height:66vh}}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cmain class=\"wrap\"\u003E\u003Csection class=\"hero\"\u003E\u003Ch1\u003E@plotdb\u002Fscrolly\u003C\u002Fh1\u003E\u003Cp\u003EA tiny scrollytelling engine — \u003Ccode\u003EScrolly.init()\u003C\u002Fcode\u003E wires steps to sticky scenes over a \u003Ccode\u003Edata-scene\u003C\u002Fcode\u003E contract. Scroll to see it switch. Charts drawn with the bundled \u003Ccode\u003EScrolly.chart\u003C\u002Fcode\u003E d3 helpers.\u003C\u002Fp\u003E\u003C\u002Fsection\u003E\u003Csection class=\"scrolly\"\u003E\u003Cdiv class=\"narrative\"\u003E\u003Cdiv class=\"step\" data-scene=\"line\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"kick\"\u003EScene · line\u003C\u002Fdiv\u003E\u003Ch3\u003EA line, drawing itself in\u003C\u002Fh3\u003E\u003Cp\u003EEach \u003Ccode\u003E.step\u003C\u002Fcode\u003E carries a \u003Ccode\u003Edata-scene\u003C\u002Fcode\u003E. As it reaches mid-viewport, the engine shows the matching \u003Ccode\u003E.scene\u003C\u002Fcode\u003E and calls your \u003Ccode\u003EonStep\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"step\" data-scene=\"line\" data-phase=\"peak\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"kick\"\u003Edata-phase=\"peak\"\u003C\u002Fdiv\u003E\u003Ch3\u003ESame scene, different phase\u003C\u002Fh3\u003E\u003Cp\u003ESeveral steps can share one scene and pass a \u003Ccode\u003Edata-phase\u003C\u002Fcode\u003E to request a variant — here, annotating the peak.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"step\" data-scene=\"bar\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"kick\"\u003EScene · bar\u003C\u002Fdiv\u003E\u003Ch3\u003ESwitch to another visual\u003C\u002Fh3\u003E\u003Cp\u003EA different \u003Ccode\u003Edata-scene\u003C\u002Fcode\u003E swaps the sticky graphic entirely. Any chart works — the engine only cares about the markup contract.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"step\" data-scene=\"bar\" data-phase=\"hi\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"kick\"\u003Edata-phase=\"hi\"\u003C\u002Fdiv\u003E\u003Ch3\u003EHighlight on cue\u003C\u002Fh3\u003E\u003Cp\u003EDrive emphasis from the narrative: this phase pulls one bar forward.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sticky\"\u003E\u003Cdiv id=\"stage\"\u003E\u003Cdiv class=\"scene\" data-scene=\"line\"\u003E\u003Cdiv class=\"sh\"\u003EAnnual value\u003C\u002Fdiv\u003E\u003Cdiv class=\"host\" id=\"lineHost\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"scene\" data-scene=\"bar\"\u003E\u003Cdiv class=\"sh\"\u003EBy category\u003C\u002Fdiv\u003E\u003Cdiv class=\"host\" id=\"barHost\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Cfooter class=\"foot\"\u003E\u003Cdiv\u003E@plotdb\u002Fscrolly · MIT · \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fplotdb\u002Fscrolly\"\u003Egithub.com\u002Fplotdb\u002Fscrolly\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C\u002Fmain\u003E\u003Cscript type=\"module\"\u003Econst {frame,grid,axisX,axisY,drawIn}=Scrolly.chart;\nconst el=id=\u003Edocument.getElementById(id);\nconst SERIES=[{y:2016,v:42},{y:2017,v:48},{y:2018,v:61},{y:2019,v:78},{y:2020,v:71},{y:2021,v:83},{y:2022,v:97},{y:2023,v:110},{y:2024,v:104}];\nconst peak=SERIES.reduce((a,b)=\u003Eb.v\u003Ea.v?b:a);\nconst CATS=[{k:'North',v:110},{k:'Central',v:74},{k:'South',v:88},{k:'East',v:31},{k:'Islands',v:12}];\nconst topCat=CATS.reduce((a,b)=\u003Eb.v\u003Ea.v?b:a);\n\nconst DRAW={};\nDRAW.line=(phase)=\u003E{\n  const {svg,W,H,M}=frame(el('lineHost'),{t:20,r:22,b:28,l:44});\n  const x=d3.scalePoint().domain(SERIES.map(d=\u003Ed.y)).range([M.l,W-M.r]).padding(.4);\n  const y=d3.scaleLinear().domain([0,d3.max(SERIES,d=\u003Ed.v)*1.12]).range([H-M.b,M.t]);\n  grid(svg,y,M,W); axisX(svg,x,H,M); axisY(svg,y,M);\n  drawIn(svg.append('path').datum(SERIES).attr('fill','none').attr('stroke','var(--accent)').attr('stroke-width',2.6).attr('d',d3.line().x(d=\u003Ex(d.y)).y(d=\u003Ey(d.v)).curve(d3.curveMonotoneX)));\n  svg.append('g').selectAll('circle').data(SERIES).join('circle').attr('cx',d=\u003Ex(d.y)).attr('cy',d=\u003Ey(d.v)).attr('r',3).attr('fill','var(--accent)');\n  if(phase==='peak'){\n    svg.append('circle').attr('cx',x(peak.y)).attr('cy',y(peak.v)).attr('r',6).attr('fill','none').attr('stroke','var(--female)').attr('stroke-width',2);\n    svg.append('text').attr('x',x(peak.y)).attr('y',y(peak.v)-12).attr('text-anchor','middle').attr('font-size',12).attr('font-weight',700).attr('fill','var(--female)').text('peak '+peak.v);\n  }\n};\nDRAW.bar=(phase)=\u003E{\n  const {svg,W,H,M}=frame(el('barHost'),{t:14,r:26,b:26,l:74});\n  const x=d3.scaleLinear().domain([0,d3.max(CATS,d=\u003Ed.v)*1.05]).range([M.l,W-M.r]);\n  const y=d3.scaleBand().domain(CATS.map(d=\u003Ed.k)).range([M.t,H-M.b]).padding(.3);\n  axisX(svg,x,H,M);\n  svg.append('g').selectAll('text').data(CATS).join('text').attr('x',M.l-8).attr('y',d=\u003Ey(d.k)+y.bandwidth()\u002F2).attr('text-anchor','end').attr('dominant-baseline','middle').attr('font-size',12).attr('fill','var(--dim)').text(d=\u003Ed.k);\n  svg.append('g').selectAll('rect').data(CATS).join('rect').attr('x',M.l).attr('y',d=\u003Ey(d.k)).attr('height',y.bandwidth()).attr('rx',3)\n    .attr('fill',d=\u003Ephase==='hi'?(d.k===topCat.k?'var(--accent)':'#c9d6ea'):'var(--accent)')\n    .attr('width',0).transition().duration(650).ease(d3.easeCubicOut).attr('width',d=\u003Ex(d.v)-M.l);\n};\n\nScrolly.init({onStep:(scene,phase)=\u003E{DRAW[scene]&&DRAW[scene](phase);}});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "asseturl" in locals_for_with ?
        locals_for_with.asseturl :
        typeof asseturl !== 'undefined' ? asseturl : undefined, "bundleurl" in locals_for_with ?
        locals_for_with.bundleurl :
        typeof bundleurl !== 'undefined' ? bundleurl : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 
# Changelog

## 0.1.0

Initial release.

- `Scrolly.init({ onStep, stepSel?, sceneSel?, rootMargin? })` — scrollytelling engine over
  a `.step[data-scene]` / `.scene[data-scene]` markup contract; toggles `.scene.on` +
  `.step.active`, calls `onStep(scene, phase, stepEl)` on each step change and on resize.
  Returns `{ show(scene, phase), current() }`.
- `Scrolly.chart` — d3 helpers: `frame`, `grid`, `axisX`, `axisY`, `drawIn`, `legendBar`,
  `linreg`.
- `Scrolly.map` — `loadFeatures(name)` (pdmaptw topojson → GeoJSON with normalised names),
  `nameOf(feature)`.
- `Scrolly.nz(s)` — 臺→台 name normaliser.

Extracted from the 資料集.tw 專題 (data-story) articles.

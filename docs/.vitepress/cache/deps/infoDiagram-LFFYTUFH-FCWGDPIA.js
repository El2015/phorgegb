import {
  parse
} from "./chunk-J7LLUYQQ.js";
import "./chunk-2C4HF6FC.js";
import "./chunk-L3A3P7WE.js";
import "./chunk-UOTVNKUE.js";
import "./chunk-52OBJVO7.js";
import "./chunk-CJW3FOMJ.js";
import "./chunk-ATYLWYB6.js";
import "./chunk-TRNDJBB5.js";
import "./chunk-5OKL5OCL.js";
import "./chunk-KAFR26ZR.js";
import {
  selectSvgElement
} from "./chunk-YRRIWLWW.js";
import {
  configureSvgSize
} from "./chunk-K7FEILMT.js";
import {
  __name,
  log
} from "./chunk-7S2XAJZJ.js";
import "./chunk-6FL3FPMZ.js";
import "./chunk-QQQ3YQTL.js";
import "./chunk-DI52DQAC.js";

// node_modules/mermaid/dist/chunks/mermaid.core/infoDiagram-LFFYTUFH.mjs
var parser = {
  parse: __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: "11.13.0" + (true ? "" : "-tiny")
};
var getVersion = __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
//# sourceMappingURL=infoDiagram-LFFYTUFH-FCWGDPIA.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3GPY2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a1ae195eb1df761a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"cGMhY":[function(require,module,exports) {
var _menuApiMjs = require("./modules/menuApi.mjs");
var _inAreaMjs = require("./InArea.mjs");
var _drawerMjs = require("./drawer.mjs");
var _eventManagerMjs = require("./EventManager.mjs");
class Canvas {
    constructor(canvasDomElement, toolarea, shapeManager){
        this.shapes = new Map();
        this.zOrder = [];
        this.events = [];
        this.selectedShape = new Map();
        this.backgroundColorShape = new Map();
        this.borderColorShape = new Map();
        this.eventQueue = [];
        this.toolarea = toolarea;
        this.isLeftMouseDown = false;
        this.shapeManager = shapeManager;
        const { width, height } = canvasDomElement.getBoundingClientRect();
        this.selectionIndex = 0;
        this.width = width;
        this.height = height;
        this.ctx = canvasDomElement.getContext("2d");
        canvasDomElement.addEventListener("mousemove", createMouseHandler("handleMouseMove"));
        canvasDomElement.addEventListener("mousedown", createMouseHandler("handleMouseDown"));
        canvasDomElement.addEventListener("mouseup", createMouseHandler("handleMouseUp"));
        let altKeyCheck = false;
        document.addEventListener("keydown", function(event) {
            if (event.key === "Alt") altKeyCheck = true;
        });
        document.addEventListener("keyup", function(event) {
            if (event.key === "Alt") altKeyCheck = false;
        });
        document.addEventListener("mouseleave", ()=>{
            canvasDomElement.classList.remove("move-cursor");
        });
        function createMouseHandler(methodName) {
            let isMouseDown = false;
            let altKeyCheck = false;
            return function(e) {
                e = e || window.event;
                if ("object" === typeof e) {
                    const x = e.pageX - this.offsetLeft, y = e.pageY - this.offsetTop, ss = toolarea.getSelectedShape();
                    // if left mouse button is pressed,
                    // and if a tool is selected, do something
                    if (e.button === 0 && ss) {
                        const m = ss[methodName];
                        // This in the shapeFactory should be the factory itself.
                        //m.call(ss, x, y);
                        //canvasDomElement.classList.add('canvas-selection');
                        if (methodName === "handleMouseDown") m.call(ss, x, y, altKeyCheck, e.ctrlKey);
                        else m.call(ss, x, y);
                    }
                }
            };
        }
        let menuApi = new (0, _menuApiMjs.MenuApi)();
        let mainMenu = menuApi.createMenu();
        canvasDomElement.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            mainMenu.show(e.pageX, e.pageY);
        });
        const removeItem = menuApi.createItem("remove shape", ()=>{
            this.selectedShape.forEach((value, key)=>{
                if (value) this.removeShape(this.shapes[key]);
            });
        });
        let seperator = menuApi.createSeparator();
        let seperator2 = menuApi.createSeparator();
        let seperator3 = menuApi.createSeparator();
        let backgroundColors = new Map();
        backgroundColors.set("transparent", "transparent");
        backgroundColors.set("red", "rot");
        backgroundColors.set("green", "gruen");
        backgroundColors.set("yellow", "gelb");
        backgroundColors.set("blue", "blau");
        backgroundColors.set("black", "schwarz");
        const backgroundColor = menuApi.createRadioOption("Hintergrundfarbe", backgroundColors, "red", (color)=>{
            // On click
            this.selectedShape.forEach((value, key)=>{
                if (value) {
                    const shape = this.shapes[key];
                    shape.setBackgroundColor(color);
                    shape.draw(this.ctx, true);
                    this.backgroundColorShape.set(shape.id, color);
                }
            });
        });
        let borderColors = new Map();
        borderColors.set("red", "rot");
        borderColors.set("green", "gruen");
        borderColors.set("yellow", "gelb");
        borderColors.set("blue", "blau");
        borderColors.set("black", "schwarz");
        const borderColor = menuApi.createRadioOption("Randfarbe", borderColors, "red", (color)=>{
            this.selectedShape.forEach((value, key)=>{
                if (value) {
                    const shape = this.shapes[key];
                    shape.setBorderColor(color);
                    shape.draw(this.ctx, true);
                    this.borderColorShape.set(shape.id, color);
                }
            });
        });
        const foregroundItem = menuApi.createItem("foreground", ()=>{
            for(let id in this.shapes)if (this.selectedShape.get(this.shapes[id].id)) {
                let current = this.zOrder.indexOf(Number(id));
                if (current + 1 < this.zOrder.length) this.swap(current, current + 1);
            }
            this.draw();
        });
        const backgroundItem = menuApi.createItem("background", ()=>{
            for(let id in this.shapes)if (this.selectedShape.get(this.shapes[id].id)) {
                let current = this.zOrder.indexOf(Number(id));
                if (current - 1 >= 0) this.swap(current, current - 1);
            }
            this.draw();
        });
        mainMenu.addItem(removeItem);
        mainMenu.addItem(seperator);
        mainMenu.addItem(backgroundColor);
        mainMenu.addItem(seperator2);
        mainMenu.addItem(borderColor);
        mainMenu.addItem(seperator3);
        mainMenu.addItem(foregroundItem);
        mainMenu.addItem(backgroundItem);
    }
    swap(number1, number2) {
        let shapeNumber1 = this.zOrder[number1];
        this.zOrder[number1] = this.zOrder[number2];
        this.zOrder[number2] = shapeNumber1;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "lightgrey";
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.stroke();
        // draw shapes
        this.ctx.fillStyle = "black";
        for(let index = 0; index < this.zOrder.length; index++){
            this.ctx.fillStyle = this.backgroundColorShape.get(this.shapes[this.zOrder[index]].id);
            this.ctx.strokeStyle = this.borderColorShape.get(this.shapes[this.zOrder[index]].id);
            this.shapes[this.zOrder[index]].setBackgroundColor(this.backgroundColorShape.get(this.shapes[this.zOrder[index]].id));
            this.shapes[this.zOrder[index]].setBorderColor(this.borderColorShape.get(this.shapes[this.zOrder[index]].id));
            this.shapes[this.zOrder[index]].draw(this.ctx, this.selectedShape.get(this.shapes[this.zOrder[index]].id));
            this.shapes[this.zOrder[index]].draw(this.ctx, this.selectedShape.has(this.zOrder[index]));
        }
        return this;
    }
    showEvents(eventTxtField, event) {
        let eventString = "";
        eventString += JSON.stringify(event) + "\n";
        eventTxtField.value += eventString;
    }
    getShapeByEvent(event) {
        let shapeType = event.type;
        let shape = undefined;
        if (shapeType === "Rectangle") shape = new (0, _drawerMjs.Rectangle)(event.data.from, event.data.to);
        else if (shapeType === "Circle") shape = new (0, _drawerMjs.Circle)(event.data.center, event.data.radius);
        else if (shapeType === "Triangle") shape = new (0, _drawerMjs.Triangle)(event.data.p1, event.data.p2, event.data.p3);
        else if (shapeType === "Line") shape = new (0, _drawerMjs.Line)(event.data.from, event.data.to);
        console.log(shape);
        return shape;
    }
    addShape(shape, redraw = true) {
        if (shape !== undefined) {
            this.zOrder.push(shape.id);
            this.shapes[shape.id] = shape;
        }
        return redraw ? this.draw() : this;
    }
    apply(event) {
        this.eventQueue.push(event);
        this.processEvents();
    }
    processEvents() {
        //while (this.events.length > 0) {
        while(this.eventQueue.length > 0){
            const event = this.eventQueue.shift();
            const eventType = event.event;
            const eventData = event.shape;
            const eventTxtOutput = document.getElementById("eventOutput");
            switch(eventType){
                case "addShape":
                    this.showEvents(eventTxtOutput, event);
                    break;
                case "removeShape":
                    this.showEvents(eventTxtOutput, event);
                    break;
            }
        }
        this.animationFrameId = null;
    }
    deleteFromZBuffer(shape) {
        if (typeof shape == "undefined") return;
        let index = this.zOrder.indexOf(shape.id);
        if (index > -1) this.zOrder.splice(index, 1);
    }
    removeShape(shape, redraw = true) {
        this.deleteFromZBuffer(shape);
        const id = shape.id;
        delete this.shapes[id];
        return redraw ? this.draw() : this;
    }
    removeShapeWithId(id, redraw = true) {
        this.deleteFromZBuffer(this.shapes[id + 1]);
        delete this.shapes[id + 1];
        return redraw ? this.draw() : this;
    }
    checkMousePosition(shape, mouseX, mouseY) {
        let inArea = new (0, _inAreaMjs.InArea)();
        let shapeType = shape.constructor.name;
        if (shapeType === "Rectangle") return inArea.mousePointInRectangle(shape.from.x, shape.to.x, shape.from.y, shape.to.y, mouseX, mouseY);
        else if (shapeType === "Circle") return inArea.mousePointInCircle(shape.center.x, shape.center.y, shape.radius, mouseX, mouseY);
        else if (shapeType === "Triangle") return inArea.mousePointInTriangle(shape.p1.x, shape.p1.y, shape.p2.x, shape.p2.y, shape.p3.x, shape.p3.y, mouseX, mouseY);
        else if (shapeType === "Line") return inArea.mousePointInLine(shape.from.x, shape.from.y, shape.to.x, shape.to.y, mouseX, mouseY);
    }
    moveShape(mouseX, mouseY) {
        let shape = undefined;
        let eventManager = new (0, _eventManagerMjs.EventManager)(this.shapeManager);
        this.selectedShape.forEach((value, key)=>{
            if (value) {
                let shapeType = this.shapes[key].constructor.name;
                shape = this.shapes[key];
                //drawArea
                const shapeElement = document.getElementById("drawArea");
                shapeElement.classList.remove("normal-cursor");
                shapeElement.classList.add("move-cursor");
                //this.removeShape(this.shapes[key]);
                eventManager.createEvent("removeShape", this.shapes[key]);
                if (shapeType === "Rectangle") {
                    const offsetX = mouseX - shape.from.x;
                    const offsetY = mouseY - shape.from.y;
                    shape.from.x += offsetX;
                    shape.to.x += offsetX;
                    shape.from.y += offsetY;
                    shape.to.y += offsetY;
                } else if (shapeType === "Circle") {
                    const offsetCenterX = mouseX - shape.center.x;
                    const offsetCenterY = mouseY - shape.center.y;
                    shape.center.x += offsetCenterX;
                    shape.center.y += offsetCenterY;
                } else if (shapeType === "Triangle") {
                    const centerX = (shape.p1.x + shape.p2.x + shape.p3.x) / 3;
                    const centerY = (shape.p1.y + shape.p2.y + shape.p3.y) / 3;
                    const offsetX = mouseX - centerX;
                    const offsetY = mouseY - centerY;
                    shape.p1.x += offsetX;
                    shape.p2.x += offsetX;
                    shape.p3.x += offsetX;
                    shape.p1.y += offsetY;
                    shape.p2.y += offsetY;
                    shape.p3.y += offsetY;
                } else if (shapeType === "Line") {
                    const offsetX = mouseX - shape.from.x;
                    const offsetY = mouseY - shape.from.y;
                    shape.from.x += offsetX;
                    shape.to.x += offsetX;
                    shape.from.y += offsetY;
                    shape.to.y += offsetY;
                }
            }
        });
        //this.addShape(shape, true);
        eventManager.createEvent("addShape", shape);
        this.draw();
    }
    handleMouseUp(mouseX, mouseY) {
        const shapeElement = document.getElementById("drawArea");
        shapeElement.classList.remove("move-cursor");
        shapeElement.classList.add("normal-cursor");
    }
    selectShape(mouseX, mouseY, redraw, altKey, ctrlKey) {
        let overlappedShapes = [];
        let mouseInShape = false;
        if (altKey) {
            for(let id in this.shapes){
                const shape = this.shapes[id];
                mouseInShape = this.checkMousePosition(shape, mouseX, mouseY);
                if (mouseInShape) {
                    if (!overlappedShapes.includes(id)) overlappedShapes.push(Number(id));
                }
            }
            if (overlappedShapes.length > 0) {
                let currentIndex = 0;
                if (this.selectedShape.size > 0) {
                    const currentShapeId = Array.from(this.selectedShape.keys())[0];
                    currentIndex = overlappedShapes.indexOf(currentShapeId) + 1;
                    if (currentIndex >= overlappedShapes.length) currentIndex = 0;
                }
                this.selectedShape.clear();
                this.selectedShape.set(overlappedShapes[currentIndex], mouseInShape);
            }
            redraw = true;
            this.selectionIndex = 0;
            return redraw ? this.draw() : this;
        }
        if (!ctrlKey) this.selectedShape.clear();
        for(let id in this.shapes){
            const shape = this.shapes[id];
            mouseInShape = this.checkMousePosition(shape, mouseX, mouseY);
            if (mouseInShape && (this.selectedShape.size === 0 || ctrlKey)) {
                this.selectedShape.set(shape.id, mouseInShape);
                console.log("mouseInShape && ");
                redraw = true;
            } else if (this.selectedShape.size === 0) {
                this.selectedShape.clear();
                redraw = true;
            }
        }
        this.selectionIndex = 0;
        return redraw ? this.draw() : this;
    }
}
function init() {
    const canvasDomElm = document.getElementById("drawArea");
    const menu = document.getElementsByClassName("tools");
    // Problem here: Factories needs a way to create new Shapes, so they
    // have to call a method of the canvas.
    // The canvas on the other side wants to call the event methods
    // on the toolbar, because the toolbar knows what tool is currently
    // selected.
    // Anyway, we do not want the two to have references on each other
    //textfield for events
    const eventLblDiv = document.createElement("div");
    let eventLblContent = document.createTextNode("Event Stream Output: ");
    eventLblDiv.appendChild(eventLblContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(eventLblDiv, currentDiv);
    const eventDiv = document.createElement("div");
    let eventTxtField = document.createElement("textarea");
    eventTxtField.id = "eventOutput";
    eventTxtField.setAttribute("readonly", true);
    eventDiv.appendChild(eventTxtField);
    document.body.insertBefore(eventDiv, currentDiv);
    let canvas;
    const sm = {
        addShape (s, rd) {
            return canvas.addShape(s, rd);
        },
        removeShape (s, rd) {
            return canvas.removeShape(s, rd);
        },
        removeShapeWithId (id, rd) {
            return canvas.removeShapeWithId(id, rd);
        },
        selectShape (mouseX, mouseY, redraw, alt, ctrl) {
            return canvas.selectShape(mouseX, mouseY, redraw, alt, ctrl);
        },
        moveShape (mouseX, mouseY, event) {
            return canvas.moveShape(mouseX, mouseY, event);
        },
        handleMouseUp (mouseX, mouseY) {
            return canvas.handleMouseUp(mouseX, mouseY);
        },
        getShapeByEvent (event) {
            return canvas.getShapeByEvent(event);
        }
    };
    const shapesSelector = [
        new (0, _drawerMjs.LineFactory)(sm),
        new (0, _drawerMjs.CircleFactory)(sm),
        new (0, _drawerMjs.RectangleFactory)(sm),
        new (0, _drawerMjs.TriangleFactory)(sm),
        new (0, _drawerMjs.SelectFactory)(sm)
    ];
    const toolArea = new (0, _drawerMjs.ToolArea)(shapesSelector, menu[0]);
    canvas = new Canvas(canvasDomElm, toolArea, sm);
    canvas.draw();
}
// Start drawing app
init();

},{"./modules/menuApi.mjs":"eWhy5","./InArea.mjs":"jKBpa","./drawer.mjs":"b9Ox8","./EventManager.mjs":"iQQNm"}],"eWhy5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * MenuApi acts like a factory.
 */ parcelHelpers.export(exports, "MenuApi", ()=>MenuApi);
var _menuMjs = require("./menu.mjs");
class MenuApi {
    createMenu() {
        console.log("createMenu");
        return new (0, _menuMjs.Menu)();
    }
    createItem(tagName, callback) {
        console.log("createItem", callback);
        return {
            elem: tagName,
            getCallback: callback,
            render: ()=>{
                let menuItem = document.createElement("div");
                menuItem.innerHTML = tagName;
                menuItem.classList.add("popupmenu-item");
                return menuItem;
            }
        };
    }
    createRadioOption(radioGroupName, colours, defaultColour, callback) {
        return {
            elem: radioGroupName,
            getCallback: callback,
            render: ()=>{
                const groupElement = document.createElement("div");
                groupElement.className = "background-color-list";
                let lblGroupName = document.createElement("label");
                lblGroupName.innerText = radioGroupName;
                groupElement.appendChild(lblGroupName);
                for (const [key, value] of colours.entries()){
                    const itemElemet = document.createElement("div");
                    const input = document.createElement("input");
                    input.className = "color-radioBttn";
                    input.type = "radio";
                    input.id = radioGroupName + "-" + key;
                    input.value = key;
                    input.name = radioGroupName;
                    input.checked = key === defaultColour;
                    let lblRadio = document.createElement("label");
                    lblRadio.className = "lblRadio";
                    lblRadio.innerText = value;
                    lblRadio.setAttribute("for", input.id);
                    itemElemet.appendChild(input);
                    itemElemet.appendChild(lblRadio);
                    groupElement.append(itemElemet);
                    input.addEventListener("change", (event)=>{
                        event.preventDefault();
                        const selectedValue = event.target.value;
                        console.log("selectedValue", selectedValue);
                        callback(selectedValue);
                    });
                }
                return groupElement;
            }
        };
    }
    createSeparator() {
        console.log("createSeparator");
        return {
            elem: "separator",
            getCallback: ()=>{},
            render: ()=>{
                let menuSeparator = document.createElement("div");
                menuSeparator.classList.add("popupmenu-item-separator");
                return menuSeparator;
            }
        };
    }
}

},{"./menu.mjs":"e3znH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3znH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Menu", ()=>Menu);
class Menu {
    #items = null;
    #htmlElement = null;
    #hidden = true;
    constructor(){
        this.#items = [];
        this.className = "Menu";
    }
    addItem(item) {
        console.log("Add item");
        if (!this.#items.includes(item)) this.#items.push(item);
    }
    addItemAt(item, index) {
        console.log("add item at an index");
        if (!this.#items.includes(item)) this.#items.splice(index, 0, item);
    }
    addItems(...args) {
        args.forEach((arg)=>this.addItem(arg));
    }
    removeItem(item) {
        console.log("Removes item");
        if (this.#items.includes(item) && !this.#hidden) this.#items.splice(this.#items.indexOf(item), 1);
    }
    show(x, y) {
        console.log("show menu");
        if (this.#hidden) {
            document.addEventListener("click", this.#handleClick, true);
            let popupmenu = document.createElement("div");
            popupmenu.className = "popupmenu";
            popupmenu.style.left = `${x}px`;
            popupmenu.style.top = `${y}px`;
            this.#items.forEach((item)=>{
                console.log("#items");
                let itemElement = item.render();
                itemElement.addEventListener("click", ()=>item.getCallback(this));
                popupmenu.appendChild(itemElement);
            });
            document.body.appendChild(popupmenu);
            this.#hidden = false;
            this.#htmlElement = popupmenu;
        }
    }
    hide() {
        console.log("hide menu");
        if (!this.#hidden) {
            document.removeEventListener("click", this.#handleClick, true);
            this.#htmlElement.remove();
            this.#hidden = true;
            this.#htmlElement = null;
        }
    }
    #handleClick = (event)=>{
        let className = event.target.className;
        const isClickOutside = className !== "popupmenu-item" && className !== "popupmenu" && className !== "popupmenu-item-separator" && className !== "lblRadio" && className !== "color-radioBttn" && className !== "background-color-list";
        if (isClickOutside) {
            event.stopImmediatePropagation();
            this.hide();
        }
        console.log("type: " + event.type + " className " + className);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jKBpa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InArea", ()=>InArea);
class InArea {
    mousePointInRectangle(fromX, toX, fromY, toY, mouseX, mouseY) {
        const vecMouseFromX = mouseX - fromX;
        const vecMouseFromY = mouseY - fromY;
        const endPointX = toX - fromX;
        const endPointY = toY - fromY;
        const insideRectangle = endPointX < 0 && endPointY < 0 && vecMouseFromX > endPointX && vecMouseFromY > endPointY && vecMouseFromX < 0 && vecMouseFromY < 0 || endPointX > 0 && endPointY > 0 && vecMouseFromX < endPointX && vecMouseFromY < endPointY && vecMouseFromX > 0 && vecMouseFromY > 0 || endPointX < 0 && endPointY > 0 && vecMouseFromX > endPointX && vecMouseFromY < endPointY && vecMouseFromX < 0 && vecMouseFromY > 0 || vecMouseFromX < endPointX && vecMouseFromY > endPointY && vecMouseFromX > 0 && vecMouseFromY < 0;
        return insideRectangle;
    }
    mousePointInCircle(x, y, radius, mouseX, mouseY) {
        let inCircle = false;
        if (Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(radius, 2)) inCircle = true;
        return inCircle;
    }
    //Check for Triangle
    // Source: https://stackoverflow.com/questions/2049582/how-to-determine-if-a-point-is-in-a-2d-triangle
    sign(p1X, p1Y, p2X, p2Y, p3X, p3Y) {
        return (p1X - p3X) * (p2Y - p3Y) - (p2X - p3X) * (p1Y - p3Y);
    }
    mousePointInTriangle(p1X, p1Y, p2X, p2Y, p3X, p3Y, mouseX, mouseY) {
        let d1 = this.sign(mouseX, mouseY, p1X, p1Y, p2X, p2Y);
        let d2 = this.sign(mouseX, mouseY, p2X, p2Y, p3X, p3Y);
        let d3 = this.sign(mouseX, mouseY, p3X, p3Y, p1X, p1Y);
        let has_neg = d1 < 0 || d2 < 0 || d3 < 0;
        let has_pos = d1 > 0 || d2 > 0 || d3 > 0;
        return !(has_neg && has_pos);
    }
    // Calculate the minimal distance from Mouse to line
    //source from: https://www.geeksforgeeks.org/minimum-distance-from-a-point-to-the-line-segment-using-vectors/
    getDistanceOfLine(fromX, fromY, toX, toY, mouseX, mouseY) {
        let fromToX = toX - fromX;
        let fromToY = toY - fromY;
        let mouseToX = mouseX - toX;
        let mouseToY = mouseY - toY;
        let mouseFromX = mouseX - fromX;
        let mouseFromY = mouseY - fromY;
        let fromTo_mouseTo = fromToX * mouseToX + fromToY * mouseToY;
        let fromTo_mouseFrom = fromToX * mouseFromX + fromToY * mouseFromY;
        let miniDistMouseToLine = 0;
        if (fromTo_mouseTo > 0) {
            let magnitudeY = mouseY - toY;
            let magnitudeX = mouseX - toX;
            miniDistMouseToLine = Math.sqrt(magnitudeX * magnitudeX + magnitudeY * magnitudeY);
        } else if (fromTo_mouseFrom < 0) {
            let magnitudeY = mouseY - fromY;
            let magnitudeX = mouseX - fromX;
            miniDistMouseToLine = Math.sqrt(magnitudeX * magnitudeX + magnitudeY * magnitudeY);
        } else {
            let x1 = fromToX;
            let y1 = fromToY;
            let x2 = mouseFromX;
            let y2 = mouseFromY;
            let mod = Math.sqrt(x1 * x1 + y1 * y1);
            miniDistMouseToLine = Math.abs(x1 * y2 - y1 * x2) / mod;
        }
        return miniDistMouseToLine;
    }
    mousePointInLine(fromX, fromY, toX, toY, mouseX, mouseY) {
        let buf = 5;
        let onLine = false;
        let distance = this.getDistanceOfLine(fromX, fromY, toX, toY, mouseX, mouseY);
        if (distance <= buf) onLine = true;
        return onLine;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9Ox8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Line", ()=>Line);
parcelHelpers.export(exports, "LineFactory", ()=>LineFactory);
parcelHelpers.export(exports, "Circle", ()=>Circle);
parcelHelpers.export(exports, "CircleFactory", ()=>CircleFactory);
parcelHelpers.export(exports, "Rectangle", ()=>Rectangle);
parcelHelpers.export(exports, "RectangleFactory", ()=>RectangleFactory);
parcelHelpers.export(exports, "Triangle", ()=>Triangle);
parcelHelpers.export(exports, "TriangleFactory", ()=>TriangleFactory);
parcelHelpers.export(exports, "createShapeFromEventData", ()=>createShapeFromEventData);
parcelHelpers.export(exports, "SelectFactory", ()=>SelectFactory);
parcelHelpers.export(exports, "ToolArea", ()=>ToolArea);
var _eventManagerMjs = require("./EventManager.mjs");
class Point2D {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
class AbstractShape {
    constructor(){
        this.id = AbstractShape.counter++;
    }
    getBackgroundColor() {
        return this.backgroundColor;
    }
    setBackgroundColor(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }
    getBorderColor() {
        return this.borderColor;
    }
    setBorderColor(borderColor) {
        this.borderColor = borderColor;
    }
    handleColour(ctx) {
        if (this.getBackgroundColor()) {
            ctx.fillStyle = this.getBackgroundColor();
            ctx.fill();
        }
        if (this.getBorderColor()) ctx.strokeStyle = this.getBorderColor();
    }
}
AbstractShape.counter = 0;
class AbstractFactory {
    constructor(shapeManager){
        this.shapeManager = shapeManager;
    }
    handleMouseDown(x, y) {
        this.from = new Point2D(x, y);
    }
    handleMouseUp(x, y) {
        // remove the temp line, if there was one
        let eventManager = new (0, _eventManagerMjs.EventManager)(this.shapeManager);
        //let tmpShapeEvent = eventManager.setEvent(this.tmpShape);
        //let newShapeEvent = eventManager.getEvent(this.createShape(this.from, new Point2D(x, y)));
        if (this.tmpShape) eventManager.createEvent("removeShape", this.tmpShape);
        console.log("type of " + typeof newShape);
        this.tmpShape = this.createShape(this.from, new Point2D(x, y));
        eventManager.createEvent("addShape", this.tmpShape);
        this.from = undefined;
    //this.shapeManager.addShape(this.createShape(this.from, new Point2D(x, y)));
    //this.from = undefined;
    }
    handleMouseMove(x, y) {
        // show temp circle only, if the start point is defined;
        let eventManager = new (0, _eventManagerMjs.EventManager)(this.shapeManager);
        if (!this.from) return;
        if (!this.tmpTo || this.tmpTo.x !== x || this.tmpTo.y !== y) {
            this.tmpTo = new Point2D(x, y);
            if (this.tmpShape) // remove the old temp line, if there was one
            //this.shapeManager.removeShapeWithId(this.tmpShape.id, false);
            eventManager.createEvent("removeShape", this.tmpShape);
            // adds a new temp line
            this.tmpShape = this.createShape(this.from, new Point2D(x, y));
            eventManager.createEvent("addShape", this.tmpShape);
        //this.shapeManager.addShape(this.tmpShape);
        }
    }
}
class Line extends AbstractShape {
    constructor(from, to){
        super();
        this.from = from;
        this.to = to;
    }
    draw(ctx, selected) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        ctx.lineTo(this.to.x, this.to.y);
        super.handleColour(ctx);
        ctx.stroke();
        if (selected) {
            let factor = 4;
            let width = 10;
            let height = 10;
            let fromX = this.from.x;
            let fromY = this.from.y;
            let toX = this.to.x;
            let toY = this.to.y;
            //start point
            ctx.beginPath();
            ctx.rect(fromX - factor, fromY - factor, width, height);
            ctx.stroke();
            //endpoint
            ctx.beginPath();
            ctx.rect(toX - factor, toY - factor, width, height);
            ctx.stroke();
        }
    }
}
class LineFactory extends AbstractFactory {
    constructor(shapeManager){
        super(shapeManager);
        this.label = "Linie";
    }
    createShape(from, to) {
        return new Line(from, to);
    }
}
class Circle extends AbstractShape {
    constructor(center, radius){
        super();
        this.center = center;
        this.radius = radius;
    }
    draw(ctx, selected) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
        super.handleColour(ctx);
        ctx.stroke();
        if (selected) {
            let factor = 4;
            let width = 10;
            let height = 10;
            let centerX = this.center.x;
            let centerY = this.center.y;
            let radius = this.radius;
            //bottom
            ctx.beginPath();
            ctx.rect(centerX - factor, centerY + radius - factor, width, height);
            ctx.stroke();
            //top
            ctx.beginPath();
            ctx.rect(centerX - factor, centerY - radius - factor, width, height);
            ctx.stroke();
            //left
            ctx.beginPath();
            ctx.rect(centerX - radius - factor, centerY - factor, width, height);
            ctx.stroke();
            //right
            ctx.beginPath();
            ctx.rect(centerX + radius - factor, centerY - factor, width, height);
            ctx.stroke();
        }
    }
}
class CircleFactory extends AbstractFactory {
    constructor(shapeManager){
        super(shapeManager);
        this.label = "Kreis";
    }
    createShape(from, to) {
        return new Circle(from, CircleFactory.computeRadius(from, to.x, to.y));
    }
    static computeRadius(from, x, y) {
        const xDiff = from.x - x, yDiff = from.y - y;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
}
class Rectangle extends AbstractShape {
    constructor(from, to){
        super();
        this.from = new Point2D(from.x, from.y);
        this.to = new Point2D(to.x, to.y);
    }
    draw(ctx, selected, backgroundColor, borderColor) {
        ctx.beginPath();
        ctx.rect(this.from.x, this.from.y, this.to.x - this.from.x, this.to.y - this.from.y);
        super.handleColour(ctx);
        ctx.stroke();
        if (selected) {
            let factor = 4;
            let width = 10;
            let height = 10;
            let fromX = this.from.x;
            let fromY = this.from.y;
            let toX = this.to.x;
            let toY = this.to.y;
            //left top
            ctx.beginPath();
            ctx.rect(fromX - factor, fromY - factor, width, height);
            ctx.stroke();
            //left bottom
            ctx.beginPath();
            ctx.rect(fromX - factor, toY - factor, width, height);
            ctx.stroke();
            //right top
            ctx.beginPath();
            ctx.rect(toX - factor, fromY - factor, width, height);
            ctx.stroke();
            //right bottom
            ctx.beginPath();
            ctx.rect(toX - factor, toY - factor, width, height);
            ctx.stroke();
        }
    }
}
class RectangleFactory extends AbstractFactory {
    constructor(shapeManager){
        super(shapeManager);
        this.label = "Rechteck";
    }
    createShape(from, to) {
        return new Rectangle(from, to);
    }
}
class Triangle extends AbstractShape {
    constructor(p1, p2, p3){
        super();
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    draw(ctx, selected, backgroundColor, borderColor) {
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.lineTo(this.p3.x, this.p3.y);
        ctx.lineTo(this.p1.x, this.p1.y);
        super.handleColour(ctx);
        ctx.stroke();
        if (selected) {
            let factor = 4;
            let width = 10;
            let height = 10;
            let p1X = this.p1.x;
            let p1Y = this.p1.y;
            let p2X = this.p2.x;
            let p2Y = this.p2.y;
            let p3X = this.p3.x;
            let p3Y = this.p3.y;
            ctx.beginPath();
            ctx.rect(p1X - factor, p1Y - factor, width, height);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(p2X - factor, p2Y - factor, width, height);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(p3X - factor, p3Y - factor, width, height);
            ctx.stroke();
        }
    }
}
class TriangleFactory {
    constructor(shapeManager){
        this.shapeManager = shapeManager;
        this.label = "Dreieck";
    }
    handleMouseDown(x, y) {
        let eventManager = new (0, _eventManagerMjs.EventManager)(this.shapeManager);
        if (this.tmpShape) {
            //this.shapeManager.removeShapeWithId(this.tmpShape.id, false);
            //this.shapeManager.addShape(new Triangle(this.from, this.tmpTo, new Point2D(x, y)));
            eventManager.createEvent("removeShape", this.tmpShape);
            eventManager.createEvent("addShape", new Triangle(this.from, this.tmpTo, new Point2D(x, y)));
            this.from = undefined;
            this.tmpTo = undefined;
            this.tmpLine = undefined;
            this.thirdPoint = undefined;
            this.tmpShape = undefined;
        } else this.from = new Point2D(x, y);
    }
    handleMouseUp(x, y) {
        let eventManager = new (0, _eventManagerMjs.EventManager)(this.shapeManager);
        // remove the temp line, if there was one
        if (this.tmpLine) {
            /*this.shapeManager.removeShapeWithId(this.tmpLine.id, false);
            this.tmpLine = undefined;
            this.tmpTo = new Point2D(x, y);
            this.thirdPoint = new Point2D(x, y);
            this.tmpShape = new Triangle(this.from, this.tmpTo, this.thirdPoint);
            this.shapeManager.addShape(this.tmpShape);*/ eventManager.createEvent("removeShape", this.tmpLine);
            this.tmpTo = new Point2D(x, y);
            this.thirdPoint = new Point2D(x, y);
            this.tmpShape = new Triangle(this.from, this.tmpTo, this.thirdPoint);
            eventManager.createEvent("addShape", this.tmpShape);
        }
    }
    handleMouseMove(x, y) {
        let eventManager = new (0, _eventManagerMjs.EventManager)(this.shapeManager);
        // show temp circle only, if the start point is defined;
        if (!this.from) return;
        if (this.tmpShape) {
            if (!this.thirdPoint || this.thirdPoint.x !== x || this.thirdPoint.y !== y) {
                this.thirdPoint = new Point2D(x, y);
                /*if (this.tmpShape) {
                    // remove the old temp line, if there was one
                    this.shapeManager.removeShapeWithId(this.tmpShape.id, false);
                }
                // adds a new temp triangle
                this.tmpShape = new Triangle(this.from, this.tmpTo, this.thirdPoint);
                this.shapeManager.addShape(this.tmpShape);*/ if (this.tmpShape) // remove the old temp line, if there was one
                eventManager.createEvent("removeShape", this.tmpShape);
                // adds a new temp line
                this.tmpShape = new Triangle(this.from, this.tmpTo, this.thirdPoint);
                eventManager.createEvent("addShape", this.tmpShape);
            }
        } else if (!this.tmpTo || this.tmpTo.x !== x || this.tmpTo.y !== y) {
            this.tmpTo = new Point2D(x, y);
            if (this.tmpLine) // remove the old temp line, if there was one
            eventManager.createEvent("removeShape", this.tmpLine);
            // adds a new temp line
            this.tmpLine = new Line(this.from, this.tmpTo);
            eventManager.createEvent("addShape", this.tmpLine);
        }
    }
}
function createShapeFromEventData(shape) {
    const type = shape.type;
    if (type === "Line") //const from = new Point2D(shape.data.from.x, shape.data.from.y);
    //const to = new Point2D(shape.data.to.x, shape.data.to.y);
    //return new Line(from, to);
    return new Line(shape.data.from, shape.data.to);
    else if (type === "Circle") //const center = new Point2D(shape.data.center.x, shape.data.center.y);
    //const radius = shape.data.radius;
    //return new Circle(center, radius);
    return new Circle(shape.data.center, shape.data.radius);
    else if (type === "Rectangle") //const from = new Point2D(shape.data.from.x, shape.data.from.y);
    //const to = new Point2D(shape.data.to.x, shape.data.to.y);
    //return new Rectangle(from, to);
    return new Rectangle(shape.data.from, shape.data.to);
    else if (type === "Triangle") /*const p1 = new Point2D(shape.data.p1.x, shape.data.p1.y);
        const p2 = new Point2D(shape.data.p2.x, shape.data.p2.y);
        const p3 = new Point2D(shape.data.p3.x, shape.data.p3.y);
        return new Triangle(p1, p2, p3);*/ return new Triangle(shape.data.p1, shape.data.p2, shape.data.p3);
    return null;
}
class SelectFactory {
    constructor(shapeManager){
        this.shapeManager = shapeManager;
        this.label = "Selection";
        this.draggingShape = null;
        this.isLeftMouseDown = false;
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;
    }
    handleMouseDown(x, y, alt, ctrl) {
        this.shapeManager.selectShape(x, y, false, alt, ctrl);
        //.keys().next().value
        const selectedShape = this.shapeManager.selectedShape;
        //this.shapeManager.selectedShape.value;
        /*if (selectedShape) {
            this.draggingShape = this.shapeManager.shapes[selectedShape];
            this.dragOffsetX = x - this.draggingShape.positionX;
            this.dragOffsetY = y - this.draggingShape.positionY;
        }*/ this.isLeftMouseDown = true;
        console.log("handleMouseDown");
    }
    handleMouseMove(x, y, event) {
        //console.log("handleMouseMove");
        if (this.isLeftMouseDown) this.shapeManager.moveShape(x, y, event);
    }
    handleMouseUp(x, y) {
        this.isLeftMouseDown = false;
        this.draggingShape = null;
        console.log("handleMouseUp");
        if (!this.isLeftMouseDown) this.shapeManager.handleMouseUp(x, y);
    }
}
class ToolArea {
    constructor(shapesSelector, menue){
        this.selectedShape = undefined;
        const domElms = [];
        shapesSelector.forEach((sl)=>{
            const domSelElement = document.createElement("li");
            domSelElement.innerText = sl.label;
            menue.appendChild(domSelElement);
            domElms.push(domSelElement);
            domSelElement.addEventListener("click", ()=>{
                selectFactory.call(this, sl, domSelElement);
            });
        });
        function selectFactory(sl, domElm) {
            // remove class from all elements
            for (let value of domElms)value.classList.remove("marked");
            this.selectedShape = sl;
            // add class to the one that is selected currently
            domElm.classList.add("marked");
        }
    }
    getSelectedShape() {
        return this.selectedShape;
    }
}

},{"./EventManager.mjs":"iQQNm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iQQNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventManager", ()=>EventManager);
class EventManager {
    constructor(shapeManager){
        this.eventQueue = [];
        this.shapeManager = shapeManager;
    }
    createEvent(eventType, shape) {
        let type = shape.constructor.name;
        let event = undefined;
        console.log(shape);
        if (eventType === "addShape") {
            if (type === "Rectangle" || type === "Line") event = {
                event: eventType,
                shape: {
                    type: type,
                    id: shape.id,
                    data: {
                        from: shape.from,
                        to: shape.to
                    }
                }
            };
            else if (type === "Triangle") event = {
                event: eventType,
                shape: {
                    type: type,
                    id: shape.id,
                    data: {
                        p1: shape.p1,
                        p2: shape.p2,
                        p3: shape.p3
                    }
                }
            };
            else if (type === "Circle") event = {
                event: eventType,
                shape: {
                    type: type,
                    id: shape.id,
                    data: {
                        center: shape.center,
                        radius: shape.radius
                    }
                }
            };
            this.addEvent(event); // Moved this line inside the if block
        } else if (eventType === "removeShape") {
            event = {
                event: eventType,
                id: shape.id
            };
            this.addEvent(event); // Moved this line inside the else if block
        }
    }
    addEvent(event) {
        this.eventQueue.push(event);
        this.handleEvents(); // Removed the duplicate handleEvents() calls
    }
    printEventOutput(event) {
        const eventTxtOutput = document.getElementById("eventOutput");
        let eventString = "";
        eventString += JSON.stringify(event) + "\n";
        eventTxtOutput.value += eventString;
    }
    handleEvents() {
        while(this.eventQueue.length > 0)while(this.eventQueue.length > 0){
            let ev = this.eventQueue.shift();
            console.log(ev);
            const eventType = ev.event;
            const eventData = ev.shape;
            let shape = undefined;
            this.printEventOutput(ev);
            switch(eventType){
                case "addShape":
                    shape = this.shapeManager.getShapeByEvent(ev.shape);
                    this.shapeManager.addShape(shape);
                    break;
                case "removeShape":
                    console.log(eventData);
                    this.shapeManager.removeShapeWithId(Number(ev.id), false);
                    break;
            }
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3GPY2","cGMhY"], "cGMhY", "parcelRequirec717")

//# sourceMappingURL=index.b1df761a.js.map

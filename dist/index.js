"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ExtendedMixpanelProvider: () => ExtendedMixpanelProvider,
  MixpanelProvider: () => MixpanelProvider,
  useEvent: () => useEvent,
  useExtGetMixpanel: () => useExtGetMixpanel,
  useGetMixpanel: () => useGetMixpanel,
  useIdentify: () => useIdentify,
  useSetProperties: () => useSetProperties
});
module.exports = __toCommonJS(src_exports);

// src/extendedProvider.tsx
var import_react2 = __toESM(require("react"));

// src/extendedContext.ts
var import_react = require("react");
var extendedMixpanelContext = (0, import_react.createContext)(void 0);

// src/extendedProvider.tsx
function ExtendedMixpanelProvider({ children, mixpanel }) {
  return /* @__PURE__ */ import_react2.default.createElement(extendedMixpanelContext.Provider, { value: mixpanel }, children);
}

// src/provider.tsx
var import_react4 = __toESM(require("react"));
var import_mixpanel_browser = __toESM(require("mixpanel-browser"));

// src/context.ts
var import_react3 = require("react");
var mixpanelContext = (0, import_react3.createContext)(void 0);

// src/provider.tsx
function MixpanelProvider({ name, options, token, children }) {
  const mixpanelInstance = (0, import_react4.useMemo)(
    () => import_mixpanel_browser.default.init(token, options, name),
    []
  );
  return /* @__PURE__ */ import_react4.default.createElement(mixpanelContext.Provider, { value: mixpanelInstance }, children);
}

// src/hooks/index.ts
var import_react5 = require("react");
function useGetMixpanel() {
  const mixpanel = (0, import_react5.useContext)(mixpanelContext);
  if (!mixpanel)
    throw new Error("Add context and its respective options of MixPanel");
  return mixpanel;
}
function useExtGetMixpanel() {
  const mixpanel = (0, import_react5.useContext)(extendedMixpanelContext);
  if (!mixpanel)
    throw new Error("Add context and its respective options of MixPanel");
  return mixpanel;
}
function useEvent(eventProps) {
  const mixpanel = useGetMixpanel();
  return (eventInnerProps) => {
    const { eventName, cb, optionsOrCb, properties } = __spreadValues(__spreadValues({}, eventProps), eventInnerProps);
    if (!eventName)
      throw new Error("Must provide and event name by default or in function invocation");
    mixpanel.track(eventName, properties, optionsOrCb, cb);
  };
}
function useIdentify(uuid) {
  const mixpanel = useGetMixpanel();
  return (innerUuid) => mixpanel.identify(uuid != null ? uuid : innerUuid);
}
function useSetProperties(props) {
  const mixpanel = useGetMixpanel();
  return (innerProps) => mixpanel.people.set(__spreadValues(__spreadValues({}, props), innerProps));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ExtendedMixpanelProvider,
  MixpanelProvider,
  useEvent,
  useExtGetMixpanel,
  useGetMixpanel,
  useIdentify,
  useSetProperties
});

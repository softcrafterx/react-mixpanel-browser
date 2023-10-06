var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/extendedProvider.tsx
import React from "react";

// src/extendedContext.ts
import { createContext } from "react";
var extendedMixpanelContext = createContext(void 0);

// src/extendedProvider.tsx
function ExtendedMixpanelProvider({ children, mixpanel }) {
  return /* @__PURE__ */ React.createElement(extendedMixpanelContext.Provider, { value: mixpanel }, children);
}

// src/provider.tsx
import React2, { useMemo } from "react";
import MixpanelBrowser from "mixpanel-browser";

// src/context.ts
import { createContext as createContext2 } from "react";
var mixpanelContext = createContext2(void 0);

// src/provider.tsx
function MixpanelProvider({ name, options, token, children }) {
  const mixpanelInstance = useMemo(
    () => MixpanelBrowser.init(token, options, name),
    []
  );
  return /* @__PURE__ */ React2.createElement(mixpanelContext.Provider, { value: mixpanelInstance }, children);
}

// src/hooks/index.ts
import { useContext } from "react";
function useGetMixpanel() {
  const mixpanel = useContext(mixpanelContext);
  if (!mixpanel)
    throw new Error("Add context and its respective options of MixPanel");
  return mixpanel;
}
function useExtGetMixpanel() {
  const mixpanel = useContext(extendedMixpanelContext);
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
export {
  ExtendedMixpanelProvider,
  MixpanelProvider,
  useEvent,
  useExtGetMixpanel,
  useGetMixpanel,
  useIdentify,
  useSetProperties
};

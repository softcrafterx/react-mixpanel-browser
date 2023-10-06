import React from "react";
import { Mixpanel } from "mixpanel-browser";
import { PropsWithChildren } from "react";

import { extendedMixpanelContext } from './extendedContext'

export function ExtendedMixpanelProvider<T extends Mixpanel>({children, mixpanel}:PropsWithChildren<{mixpanel: T}>){
  return <extendedMixpanelContext.Provider value={mixpanel} >
    {children}
  </extendedMixpanelContext.Provider>
}

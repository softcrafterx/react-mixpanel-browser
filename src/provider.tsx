import React, { PropsWithChildren, useMemo } from 'react'
import MixpanelBrowser from 'mixpanel-browser'

import { mixpanelContext } from './context'
import { MixpanelOptions } from './types'

export function MixpanelProvider({name, options, token, children}: PropsWithChildren<MixpanelOptions>){
  const mixpanelInstance = useMemo(
    ()=>MixpanelBrowser.init(token, options, name), 
    []
  )

  return (<mixpanelContext.Provider value={mixpanelInstance} >
    {children}
  </mixpanelContext.Provider>)
}

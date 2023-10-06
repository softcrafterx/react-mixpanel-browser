import { createContext } from 'react'

import { Mixpanel } from 'mixpanel-browser'

export const mixpanelContext = createContext<Mixpanel | undefined>(undefined)

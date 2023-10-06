import { Config } from 'mixpanel-browser'

export interface MixpanelOptions {
  name: string;
  options: Partial<Config>,
  token: string;
}

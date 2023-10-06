import React, { PropsWithChildren } from 'react';
import { Mixpanel, Config, Dict, RequestOptions, Callback } from 'mixpanel-browser';

declare function ExtendedMixpanelProvider<T extends Mixpanel>({ children, mixpanel }: PropsWithChildren<{
    mixpanel: T;
}>): React.JSX.Element;

interface MixpanelOptions {
    name: string;
    options: Partial<Config>;
    token: string;
}

declare function MixpanelProvider({ name, options, token, children }: PropsWithChildren<MixpanelOptions>): React.JSX.Element;

declare function useGetMixpanel(): Mixpanel;
declare function useExtGetMixpanel<T extends Mixpanel>(): T;
interface EventProps {
    eventName: string;
    properties?: Dict;
    optionsOrCb?: RequestOptions | Callback;
    cb?: Callback;
}
declare function useEvent(eventProps?: Partial<EventProps>): (eventInnerProps?: Partial<EventProps>) => void;
declare function useIdentify(uuid?: string): (innerUuid?: string) => any;
declare function useSetProperties(props?: Dict): (innerProps?: Dict) => void;

export { ExtendedMixpanelProvider, MixpanelProvider, useEvent, useExtGetMixpanel, useGetMixpanel, useIdentify, useSetProperties };

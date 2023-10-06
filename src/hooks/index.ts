import { useContext } from "react";
import { mixpanelContext } from "../context";
import { extendedMixpanelContext } from "../extendedContext";
import { Callback, Dict, Mixpanel, RequestOptions } from "mixpanel-browser";

export function useGetMixpanel(){
  const mixpanel = useContext(mixpanelContext)

  if(!mixpanel)
    throw new Error('Add context and its respective options of MixPanel')

  return mixpanel
}


export function useExtGetMixpanel<T extends Mixpanel>(){
  const mixpanel = useContext(extendedMixpanelContext)

  if(!mixpanel)
    throw new Error('Add context and its respective options of MixPanel')

  return mixpanel as T
}

interface EventProps {
  eventName: string;
  properties?: Dict;
  optionsOrCb?: RequestOptions | Callback;
  cb?: Callback
}

export function useEvent(eventProps?: Partial<EventProps>){
  const mixpanel = useGetMixpanel();

  return (eventInnerProps?: Partial<EventProps>)=> {
    const {eventName, cb, optionsOrCb, properties} = {...eventProps, ...eventInnerProps}

    if(!eventName)
      throw new Error('Must provide and event name by default or in function invocation')

    mixpanel.track(eventName, properties, optionsOrCb, cb)
  }
}

export function useIdentify(uuid?: string){
  const mixpanel = useGetMixpanel();

  return (innerUuid?: string)=> mixpanel.identify(uuid ?? innerUuid)
}

export function useSetProperties(props?: Dict){
  const mixpanel = useGetMixpanel();

  return (innerProps?: Dict)=> mixpanel.people.set({...props, ...innerProps})
}

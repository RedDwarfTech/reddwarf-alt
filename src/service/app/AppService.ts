import { AppActionType } from "@/redux/action/app/AppAction";
import store from "@/redux/store/store";
import { AxiosRequestConfig } from "axios";
import { XHRClient } from "rd-component";

export function getApp(params: any) {
    const config: AxiosRequestConfig = {
        method: 'get',
        url: '/alt/app/list?tag=' + params.tag,
        data: JSON.stringify(params)
    };
    const actionTypeString: string = AppActionType[AppActionType.GET_APP_LIST];
    return XHRClient.requestWithActionType(config, actionTypeString, store);
}
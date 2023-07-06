export type cvAppAction = getAppListAction

export enum AppActionType {
    GET_APP_LIST
}

export interface getAppListAction {
    type: AppActionType.GET_APP_LIST;
    data: any;
}

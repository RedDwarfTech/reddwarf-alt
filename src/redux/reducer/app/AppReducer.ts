import { AppState } from "@/redux/types/AppState";
import { AppModel } from "@/models/app/AppModel";

const initState: AppState["win"] = {
    appList: [] as AppModel[]
};

const AppReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "GET_APP_LIST":
            return {
                ...state,
                appList: action.data
            };
        default:
            break;
    }
    return state;
};

export default AppReducer;



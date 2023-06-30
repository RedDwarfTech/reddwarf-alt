import { AppState } from "@/redux/types/AppState";

const initState: AppState["win"] = {
    savedLang: {},
    langList: []
};

const LangReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "SAVE_LANG":
            return {
                ...state,
                savedLang: action.data
            };
        default:
            break;
    }
    return state;
};

export default LangReducer;



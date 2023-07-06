import { combineReducers } from 'redux';
import lang from "@/redux/reducer/windows/LangReducer";
import app from "@/redux/reducer/app/AppReducer";

const rootReducer = combineReducers({
   lang,
   app
});

export default rootReducer;

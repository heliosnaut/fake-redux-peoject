import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import selfMiddleware from "./selfMiddleware";
import chatList, { actions as _chatListAction } from "component/chatList/reducer"; // 聊天列表
import containerLeft, { actions as _containerLeftAction } from "component/left/reducer"; // 左侧容器

const rootReducer = combineReducers({
  chatList,
  containerLeft,
});

const appStore = createStore(
  rootReducer,
  initialState={},
  compose(
    applyMiddleware(
      thunkMiddleware, 
      selfMiddleware //自己的中间件写在这里
      ),
    //如果你有自己定义的 enhancer,可以写在这里
    f => f
  )
);

export default appStore;
export const chatListAction = _chatListAction;
export const containerLeftAction = _containerLeftAction;

export const actions = {
  chatListAction,
  containerLeftAction,
};
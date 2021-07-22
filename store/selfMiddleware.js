export default function selfMiddleware({ dispatch, getState }) {
  /**
   * NOTICE：
   *  dispatch不允许在构建中间件时进行派发。其他中间件将不会应用于此分派
   *    即 next传入 返回 action=>{}这个函数内不能使用dispatch
   *    action=>{ //内部可以使用dispatch }
   *  中间件执行完后，dispatch会被重写，可以调用
   */
  return next => action => {
    //可以针对特定type进行拦截
    if (action.type === "INTERCEPTING_AGAINST_A_SPECIFIC_TYPE") {
      //dispatch 更新store之前
      const orgChatList = getState().chatList.chatList;
      next(action);
      //dispatch 更新store之后
      const chatList = getState().chatList.chatList;

      if (chatList !== orgChatList) {
        //聊天列表信息变更，执行你的代码
      }
      return;
    }

    next(action);
  };
}
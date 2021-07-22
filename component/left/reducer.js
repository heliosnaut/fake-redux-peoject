const ActionTypes = {
  CONTAINER_LEFT_CHANGE_TAB: Symbol("CONTAINER_LEFT_CHANGE_TAB")
};

export const actions = {
  changeTab(tabName) {
    return function(dispatch,getState) {
      dispatch ({
        type: ActionTypes.CONTAINER_LEFT_CHANGE_TAB,
        tabName
      });
    }
  }
};

const initialState = {
  activeTab: "chatList"
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.CONTAINER_LEFT_CHANGE_TAB: {
      return { activeTab: action.tabName };
    }
    default:
      return state;
  }
}

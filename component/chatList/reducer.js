const actionTypes = {
  CHAT_LIST_CHANGE_COUNT: Symbol("CHAT_LIST_CHANGE_COUNT"),
  CHAT_LIST_REMOVE_ITEM: Symbol("CHAT_LIST_REMOVE_ITEM")
};

function changeCount(uid, count) {
  return {
    type: actionTypes.CHAT_LIST_CHANGE_COUNT,
    count,
    uid
  };
}

function deleteChat(uid) {
  return {
    type: actionTypes.CHAT_LIST_REMOVE_ITEM,
    uid
  };
}

export const actions = {
  changeCount,
  deleteChat
};

const initialState = {
  chatList: [],
};

export default function (state = initialState, action = {}) {
  let returnState = state;

  switch (action.type) {
    case actionTypes.CHAT_LIST_CHANGE_COUNT: {
      const uid = action.uid;
      let chatList = state.chatList;
      chatList = chatList.map(itemOut => {
        const item = itemOut;
        if (item.uid === uid) {
          item.count = action.count;
        }
        return item;
      });
      returnState = Object.assign({}, state, { chatList });
      break;
    }

    case actionTypes.CHAT_LIST_REMOVE_ITEM: {
      const uid = action.uid;
      const chatList = state.chatList.slice();

      for (let i = 0; i < chatList.length; i++) {
        if (chatList[i].uid === uid) {
          chatList.splice(i, 1);
          break;
        }
      }

      returnState = Object.assign({}, state, { chatList });
      break;
    }
    default:
      returnState = state;
      break;
  }

  return returnState;
}
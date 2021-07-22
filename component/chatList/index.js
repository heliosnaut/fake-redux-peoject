import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { chatListAction } from "store/index";

class ChatList extends PureComponent {

  deleteChatFn = ({target}) => {
    const {uid} = target.dataset;
    dispatch(chatListAction.deleteChat(uid));
  }

  render() {
    const { chatWithId } = this.props;

    return (<article>
      ChatList
      <section data-uid={chatWithId} onClick={deleteChatFn}>User</section>
    </article>)
  }
}

function mapStateToProps(state) {
  return getNeedDates(state);
}

export default connect(mapStateToProps)(ChatList);
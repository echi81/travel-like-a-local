import React from 'react';
import FriendList from "../jsx/FriendList.jsx";
import FriendSuggestionList from '../jsx/FriendSuggestionList.jsx';
import styled from 'styled-components'
class Friends extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <FriendsContainer className="friends">
        <FriendList userName={this.props.userName} userID={this.props.userID}
          friendList={this.props.friendList} handleFriendDelete={this.props.handleFriendDelete} />
        <FriendSuggestionList userName={this.props.userName} friendsToAdd={this.props.friendsToAdd}
          handleAddFriend={this.props.handleAddFriend} />
      </FriendsContainer>
    )
  }
}

const FriendsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 10px
`


export default Friends;
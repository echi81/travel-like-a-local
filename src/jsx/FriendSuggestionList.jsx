import React from 'react';
import FriendSuggestionListEntry from "./FriendSuggestionListEntry.jsx";
import styled from 'styled-components';

class FriendSuggestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.friendsToAdd);
    return (
      <StyledFriendSuggestionList>
       <div><span className="name" style={{fontStyle: 'italic'}}>friends to add:</span></div>
        {this.props.friendsToAdd.map((friend) => <FriendSuggestionListEntry friendID={friend.id} username={this.props.userName} friend={friend.username} key={friend.id} handleAddFriend={this.props.handleAddFriend} />)}
      </StyledFriendSuggestionList>
    );
  }
}

const StyledFriendSuggestionList = styled.div`
  grid-column: 2 / 3;
  text-align: center;
`


export default FriendSuggestionList;
import React from 'react';
import FriendListEntry from "./FriendListEntry.jsx";
import styled from 'styled-components';

class FriendList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.friendList);
    return (
      <StyledFriendList>
       <div><span className="name" style={{fontStyle: 'italic'}}>these are your friends:</span></div>
        {this.props.friendList.map((friend) => <FriendListEntry friend={friend.username} key={friend.id} handleFriendDelete={this.props.handleFriendDelete} />)}
      </StyledFriendList>
    );
  }
}

const StyledFriendList = styled.div`
  grid-column: 1 / 2;
  text-align: center;
`


export default FriendList;
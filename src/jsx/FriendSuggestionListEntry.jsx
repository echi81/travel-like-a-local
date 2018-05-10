import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FriendSuggestionListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFriend = this.handleAddFriend.bind(this);
  }

  handleAddFriend(e) {
    this.props.handleAddFriend(this.props.username, this.props.friend);
  }

  render() {
     return (

        <Card>
          <div></div>
          <CardHeader
            title={`${this.props.friend}`}
            style={{background: 'aqua'}}
            titleStyle={{fontSize: '22px'}}
            />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
          <CardActions>
            <FlatButton label="add friend"
              onClick={this.handleAddFriend}
            />
          </CardActions>
        </Card>
    );
  }
}


export default FriendSuggestionListEntry;
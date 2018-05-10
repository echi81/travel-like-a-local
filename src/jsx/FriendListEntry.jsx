import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class FriendListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.handleFriendDelete(this.props.userID, this.props.key);
  }

  render() {
    return (

       <div className="friend-list-entry">
        <Card>
          <div>
          <CardTitle
            title={`${this.props.friend}`}
            style={{background: 'aqua'}}
            titleStyle={{fontSize: '22px'}}
            />
          <CardText>
            Suggestions:

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa.
          </CardText>
          <CardActions>
            <FlatButton label="delete"
              onClick={this.handleDelete}
            />
          </CardActions>
           </div>
        </Card>
      </div>
    );
  }
}

export default FriendListEntry;
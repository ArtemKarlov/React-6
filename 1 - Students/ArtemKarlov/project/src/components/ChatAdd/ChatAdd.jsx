import './style.css';
import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import { grey } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: grey[400],
    color: grey[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open, contacts} = props;

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Add chat with...</DialogTitle>
      <List>
        {contacts.map((contact) => {
          return (          
          <ListItem button onClick={() => handleListItemClick(contact.contact)} key={contact.id}>
            <ListItemAvatar>
              <Avatar className={classes.avatar} alt={contact.name} src={contact.avatarUrl} />
            </ListItemAvatar>
            <ListItemText primary={`${contact.name}`} />
          </ListItem>
)})}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const { contacts, getContactId} = props;
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);    
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  React.useEffect(() => { 
    getContactId(selectedValue);
    setSelectedValue(null);
  });
 

  return (
    <div>
      <button onClick={handleClickOpen} className="chats__add-button button-shell"><img src="../src/layout/images/plus.png" alt="" className="button-shell__img"/></button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} contacts={contacts}/>
    </div>
  );
}

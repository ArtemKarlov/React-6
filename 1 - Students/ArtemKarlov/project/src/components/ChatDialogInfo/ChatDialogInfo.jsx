import './style.css';
import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    // margin: '0 auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  accountAvatar: {width: '100%', height: '100%'},
}));

export default function RecipeReviewCard(props) {
    const {chatContact} = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (chatContactId) => {
    setExpanded((expanded === chatContactId) ? -1 : chatContactId);
  };

  const chatTitle = `${chatContact.name} ${chatContact.surname}`;

    return (
        <Fragment>
            <div className="chat__header chat-header">
                <p className="chat-header__label">Chat with</p>
                <div className="chat-header__details">
                    <div className="chat-header__img img-container ">
                        <Avatar alt={chatTitle} src={chatContact.avatarUrl} className={classes.accountAvatar}/>
                    </div>                    
                    <h2 className="chat-header__title">{chatTitle}</h2>
                </div>
                <div className="chat-header__info">
                    <Collapse in={expanded === chatContact.id} timeout="auto" unmountOnExit>
                        <div className="chat-header__contact">
                            <p className="chat-header__contact-ditails"><span className="chat-header__contact-label">Full Name: </span> {chatContact.name} {chatContact.middleName} {chatContact.surname}</p>
                            <p className="chat-header__contact-ditails"><span className="chat-header__contact-label">E-mail: </span>{chatContact.email}</p>
                            <p className="chat-header__contact-ditails"><span className="chat-header__contact-label">Tel.: </span>{chatContact.tel}</p>
                        </div>  
                    </Collapse>
                    <IconButton
                        className={clsx(classes.expand, {
                        [classes.expandOpen]: (expanded === chatContact.id),
                        })}
                        onClick={() => handleExpandClick(chatContact.id)}
                        aria-expanded={expanded === chatContact.id}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </div>            
            </div> 
        </Fragment>
    );
}

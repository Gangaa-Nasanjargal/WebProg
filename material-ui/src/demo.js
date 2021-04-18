import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import purple from "@material-ui/core/colors/purple";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  title: {
    height: 35,
    paddingInlineStart: 35,
    paddingBlockStart: 30,
    paddingBlockEnd: 30,
    background: purple[700],
    color: purple[50]
  },
  haha: {
    height: 35,
    paddingInlineStart: 15,
    paddingBlockStart: 8,
    background: purple[700],
    color: purple[50]
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    background: purple[900]
  },
  grow: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  HeaderOptions: {
    display: 'flex',
    flex: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: 30,
    right: 10,
    margin: "0 auto"
  },
  febButton: {
    position: "absolute",
    zIndex: 1,
    top: 45,
    right: 10,
    margin: "0 auto"
  },
  more: {
    position: "absolute",
    top: 0,
    right: 0
  },
  but: {
    marginBlockStart: 20,
    marginBlockEnd: 15,
  },
  butt: {
    position: "fixed",
    bottom: 25,
    right: 10
  },
  body: {
    marginBlockEnd: 15,
  }, 
  m: {
    color: purple[100]
  },
  card: {
    maxWidth: "100%",
    marginBlockStart: 130,
  },
  card2: {
    maxWidth: "100%",
    marginBlockStart: 190,
  },
  media: {
    height: 240,
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        {isMobile ? (
          <>
          <Typography variant="h6" className={classes.haha}>
            Name & Title
          </Typography>
          </>
        ):(
          <Typography variant="h5" className={classes.title}>
            Name & Title
          </Typography>
        )}
        <Toolbar>
          {isMobile ? (
            <>
          <IconButton edge="start" className={classes.menuButton} onClick={handleMenu} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Overview</MenuItem>
                <MenuItem onClick={handleClose}>Features</MenuItem>
                <MenuItem onClick={handleClose}>Details</MenuItem>
                <MenuItem onClick={handleClose}>Technology</MenuItem>
                <MenuItem onClick={handleClose}>Faq</MenuItem>
              </Menu>
              </>)
              : (
                <div className={classes.HeaderOptions}>
                <Button className={classes.m}>OVERVIEW</Button>
                <Button className={classes.m}>FEATURES</Button>
                <Button className={classes.m}>DETAILS</Button>
                <Button className={classes.m}>TECHNOLOGY</Button>
                <Button className={classes.m}>FAQ</Button>
                </div>
              )
              }
          {isMobile ? (
            <>
            <Fab
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            >
            <AddIcon />
            </Fab>
            </>
          ):(
            <Fab
            size="small"
            color="secondary"
            aria-label="add"
            className={classes.febButton}
            >
            <AddIcon />
            </Fab>
          )}
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" className={classes.body}>
        {isMobile ? (
          <>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Contemplative Reptile"
            />
          
           
            <CardActionArea>
              <CardContent> 
                <Typography gutterBottom variant="h5" component="h2">
                  Features
                </Typography>
                <IconButton className={classes.more} aria-label="more" aria-controls="long-menu" aria-haspopup="true">
              <MoreVertIcon />
              </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                  Read our features
                </Button>
            </CardActions>
          
        </Card>
          </>
        ):(
          <Card className={classes.card2}>
          
            <CardMedia
              className={classes.media}
              image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Contemplative Reptile"
            />
            
            <CardActionArea>
              <CardContent> 
                <Typography gutterBottom variant="h5" component="h2">
                  Features
                </Typography>
                <IconButton className={classes.more} aria-label="more" aria-controls="long-menu" aria-haspopup="true">
              <MoreVertIcon />
              </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                  Read our features
                </Button>
            </CardActions>
          
        </Card>
        )}
        </Container>
        <Container maxWidth="sm" className={classes.body}>
        <Card>
          <CardActionArea>
      <CardContent> 
        <Typography gutterBottom variant="h6" component="h2">
            Details
        </Typography>
        <IconButton className={classes.more} aria-label="more" aria-controls="long-menu" aria-haspopup="true">
          <MoreVertIcon />
        </IconButton>
      </CardContent>
      </CardActionArea>
      <CardActionArea> 
              <ListItem>
               <ListItemAvatar>
                <Avatar>
                 <ImageIcon />
                </Avatar>
               </ListItemAvatar>
              <ListItemText primary="Lorem ipsum dolor sit amet" secondary="Dolore ex deserunt aute fugiat nulee ew sunt noso citdusah ksaodixsa jsahdudm jdsiadw dlpasjosm deope" />
             </ListItem>
      </CardActionArea>
      <CardActionArea> 
              <ListItem>
               <ListItemAvatar>
                <Avatar>
                 <ImageIcon />
                </Avatar>
               </ListItemAvatar>
              <ListItemText primary="Lorem ipsum dolor sit amet" secondary="Dolore ex deserunt aute fugiat nulee ew sunt noso citdusah ksaodixsa jsahdudm jdsiadw dlpasjosm deope" />
             </ListItem>
      </CardActionArea>
      <CardActionArea> 
              <ListItem>
               <ListItemAvatar>
                <Avatar>
                 <ImageIcon />
                </Avatar>
               </ListItemAvatar>
              <ListItemText primary="Lorem ipsum dolor sit amet" secondary="Dolore ex deserunt aute fugiat nulee ew sunt noso citdusah ksaodixsa jsahdudm jdsiadw dlpasjosm deope" />
             </ListItem>
      </CardActionArea>
      </Card>
      {isMobile ? (
        <>
        <Button variant="contained" size="small" className={classes.but} color="secondary" display="flex">
        VIEW SOURCE
      </Button>
        </>
      ):(
        <Button variant="contained" size="small" className={classes.butt} color="secondary" display="flex">
        VIEW SOURCE
      </Button>
      )}
      </Container>
    </React.Fragment>
  );
}

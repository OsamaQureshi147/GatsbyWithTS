import React, { Children, useEffect, useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import InputBase from "@material-ui/core/InputBase"
import { createStyles, fade, Theme, makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { Link } from "gatsby"
import { RouteComponentProps } from "../Types/RouteComponentProps"
import { useApolloClient } from "@apollo/client"

import NavBarLoading from "./NavBarLoading"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 40,
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: "white",
        },
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      minWidth: "30ch",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      color: "white",
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },

    links: {
      display: "flex",
      flex: 0.8,
      justifyContent: "space-between"
    },

    navbarContainer: {
      display: "flex",
      flex: 1,
      justifyContent: "space-between"
    },

    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
)


const NavBarUnAuth: React.FC = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <span className="material-icons">menu</span>
        </IconButton>

        <div className={classes.navbarContainer}>
          <nav className={classes.links}>
            <Link to='/'><Button className={classes.title}>Home</Button></Link>
            <Link to='/login'><Button className={classes.title}>Login</Button></Link>
            <Link to='/register'><Button className={classes.title}>Register</Button></Link>
          </nav>
      
        
        

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <span className="material-icons">search</span>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>

      </Toolbar>
    </AppBar>
  </div>
  );
}


const NavBarAuth: React.FC<RouteComponentProps> =  ({session, setLogoutPressed}) => {
  const client = useApolloClient();
  const classes = useStyles()
  const logOutBtnHandler = async () => {
    localStorage.removeItem("token");
    client.clearStore();
    setLogoutPressed(true)
  }

  return(
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <span className="material-icons">menu</span>
        </IconButton>

        <div className={classes.navbarContainer}>
          <nav className={classes.links}>
            <Link to='/'><Button className={classes.title}>Home</Button></Link>
            <Link to='/profile'><Button className={classes.title}>{session.getCurrentUser.username}</Button></Link>
            <Link to='/addRecipe'><Button className={classes.title}>Add Recipe</Button></Link>
            <Link to='/'><Button className={classes.title} onClick={logOutBtnHandler} >Logout</Button> </Link>
          </nav>
      
        
        

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <span className="material-icons">search</span>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>

      </Toolbar>
    </AppBar>
  </div>
  );
}

const CustomAppBar: React.FC<RouteComponentProps> = ({session, refetch}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [logoutPressed, setLogoutPressed] = useState<boolean>(false);
  console.log("Session in custom App bar", session)
  useEffect(() => {
    const refetchQuery = async () => {
      await refetch()
      setIsLoading(false);
    }
    refetchQuery();
  }, [logoutPressed])
  
  if (isLoading) return <NavBarLoading />

  return (
    <>
      { session && session.getCurrentUser ? <NavBarAuth session={session} setLogoutPressed={setLogoutPressed} /> : <NavBarUnAuth /> }
    </>
  )
}

export default CustomAppBar

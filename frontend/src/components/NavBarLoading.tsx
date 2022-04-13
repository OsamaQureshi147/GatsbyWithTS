import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      padding: 15,
      background: '#3f51b5',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    spinner: {
        color: "#fffc00ad"
    },
    
  }),
);

export default function NavBarLoading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner} color='secondary' />
    </div>
  );
}
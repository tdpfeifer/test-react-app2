import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {Close, Menu} from '@material-ui/icons/';
import {IconButton, ListItem, ListItemText, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const links = [
  {label: 'Home', to: '/'},
  {label: 'About Us', to: '/about-us'},
  {label: 'Shop', to: '/shop'},
  {label: 'Contact Us', to: '/contact-us'},
];

const Nav = () => {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Menu onClick={() => setOpen(true)} />

      <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <div>
          <List className={classes.list} component="nav">
            {links.map(({label, to}) => (
              <Link
                to={to}
                key={label}
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <ListItem button onClick={() => setOpen(false)}>
                  <ListItemText primary={label} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Nav;

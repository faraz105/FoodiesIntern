import React, { useState, useEffect ,Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import menuData from './routes';

const drawerWidth = 240;

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // State to track open dropdown
  const [activeOption, setActiveOption] = useState(null);

  const handleClick = (dropdownId) => {
    setOpenDropdown((prevOpenDropdown) => (prevOpenDropdown === dropdownId ? null : dropdownId));
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const handleItemClick = () => {
    setOpenDropdown(null); // Close dropdown when any single item is clicked
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
      }}
      variant="permanent"
    >
      <List>
        {menuData.map((menuItem, index) => (
          <Fragment key={index}>
            {menuItem.dropdown ? (
              <>
                <ListItem button onClick={() => handleClick(index)}>
                  <ListItemText primary={menuItem.title} />
                  {openDropdown === index ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openDropdown === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menuItem.items.map((item, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        sx={{ pl: 4 }}
                        selected={activeOption === item.title}
                        component={Link}
                        to={item.link}
                        onClick={() => handleOptionClick(item.title)}
                      >
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                button
                selected={activeOption === menuItem.title}
                component={Link}
                to={menuItem.link}
                onClick={() => {
                  handleOptionClick(menuItem.title);
                  handleItemClick();
                }}
              >
                <ListItemText primary={menuItem.title} />
              </ListItem>
            )}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
import React, { useState, useEffect, Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";
import menuData from "./routes";
import "./sidebarBuiltin.scss";
import classes from "./sidebar.module.scss";
import profileimage from "../../assets/images/profileImage.svg";
import logout from "../../assets/images/logout.svg";
import { useLocation  } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const location = useLocation();


  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const itemLink = pathSegments.length > 1 ? `/${pathSegments[0]}` : "/dashboard";
  const dropLink = `${pathSegments[0]}`;
  const dropItemLink = `/${pathSegments[0]}/${pathSegments[1]}`;
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [activeOption, setActiveOption] = useState(itemLink);
  const [activeOptionDrop, setActiveOptionDrop] = useState(dropLink);
  const [activeOptionDropItem, setActiveOptionDropItem] = useState(dropItemLink);
  console.log("pathSegments",pathSegments)
  console.log("itemLink",itemLink)
  const handleClick = (dropdownId) => {
    setOpenDropdown((prevOpenDropdown) =>
      prevOpenDropdown === dropdownId ? null : dropdownId
    );
  };
  const handleItemClick = () => {
    setOpenDropdown(null);
    setActiveOptionDrop(null);
    setActiveOptionDropItem(null)
  };
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  const handleOptionDropClick = (option) => {
    const ada = option.toLowerCase()
    console.log("ada",ada)
    setActiveOptionDrop(ada);
  };
  const handleOptionDropClickItem = (option) => {
    setActiveOptionDropItem(option);
    setActiveOption(null)
  };



  const hanldleLogout = () => {
    console.log("logout");
  };
  return (
    <div className={`${classes.sideBarContainer}`}>
      <div className={`${classes.navLinkSection} sidebar`}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
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
                    <ListItem
                      button
                      onClick={() => {
                        handleOptionDropClick(menuItem.title);
                        handleClick(index);
                      }}
                      selected={activeOptionDrop === menuItem.title.toLowerCase()}
                    >
                      <ListItemText primary={menuItem.title} />
                      {openDropdown === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      in={openDropdown === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {menuItem.items.map((item, subIndex) => (
                          <ListItem
                            key={subIndex}
                            button
                            sx={{ pl: 4 }}
                            selected={activeOptionDropItem === item.link}
                            component={Link}
                            to={item.link}
                            onClick={() => handleOptionDropClickItem(item.link)}
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
                    selected={activeOption === menuItem.link}
                    component={Link}
                    to={menuItem.link}
                    onClick={() => {
                      handleOptionClick(menuItem.link);
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
      </div>
      <div className={`${classes.mainLogout}`}>
        <div className={`${classes.logoutContent}`}>
          <div className={`${classes.logoutProfileImg}`}>
            <img src={profileimage} alt="profile" />
          </div>
          <div className={`${classes.logoutText}`}>
            <h4> Hassan Malik</h4>
            <p> Product Designer</p>
            <button onClick={hanldleLogout}>
              <img src={logout} alt="logout" /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

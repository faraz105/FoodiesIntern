import React, { useState } from 'react';
import DataMaped from '../UserDataRender/DataMaped';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LockResetIcon from '@mui/icons-material/LockReset';


const ManageUser = () => {
  const [users, setUsers] = useState([
    {id: 1, username: "Leanne Graham", date: "06-11-2023", email: "Sincere@april.biz", roles: "General Manager",  edit_Icon: <ModeEditIcon/>, changePassword_icon:<LockResetIcon/>, },
    {id: 2, username: "John Deep", date: "06-11-2023", email: "Blog@april.huz", roles: "Order Taker"},
    {id: 3, username: "Shine Sin", date: "06-11-2023", email: "Sight@june.zic", roles: "Sales Manager"},
  ])
  return (
    <div>
 <DataMaped users={users}/>
    </div>     
  )
}

export default ManageUser

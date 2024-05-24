import React, { useEffect, useState } from "react";
import DataMaped from "../UserDataRender/DataMaped";
import users from '../ManageUser/data/db';
const ManageUser = () => {
  return (
    <div>
      <DataMaped users={users?.users} />
    </div>
  );
};

export default ManageUser;

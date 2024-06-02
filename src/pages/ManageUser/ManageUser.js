import DataMaped from "../UserDataRender/DataMaped";
import users from '../../data/db.json';
import { useEffect, useState } from "react";
import UseFetch from "../UseFetch";

const ManageUser = () => {

  const [noRecords, setNoRecords] = useState(false);
const {data, isPending, error} = UseFetch('http://localhost:8000/users')

const handleSearch = (value) => { 
    const delay = 500; 
    setTimeout(() => {
      const filteredResults = data.filter((item) =>
        item.username.toLowerCase().includes(value.toLowerCase())
     
      );
      // if (filteredResults.length == 0 && value !== "") {
      //   setNoRecords(true);
      //   setData([]);
      // } else {
      //   setNoRecords(false);
      //   setData(value === "" ? data : filteredResults);
      // }
    }, delay);
  };
  return (
    <div>
   
      {isPending && <div style={{textAlign: 'center'}}>Loading...</div>}
      {error && <div style={{textAlign: 'center'}}>{error}</div>}
     {data && <DataMaped data={data} handleSearch={handleSearch} noRecords={noRecords} />}
    </div>
  );
};

export default ManageUser;

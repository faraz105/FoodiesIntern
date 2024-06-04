import React, { useEffect, useState, useMemo } from 'react'
import { getAllAccounts } from "../../api/misc";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

const Home = () => {
  const navigate = useNavigate()

  const [colDefs, setColDefs] = useState([
    { field: "Account_Name", headerName : "Name"},
    { field: "Account_Email", headerName: "Email" },
    { field: "Account_Company" , headerName: "Company"  },
    { field: "Account_Phone" , headerName: "Phone"  },
    { field: "Account_Country" , headerName: "Country"  },
    { field: "Account_City" , headerName: "City"  },
    { field: "Account_Address1" , headerName: "Address"  },
    { field: "ReturnMessage" , headerName: "Message"  }
  ]);

  const [limit, setLimit] = useState(10);
  const [allAcc, setAllAcc] = useState();
  // const { access_token } = useSelector((state) => state.auth.userData.user);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      filter: "agTextColumnFilter",
      menuTabs: ["filterMenuTab"],
    };
  }, []);
  useEffect(()=>{
    const getAllAcc =async ()=>{
      try{
        const headers = {
        headers: {
          // Authorization: `Bearer ${access_token}`,
        },
      };
      const res = await getAllAccounts(headers)
      setAllAcc(res.data);
    }
    catch(err){
      if(err.response.status == 401){
        navigate("./signin")
      }
    }
    }
    // getAllAcc()
  },[])
  return (
    <div className="ag-theme-quartz" style={{ height: 450 }}>
      <AgGridReact rowData={allAcc} defaultColDef={defaultColDef} columnDefs={colDefs} paginationPageSize={limit} pagination={true}/>
    </div>
  )
}

export default Home
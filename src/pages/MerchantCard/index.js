import React, { useState, useEffect, useMemo } from "react";
import classes from "./merchantCard.module.scss";
import { getAllCards, getCardDetail } from "../../api/misc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const MerchantCard = () => {
  const [colDefs, setColDefs] = useState([
    { field: "CardHolder", headerName: "Name" },
    { field: "CardType", headerName: "Card Type" },
    { field: "AccountID", headerName: "Account ID" },
    {
      field: "_id.$oid",
      headerName: "Details",
      cellRenderer: (params) => (
        <div
          className={classes.card__link}
          onClick={() => handleOpen(params?.value)}
        >
          view details
        </div>
      ),
    },
  ]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [limit, setLimit] = useState(10);
  // const { access_token } = useSelector((state) => state.auth.userData.user);
  const [allCard, setAllCard] = useState();
  const [cardDetail, setCardDetail] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = async (id) => {
    setOpen(true);
    try {
      const headers = {
        headers: {
          // Authorization: `Bearer ${access_token}`,
        },
      };

      const res = await getCardDetail(id, headers);
      setCardDetail(res.data);
    } catch (err) {
      console.log("error", err);
    }
  };
  const handleClose = () => setOpen(false);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      filter: "agTextColumnFilter",
      menuTabs: ["filterMenuTab"],
    };
  }, []);
  console.log("cardDetail", cardDetail);
  const getAllCard = async () => {
    try {
      const headers = {
        headers: {
          // Authorization: `Bearer ${access_token}`,
        },
      };
      const datad = { per_page: "10", page: "1" };
      const res = await getAllCards(datad, headers);
      setAllCard(res.data);
    } catch (err) {
      if (err.response.status == 401) {
        navigate("/login");
      }
    }
  };
  useEffect(() => {
    getAllCard();
  }, []);

  const data = [
    {
      id: 1,
      name: "Product Name",
      des: "This is reusable product. This is reusable product. This is reusable product. This is reusable product.",
    },
    {
      id: 2,
      name: "Product Name",
      des: "This is reusable product. This is reusable product. This is reusable product. This is reusable product.",
    },
    {
      id: 3,
      name: "Product Name",
      des: "This is reusable product. This is reusable product. This is reusable product. This is reusable product.",
    },
    {
      id: 4,
      name: "Product Name",
      des: "This is reusable product. This is reusable product. This is reusable product. This is reusable product.",
    },
    {
      id: 5,
      name: "Product Name",
      des: "This is reusable product. This is reusable product. This is reusable product. This is reusable product.",
    },
    {
      id: 6,
      name: "Product Name",
      des: "This is reusable product. This is reusable product. This is reusable product. This is reusable product.",
    },
  ];

  return (
    <div className={classes.main__container}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            onClick={handleClose}
            variant="h6"
            component="h2"
            sx={{
              position: "absolute",
              top: "0",
              right: "10px",
              cursor: "pointer",
            }}
          >
            x
          </Typography>

          <Typography id="modal-modal-title" component="p">
            Name: {cardDetail?.data?.CardHolder}
          </Typography>
          <Typography id="modal-modal-title" component="p">
            Type: {cardDetail?.data?.CardType}
          </Typography>
          <Typography id="modal-modal-title" component="p">
            Card Number: {cardDetail?.data?.CardNumber}
          </Typography>
          <Typography id="modal-modal-title" component="p">
            Expiry Month: {cardDetail?.data?.CardExpMonth}
          </Typography>
          <Typography id="modal-modal-title" component="p">
            Expiry Year: {cardDetail?.data?.CardExpYear}
          </Typography>
          <Typography id="modal-modal-title" component="p">
            Account ID: {cardDetail?.data?.AccountID}
          </Typography>
        </Box>
      </Modal>
      <div className={classes.main__card}>
        <div className="ag-theme-quartz" style={{ height: 450, width: "100%" }}>
          <AgGridReact
            rowData={allCard}
            defaultColDef={defaultColDef}
            columnDefs={colDefs}
            paginationPageSize={limit}
            pagination={true}
          />
        </div>
        {/* {data?.map((item)=>(
          <div className={classes.card__box} key={item?.id}>
          <img src={ProductImg} alt=""/>
          <div className={classes.card__text}>
            <h2>{item?.name}</h2>
            <p>{item?.des}</p>
            <div className={classes.card__link} onClick={()=>handleOpen(item?.id)}>view details</div>
          </div>
        </div>
        ))} */}
      </div>
    </div>
  );
};

export default MerchantCard;

import React from 'react';
import { Backdrop } from '@mui/material';
import { styled } from '@mui/material';



const CustomBackdrop = styled(Backdrop)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  }));

export default CustomBackdrop;
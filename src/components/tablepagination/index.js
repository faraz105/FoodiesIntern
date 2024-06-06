import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./paginationBuiltin.scss";

const PaginationComponent = ({ page, totalPages, onPageChange }) => {
  
  return (
    
      <Pagination
        className={`$ customPagination`}
        count={totalPages}
        variant="outlined"
        shape="rounded"
        onChange={(event, newPage) =>{ onPageChange(event, newPage - 1)}}
        page={page + 1}
        showFirstButton={false}
        showLastButton={false}
      />

  );
};

export default PaginationComponent;

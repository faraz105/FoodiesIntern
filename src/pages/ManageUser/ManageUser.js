import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const ManageUser = () => {
  return (
    <div>
<Table>
  <TableHead>
<TableRow>
  <TableCell>#</TableCell>
  <TableCell>Created at</TableCell>
  <TableCell>Email</TableCell>
  <TableCell>Roles</TableCell>
  <TableCell>Actions</TableCell>
</TableRow>
  </TableHead>
  <TableBody>

  </TableBody>
</Table>
    </div>
  )
}

export default ManageUser

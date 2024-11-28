import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ContentPagination=({page,setPage,numberOfPage=10})=> {

    const handleChange=(event,p)=>{
        console.log('oldal:',p);
        setPage(p)
    }
  return (
   
    <Stack spacing={2}>
      <Pagination
        count={numberOfPage}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#e2e8f0', // Light gray for unselected page numbers
          },
          '& .MuiPaginationItem-ellipsis': {
            color: '#e2e8f0', // Light gray for ellipsis
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#00bcd4', // Cyan for selected page background
            color: '#ffffff', // White text color for selected page
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2b6cb0', // Blue-gray border for the pagination
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#4dabf7', // Light blue for hover effect
          },
        }}
      />
    </Stack>
    
  );
}

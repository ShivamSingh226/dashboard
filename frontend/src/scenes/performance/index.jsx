import React from 'react'
import { Box,useTheme } from '@mui/material'
import { useGetUserPerformanceQuery } from '../../state/api.js'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from 'react-redux'
import Header from "../../components/Header.jsx"
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu.jsx"
const Performance = () => {
    const theme=useTheme();
    const userId=useSelector((state)=>state.global.userId);
    const {data,isLoading}=useGetUserPerformanceQuery(userId);
    console.log("data",data);
    const columns=[
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
          },
          {
            field: "name",
            headerName: "Name",
            flex: 0.5,
          },
          {
            field: "email",
            headerName: "Email",
            flex: 1,
          },
          {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            renderCell: (params) => {
              return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
            },
          },
          {
            field: "country",
            headerName: "Country",
            flex: 0.4,
          },
          {
            field: "occupation",
            headerName: "Occupation",
            flex: 1,
          },
          {
            field: "role",
            headerName: "Role",
            flex: 0.5,
          },

    ]
  return (
    <Box m="1.5rem 2.5rem">
    <Header title="ADMINS" subTitle="Managing Admins and list of all admins"/>
    {/* <Box mt="40px" height="75vh"
    sx={{
        "& .MuiDataGrid-root":{
            border:"none"
        },
        "& .MuiDataGrid-cell":{
            borderBottom:"none"
        },SS
        "& .MuiDataGrid-columnHeaders":{
            backgroundColor:theme.palette.background.alt,
            color:theme.palette.secondary[100],
            borderBottom:"none"
        },
        "& .MuiDataGrid-virtualScroller":{
            backgroundColor:theme.palette.primary.light,

        },
        "& .MuiDataGrid-footerContainer":{
            backgroundColor:theme.palette.primary.alt,
            color:theme.palette.secondary[100],
            borderTop:"none"
            
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color:`${theme.palette.secondary[200]} !important`
        }
    }}>
        <DataGrid 
        loading={isLoading || !data}
        getRowId={(row)=>row._id}
        rows={data||[]}
        columns={columns}
        slots={{
            ColumnMenu:CustomColumnMenu,
        }}/>
    </Box> */}
   </Box>
  )
}

export default Performance
import DataTable from 'react-data-table-component';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import React, {
  useState,
  useEffect,
  Component
} from "react";

import axios from "axios";



const Daerds = () => {
  const [data, setData] = useState([]);

  const  deleteTransaction=(empno)=>{
  
    const empid= {
      empno:empno


    };

    try {
        
      const response =  axios.post('https://localhost:7199/api/employees/DeleteEmployeeDetails', empid,{
headers:{
  
  'Content-Type': 'application/json;charset=UTF-8',

    }
}

      
        

         // config
      
    );
      
      console.log(' data Deleted successfully:', response.data);
      
      } catch (error) {
      
      console.error('Error deleting form data:', error);
      
      }
      
      

    

  };


  
  
  const EditTransaction=(rowid)=>{
  
  
  
  }

  useEffect(() => {
    axios
      .get(
        "https://localhost:7199/api/employees/GetEmployeeList"
      )
      .then(response => {
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  

    const columns = [{
        name: "empno",
        selector:row=>row.empno,
        omit:  true        
      },
      {
        name: "empname",
        selector:row=>row.empname,
        sortable:true
       
      },
      {
        name: "empaddress",
        selector:row=>row.empaddress,
        sortable:true
        
      },
      {
        name: "empmail",
        selector:row=>row.empmail,
        sortable:true
        
      },{
        name:"Action",
      cell: row => (
        <IconButton
          aria-label="delete"
          color="secondary"
          onClick={() => deleteTransaction(row.empno)}
        >  
          <DeleteIcon />
        </IconButton>
      )
    },
    {
      cell: row => (
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={() => EditTransaction(row.empno)}
        >  
          <EditIcon />
        </IconButton>
      )
    }
    ];

  console.log(data)
  console.log(columns)

  return ( 
    <div>
    
    < DataTable 
    data = {
      data
    }
    columns = {
      columns
    }
    
    />
    </div>
  
  );
}


export default Daerds;

import React,{useState,useEffect} from 'react';
import { useParams} from "react-router-dom";

import Form from 'react-bootstrap/Form' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Daerds from './bootstraptable';

import axios  from 'axios';

let edit =0;
let empdata={}
let count=0;

 const EditTransaction =async(empno)=>  {
 //const [frmdata,SetfrmData]=useState([]);`
  const  rowid= {empno:empno}
    let emde={}

  try {
      
    const res = await axios.post('https://localhost:7199/api/employees/GetEmployeeDetails', rowid,{
headers:{

'Content-Type': 'application/json;charset=UTF-8',

  }
}

    ).then(response=>editdata(response.data))
   console.log(res);
    return(res)
    // TextControlsExample(response.data);
   
    
    } catch (error) {
    
    console.error('Error deleting form data:', error);
    
    }

  
}
 
function editdata(emedetails)
{
  console.log(emedetails)
  let eleempno=document.getElementById("empno")
  eleempno.value=emedetails.empno
  empdata.empno=emedetails.empno.toString()
 let elename= document.getElementById("empname")
 elename.value=emedetails.empname
 empdata.empname=emedetails.empname


 let eleaddress= document.getElementById("empaddress")
 empdata.empaddress=emedetails.empaddress
 eleaddress.value=emedetails.empaddress
let elemail= document.getElementById("empmail")
 elemail.value=emedetails.empmail
 empdata.empmail=emedetails.empmail

  let hdnelemno= document.getElementById("hdnedit")
  hdnelemno.value=1
  empdata.empedit=1
  
    
}  
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};
 const TextControlsExample=(match)=> {
let {empno}=useParams()
let {counts}=useParams()
  
   console.log(empno)
   
    const [formData, setFormData] = useState({

    empname: '',
    
    empmail: '',
    empaddress:'',
    empno:'',
    empedit:0
    
    
    });

    
   

    const [errors, setErrors] = useState({});
    useEffect(() => {

      if(empno){
        
        const  rowid= {empno:empno}
    let emde={}

  try {
      
    const res =  axios.post('https://localhost:7199/api/employees/GetEmployeeDetails', rowid,{
headers:{

'Content-Type': 'application/json;charset=UTF-8',

  }
}

    ).then(response=>setFormData(response.data))
   console.log(res);
    // TextControlsExample(response.data);
     formData.empedit=1
    
    } catch (error) {
    
    console.error('Error deleting form data:', error);
    
    }

          
        }
        
     
    }, [counts]);

    const handleChange = (e) => {

      const { name, value } = e.target;
      
      setFormData({ ...formData, [name]: value });
      

      
      };

      
    const validateform=(data)=>{
      const errors={};
      console.log(data.empname.length)
      if(!data.empname.trim()){
           errors.empname="Enter Name"

      }else if(!(data.empname.length>=4)){
        errors.empname="Atleast Minimum 4 Letters Should be there "
      }

      if (!data.empmail.trim()) {
        errors.empmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.empmail)) {
        errors.empmail = 'Email is invalid';
    }
    if(!data.empaddress.trim()){
      errors.empaddress="Address is required"
    }
    if(!data.empno.toString().trim()){
      errors.empno="Empno is required"
    }else if(!/^[0-9\b]+$/.test(data.empno) ){
      errors.empno="The Value should be empno"
    }

        return errors;

    }
    

      const handleSubmit = async (e) => {

        e.preventDefault();
         const newErrors = validateform(formData);
        console.log(newErrors);
         setErrors(newErrors);
        if(Object.keys(newErrors).length===0)
        {
        try {
        
        const response = await axios.post('https://localhost:7199/api/employees/Inseremployee', formData,{
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
  }
           // config
        
      );
        
        console.log('Form data submitted successfully:', response.data);
        
        } catch (error) {
        
        console.error('Error submitting form data:', error);
        
        }
      }else{
        console.log("Some fields are missing")
      }
       
      }

    

    return (
      <div class="container">
        <div class="container-fluid">
      <div class="card p-2">
      <form w-full max-w-lg >
      <div class="flex flex-wrap -mx-3 mb-6">
        <input name="empedit" value={formData.empedit} type="hidden" id="hdnedit" />
       
          
           <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            
              
              <label className="form-label" > Employee Name</label>
            
         
        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} name="empname" value={formData.empname} placeholder="name@flowbite.com"   id="empname"  />
        {errors.empname && (
                        <span className="error-message">
                            {errors.empname}
                        </span>
                    )}
       
        </div>
        <div class="w-full md:w-1/3 px-3">
        <label className="form-label" > Employee No</label>
       
      
        <input type="text" onChange={handleChange} value={formData.empno} name="empno" className="form-control gap-x-3" id="empno" />
        {errors.empno && (
                        <span className="error-message">
                            {errors.empno}
                        </span>
                    )}
        </div>
        </div>
        
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="form-label" > Employee Address</label>
           
         
        <input type="text" onChange={handleChange} value={formData.empaddress} name="empaddress" className="form-control " id="empaddress" required />
        {errors.empaddress && (
                        <span className="error-message">
                            {errors.empaddress}
                        </span>
                    )}
        </div>
        
        <div class="w-full md:w-1/3 px-3 ">
        <label className="form-label" > Employee  Mail</label>
       
        <input type="text" onChange={handleChange} value={formData.empmail} name="empmail" className="form-control " id="empmail" required />
        {errors.empmail && (
      <span className="error-message">
          {errors.empmail}
      </span>
       )}
        </div>
        
       
        </div>
        <div>
        <button class='btn btn-primary  px-3' onClick={handleSubmit}>Submit</button>
        </div>
        
        <div>
          <Daerds />
        </div>
       
      </form>
      </div>
      </div>
      </div>
    );
  }

  export default  TextControlsExample;
  export {EditTransaction}
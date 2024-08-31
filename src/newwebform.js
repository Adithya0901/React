
import React,{useState} from 'react';
import Form from 'react-bootstrap/Form' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Daerds from './bootstraptable';

import axios  from 'axios';

let edit =0;

let edata
 const EditTransaction =(empno)=>  {
 //const [frmdata,SetfrmData]=useState([]);
  const  rowid= {empno:empno}
    

  try {
      
    const response =  axios.post('https://localhost:7199/api/employees/GetEmployeeDetails', rowid,{
headers:{

'Content-Type': 'application/json;charset=UTF-8',

  }
}

    ).then(response=>{editdata(response.data)})
   console.log(edata)
   
    
    // TextControlsExample(response.data);
    return("s")
    
    } catch (error) {
    
    console.error('Error deleting form data:', error);
    
    }

  
} 

function editdata(emedetails){
//   let eleempno=document.getElementById("empno")
//   eleempno.value=emedetails.empno
//  let elename= document.getElementById("empname")
//  elename.value=emedetails.empname

//  let eleaddress= document.getElementById("empaddress")
//  eleaddress.value=emedetails.empaddress

 
//  let elemail= document.getElementById("empmail")
//  elemail.value=emedetails.empmail

//   let hdnelemno= document.getElementById("hdnedit")
//   hdnelemno.value=1


}


let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};
 const TextControlsExample=(empetails)=> {
 
    const [formData, setFormData] = useState({

    empname: '',
    
    empmail: '',
    empaddress:'',
    empno:'',
    empedit:0
    
    
    });

    const [errors, setErrors] = useState({});

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
    if(!data.empno.trim()){
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
      <form>
        <div>
          <div className='App-Header' >
           <div class="row">
            <div class="col-sm2">
              <input name="hdnedit" value={formData.empedit} type="hidden" id="hdnedit" />
              <label className="form-label" > Employee Name</label>
            </div>
          <div class="col-sm2">
        <input type="text" onChange={handleChange} name="empname" value={formData.empname} className="form-control " id="empname"  />
        {errors.empname && (
                        <span className="error-message">
                            {errors.empname}
                        </span>
                    )}
        </div>
        </div>
        <div >
        <label className="form-label" > Employee No</label>
        </div>
        <div >
        <input type="text" onChange={handleChange} value={formData.empno} name="empno" className="form-control " id="empno" />
        {errors.empno && (
                        <span className="error-message">
                            {errors.empno}
                        </span>
                    )}
        </div>
        </div> 

        <div className='App-Header' >
            <div>

              <label className="form-label" > Employee Address</label>
            </div>
          <div >
        <input type="text" onChange={handleChange} value={formData.empaddress} name="empaddress" className="form-control " id="empaddress" required />
        {errors.empaddress && (
                        <span className="error-message">
                            {errors.empaddress}
                        </span>
                    )}
        </div>
        <div >
        <label className="form-label" > Employee  Mail</label>
        </div>
        <div >
        <input type="text" onChange={handleChange} value={formData.empmail} name="empmail" className="form-control " id="empmail" required />
        {errors.empmail && (
                        <span className="error-message">
                            {errors.empmail}
                        </span>
                    )}
        </div>
        <div>
        <button class='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
        </div>
        <div>
          <Daerds />
        </div>
        </div>
      </form>
    );
  }

  export default  TextControlsExample
  export {EditTransaction}
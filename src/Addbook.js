import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Addbook() {
    const navigate = useNavigate();
    const formik= useFormik({
        initialValues :{
            BookName:"",
            Author:"",
            PresentOwner:"",
            AssignedDate:"",
            ReturnDate:"",
            Edition:""
            
        },
        validate: (values) =>{
            let error = {};

            if(!values.BookName){
                error.BookName = "Please enter a value"
            }
            if(values.BookName && (values.BookName.length <=2 || values.BookName.length > 15)){
                error.BookName = "Book Name must between range 2 to 15 Characters"
            }
            if(!values.Author){
                error.Author = "Please enter Author name"
            }
            if(values.Author && (values.Author.length <=2 || values.Author.length > 15)){
                error.Author="Author name must between range 2 to 15 Characters";
            }
            if(!values.PresentOwner){
                error.PresentOwner = "Please enter Present owner name"
            }
            if(values.PresentOwner && (values.PresentOwner.length <=2 || values.PresentOwner.length > 15)){
                error.PresentOwner="Author name must between range 2 to 15 Characters";
            }
            
            if(!values.AssignedDate){
                error.AssignedDate = "Please enter value"
            }
           
            if(!values.ReturnDate){
                error.ReturnDate = "Please enter value"
            }
            if(!values.Edition){
                error.Edition = "Please enter Edition"
            }
            
            // let AssignedDate=new Date().getFullYear() - parseInt(values.DOB.split("-")[0]);
            // if(age < 18){
            //     error.DOB="You must be above 18"
            // }

            return error;
        },
        onSubmit : async (values) =>{
            try{
                const userdata = await axios.post("https://63ec8d3d32a08117239d13f9.mockapi.io/api/library",values);
                alert("success");
                navigate('/books');
            }
            catch(error){
             alert("Error");
            }
        }
    });
    
    
    return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Book Name*</lable>
                    <input name="BookName" onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.BookName} type={"text"} 
                    className={`form-control ${formik.touched.BookName && formik.errors.BookName ? 'error-box':''} ${formik.touched.BookName && !formik.errors.BookName ? 'success-box' : ""} `}
                     />
                     
               {   
                formik.touched.BookName && formik.errors.BookName ? <span style={{color:'red'}} >{formik.errors.BookName}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='form-group'>
                    <lable>Author*</lable>
                    <input name="Author" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.Author} type={"text"} 
                    className={`form-control ${formik.touched.Author && formik.errors.Author ? 'error-box':''} ${formik.touched.Author && !formik.errors.Author ? 'success-box' : ""} `}/>
                 {   
                formik.touched.Author && formik.errors.Author ? <span style={{color:'red'}} >{formik.errors.Author}</span> : null
               }
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Present Owner</lable>
                    <input name="PresentOwner" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.PresentOwner} type={"text"} 
                    className={`form-control ${formik.touched.PresentOwner && formik.errors.PresentOwner ? 'error-box':''} ${formik.touched.PresentOwner && !formik.errors.PresentOwner ? 'success-box' : ""} `}/>
                 {   
                formik.touched.PresentOwner && formik.errors.PresentOwner ? <span style={{color:'red'}} >{formik.errors.PresentOwner}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Assigned Date</lable>
                    <input name="AssignedDate" onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                    value={formik.values.AssignedDate}type={"date"} 
                    className={`form-control ${formik.touched.AssignedDate && formik.errors.AssignedDate ? 'error-box':''} ${formik.touched.AssignedDate && !formik.errors.AssignedDate ? 'success-box' : ""} `}/>
                     {   
                formik.touched.AssignedDate && formik.errors.AssignedDate ? <span style={{color:'red'}} >{formik.errors.AssignedDate}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                <lable>Return Date</lable>
                    <input name="ReturnDate" onChange={formik.handleChange} 
                     onBlur={formik.handleBlur}
                    value={formik.values.ReturnDate}type={"date"} 
                    className={`form-control ${formik.touched.ReturnDate && formik.errors.ReturnDate ? 'error-box':''} ${formik.touched.ReturnDate && !formik.errors.ReturnDate ? 'success-box' : ""} `}/>
                     {   
                formik.touched.ReturnDate && formik.errors.ReturnDate ? <span style={{color:'red'}} >{formik.errors.ReturnDate}</span> : null
               }
                 </div>
            </div>
            <div className='col-lg-4'>
                <div className='form-group'>
                    <lable>Edition</lable>
                    <input name="Edition" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.Edition} type={"number"} 
                    className={`form-control ${formik.touched.Edition && formik.errors.Edition ? 'error-box':''} ${formik.touched.Edition && !formik.errors.Edition ? 'success-box' : ""} `}/>
                 {   
                formik.touched.Edition && formik.errors.Edition ? <span style={{color:'red'}} >{formik.errors.Edition}</span> : null
               }
                 </div>
            </div>
            
            
            <div className='col-lg-4'>
                <div className='form-group'>
                    <input type={"Submit"} className="btn btn-primary"/>
                    
                 </div>
            </div>
        </div>
        </form>
     
    </div>
  )
}

export default Addbook
  
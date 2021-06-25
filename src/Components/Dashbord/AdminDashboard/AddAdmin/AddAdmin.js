import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    const url = `https://stark-crag-95097.herokuapp.com/addAdmin`
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })
  };
  return (
    <div >
      <div className="row">
        <div className="col-md-2"><Sidebar></Sidebar> </div>
        <div className="col-md-6">    <form style={{ marginTop: "30px" }} onSubmit={handleSubmit(onSubmit)} className="ship-form">
          <div className="form-group">
            <input className="form-control"  {...register("name", { required: true })} name="name" placeholder="name" />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" {...register("email", { required: true })} type="text" placeholder="email" />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" type="submit" />
          </div>
        </form></div>
      </div>
    </div>
  )
};

export default AddAdmin;
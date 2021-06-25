import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
  const [imageUrl, setImageUrl] = useState()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const events = {
      name: data.name,
      duration: data.duration,
      classes: data.classes,
      price: data.price,
      support: data.support,
      imgUrl: imageUrl
    }
    console.log(events)
    const url = `https://stark-crag-95097.herokuapp.com/addService`
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(events)
    })
  };
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData()
    imageData.set('key', 'ac14fb7fe7d3b9b39f81a751405dbb8e')
    imageData.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="add-service">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-6">    <form onSubmit={handleSubmit(onSubmit)} className="ship-form" style={{ marginTop: "30px" }}>
          <div className="form-group">
            <input className="form-control"  {...register("name", { required: true })} name="name" placeholder="name" />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" {...register("duration", { required: true })} type="text" placeholder="duration" />
            {errors.duration && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" {...register("classes", { required: true })} type="text" placeholder="classes" />
            {errors.classes && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" {...register("support", { required: true })} type="text" placeholder=" support" />
            {errors.support && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" {...register("price", { required: true })} type="text" placeholder="price" />
            {errors.price && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" type="file" onChange={handleImageUpload} />
          </div>
          <div className="form-group">
            <input className="form-control" type="submit" />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
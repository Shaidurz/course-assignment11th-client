import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Rwview = () => {
  const [imageUrl, setImageUrl] = useState()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const events = {
      name: data.name,
      student: data.student,
      review: data.review,
      imgUrl: imageUrl
    }
    console.log(events)
    const url = `http://localhost:5000/addReview`
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
    <div>
      <div className="row">
        <div className="col-md-2"><Sidebar></Sidebar></div>
        <div className="col-md-6">    <form onSubmit={handleSubmit(onSubmit)} className="ship-form" style={{ margin: "30px" }}>
          <div className="form-group">
            <input className="form-control"  {...register("name", { required: true })} name="name" placeholder="name" />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" {...register("student", { required: true })} type="text" placeholder="student" />
            {errors.id && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <textarea className="form-control" {...register("review", { required: true })} name="review" placeholder="Review Here" rows="7" ></textarea>
            {errors.review && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <input className="form-control" type="file" onChange={handleImageUpload} />
          </div>
          <div className="form-group">
            <input className="form-control" type="submit" />
          </div>
        </form></div>
      </div>
    </div>
  );
};

export default Rwview;
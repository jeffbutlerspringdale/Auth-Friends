import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import * as Yup from 'yup';

const AppForm = ({errors, touched, values, handleSubmit, status  }) => {
    const [friends, setFriends] = useState([]);
    console.log(friends);

  useEffect(() => {
    if (status) {
      setFriends([...friends, status]);
    }
  }, [status]);

return (
    <div className="App-Form"> 
        <h1> Add Friend </h1>
            <Form> 
                <Field type='text' name='name' placeholder='name' />
                 {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
                )}
                  <Field type='text' name='email' placeholder='email' />
                 {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
                )}
                  <Field type='age' name='age' placeholder='age' />
                 {touched.age && errors.age && (
                <p className="error">{errors.age}</p>
                )}
                
                <button type="submit">Submit</button>

                 {friends.map(friend => (
                 <p key={friend.id}>
                 Name: {friend.name}
                 <br/>
                 Age: {friend.age}
                 <br/>
                 Email: {friend.email}
                 </p>
                 ))}
                
            </Form>
    </div>
)
};

const FormikAppForm = withFormik({
    mapPropsToValues({ name, email, age}){
        return {
            name: name || "",
            age: age || "",
            email: email || ""
        };
    },

    validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    age: Yup.string().required(),
  }),

    handleSubmit(values, { setStatus }) {
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", values)
        .then(res => {
            console.log('in form', res.data)
            setStatus(res.data);
        })
        .catch(err => console.log(err.response));
    }
})(AppForm);

export default FormikAppForm
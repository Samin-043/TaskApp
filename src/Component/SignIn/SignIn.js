// src/SignInForm.js

import React, { useState } from 'react';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import './SignIn.css'

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('User trying to sign in:', formData);
  };

  return (
    <div className="body">
      <Card className='body'>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Card className='bg-transparent border-0'>
              <Card.Body>
                <div className='m-auto'>
                  <FormLabel>
                    Email:</FormLabel>
                  <input className='ms-3'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='my-auto'>
                  <FormLabel className='my-auto'>Password:</FormLabel>
                  <input className='ms-3'
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Button className='btn-primary my-3' type="submit">Sign In</Button>
                </div>
              </Card.Body>
            </Card>

          </Form>
        </Card.Body>
      </Card>
    </div>

  );
}

export default SignInForm;

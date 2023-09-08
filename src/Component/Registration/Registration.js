
import React, { useState } from 'react';
import { Button, Card, Form, FormLabel } from 'react-bootstrap';
import './Registration.css'



function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
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
    // Handle registration logic here
    console.log('User registered:', formData);
  };

  return (

    <div className="body">
      <Card className='body'>
        <Card.Body className='body'>
          <Form onSubmit={handleSubmit}>
            <Card>
              <Card.Body>
                <div className='mx-auto my-auto'>
                  <FormLabel >Username:</FormLabel>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormLabel>Email:</FormLabel>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <FormLabel>Password:</FormLabel>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Button type="submit">Register</Button>
                  <Button className='ms-2' href="/src/Component/Registration">Register</Button>
                </div>
              </Card.Body>
            </Card>
          </Form>
        </Card.Body >
      </Card >
    </div >

  );
}

export default RegistrationForm;

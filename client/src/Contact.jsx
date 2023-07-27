import React,{useState} from 'react'

const Contact = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phoneNumber,setPhoneNumber] = useState("");
const [collegeName,setCollegeName] = useState("");
const [course,setCourse] = useState("");
const [passingYear,setPassingYear] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();
    const serverURL = 'http://localhost:8080/addUserData';

    fetch(serverURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: name,
        email : email,
        contact_number: phoneNumber,
        college_name:collegeName,
        course: course,
        passing_year:passingYear,
     }),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error sending data to server:', error);
      });
  };

    return (
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title text-lg font-semibold text-gray-700 capitalize">
                                    Contact Information
                                </h2>

                                <form>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label fw-bold text-gray-700">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter your full name"
                                                    onChange = {(e)=> setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="emailAddress" className="form-label fw-bold text-gray-700">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="emailAddress"
                                                    placeholder="Enter your email address"
                                                    onChange = {(e)=> setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label fw-bold text-gray-700">
                                                    Contact Number
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Enter your contact number"
                                                    onChange = {(e)=> setPhoneNumber(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="passwordConfirmation" className="form-label fw-bold text-gray-700">
                                                    College Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="passwordConfirmation"
                                                    placeholder="Enter your college name"
                                                    onChange = {(e)=> setCollegeName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label fw-bold text-gray-700">
                                                    Course
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter your course"
                                                    onChange = {(e)=> setCourse(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label htmlFor="emailAddress" className="form-label fw-bold text-gray-700">
                                                   Passing year
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="emailAddress"
                                                    placeholder="Enter your passing year"
                                                    onChange = {(e)=> setPassingYear(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-end mt-6">
                                        <button type="submit" className="btn btn-primary" onClick = {handleSubmit}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    }
export default Contact

import React, { useState } from "react";
const Contact = () => {
  const [userData, setUserData] = useState({
    youtubename: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { youtubename, firstName, lastName, phone, email, address, message } =
      userData;

    if (
      youtubename &&
      firstName &&
      lastName &&
      phone &&
      email &&
      address &&
      message
    ) {
      const res = fetch(
        "https://contactusformwithreact-default-rtdb.firebaseio.com/contactusform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            youtubename,
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          youtubename: "",
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Thank You for the Valuable Feedback");
      } else {
        alert("Please Fill All Details I'm waiting for Your Response");
      }
    } else {
      alert("Please Fill All Details I'm waiting for Your Response ");
    }
  };

  return (
    <>
      <section className="contact us-section">
        <div className="container">
          <div className="header">
            <h2>YouTube Feedback Form </h2>
          </div>

          {/* right side contact form  */}
          <form method="POST" className="form" id="form">
            <div className="form-control">
              <label htmlFor="username">Your YouTube Name</label>
              <input
                type="text"
                name="youtubename"
                id=""
                className="form-control"
                placeholder="Youtube Name"
                value={userData.youtubename}
                onChange={postUserData}
              />
            </div>
            <div className="form-control">
              <label htmlFor="username">First Name</label>
              <input
                type="text"
                name="firstName"
                id=""
                className="form-control"
                placeholder="First Name"
                value={userData.firstName}
                onChange={postUserData}
              />
            </div>

            <div className="form-control">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                name="lastName"
                id=""
                className="form-control"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={postUserData}
              />
            </div>
            <div className="form-control">
              <label htmlFor="username">Phone</label>
              <input
                type="text"
                name="phone"
                id=""
                className="form-control"
                placeholder="Phone Number "
                value={userData.phone}
                onChange={postUserData}
              />
            </div>
            <div className="form-control">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                name="email"
                id=""
                className="form-control"
                placeholder="Email ID"
                value={userData.email}
                onChange={postUserData}
              />
            </div>
            <div className="form-control">
              <label htmlFor="username">Address</label>
              <input
                type="text"
                name="address"
                id=""
                className="form-control"
                placeholder="Add Address"
                value={userData.address}
                onChange={postUserData}
              />
            </div>
            <div className="form-control">
              <label htmlFor="username">Message</label>
              <input
                type="text"
                name="message"
                id=""
                className="form-control users_message"
                placeholder="Enter Your Message"
                value={userData.message}
                onChange={postUserData}
              />
            </div>

            <div className="form-check form-checkbox-style">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label main-hero-para">
                I agree that the Users may contact me at the email address or
                phone number above
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-style w-100"
              onClick={submitData}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;


import { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if(firstName && lastName && phone && email && address && message){
    const res = fetch(
      "https://tusharpay-5852d-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        Headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstName, lastName, phone, email, address, message 
        })
      },
    );

    if(res){
      setUserData({firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: "",})
      alert("Data Stored!")
    }else{
      alert("please fill the data!")
    }
  }else{
    alert("please fill the data!")
  }
  };
  return (
    <>
      <section className=" contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contactus-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, optio!
                  </p>
                  <figure>
                    <img
                      src="/images/hero1.jpg"
                      alt="contact-us"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="form-control"
                          onChange={postUserData}
                          value={userData.firstName}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="form-control"
                          onChange={postUserData}
                          value={userData.lastName}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="form-control"
                          onChange={postUserData}
                          value={userData.phone}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email ID"
                          className="form-control"
                          onChange={postUserData}
                          value={userData.email}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input">
                        <input
                          type="text"
                          name="address"
                          placeholder="Add Address"
                          className="form-control"
                          onChange={postUserData}
                          value={userData.address}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          placeholder="Enter Your Message"
                          className="form-control"
                          onChange={postUserData}
                          value={userData.message}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        htmlFor="exampleCheck1"
                        className="main-hero-para form-check-label"
                      >
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

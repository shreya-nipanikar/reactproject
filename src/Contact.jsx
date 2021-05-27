import React, {useState} from 'react';

const Contact = () => {
  const [item, setItem] = useState({
    name: '',
    phonenumber: '',
    email: '',
    message: '',
  });

  const formAction = (event) => {
    const {name,value} = event.target;

    setItem((preVal)=>{
      return {
        ...preVal,
        [name]: value,
      }
    })

  }

  

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Thankyou ${item.name} ! Your message has been submitted. We will get back to you soon.`);
    setItem({
      name: '',
      phonenumber: '',
      email: '',
      message: '',
    });
  }

  
    return (
        <>
        <div className="mycontainer">
        <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
        </div>

        <div className="container-fluid contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto pt-lg-10">
                <form onSubmit={formSubmit}>
  <div className="form-group">
    <label className="mb-2">Name</label>
    <input type="text" className="form-control" name="name" value={item.name} onChange={formAction} id="exampleFormControlInput1" placeholder="Enter Name" />
  </div>
  <div className="form-group my-3">
    <label  className="mb-2">Phone Number</label>
    <input type="number" className="form-control" name="phonenumber" value={item.phonenumber} onChange={formAction} id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
  </div>
  <div className="form-group my-3">
    <label className="mb-2">Email address</label>
    <input type="email" className="form-control"  name="email" value={item.email} onChange={formAction} id="exampleFormControlInput1" placeholder="Enter Email" />
  </div>
  
  <div className="form-group my-3">
    <label  className="mb-2">Message</label>
    <textarea className="form-control" name="message" value={item.message} onChange={formAction} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div className="col-12 text-center">
      <button className="mybutton" type="submit">
          Submit
      </button>
  </div>
</form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;
// // import React from "react";

// // export default function Contact() {
// //   return (
// //     <>
// //       <div className="container contact_container">
// //         <h1 className="text-center my-2">CONTACT SECTION</h1>
// //         <div className="heading-decorator_2 text-center">
// //           <span className="line"></span>
// //           <span className="star">
// //             <i className="fa-solid fa-star"></i>
// //           </span>
// //           <span className="line"></span>
// //         </div>

// //         <form className="w-75 mx-auto text-start my-5">
// //           <div className="mb-3">
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Full Name"
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <input
// //               type="email"
// //               className="form-control"
// //               placeholder="Email Address"
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <input
// //               type="tel"
// //               className="form-control"
// //               placeholder="Phone Number"
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <textarea
// //               className="form-control"
// //               rows="5"
// //               placeholder="Message"
// //               required
// //             ></textarea>
// //           </div>
// //           <button type="submit" className="btn btn-primary">
// //             Send
// //           </button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }

import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="container w-50 mx-auto my-5 contact_container">
      <h1 className="text-center my-2">CONTACT SECTION</h1>

      <div className="heading-decorator_2 text-center">
        <span className="line"></span>

        <span className="star">
          <i className="fa-solid fa-star"></i>
        </span>
        <span className="line"></span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="text-success fw-bold">userName :</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>userAge</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>userEmail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>userPassword</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>userMessage</label>
          <textarea
            value={form.message}
            name="message"
            onChange={handleChange}
            className="form-control"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button className="btn btn-success">send Message</button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <label>userName:</label>
//       <input
//         type="text"
//         className="form-control mb-3"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>userAge:</label>
//       <input
//         type="number"
//         className="form-control mb-3"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />

//       <label>userEmail:</label>
//       <input
//         type="email"
//         className="form-control mb-3"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label>userPassword:</label>
//       <input
//         type="password"
//         className="form-control mb-3"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button type="submit" className="btn btn-success">
//         send Message
//       </button>
//     </form>
//   );
// }

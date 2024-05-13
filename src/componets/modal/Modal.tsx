/** @format */

import { useState } from 'react';
import './Modal.css';
import axios from 'axios';
export const switchModal = () => {
  let modal = document.querySelector('.ModalTransform');
  modal.classList.toggle('stickyModal');
};
export const Modal = ({ openModal, setOpenModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [img, setImg] = useState('');
  const [group, setGroup] = useState('');
  const [isMarried, setIsMarried] = useState(false);
  const [email, setEmail] = useState(false);
  // const [vedio, setVideo] = useState(false);
  const [phone, setPhone] = useState(98875331);
  const submit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      avatar: img,
      isMarried,
      phoneNumber: phone,
      email,
      // vedio,
    };
    console.log('data',data);
    
    axios
  .post('https://6490bc9e1e6aa71680cbb786.mockapi.io/TeachersInfo/teacher', 
    data,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  .then((res) => {
    console.log(res.data); 
  })
  .catch((err) => console.log(err));
  };

  console.log(firstName)
  return (
    <div
      style={openModal ? { display: 'block' } : { display: 'none' }}
      className="Modal ModalTransform"
    >
      <div className="ModalLayout">
        <button onClick={() => setOpenModal(false)}>Close</button>
        <form
          className="forms"
          onSubmit={submit}
        >
          <input
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            name="firstname"
          />
          <input
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            name="lastName"
          />
          <input
            placeholder="img"
            onChange={(e) => setImg(e.target.value)}
            type="text"
            className="form-control"
            name="img"
          />
          <input
            placeholder="group"
            onChange={(e) => setGroup(e.target.value)}
            type="text"
            className="form-control"
            name="groups"
          />
          <input
            placeholder="marid"
            onChange={(e) => setIsMarried(e.target.value)}
            type="checkbox"
            name="isMarrid"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="form-control"
            name="phone"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control"
            name="email"
          />
          {/* <input onChange={(e) => setVideo(e.target.value)} type="text" className="form-control" name="video" /> */}
          <button
            type="submit"
            className="btn btn-danger"
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
};

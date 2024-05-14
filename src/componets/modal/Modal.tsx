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
  const [email, setEmail] = useState('');
  // const [video, setVideo] = useState('');
  const [phone, setPhone] = useState(98875331);

  const submit = (e) => {
    e.preventDefault();

    // Validation
    if (!firstName || !lastName || !img || !group || !phone || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    const data = {
      firstName,
      lastName,
      avatar: img,
      isMarried,
      phoneNumber: phone,
      email,
      // video,
    };

    console.log('data', data);

    axios
      .post(
        'https://6490bc9e1e6aa71680cbb786.mockapi.io/TeachersInfo/teacher',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={openModal ? { display: 'block' } : { display: 'none' }}
      className="Modal ModalTransform"
    >
      <div className="ModalLayout">
        <button onClick={() => setOpenModal(false)}>Close</button>
        <form className="forms" onSubmit={submit}>
          <input
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            name="firstname"
            required
          />
          <input
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            name="lastName"
            required
          />
          <input
            placeholder="img"
            onChange={(e) => setImg(e.target.value)}
            type="text"
            className="form-control"
            name="img"
            required
          />
          <input
            placeholder="group"
            onChange={(e) => setGroup(e.target.value)}
            type="text"
            className="form-control"
            name="group"
            required
          />
          <input
            placeholder="married"
            onChange={(e) => setIsMarried(e.target.checked)}
            type="checkbox"
            name="isMarried"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="form-control"
            name="phone"
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            name="email"
            required
          />
          <button type="submit" className="btn btn-danger" >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};



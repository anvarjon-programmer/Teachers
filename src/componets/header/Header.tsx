import { useState } from 'react';
import { Modal } from '../modal/Modal';
import './Header.scss';
const Header = () => {
    const [openModal, setOpenModal] = useState<Boolean>(false)
  return (
    <header>
        <nav>
            <div className="navigation container">
                <h1>Teachers</h1>
                <ul className="navigation__list">
                    <li className="navigation__list--item">
                    <select className="form-select" aria-label="Default select example">
                            <option selected>Open </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </li>
                    <li className="navigation__list--item">
                    <select className="form-select" aria-label="Default select example">
                            <option selected>Open</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </select>
                    </li>
                    <li>
                        <button onClick={() => setOpenModal(true)}>Add techer</button>
                    </li>
                    <li>
                   
                    </li>
                </ul>
                <Modal openModal={openModal} setOpenModal={setOpenModal}/>
            </div>
        </nav>
    </header>
  )
}

export default Header
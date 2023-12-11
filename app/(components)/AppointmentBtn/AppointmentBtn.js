"use client"
import React, { useState } from 'react';

const AppointmentModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handlemedicalHistoryChange = (e) => {
    setMedicalHistory(e.target.value);
  };

  const handleSave = async () => {
    // Add your logic to save name and contact

    try {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "umair",
  "contact": "087654322",
  "medicalHistory": "good"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const response = await fetch("http://localhost:3000/api/patients", requestOptions);
   
    } catch (error) {
      console.log("error", error);
    }

    console.log('Name:', name);
    console.log('Contact:', contact);
    closeModal(); // Close the modal after saving
  };

  return (
    <div className="modal-container" >
      <div style={{backgroundColor:"black"}} className="modal-content">
        <h2>Your Appointment Details</h2>

        <label style={{}}>
          Name:
          <input style={{color:"black"}} type="text" placeholder='Enter your Name' value={name} onChange={handleNameChange} />
        </label>

        <label>
          Contact:
          <input style={{color:"black"}} type="text" placeholder='Enter your contact' value={contact} onChange={handleContactChange} />
        </label>

        <label>
          Medical History:
          <input style={{color:"black"}} type="text" placeholder='Enter your Medical history' value={medicalHistory} onChange={handleContactChange} />
        </label>


        <div className="button-container">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
         
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 10px;
        }

        input {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
          margin-top: 5px;
          border-radius: 8px;
          outline: none;
        }

        .button-container {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }

        .save-button,
        .cancel-button {
          padding: 10px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
        }

        .save-button {
          background-color: #4caf50;
          color: white;
        }

        .cancel-button {
          background-color: #f44336;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default function AppointmentBtn() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className="appointment-button" onClick={openModal}>
        Appointment
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <AppointmentModal closeModal={closeModal} />
        </div>
      )}

      <style jsx>{`
        .appointment-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 5px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

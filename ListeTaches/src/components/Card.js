import React, { useState, useEffect } from 'react';
import EditTaches from '../modals/EditTaches';

import { auth } from "../firebase";

const Card = ({ taskObj, index, deleteTaches, updateListArray, createdBy }) => {
  const [modal, setModal] = useState(false);
  

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTaches = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTaches(index);
  };

  // Fonction pour formater la date de manière lisible
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
  //afficher le nom 
  
  
  return (
    <div className='card-wrapper mr-5'>
      <div className='card-top' style={{ backgroundColor: colors[index % 5].primaryColor }}></div>
      <div className='task-holder'>
        <span className='card-header' style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>{taskObj.Name}</span>
        <hr style={{ color: colors[index % 5].secondaryColorColor}}></hr>
        <p className='mt-3'>{taskObj.Description}</p>
        <p className='bare1' >-----------------------------------------</p>
        <p className='date-creation'>date_Création: {formatDate(taskObj.creationDate)}</p> {/* Formatage de la date de création */}
        <p className='date-livraison'>date_Livraison:{taskObj.dueDate}</p> {/* Formatage de la date de livraison */}
        <span className='card-header' style={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: "10px" }}>
          {typeof createdBy === 'string' ? createdBy : ''}
        </span>
        <p className='bare2' >-----------------------------------------</p>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i className='far fa-edit m-3' style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}></i>
          <i className='fas fa-trash-alt ' style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }} onClick={handleDelete}></i>
        </div>
      </div>
      <EditTaches modal={modal} toggle={toggle} updateTaches={updateTaches} taskObj={taskObj} />
    </div>
  );
};

export default Card;
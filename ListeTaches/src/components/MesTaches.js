import React, { useEffect, useState } from 'react';
import CreateTaches from '../modals/CreateTaches.js';
import Card from './Card.js';

import Signup from './Signup/Signup.js';

export default function MesTaches(userName) {
  const [modal, setModal] = useState(false);
  const [tacheList, setTacheList] = useState([]);

  useEffect(() =>{ 
    let arr = localStorage.getItem("tacheList");
    
    if (arr) {
      let obj = JSON.parse(arr);
      setTacheList(obj);
    }
  }, []);

  const deleteTaches = (index) => {
    let tempList = [...tacheList];
    tempList.splice(index, 1);
    localStorage.setItem("tacheList", JSON.stringify(tempList));
    setTacheList(tempList);
  }

  const updateListArray = (obj, index) => {
    let tempList = [...tacheList];
    tempList[index] = obj;
    localStorage.setItem("tacheList", JSON.stringify(tempList));
    setTacheList(tempList);
  }

  const toggle = () => {
    setModal(!modal);
  }

  const saveTache = (taskObj) => {
    let tempList = [...tacheList];
    tempList.push({
      ...taskObj,
      creationDate: new Date(), // Date de création actuelle
      
    });
    localStorage.setItem("tacheList", JSON.stringify(tempList));
    setModal(false);
    setTacheList(tempList);
  }

  return (
    <>
      <div className='header text-center'>
        <h3>Liste des Taches</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Creer une tache</button>
      </div>

      <div className='tache-container'>
        {tacheList.map((obj, index) => (
          <Card
            key={index}
            taskObj={obj}
            index={index}
            deleteTaches={deleteTaches}
            updateListArray={updateListArray}
            createdBy={userName} // nom de l'utilisateur inscrit
          />
        ))}
      </div>

      <CreateTaches toggle={toggle} modal={modal} save={saveTache} />
    </>
  );
}
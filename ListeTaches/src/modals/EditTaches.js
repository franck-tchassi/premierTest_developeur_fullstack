import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTachesPopup = ({ modal, toggle, updateTaches, taskObj }) => {
  const [nomTache, setNomTache] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(''); // Ajout du state pour la date de livraison

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nomTache") {
      setNomTache(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "dueDate") {
      setDueDate(value); // Mise à jour de la date de livraison
    }
  }

  useEffect(() => {
    setNomTache(taskObj.Name);
    setDescription(taskObj.Description);
    setDueDate(taskObj.dueDate); // Initialisation de la date de livraison
  }, [taskObj]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {
      Name: nomTache,
      Description: description,
      dueDate: dueDate, // Ajout de la date de livraison dans l'objet
    };
    updateTaches(tempObj);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label>Nom de la Tache</label>
              <input type='text' className='form-control' value={nomTache} onChange={handleChange} name='nomTache' />
            </div>

            <div className='form-group'>
              <label>Description</label>
              <textarea rows="5" className='form-control' value={description} onChange={handleChange} name='description'></textarea>
            </div>

            <div className='form-group'>
              <label>Date de livraison</label>
              <input type='date' className='form-control' value={dueDate} onChange={handleChange} name='dueDate' />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTachesPopup;
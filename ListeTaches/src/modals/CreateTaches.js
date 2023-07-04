import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTachesPopup = ({ modal, toggle, save }) => {
  const [nomTache, setNomTache] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nomTache") {
      setNomTache(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "dueDate") {
      setDueDate(value);
    }
  };

  const handleSave = () => {
    let taskObj= {};
    taskObj["Name"] = nomTache;
    taskObj["Description"] = description;
    taskObj["dueDate"] = dueDate;
    save(taskObj);
    setNomTache('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label>Nom de la Tache</label>
              <input type='text' className='form-control' value={nomTache} onChange={handleChange} name='nomTache' />
            </div>

            <div className='form-group'>
              <label>Description</label>
              <textarea rows='5' className='form-control' value={description} onChange={handleChange} name='description'></textarea>
            </div>

            <div className='form-group'>
              <label>Date de livraison</label>
              <input type='text' className='form-control' value={dueDate} onChange={handleChange} name='dueDate' placeholder='jour/mois/année exemple: 01/06/2000' />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>Create</Button>
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTachesPopup;
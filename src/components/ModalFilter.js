
import { FilterField } from './filterField/FilterField';
import Modal from 'react-bootstrap/Modal';

export function ModalFilter({showFilter, handleFilter}) {


  return (
    <>
      <Modal show={showFilter} fullscreen={true} onHide={()=> handleFilter(false)} style={{background: "#2a0033"}}>
            <Modal.Body>
                <FilterField />
                <span className='close-btn' onClick={() => handleFilter(false)}>&times;</span>
            </Modal.Body>
        </Modal>
    </>
  );
}
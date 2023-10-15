import React from 'react'
import "./Test.css"
import { Link } from "react-router-dom"
import Modal from 'react-modal'
import { FormModal } from '~/components/FormModal';
import mint from '~/assets/mint.png'

export default function Test() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <>
       <div className="div-wrapper-screen">
          <div className="div">
            <div className="overlap">
              <div className="overlap-group">
                <p className="p">One Step Publish Your NFT</p>
                <img className="group" alt="Group" src="https://c.animaapp.com/bciClUIj/img/group-1430105087@2x.png" />
                <div className="overlap-wrapper">
                  <img className="vector" alt="Vector" src={mint} />
                </div>
              </div>
              <div className="text-wrapper-4">Manage your NFT conveniently</div>
              <div className="text-wrapper-5">Choose NFT Type</div>
            </div>
            <div className="overlap-8">
              <div className="text-wrapper-6">Ticket</div>
              <div className="text-wrapper-7">for attending your event</div>
              <img className="frame-2" alt="Frame" src="https://c.animaapp.com/bciClUIj/img/frame-3.svg" />
            </div>
            <div className="overlap-9">
              <p className="text-wrapper-8">As a commemoration of event</p>
              <div className="text-wrapper-9">Badge</div>
              <img className="frame-3" alt="Frame" src="https://c.animaapp.com/bciClUIj/img/frame-3.svg" />
            </div>
            <div className="overlap-10" onClick={openModal} style={{ cursor: 'pointer' }}>
              <div className="text-wrapper-10">Manage your membership benefits</div>
              <div className="text-wrapper-11">VIP Card</div>
              <img className="frame-4" alt="Frame" src="https://c.animaapp.com/bciClUIj/img/frame-1.svg" />
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-12">Already Published NFT?</div>
              <div className="group-12">
                <div className="overlap-12">
                  <Link to="/Manage"><div className="text-wrapper-13" style={{ cursor: 'pointer' }}>Manage NFT</div></Link> 
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            onRequestClose={closeModal}
          >
            <FormModal closeModal={closeModal}></FormModal>
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            {/* <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form> */}
          </Modal>
        </div>
      </>
  )
}

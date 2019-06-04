import React from "react";
import Modal from "react-bootstrap/Modal"


function instructionModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>Click on images you haven't clicked before to gain score</li>
                    <li>Game ends when you click on an image twice</li>
                </ul>
            </Modal.Body>
        </Modal>
    )
}

export default instructionModal
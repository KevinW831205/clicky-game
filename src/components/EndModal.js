import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


// import { Button, Icon } from 'react-materialize'


// const display = { display: "block" };
// const hide = { display: "none" };

// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             toggle: false
//         }
//     }

//     toggle(event) {
//         this.setState(prevState => ({ toggle: !prevState.toggle }));
//     }

//     render() {
//         var modal = [];
//         modal.push(
//             <div className="modal" style={this.state.toggle ? display : hide}>
//                 <div className="modal-content">
//                     <h4>Modal Header</h4>
//                     <p>A bunch of text</p>
//                 </div>
//                 <div className="modal-footer">
//                     <a className="btn" onClick={this.toggle}>Agree</a>
//                 </div>
//             </div>
//         );
//         return (
//             <div>
//                 <a className="btn" onClick={this.toggle}>Modal</a>
//                 {modal}
//             </div>
//         );
//     }

// }

// export default Modal;

function EndModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                 </Button>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

// class ModalRef extends React.Component {
//     constructor(props, context) {
//         super(props, context);

//         this.handleShow = this.handleShow.bind(this);
//         this.handleClose = this.handleClose.bind(this);

//         this.state = {
//             show: false,
//         };
//     }

//     handleClose() {
//         this.setState({ show: false });
//     }

//     handleShow() {
//         this.setState({ show: true });
//     }

//     render() {
//         return (
//             <>
//                 <Button variant="primary" onClick={this.handleShow}>
//                     Launch demo modal
//           </Button>

//                 <Modal show={this.state.show} onHide={this.handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Modal heading</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={this.handleClose}>
//                             Close
//               </Button>
//                         <Button variant="primary" onClick={this.handleClose}>
//                             Save Changes
//               </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </>
//         );
//     }
// }

export default EndModal
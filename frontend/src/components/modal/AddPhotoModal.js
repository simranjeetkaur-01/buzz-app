import { FaTimes } from "react-icons/fa";
import React, { useRef } from "react";
const AddPhotoModal = ({ openPostModal, closePhotoModal }) => {
  const inputFile = useRef(null);

  const onClick = (e) => {
    inputFile.current.click();
  };
  return (
    <div className="modal-container">
      <div className="modal-header">
        <div>Add your photos</div>
        <button className="close-button">
          <FaTimes onClick={closePhotoModal} className="closeIcon"></FaTimes>
        </button>
      </div>

      <div className="modal-body selectImagesBody">
        <input
          accept='image/jpeg,image/png'
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
        />
        <div className="selectImages" onClick={onClick}>
          <h5>Select images to share</h5>
        </div>
      </div>

      <div className="modal-footer">
        <div className="back-done">
          <button className="back-button" onClick={closePhotoModal}>
            Back
          </button>
          <button className="done-button">Done</button>
        </div>
      </div>
    </div>
  );
};

export default AddPhotoModal;

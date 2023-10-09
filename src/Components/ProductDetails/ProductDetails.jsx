import React, { useState, useEffect } from "react";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ isOpen, closeModal, data }) => {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isCancelMessageVisible, setIsCancelMessageVisible] = useState(false);

  useEffect(() => {
    let successTimer, cancelTimer;
    if (isSuccessMessageVisible) {
      successTimer = setTimeout(() => {
        setIsSuccessMessageVisible(false);
        closeModal();
      }, 2000);
    }

    if (isCancelMessageVisible) {
      cancelTimer = setTimeout(() => {
        setIsCancelMessageVisible(false);
        closeModal();
      }, 500);
    }

    return () => {
      clearTimeout(successTimer);
      clearTimeout(cancelTimer);
    };
  }, [isSuccessMessageVisible, isCancelMessageVisible, closeModal]);

  const handleBuyNowClick = () => {
    setIsSuccessMessageVisible(true);
  };

  const handleCancelClick = () => {
    setIsCancelMessageVisible(true);
  };

  const handleCloseSuccessMessage = () => {
    setIsSuccessMessageVisible(false);
    closeModal();
  };

  const handleCloseCancelMessage = () => {
    setIsCancelMessageVisible(false);
    closeModal();
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        {isSuccessMessageVisible && (
          <div className="message is-success">
            <div className="message-header">
              <p>Success</p>
              <button
                className="delete"
                aria-label="delete"
                onClick={handleCloseSuccessMessage}
              ></button>
            </div>
            <div className="message-body">New Car enlaen rich kids</div>
          </div>
        )}

        {isCancelMessageVisible && (
          <div className="message is-warning">
            <div className="message-header">
              <p>Cancelled</p>
              <button
                className="delete"
                aria-label="delete"
                onClick={handleCloseCancelMessage}
              ></button>
            </div>
            <div className="message-body">Joyboy enjoyer</div>
          </div>
        )}

        <header className="modal-card-head">
          <p className="modal-card-title">{data.Name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeModal}
          ></button>
        </header>

        <section className={`modal-card-body ${styles.customModalBody}`}>
          <img src={data.imgSrc} alt="Product" />
          <hr />
          <p className={styles.muri}>Details</p>
          <p className={styles.year}>{data.Year}</p>
          <p className={styles.price}>{data.Price}</p>
          <p className={styles.description}>
            <hr />
            <p className={styles.muri}>Description</p>
            {data.Description}
            <hr />
          </p>
          <p className={styles.muri}>Key Features</p>
          <ul className={styles.features}>
            <li>{data.Feat1}</li>
            <li>{data.Feat2}</li>
            <li>{data.Feat3}</li>
          </ul>
        </section>

        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleBuyNowClick}>
            Buy Now
          </button>
          <button className="button is-warning" onClick={handleCancelClick}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ProductDetails;

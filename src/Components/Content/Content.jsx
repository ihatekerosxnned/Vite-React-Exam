import React,{useState} from "react";
import styles from "./Content.module.css";
import { rvData } from "../../Database/Data";
import ProductDetails from "../ProductDetails/ProductDetails";

const Content = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        {rvData.map((data) => (
          <div className={`card ${styles.card}`} key={data.id}>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={data.imgSrc} alt="Product" />
              </figure>
            </div>
            <div className="card-content">
              <p className={`title ${styles.title}`}>{data.Name}</p>
              <p className="subtitle is-6">{data.Year}</p>
              <p className="subtitle is-">{data.Price}</p>
              <button
                className={styles.link}
                onClick={() => openModal(data)}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProductDetails
        isOpen={isModalOpen}
        closeModal={closeModal}
        data={modalData}
      />
    </>
  );
};

export default Content;

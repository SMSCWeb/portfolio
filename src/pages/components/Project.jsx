import { useState, useEffect } from "react";
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import ClearIcon from '@mui/icons-material/Clear';

import Image1 from "../assets/bg1.jpg";
import Image2 from "../assets/bg2.jpg";
import Image3 from "../assets/bg3.jpg";
import Image4 from "../assets/bg4.jpg";
import Image5 from "../assets/bg5.jpg";
import Image6 from "../assets/bg6.jpg";
import Link from "next/link";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Project = () => {
  const [modalImage, setModalImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [modalImage]);

  const openModal = (image) => {
    setLoading(true);
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (


    <div className="project-container">
      <div className="project-content">
        <div className="title">Our Work</div>
        <hr />
        <p className='hero-description service-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eligendi illo explicabo voluptatem sapiente distinctio vel quasi voluptatibus est, animi nesciunt, temporibus tempore, quidem autem expedita. Sequi obcaecati ex soluta!
        </p>
      </div>

      <div className="gallery">
        <div className="grid">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <div className="grid-item-inner" onClick={() => openModal(image)}>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          ))}
          <div>
              <Link href="/">
                <button className='service-theme-btn btn-style-three'>
                  See All Work
                </button>
              </Link>
            </div>
        </div>


        {modalImage && (
          <div className="modal">
            <span className="close-button" onClick={closeModal}>
              <ClearIcon sx={{ fontSize: 40 }} />
            </span>
            {loading ? (
              <div className="loader">
                <CircularProgress />
              </div>
            ) : (
              <Image src={modalImage} alt="Modal Image" width={800} height={600} />
            )}
          </div>
        )}

        <style jsx>{`
          .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .grid-item {
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          .grid-item-inner::after {
            content: "";
            display: block;
            position: absolute;
            top: 3px;
            bottom: -33px;
            left: 0px;
            width: 108%;
            clip-path: polygon(0 0, 102% 102%, 0 102%);
            background: #d7a44959;
            transition: all 400ms ease;
            transform: scale(0);
            transform-origin: bottom left;
          }

          .grid-item-inner:hover::after {
            transform: scale(1);
          }

          .modal {
            position: fixed;
            top: 35px;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.9);
            z-index: 999;
          }

          .modal img {
            max-width: 100%;
            max-height: 100%;
          }

          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }

          .close-button {
            position: absolute;
            top: 39px;
            right: 12rem;
            font-size: 50px !important;
            cursor: pointer;
            color: white;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Project;

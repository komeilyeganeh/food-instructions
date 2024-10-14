"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export const ImagePicker = ({ label, name }) => {
  const [pickeImage, setPickImage] = useState('');
  const imageRef = useRef();
  function handlePickClick() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickeImage && <p>No image picked yet.</p>}
          {pickeImage && <Image src={pickeImage} alt="image" fill/>}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/jpeg, image/png"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

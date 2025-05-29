import PhotoCard from "../PhotoCard/PhotoCard";
import style from "./PhotoGallery.module.css";

const PhotoGallery = ({ photos, openModal }) => {
  return (
    <ul className={style.container}>
      {photos.map((photo) => (
        <li className={style.item} key={photo.id}>
          <PhotoCard photo={photo} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoGallery;

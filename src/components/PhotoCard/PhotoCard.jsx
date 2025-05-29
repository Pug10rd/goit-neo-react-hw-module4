import style from "./PhotoCard.module.css";

const PhotoCard = ({ photo, openModal }) => (
  <div>
    <img
      className={style.image}
      src={photo.urls.small}
      alt={photo.alt_description}
      onClick={() => openModal(photo)}
    />
  </div>
);

export default PhotoCard;

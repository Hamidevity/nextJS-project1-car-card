import Calender from '../icons/Calender';
import Company from '../icons/Company';
import Location from '../icons/Location';
import Model from '../icons/Model';
import Money from '../icons/Money';
import Road from '../icons/Road';
import styles from './carDetails.module.css';
function CarDetails(props) {
    const {id , name , modle , year , distance , location , image , price , description} = props;
  return (
    <div className={styles.container}>
        <img src={image} className={styles.image}/>
        <h3 className={styles.header}>{name} {modle}</h3>
        <div className={styles.details}>
            <div>
                <Company/>
                <p>Company</p>
                <span>{name}</span>
            </div>
            <div>
                <Location/>
                <p>Location</p>
                <span>{location}</span>
            </div>
            <div>
                <Model/>
                <p>Model</p>
                <span>{modle}</span>
            </div>
            <div>
                <Calender/>
                <p>First time</p>
                <span>{year}</span>
            </div>
            <div>
                <Road/>
                <p>kms</p>
                <span>{distance}</span>
            </div>
        </div>
        <div className={styles.details}>
            <div>
                <Location/>
                <p>Location</p>
                <span>{location}</span>
            </div>
        </div>
        <div className={styles.details}>
            <p className={styles.descriptionTitle}>Information</p>
            <p className={styles.descriptionTitle}>{description}</p>
        </div>
        <div className={styles.details}>
            <div className={styles.price}>
                <Money/>
                <p>{price}</p>
                <span>{price}</span>
            </div>
        </div>
        <button className={styles.button}>buy </button>
    </div>
  );
}

export default CarDetails
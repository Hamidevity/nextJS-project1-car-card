import styles from './card.module.css';
import Location from '../icons/Location';
import Link from 'next/link';
function Card(props) {

    const {id , name , modle , year , distance , location , image , price} = props;



  return (
      <div>
        <Link href={`/cars/${id}`}>
             <img src={image} className={styles.image}/>
             <h4 className={styles.title}>{`${name} ${modle}`}</h4>
             <p className={styles.detail}>{`${year} ${distance}km`}</p>
             <div className={styles.footer}>
             <p>$ {price}</p>
             <div className={styles.location}>
            <p>{location}</p>
            <Location/>
            </div>
            </div>
       </Link>
    </div>
  )
}

export default Card;

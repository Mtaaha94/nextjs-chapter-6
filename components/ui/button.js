import Link from 'next/link';
import styles from './button.module.css'


function Button(props) {
    return (
        <Link href={props.link} className={styles.btn} >
            {/* <a className={styles.btn}>
            {props.children}
            </a> */}
            {props.children}
            
        </Link>
    )
}


export default Button
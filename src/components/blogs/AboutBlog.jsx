import styles from './AboutBlog.module.css';
import Card from "../ui/Card";

const AboutBlog=(props)=>{
    return (
      <li>
        <Card>
          <div className={styles.content}>
            <div>
              <h3>Telephone: {props.phoneNumber}</h3>
            </div>
            <div>
              <h3>E-mail: {props.email}</h3>
            </div>
          </div>
        </Card>
      </li>
    );
}

export default AboutBlog;
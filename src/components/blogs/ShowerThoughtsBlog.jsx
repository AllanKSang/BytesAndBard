import styles from "./ShowerThoughtsBlog.module.css";
import Card from "../ui/Card";

const ShowerThoughtsBlog = (props) => {
  return (
    <>
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <p>
              This is my first shower thought. Most of my ideas--brilliant and
              otherwise--come to me when I'm taking a hot shower.
            </p>
          </div>
        </Card>
      </li>
      <br />
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <p>This is my second shower thought.</p>
          </div>
        </Card>
      </li>
      <br />
    </>
  );
};

export default ShowerThoughtsBlog;

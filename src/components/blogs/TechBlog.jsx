import Card from "../ui/Card";
import styles from "./TechBlog.module.css";
const TechBlog = (props) => {
  return (
    <>
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <p>
              This is my first tech blog. I share my coding experience here.
            </p>
          </div>
        </Card>
      </li>
      <br />
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <p>
              This is my second tech blog. I share my favorite technology here.
            </p>
          </div>
        </Card>
      </li>
      <br />
    </>
  );
};

export default TechBlog;

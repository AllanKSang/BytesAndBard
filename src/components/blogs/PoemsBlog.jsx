import styles from "./PoemsBlog.module.css";
import Card from "../ui/Card";
import PoemsDB from "../database/firebase/PoemsDB";

const PoemsBlog = (props) => {
  return (
    <>
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <p>
              This is my first rhyme: Rhythm is a dancer, but Pen is a writer.
            </p>
          </div>
        </Card>
      </li>
      <br />
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <p>This is my second poem, I feel right at home.</p>
          </div>
        </Card>
      </li>
      <br />
      <li>
        <Card>
          <PoemsDB />
        </Card>
      </li>
    </>
  );
};

export default PoemsBlog;

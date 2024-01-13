import styles from "./JokesBlog.module.css";
import Card from "../ui/Card";

const JokesBlog = (props) => {
  return (
    <>
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <h3>puns</h3>
            <h4>06/01/2024</h4>
            <p>1. Wooden spoons are so cheap... Ni mbao tu.</p>
            <p>
              2. I got a new job cleaning mirrors. I can see myself doing it.
            </p>
          </div>
        </Card>
      </li>
      <br />
      <li>
        <Card>
          <div className={styles.content}>
            <h3>{props.category}</h3>
            <h3>puns</h3>
            <h4>05/01/2024</h4>
            <p>1. Why did the chicken cross the road?
              To say hello from the other side.
            </p>
            <p>2. Knock knock!
                    who's there?
                  The chicken from earlier.
            </p>
          </div>
        </Card>
      </li>
    </>
  );
};

export default JokesBlog;

import styles from "./App.module.css";
import Display from "./container/Display";
import ButtonsContainer from "./container/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;

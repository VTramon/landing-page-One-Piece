import styles from './style.module.scss';

type SideBarProps = {
  CallbackFunction: (value: string) => void;
};

const SideBar: React.FC<SideBarProps> = ({ CallbackFunction }) => {
  return (
    <div className={styles.sideBar}>
      <ul data-testid="list" className={styles.list}>
        <li
          data-testid="button"
          onClick={() => CallbackFunction('Monkey D. Luffy')}
        >
          Luffy
        </li>
        <li onClick={() => CallbackFunction('Roronoa Zoro')}>Zoro</li>
        <li onClick={() => CallbackFunction('Nami')}>Nami</li>
        <li onClick={() => CallbackFunction('Usopp')}>Usopp</li>
        <li onClick={() => CallbackFunction('Vinsmoke Sanji')}>Sanji</li>
        <li onClick={() => CallbackFunction('Chopper')}>Chopper</li>
        <li onClick={() => CallbackFunction('Nico Robin')}>Robin</li>
        <li onClick={() => CallbackFunction('Franky')}>Franky</li>
        <li onClick={() => CallbackFunction('Brook')}>Brook</li>
        <li onClick={() => CallbackFunction('Jinbe')}>Jinbe</li>
      </ul>
    </div>
  );
};

export { SideBar };

import styles from './style.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <ul className={styles.list}>
        <li>Luffy</li>
        <li>Zoro</li>
        <li>Nami</li>
        <li>Usopp</li>
        <li>Sanji</li>
        <li>Chopper</li>
        <li>Robin</li>
        <li>Franky</li>
        <li>Brook</li>
        <li>Jinbe</li>
      </ul>
    </div>
  );
};

export { SideBar };

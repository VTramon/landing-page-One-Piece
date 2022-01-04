import styles from './style.module.scss';

import { CharacterImage } from '../CharacterImage';
import { CharacterInformation } from '../CharacterInformation';

type ContentProps = {
  value?: string;
};

const Content: React.FC<ContentProps> = ({ value }) => {
  return (
    <div className={styles.content}>
      <div className={styles.characterInformation}>
        <h1>{value}</h1>
        <CharacterInformation character={value} />
      </div>
      {!!value ? <CharacterImage value={value} /> : null}
    </div>
  );
};

export { Content };

import styles from './style.module.scss';

import { CharacterImage } from '../CharacterImage';
import { CharacterInformation } from '../CharacterInformation';

type ContentProps = {
  value?: string;
};

const Content: React.FC<ContentProps> = ({ value }) => {
  return (
    <div className={styles.content}>
      <div>
        <h1>{value}</h1>
        <CharacterInformation character={value} />
      </div>
      {!!value && value === 'Luffy' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Usopp' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Zoro' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Nami' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Brook' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Chopper' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Franky' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Jinbe' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Robin' ? (
        <CharacterImage value={value} />
      ) : !!value && value === 'Sanji' ? (
        <CharacterImage value={value} />
      ) : null}
    </div>
  );
};

export { Content };

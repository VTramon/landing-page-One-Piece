import styles from './style.module.scss';
import Luffy from '../../pictures/Luffy.png';
import Usopp from '../../pictures/Usopp.png';
import Zoro from '../../pictures/Zoro.png';
import Nami from '../../pictures/Nami.png';
import Brook from '../../pictures/Brook.png';
import Chopper from '../../pictures/Chopper.png';
import Franky from '../../pictures/Franky.png';
import Jinbe from '../../pictures/Jinbe.png';
import Robin from '../../pictures/Robin.png';
import Sanji from '../../pictures/Sanji.png';

type CharacterImageProps = {
  value?: string;
};

const CharacterImage: React.FC<CharacterImageProps> = ({ value }) => {
  const CharacterImageSelector = (value?: string) => {
    if (value === 'Monkey D. Luffy') {
      return Luffy;
    } else if (value === 'Roronoa Zoro') {
      return Zoro;
    } else if (value === 'Nami') {
      return Nami;
    } else if (value === 'Usopp') {
      return Usopp;
    } else if (value === 'Vinsmoke Sanji') {
      return Sanji;
    } else if (value === 'Chopper') {
      return Chopper;
    } else if (value === 'Franky') {
      return Franky;
    } else if (value === 'Nico Robin') {
      return Robin;
    } else if (value === 'Brook') {
      return Brook;
    } else if (value === 'Jinbe') {
      return Jinbe;
    }
  };

  return (
    <img
      data-testid="characterImage"
      src={CharacterImageSelector(value)}
      alt={value}
      className={styles.image}
    />
  );
};

export { CharacterImage };

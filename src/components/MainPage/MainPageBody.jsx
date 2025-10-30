import Promo from './Promo';
import Slider from './Slider';
import ManCheck from './ManCheck';
import OurTarrifs from './OurTarrifs';
import { observer } from 'mobx-react-lite';

const MainPage = observer(() => {
  return (
    <>
      <Promo />
      <Slider />
      <ManCheck />
      <OurTarrifs />
    </>
  );
});

export default MainPage;

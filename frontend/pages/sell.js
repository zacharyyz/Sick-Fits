import CreateItem from '../components/CreateItem';
import Auth from '../components/Auth';

const Sell = props => (
  <div>
    <Auth>
      <CreateItem />
    </Auth>
  </div>
);

export default Sell;

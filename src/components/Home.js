import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-content'>
        <p className='home-super-important-disclaimer'>{`This isn't a real shop, but it's still sorta neat.`}</p>
        <Link to='/shop'>Go To Shop</Link>
      </div>
    </div>
  );
};

export default Home;

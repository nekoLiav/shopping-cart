import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='page-header-text'>Home</h1>
      <div className='home-content'>
        <p className='home-super-important-disclaimer'>{`This isn't a real shop, but it's still sorta neat.`}</p>
        <Link to='/shop'>Go To Shop</Link>
      </div>
    </div>
  );
};

export default Home;

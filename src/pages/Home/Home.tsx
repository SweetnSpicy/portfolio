import { Link } from 'react-router-dom';
import fredlogo from '@assets/FredLogo.png';
import caullylogo from '@assets/CaullyLogo.png';
import { useUser } from '../../contexts/UserContext';

const Home = () => {
    const { setUserName } = useUser();

  return (
    <div className="splash">
      {/* <a href="https://github.com/sweetnspicy" target="_blank">
        <img src={caullylogo} className="logo caully" alt="Cauldierre's logo" />
      </a> */}
      <div className="cards-container">
        <div className="card">
          {/* add onclick to shift pages */}
          <h1 className="text-forest">Cauldierre McKay</h1>
          <h2 className="text-forest">Software Developer</h2>
          <p className="text-forest">5+ years of fullstack development experience</p>
        </div>
        <div className="card">
          <h1 className="text-forest">Frederic Yao</h1>
          <h2 className="text-forest">CS Kid</h2>
          <p className="text-forest">Something about CS kids</p>
        </div>
      </div>
      {/* <a href="https://github.com/frederic-yao" target="_blank">
        <img src={fredlogo} className="logo fred" alt="Fred's logo" />
      </a> */}

{/*testing*/}
      <div className="text-terracotta flex justify-center mt-60">
        <p>
          We just two guys working on this site so we can make big money pls
          and thank you hire us google and give us like 200k pls and ty
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-8">
        <Link to="/caullyhome" onClick={() => setUserName('caully')} className="bg-terracotta text-cream px-6 py-3 rounded">
          Caully
        </Link>
        <Link to="/fredhome" onClick={() => setUserName('fred')} className="bg-terracotta text-cream px-6 py-3 rounded">
          Fred
        </Link>
      </div>
    </div>
  );
}

export default Home;
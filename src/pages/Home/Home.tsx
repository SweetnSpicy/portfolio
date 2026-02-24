import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import PaperAirplane from '../../components/PaperAirplane';
import CaullyLogo from '@assets/CaullyLogo.png';
import FredLogo from '@assets/FredLogo.png';

const Home = () => {
  const { setUserName } = useUser();
  const [triggerFlight, setTriggerFlight] = useState(false);
  const [flightDirection, setFlightDirection] = useState('left');
  const navigate = useNavigate();

  const handleClick = (user, page) => {
    setUserName(user);
    setFlightDirection(user === 'caully' ? 'left' : 'right');
    setTriggerFlight(true);

    setTimeout(() => navigate(page), 2000);
  };

  const Card = ({ name, title, desc }) => (
    <div className="card">
      <h1 className="text-forest">{name}</h1>
      <h2 className="text-forest">{title}</h2>
      <p className="text-forest">{desc}</p>
    </div>
  );

  const Button = ({ user, page, label }) => (
    <button onClick={() => handleClick(user, page)} className="bg-terracotta text-cream px-6 py-3 rounded">
      {label}
    </button>
  );

  return (
    <div className="splash">
      <div className="cards-container">
        <Card name="Sweetn'Spicy" title="Software Developer" desc="5+ years of fullstack development experience" />
        <Card name="Frederson" title="CS Kid" desc="Something about CS kids" />
      </div>

      <p className="text-terracotta flex justify-center mt-60">
        We just two guys working on this site so we can make big money pls and thank you hire us google and give us like 200k pls and ty
      </p>

      {/* <PaperAirplane imageSrc={CaullyLogo} trigger={triggerFlight} direction={flightDirection} /> */}

      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-8">
        <Button user="caully" page="/caully" label="Caully (add animation)" />
        <Button user="fred" page="/fred" label="Fred (add animation)" />
      </div>
    </div>
  );
}

export default Home;
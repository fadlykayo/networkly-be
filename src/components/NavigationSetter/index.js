import { History } from 'helpers';
import { useNavigate } from 'react-router-dom';

const NavigationSetter = () => {
	History.navigate = useNavigate();
	return null;
};

export default NavigationSetter;
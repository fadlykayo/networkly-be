import { NavigationHelper } from 'helpers';
import { useNavigate } from 'react-router-dom';

const NavigationSetter = () => {
	NavigationHelper.navigate = useNavigate();
	return null;
};

export default NavigationSetter;
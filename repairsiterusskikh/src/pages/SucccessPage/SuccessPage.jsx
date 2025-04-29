import './SuccessPage.css'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Line from '../../components/Line/Line';

export default function SuccessPage() {
	return (
	  <div className="success-page">
		<Header></Header>
		<Link to="/" className="back-button">Назад</Link>
		 <h1>Успешно!</h1>
		 <Line></Line>
		 <p>Мы свяжемся с вами в ближайшее время</p>
	  </div>
	);
 }
import './Button.css'
import { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';

export default function Button({children, className = "", style = {} }) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return ( 
	<>
		<button onClick={() => setIsModalOpen(true)} className={`Btn ${className}`}
		style={style}>{children}</button>
		{isModalOpen && <ModalForm onClose={() => setIsModalOpen(false)} />}
	</>
	);
}
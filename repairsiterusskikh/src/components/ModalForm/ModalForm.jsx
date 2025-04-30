import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Line from '../Line/Line';
import './ModalForm.css';

// Схема валидации
const formSchema = z.object({
  firstName: z.string()
    .min(2, { message: 'Минимум 2 символа' })
    .max(50, { message: 'Максимум 50 символов' })
    .regex(/^[а-яА-ЯёЁ\s-]+$/, { message: 'Только русские буквы' }),
  lastName: z.string()
    .min(2, { message: 'Минимум 2 символа' })
    .max(50, { message: 'Максимум 50 символов' })
    .regex(/^[а-яА-ЯёЁ\s-]+$/, { message: 'Только русские буквы' }),
  email: z.string()
    .email({ message: 'Некорректный email' })
    .min(5, { message: 'Минимум 5 символов' }),
  phone: z.string()
    .min(11, { message: 'Некорректный номер' })
    .regex(/^\+7\d{10}$/, { message: 'Формат: +7XXXXXXXXXX' }),
  serviceType: z.string()
});

export default function ModalForm({ onClose }) {
	// const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
   //  watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: 'Капитальный ремонт',
      phone: '+7'
    }
  });

  const onSubmit = (data) => {
    console.log('Форма отправлена:', data);
    onClose();
	//  navigate('/success');
  };

  // Автоматическое добавление +7 для телефона
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith('+7')) {
      value = '+7' + value.replace(/\D/g, '').slice(0, 10);
    } else {
      value = '+7' + value.slice(2).replace(/\D/g, '').slice(0, 10);
    }
    setValue('phone', value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0001 15.879L25.4251 8.45399L27.5461 10.575L20.1211 18L27.5461 25.425L25.4251 27.546L18.0001 20.121L10.5751 27.546L8.4541 25.425L15.8791 18L8.4541 10.575L10.5751 8.45399L18.0001 15.879Z" fill="#848386"/>
          </svg>
        </button>
        
        <h2 className='h2Modal'>Оформить заявку</h2>
        
        <Line className="modal-line" />
        
        <form onSubmit={handleSubmit(onSubmit)}>
		  <div className="Gap firstName">
  <label>Имя</label>
  <input
    {...register('firstName')}
    className={errors.firstName ? 'error' : ''}
  />
  {errors.firstName && (
    <p className="error-message">{errors.firstName.message}</p>
  )}
</div>

<div className="Gap lastName">
  <label>Фамилия</label>
  <input
    {...register('lastName')}
    className={errors.lastName ? 'error' : ''}
  />
  {errors.lastName && (
    <p className="error-message">{errors.lastName.message}</p>
  )}
</div>

<div className="Gap Email">
  <label>E-mail (Почта)</label>
  <input
    type="email"
    {...register('email')}
    className={errors.email ? 'error' : ''}
  />
  {errors.email && (
    <p className="error-message">{errors.email.message}</p>
  )}
</div>

<div className="Gap phoneNumber">
  <label>Номер телефона</label>
  <input
    type="tel"
    {...register('phone')}
    onChange={handlePhoneChange}
    className={errors.phone ? 'error' : ''}
  />
  {errors.phone && (
    <p className="error-message">{errors.phone.message}</p>
  )}
</div>

          <div className="Gap form-group">
            <label>Тип услуги</label>
            <select
              {...register('serviceType')}
              className="service-select"
            >
              <option value="Капитальный ремонт">Капитальный ремонт</option>
              <option value="Офисный ремонт">Офисный ремонт</option>
              <option value="Черновой ремонт">Черновой ремонт</option>
            </select>
          </div>
          
          <div className="consent-text">
            Нажимая кнопку "Отправить" вы даете согласие на обработку персональных данных
          </div>
          
          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
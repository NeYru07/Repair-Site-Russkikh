import { useState } from 'react';
// import Line from '../Line/Line';

export default function WorksFilter() {
  const [activeFilter, setActiveFilter] = useState(0); // 0 - первый элемент активен
  
  const works = [
    { 
      name: "Капитальный ремонт", 
      image: "capitalRepair.png" 
    },
    { 
      name: "Офисный ремонт", 
      image: "officeRepair.png" 
    },
    { 
      name: "Черновой ремонт", 
      image: "blackRepair.png" 
    }
  ];

  const handlePrev = () => {
    setActiveFilter(prev => (prev > 0 ? prev - 1 : works.length - 1));
  };

  const handleNext = () => {
    setActiveFilter(prev => (prev < works.length - 1 ? prev + 1 : 0));
  };

  return (
    <>
      
      <span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0L18 9L9 18L0 9L9 0Z" fill="#0A0A0A"/>
        </svg>
        <p>Виды работ</p>
      </span>

      <div className="switch-buttons">
        <button className='switch-left' onClick={handlePrev}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.328 11.5L13.692 6.13605L12.278 4.72205L4.5 12.5L12.278 20.278L13.692 18.864L8.328 13.5H20.5V11.5H8.328Z" fill="#848386"/>
          </svg>
        </button>
        <button className='switch-right' onClick={handleNext}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.672 11.5L11.308 6.13605L12.722 4.72205L20.5 12.5L12.722 20.278L11.308 18.864L16.672 13.5H4.5V11.5H16.672Z" fill="#848386"/>
          </svg>
        </button>
      </div>

      <div className="work">
        {works.map((work, index) => (
          <div 
            key={index} 
            className="types-of-works"
            style={{ 
              filter: activeFilter === index ? 'none' : 'grayscale(100%)',
              opacity: activeFilter === index ? 1 : 0.7
            }}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/${work.image}`} 
              alt={work.name} 
            />
            <p>{work.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
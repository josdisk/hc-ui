import React from 'react';

interface UserCardProps {
  avatar: string;
  firstname: string;
  lastname: string;
  description: string;
  onViewMore: () => void;
}


const UserCard: React.FC<UserCardProps> = ({ avatar, firstname, lastname, description, onViewMore }) => (

  <div className="slide-container swiper">
    <div className="slide-content">
      <div className="card-wrapper swiper-wrapper">
        <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img src={avatar} alt={`${firstname} ${lastname}`} className="card-img" />
              </div>
            </div>

            <div className="card-content">
              <h2 className="name">{`${firstname} ${lastname}`}</h2>
              <p className="description">{ description.substr(0,100) + '...' }</p>

              <button onClick={onViewMore} className="button">View More</button>
            </div>
          </div>
      </div>
    </div>
  </div>


  /* <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={avatar} alt={`${firstname} ${lastname}`} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{`${firstname} ${lastname}`}</div>
      <div className="text-xl mb-2">{ description.substr(0,100) + '...' }</div>
      <button onClick={onViewMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View More
      </button>
    </div>
  </div> */
);

export default UserCard;
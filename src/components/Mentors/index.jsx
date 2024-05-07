import clsx from 'clsx';
import AdamsGeeky from '@site/static/img/AdamsGeeky.png';

const MentorList = [
  {
  
    pic: AdamsGeeky,
    name: 'Adamu M. Muhammad',
    subtitle: 'DevOps | Backend Mentor | Lead ',
  }
    // {
    //   pic: mufteem,
    //   name: 'Bello Ibrahim',
    //   subtitle: 'UI/UX Designer | frontend Mentor',

    // },
    // {
    
    //   pic: muby,
    //   name: 'Mubarak Ibrahim',
    //   subtitle: 'Graphic Designer | Frontend Mentor ',

    // }
  ];
  

const Mentor = ({pic , name, subtitle, twitterHandle}) => {

    return (
      <div className={clsx('col col-demo')}>
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src={pic}
            alt="Mentor Avatar"
          />
          <div className="avatar__intro">
            <div className="avatar__name">{name}</div>
            <small className="avatar__subtitle">
              {subtitle}
              @ GDSC GSU
            </small>
          </div>
        </div>
      </div>
    );
  };  
export default function Mentors() {
  return (
<section>
<div className="container">
<div className="row">
  {MentorList.map((props, idx) => (
    <Mentor key={idx} {...props} />
  ))}
</div>
</div>
</section>
  );
}
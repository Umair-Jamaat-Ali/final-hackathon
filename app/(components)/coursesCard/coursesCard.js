import Image from 'next/image'
import "./coursesCard.css";

export default function CoursesCard(props) {
  return (
    <>
      <div className="coursesCard h-64 flex items-center justify-center flex-col">
        <Image src={props.src} width={'90'} />
        
        <h2>{props.heading}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, aut?
        </p>
      </div>
    </>
  );
}

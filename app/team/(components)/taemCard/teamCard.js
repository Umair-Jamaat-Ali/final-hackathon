import Image from 'next/image';
import './teamCard.css'

export default function TeamCard(props) {
  return (
    <>
      <div className="teamCard">
        <Image
          className="bg-gray-400"
          src={props.src}
        />
      </div>
        <div className="m-auto w-48 flex items-center flex-col">
          <h3 className="font-bold text-lg">{props.heading}</h3>
          <p className="text-sm">{props.skill}</p>
        </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import "./navbar.css";
import AppointmentBtn from "../AppointmentBtn/AppointmentBtn";

export default function Navbar() {
  return (
    <>
      <div className="flex pt-5 flex-wrap justify-around items-center h-16 bg-transparent text-white">
        <Image
          src="/assets/Logo_1.png"
          width={200}
          height={150}
          alt="Picture of the author"
        />

        <nav className="flex">
          <ul className="flex flex-wrap justify-center my-2 space-x-5">
            <li>
              <Link href={"/"}> HOME </Link>
            </li>

            <li>
              <Link href={"/about"}>ABOUT</Link>
            </li>

            <li>
              <Link href={"/servicess"}>SERVICES</Link>
            </li>
            <li>
              <Link href={"/blog"}>BLOG</Link>
            </li>

            <li>
              <Link href={"/team"}>OUR TEAM</Link>
            </li>

            <li>
              <Link href={"/price"}>PRICES</Link>
            </li>
            <li>
              <Link href={"/admin"}>Check Appointments</Link>
            </li>
          </ul>
        </nav>

        <AppointmentBtn title="Appointment" />
      </div>
    </>
  );
}

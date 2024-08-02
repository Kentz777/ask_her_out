import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="container">
      <div>
        <h1 className="header_text">Hi navvss kita tayo bukas???</h1>
        <h1 className="header_text">Hehehe simge naa :D</h1>
      </div>
      <div className="gif_container">
        <Image
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
          width={300}
          height={300}
          alt="Cute animated illustration"
          unoptimized
        />
      </div>
      <div className="buttons">
        <Link href="/yes">
          <button className="btn" id="yesButton">Yes</button>
        </Link>
        <Link href="/no">
          <button className="btn" id="noButton">No</button>
        </Link>
      </div>
    </div>
  );
}

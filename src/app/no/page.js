import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
            <div >
                <h1 className = "header_text">Ay sige, salamat nalang</h1>
            </div>
            <div class="gif_container">
                <Image src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzVvdDRpZnFoMngya2N1dTNjcGFvcHJ1NHlrZDA5OHR3d2doMG9qMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lPM06f2zvk94jBAzlP/giphy.webp"
                 width={300}
                 height={300}
                 unoptimized
                alt="Cute animated illustration"/>
            </div>
            <div className="buttons">
        <Link href="/">
          <button className="btn" id="yesButton">Back 2 Home</button>
        </Link>
      </div>
        </div>
  )
}

export default page

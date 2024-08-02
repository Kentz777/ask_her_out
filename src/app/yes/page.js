import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
            <div >
                <h1 className = "header_text">Hurrayyyy!!</h1>
            </div>
            <div class="gif_container">
                <Image src="https://media0.giphy.com/media/T86i6yDyOYz7J6dPhf/giphy.gif"
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

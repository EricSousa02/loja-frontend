import "./Card.css"
import Image from 'next/image'
export default function Card(){
    return ( 
        <div className="card">
            <Image
                className="card_image"
                src={"/assets/homeImages/casual-image.jpg"}
                width={1000}
                height={1000}
                alt={"woman purple outfit"}
            />
        </div>
    )
}
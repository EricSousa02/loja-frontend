import "./Card.css";
import Image from 'next/image';

interface CardProps {
    productImage: string;
    productName: string;
    productPrice: number;
}

export default function Card(props: CardProps) {
    return (
        <div className="card">
            <Image
                className="card_image"
                src={props.productImage}
                width={1000}
                height={1000}
                alt="woman purple outfit"
            />
            <div className="card_details">
                <h3>{props.productName}</h3>
                <span>{props.productPrice}$</span>
            </div>
        </div>
    );
}

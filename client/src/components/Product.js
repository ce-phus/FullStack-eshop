import React from 'react'
import { Card } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';



const Product = ({product}) => {
    
  return (
    <div>
        <Card>
            <Card.Body>
                <Link href={`/product/${product.id}`}>
                    {/* <Image src={product.image} alt='product images' width='100' height='100'/> */}
                    <Card.Img variant='top' src={product.image_field} height='162'/>
                </Link>
                <Link href={`/product/${product.id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="h3">
                        KSH {product.price}
                    </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product
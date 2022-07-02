import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {
    const items = useSelector((state: any) => state.cart);
    return (
        <React.Fragment>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <span className="logo">Redux Store From Toolkit</span>
                <div>
                    <Link className="navLink" to="/">Home </Link>
                    <Link className="navLink" to="/cart">Cart </Link>
                    <span className="cartCount">
                        Cart Item : {items.length}
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}

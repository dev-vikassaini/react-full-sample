import React from 'react'
import Products from '../../components/products/Products';

function Home() {
    return (
        <React.Fragment>
            <h2 className="heading">
                Welcome to the Redux toolkit store tutorial
            </h2>
            <section>
                <Products />
            </section>
        </React.Fragment>
    )
}

export default Home;
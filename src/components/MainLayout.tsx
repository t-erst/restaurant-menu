import Head from 'next/head'
import React from 'react'

interface Props {
    children: string | JSX.Element
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Online ordering</title>
                <meta name="description" content="Restaurant online ordering app" />
                <meta name="keywords" content="online ordering, restaurant, menu, bowls, salads, specialties, breakfast, Açaí bowls, bagels, soups, shakes, smoothies, fresh Juices, kids food, kids drinks, sides, sauces, cooler drinks, fridge essentials" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex flex-col'>
                {children}
            </main>
        </>
    )
}

export default MainLayout
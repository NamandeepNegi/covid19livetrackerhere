import React, { useEffect, useState } from 'react'

const Indialive = () => {

    const [data, setData] = useState([])


    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json')
            const actualData = await res.json()
            console.log(actualData)
            setData(actualData.statewise[0])
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCovidData()
    }, [])
    return (
        <>
            <h4 className='heading1'>🔴LIVE</h4>
            <h1 className='heading2'>COVID-19 LIVE TRACKER</h1>
            <ul className='container1'>
                <li className='card card_1'>

                    <p className='card_align'>OUR COUNTRY</p>
                    <p className='card_align card_small'>INDIA</p>

                </li>
                <li className='card card_2'>
                    <p className='card_align'>TOTAL RECOVERED</p>
                    <p className='card_align card_small'>{data.recovered}</p>
                </li>
                <li className='card card_3'>

                    <p className='card_align'>TOTAL  CONFIRMED</p>
                    <p className='card_align card_small'>{data.confirmed}</p>

                </li>
                <li className='card card_4'>

                    <p className='card_align'>TOTAL  DEATH</p>
                    <p className='card_align card_small'>{data.deaths}</p>

                </li>
                <li className='card card_5'>

                    <p className='card_align'>TOTAL ACTIVE</p>
                    <p className='card_align card_small'>{data.active}</p>

                </li>
                <li className='card card_6'>

                    <p className='card_align'>LAST UPDATED</p>
                    <p className='card_align card_small'>{data.lastupdatedtime}</p>

                </li>

            </ul>
        </>
    )
}
export default Indialive
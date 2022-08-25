import React, { useEffect, useState } from 'react'
const Stateslive = () => {

    const [data, setData] = useState([])


    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json')
        const actualData = await res.json()
        console.log(actualData.statewise)
        setData(actualData.statewise)
    }

    useEffect(() => {
        getCovidData()
    }, [])

    return (
        <>
            <h1 className='heading3'>INDIA STATES 🔴LIVE COVID-19</h1>
            <table className='maintable'>
                <thead className='tablehead'>
                    <tr>
                        <th>STATE</th>
                        <th>CONFIRMED</th>
                        <th>RECOVERED</th>
                        <th>DEATHS</th>
                        <th>ACTIVE</th>
                        <th>UPDATED</th>
                    </tr>
                </thead>
                <tbody className='tablebody'>
                    {data.map((currElem, index) => {
                        return (
                            <tr className='table_row'>
                                <td>{currElem.state}</td>
                                <td className='confirmed'>{currElem.confirmed}</td>
                                <td className='recovered'>{currElem.recovered}</td>
                                <td className='deaths'>{currElem.deaths}</td>
                                <td className='active'>{currElem.active}</td>
                                <td className='lastupdatedtime'>{currElem.lastupdatedtime}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}
export default Stateslive
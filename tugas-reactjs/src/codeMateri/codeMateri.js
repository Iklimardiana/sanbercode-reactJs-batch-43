import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import Navbar from '../codeNavbar/navbar'
import { Navigate, useNavigate } from 'react-router-dom'

const CodeMateri = () => {

    const { state, handleFunction} = useContext(GlobalContext)

    let navigate = useNavigate();
    //materi fetching data
    const [data, setData] = useState(null)

    //materi create data
    const [input, setInput] = useState(
        {
            name: ""
        }
    )

    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)

    //indikator
    const [currentId, setCurrentId] = useState(-1)

    useEffect(() => {
        //fetch data dengan kondisi
        if (fetchStatus === true) {
            axios.get("http://backendexample.sanbercloud.com/api/contestants")
                .then((res) => {
                    setData([...res.data])
                })
                .catch((error) => {
                })
            setFetchStatus(false)
        }

    }, [fetchStatus, setFetchStatus])

    //handling input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value
        if (name === "name") {
            setInput({ ...input, name: value })
        }
    }

    //handling submit

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            name
        } = input
        if (currentId === -1) {
            //create data
            axios.post('https://backendexample.sanbercloud.com/api/contestants', { name })
                .then((res) => {
                    console.log(res)
                    setFetchStatus(true)
                })
        } else {

            // update data
            axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, { name })
                .then((res) => {
                    setFetchStatus(true)
                })

        }

        //balikin indikator ke -1
        setCurrentId(-1)
        //clear input setelah create data
        setInput(
            {
                name: ""
            }
        )

    }

    console.log(data)

    const handleDelete = (event) => {
        let IdData = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${IdData}`)
            .then((res) => {
                setFetchStatus(true)
            })

    }

    const handleEdit = (event) => {

        let IdData = parseInt(event.target.value)

        setCurrentId(IdData)
        navigate(`/edit/${IdData}`)
        // axios.get(`https://backendexample.sanbercloud.com/api/contestants/${IdData}`)
        //     .then((res) => {
        //         let data = res.data
        //         setInput(
        //             {
        //                 name: data.name
        //             }
        //         )
        //     })

    }

    return (

        <>
            <hr />
            <div>
                <ul>
                    {data !== null && data.map((res, index) => {
                        return (
                            <>
                                <li key={index}>
                                    {res.name} | &nbsp;
                                    <button onClick={handleEdit} value={res.id}>edit</button>
                                    <button onClick={handleDelete} value={res.id}>delete</button>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>
            {/* <p>FORM DATA</p>
            {/* form data *
            <form onSubmit={handleSubmit}>
                <span>Nama : </span>
                <input onChange={handleInput} value={input.name} name='name' />
                <input type={'submit'} />
            </form> */}
        </>
    )

}

export default CodeMateri
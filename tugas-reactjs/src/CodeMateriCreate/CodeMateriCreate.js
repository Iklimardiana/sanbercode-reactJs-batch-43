import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const CodeMateriCreate = () => {

    let navigate = useNavigate()
    let {IdData} = useParams();;

    const { state, handleFunction} = useContext(GlobalContext)

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
        if (IdData !== undefined){
            axios.get(`https://backendexample.sanbercloud.com/api/contestants/${IdData}`)
                .then((res) => {
                    let data = res.data
                    setInput({
                        name: data.name
                    })
                    setCurrentId(IdData) // set currentId with IdData
                })
        }
    }, [])


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
                    navigate('/code-materi')
                    //balikin indikator ke -1
                    setCurrentId(-1)
                    //clear input setelah create data
                    setInput(
            {
                name: ""
            }
        )
                })
        } else {

            // update data
            axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, { name })
                .then((res) => {
                    setFetchStatus(true)
                    navigate('/code-materi')
                    //balikin indikator ke -1
                    setCurrentId(-1)
                    //clear input setelah create data
                    setInput(
                        {
                            name: ""
                        }
                    )
                })

        }
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
            <p>FORM DATA</p>
            {/* form data */}
            <form onSubmit={handleSubmit}>
                <span>Nama : </span>
                <input onChange={handleInput} value={input.name} name='name' />
                <input type={'submit'} />
            </form>
        </>
    )

}

export default CodeMateriCreate
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";

const Tugas11 =() => {
    //Fetching data
    const [data, setData] = useState(null)
  
    //Create Data
    const [input, setInput] = useState(
      {
        name: '',
        score: 0,
        course:''
      }
    )
  
    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)
  
    useEffect(() => {
      //fetch data dengan kondisi
      if (fetchStatus === true) {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
          .then((res) => {
            setData([...res.data])
          })
          .catch((error) => {
          })
        setFetchStatus(false)
      }
  
    }, [fetchStatus, setFetchStatus])

    const handleIndexScore = (score) =>{
        if(score >=80){
            return 'A'
        } 
        else if (score >= 70 && score<80){
            return 'B'
        }
        else if(score >= 60 && score<70){
            return 'C'
        }
        else if(score >=50 && score<60){
            return 'D'
        }
        else{
            return 'E'
        }
      }
  
  
    //handling Input
    const handleInput = (event) => {
      let name = event.target.name
      let value = event.target.value
  
      if (name === "name") {
        setInput({ ...input, name: value })
      } else if(name === "score"){
        setInput({ ...input, score: value })
      } else if(name === "course"){
        setInput({ ...input, course: value })
      }
    }
  
    //handling submit
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(input);
  
      let {name, course, score} = input
      //create data
      axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name, course, score })
        .then((res) => {
          console.log(res)
          setFetchStatus(true)
        })
  
      //clear input setelah create data
      setInput(
        {
          name: "",
          score: 0,
          course: ""
        }
      )
    }
    
    const handleDelete = (event) => {
  
      let idData = parseInt(event.target.value)
  
      axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
      .then((res) => {
        setFetchStatus(true)
      })
  
    }
  
  
      return (
        <>
        <div className="table-wrapper">
            <Table>
                <Table.Head className="headTable">
                    <Table.HeadCell>
                        No
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Nama
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Mata Kuliah
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Nilai
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Index
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        data !== null && data.length !==0 && data.map((e, index) => {
                            return <Table.Row key={e.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {index+1}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.course}
                                </Table.Cell>
                                <Table.Cell>
                                    {e.score}
                                </Table.Cell>
                                <Table.Cell>
                                    {handleIndexScore(e.score)}
                                </Table.Cell>
                                <Table.Cell>
                                    <span id="action">
                                        <button onClick={handleDelete} value={e.id} id="del"> Delete </button>
                                    </span>
                                </Table.Cell>
                            </Table.Row>
                        })
                            
                    }
                </Table.Body>
            </Table>
        </div>
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                    <input type="text" onChange={handleInput} value={input.name} name='name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah</label>
                    <input type="text" onChange={handleInput} value={input.course} name='course' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Masukkan Nama Mata Kuliah' required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai</label>
                    <input type="number" onChange={handleInput} value={input.score} name='score' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Masukkan Nilai' required />
                </div>
                
                <button type={'submit'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
        </>
      );
  }
  
  export default Tugas11;
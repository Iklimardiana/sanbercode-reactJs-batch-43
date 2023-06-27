import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Table } from "flowbite-react";

const Tugas10 = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data])
      })
      .catch((error) => {
      })
  }, [])

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
                        Index Nilai
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
                            </Table.Row>
                        })
                            
                    }
                </Table.Body>
            </Table>
        </div>
    </>
  )

}

export default Tugas10
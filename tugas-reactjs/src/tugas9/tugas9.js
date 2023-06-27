import React from "react";
import { Table } from "flowbite-react";
import '../App.css'

const Tugas9 = () =>{
    return (
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
                <Table.HeadCell>
                    Action
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        1
                    </Table.Cell>
                    <Table.Cell>
                        John
                    </Table.Cell>
                    <Table.Cell>
                        Algoritma
                    </Table.Cell>
                    <Table.Cell>
                        80
                    </Table.Cell>
                    <Table.Cell>
                        A
                    </Table.Cell>
                    <Table.Cell>
                        <span id="action">
                            <button> Edit </button>
                            <button id="del"> Delete </button>
                        </span>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        2
                    </Table.Cell>
                    <Table.Cell>
                        Doe
                    </Table.Cell>
                    <Table.Cell>
                        Matematika
                    </Table.Cell>
                    <Table.Cell>
                        70
                    </Table.Cell>
                    <Table.Cell>
                        B
                    </Table.Cell>
                    <Table.Cell>
                        <span id="action">
                            <button> Edit </button>
                            <button id="del"> Delete </button>
                        </span>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        3
                    </Table.Cell>
                    <Table.Cell>
                        Frank
                    </Table.Cell>
                    <Table.Cell>
                        Kalkulus
                    </Table.Cell>
                    <Table.Cell>
                        60
                    </Table.Cell>
                    <Table.Cell>
                        C
                    </Table.Cell>
                    <Table.Cell>
                        <span id="action">
                            <button> Edit </button>
                            <button id="del"> Delete </button>
                        </span>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        4
                    </Table.Cell>
                    <Table.Cell>
                        Jason
                    </Table.Cell>
                    <Table.Cell>
                        Basis Data
                    </Table.Cell>
                    <Table.Cell>
                        90
                    </Table.Cell>
                    <Table.Cell>
                        A
                    </Table.Cell>
                    <Table.Cell>
                        <span id="action">
                            <button> Edit </button>
                            <button id="del"> Delete </button>
                        </span>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    </div>
    )
}

export default Tugas9;
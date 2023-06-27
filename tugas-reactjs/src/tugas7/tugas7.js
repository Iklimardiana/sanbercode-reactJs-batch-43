import React from "react";
import '../App.css'

function Tugas7 (props){
    return(
        <div className="App">
            <main>
            <div className='wrapper'>
                <h1>Data Diri Peserta Kelas ReactJs</h1>
                <hr></hr>
                <ul>
                    <li><b>Nama Lengkap: </b>{props.name}</li>
                    <li><b>Batch: </b>{props.batch}</li>
                    <li><b>Email: </b>{props.email}</li>
                </ul>
            </div>
            </main>
        </div>
    )
}

export default Tugas7;
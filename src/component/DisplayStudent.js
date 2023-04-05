import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'NAME', width: 130 },
    { field: 'level', headerName: 'LEVEL', width: 130 },
];



export default function DisplayStudent() {

    const [studentArray, setStudentArray] = useState([]);
    /**Fetch student data from api using fetch */
    useEffect(() => {
        fetch("http://localhost:8080/student")
            .then(res => res.json())
            .then(result => setStudentArray(result))
            .catch(e => console.log(e));
    });
    return (
        <div style={{ height: 400, width: '70%', margin: '30px auto 40px auto' }}>
            <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Student Data</h2>
            <DataGrid
                rows={studentArray}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
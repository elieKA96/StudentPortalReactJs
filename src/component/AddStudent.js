import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function AddStudent() {

    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const studentObject = { name, level };

    /** Function that collect values and send to API type then to database using a post request */

    function submitData(e) {
        e.preventDefault();
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentObject)
        })
            .then(sus => console.log(sus))
            .catch(e => console.log(e));
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', margin: '30px 0' }}>Add Student</h2>
            <Box
                style={{ marginBottom: "40px", marginTop: "30px" }}
                component="form"
                sx={{
                    '& > :not(style)': { m: .5, width: '50%' },
                }}
                noValidate
                autoComplete="off"
                className="center"
            >
                <TextField label="name" variant="outlined" onChange={(e) => setName(e.target.value)} />
                <TextField label="level" variant="outlined" onChange={(e) => setLevel(e.target.value)} />
                <Button onClick={submitData} style={{ padding: '10px', margin: 'auto' }} variant="contained">Add Student</Button>
            </Box>
        </>



    );
}

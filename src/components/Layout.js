import { useState } from "react"

export const Layout = () => {
    const [employees, setEmployees] = useState([
        {
            firstname: "John",
            lastname: "Doe",
            position: "Software Engineer",
            start_date: "3/14/2021"
        },
        {
            firstname: "Jane",
            lastname: "Doe",
            position: "Software Engineer",
            start_date: "4/14/2020"
        },
        {
            firstname: "Jeorge",
            lastname: "Donato",
            position: "Software Engineer",
            start_date: "4/14/2020"
        },
    ])

    const initialFormData = {
        firstname: '',
        lastname: '',
        position: '',
        start_date: ''
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleAdd = (e) => {
        setEmployees([...employees, formData])
        setFormData(initialFormData)
    }

    const handleDelete = (idx) => {
        setEmployees(employees.filter((employee, i) => i !== idx ))
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>position</th>
                        <th>start_date</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody className="table">
                    {
                        employees.map((employee, idx) => 
                            (
                            <tr key={idx}>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.position}</td>
                                <td>{employee.start_date}</td>
                                <td ><button onClick={() => handleDelete(idx)} type="button">Delete</button></td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </table>


            <form>
                    <input type={'text'} value={formData.firstname} onChange={(e) => setFormData({...formData, "firstname": e.target.value})} />
                    <input type={'text'} value={formData.lastname} onChange={(e) => setFormData({...formData, "lastname": e.target.value})} />
                    <input type={'text'} value={formData.position} onChange={(e) => setFormData({...formData, "position": e.target.value})} />
                    <input type={'text'} value={formData.start_date} onChange={(e) => setFormData({...formData, "start_date": e.target.value})} />
                    <button onClick={handleAdd} type="button">Add</button>
            </form>
        </>
    )
}
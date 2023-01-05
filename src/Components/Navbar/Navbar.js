import React from 'react'
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <>
    <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
                <a className="navbar-brand">Task</a>
            <form className="d-flex" onSubmit={handleSubmit}>
                <button className="btn btn-outline-success" type="submit"><HomeIcon /></button>
            </form>
        </div>
    </nav>
    </>
  )
}

export default Navbar
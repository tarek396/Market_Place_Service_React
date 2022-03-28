import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
function NavBar() {
    let user = JSON.parse(localStorage.getItem('login'))
    console.warn(user)
    return (

        <Nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="#!">Market Place</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" a href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" a href="/register" >Register</a></li>
                        <li class="nav-item"><a class="nav-link" a href="/login">login</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Services</a></li>
                        <NavDropdown title="User Name">
                            <NavDropdown.Item>logout</NavDropdown.Item>

                        </NavDropdown>
                    </ul>
                </div>
            </div>

        </Nav>




    )
}
export default NavBar;
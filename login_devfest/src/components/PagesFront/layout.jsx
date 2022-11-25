import Signin from "../Login/Signin";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";

const AdminLayout = () => {

    return (
        <main>
            <Navbar />
            <Login />
            <Signin />
        </main>
    )
}

export default AdminLayout;
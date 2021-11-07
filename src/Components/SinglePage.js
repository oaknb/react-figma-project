import {React , useState, useEffect }  from 'react'
import Deneme from './Card/Deneme'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'

function SinglePage() {
    const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

    return (
        <>
            <Topbar></Topbar>
            <div className="containerr">
            <Sidebar></Sidebar>
            <div className="others">
            <input className="search-box" onInput={filterCards} placeholder="Search..."/>
           <br></br> Market Place <br></br><br></br>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            
            {users.map((user, index) => (
        <Deneme key={index} userData={user} />
        ))}
                <div className="reklam">
                     Market Place
                    
                </div>
               
            </div>
        </div>
       </>
    )
}

export default SinglePage

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

type User = {
    id : number,
    name : string,
    email : string,
}

const users = [
    {id : 1, name : 'yasuken1990', email : 'yasuken1990@gmail.com'},
    {id : 2, name : 'yasuken1991', email : 'yasuken1991@gmail.com'},
    {id : 3, name : 'yasuken1992', email : 'yasuken1992@gmail.com'}
];

const RenderRow = (user: User) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    );
};

const UserList: React.FC = () => {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => {
                            return RenderRow(user);
                        }
                    )}
                </tbody>
            </table>
        </div>

    );
  }
  
  export default UserList;
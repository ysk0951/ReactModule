import React, { Component } from 'react';
import ApiService from '../../ApiService';

class UserListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null
        }
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList = () => { 
        ApiService.fetchUsers()
        .then(res => {
            this.setState({
                    users: res.data
            }) 
        })
        .catch(err => {
            console.log('reloadUserList() Error',err);
        })
    }

    //https://corini.tistory.com/entry/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-%EC%97%B0%EB%8F%99%ED%95%98%EC%97%AC-CRUD-%EA%B5%AC%ED%98%84-3-User-List-Component-%EC%83%9D%EC%84%B1-%EB%B0%8F-Delete-%EA%B5%AC%ED%98%84-3n?category=836393
    //CRUD
    //delete
    //edit
    //add
    render(){
        return(
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        );
    }
}

export default UserListComponent
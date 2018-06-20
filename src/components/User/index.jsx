import React, { Component } from 'react';

class User extends Component{
    render(){
        const { usersById } = this.props.userdata
        const mapuser = usersById.map((user)=>{
            return(
                <div key={user.id}>
                    <h3>{user.id}</h3>
                    <span>{user.name}</span>
                </div>
            )
        })
        return (
            <div>
               { mapuser }
            </div>
        )
    }
}

export default User
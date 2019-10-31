import React from 'react';
import "./Admin.css";
import profile from "../../Img/profile.png"

const Admin = () => {
    return (
        <wrapper className="AdminContainer float-left m-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-5">
                        <h3 className="text-center">Administration</h3>
                    </div>
                </div>
                <div className="row content mt-5">
                    <div id="first" className="col-lg-6 text-left pl-5">
                        <p>Navn</p>
                        <p>Email</p>
                        <p>Telefon</p>
                    </div>
                    <div id="second" className="col-lg-4">
                        <img src={profile}></img>
                    </div>
                </div>


            </div>

        </wrapper>
    )
}

export default Admin;
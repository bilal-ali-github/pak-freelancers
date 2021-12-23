import { db } from "../firebase-config"
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { useState } from "react";

const MainHome = () => {

    const [newName, setName] = useState()
    const [newMail, setMail] = useState()
    const [newPassword, setPassword] = useState()
    const [login, setLogin] = useState(false)
    const usersCollectionRef = collection(db, "seller")



    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, email: newMail, password: newPassword })
        setLogin(true)
    }

    return (
        <section className="bg-light">
            <div className="container bg-white mt-5">
                <div className="row margin-main">
                    <div className="col-sm-6 align-self-center">
                        <img src="/images/logo-green.svg" className="img-fluid ps-5 pe-5"></img>
                    </div>
                    <div className="col-sm-6   pe-5">
                        <h2>Sign Up, </h2>

                        <div className="pt-5 pe-3">
                            <div className="mb-3 row">
                                <label for="FullName" className="col-sm-2 col-form-label">Full Name</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="Enter Name" className="form-control" onChange={(event) => { setName(event.target.value) }}></input>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder="Enter Email" className="form-control" onChange={(event) => { setMail(event.target.value) }}></input>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" placeholder="Enter Password" className="form-control" onChange={(event) => { setPassword(event.target.value) }}></input>
                                </div>
                            </div>
                            <div className="mt-3 row">
                                <button type="button" className="btn btn-outline-success" onClick={createUser}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHome
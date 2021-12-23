const ProfileMain = () => {
    return (
        <section className="container mt-5 bg-white">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row p-5">
                        <div className="col-sm-4">
                            <img
                                src="/images/placeholder_user.png"
                                alt="user_img"
                                className="img-fluid rounded-circle border border-4 border-success"
                            ></img>
                        </div>
                        <div className="col-sm align-self-center p-sm-5">
                            <h2 className="heading-2">Username</h2>
                            <p className="text-large">Availablity : Online</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 align-self-center">
                    <div className="row text-center">
                        <div className="col">
                            <button className="btn btn-success  me-2">View Public</button>
                            <button className="btn btn-outline-success  ms-2">
                                Profile Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </section>
    )
}
export default ProfileMain
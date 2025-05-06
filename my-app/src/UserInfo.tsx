function UserInfo() {
    const user = {
        name: "Usman Khan",
        summary: "Frontend React Developer and UI/UX Designer with 10+ years of experience.",
        profileImageUrl: "https://images.pexels.com/photos/6150379/pexels-photo-6150379.jpeg?auto=compress&cs=tinysrgb&w=600",
        portfolioUrl: "https://mohammedaeraf.github.io/profile/"
    };

    return (
        <div className="card">
            <img src={user.profileImageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.summary}</p>
                <a href={user.portfolioUrl} className="btn btn-primary">Visit my Portfolio</a>
            </div>
        </div>
    );
}
export default UserInfo;
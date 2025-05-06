function LoginStatus() {
    const isLoggedIn: boolean = true;
    return (
        <>
        <h3 className="text-bg-success">
        { isLoggedIn ? "Welcome User" : "Please login to continue" }
        </h3>
        <p>Some text</p>
        </>
    );
}
export default LoginStatus;
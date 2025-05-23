
function Alert(){
    const showAlert = () => alert('Thank you for clicking me,');
    return(<>
        <br />
        <br />
        <button onClick={showAlert}>Click Here</button>
    </>);
}
export default Alert
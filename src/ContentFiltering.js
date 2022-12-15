import { ExclamationTriangle, SlashCircle } from "react-bootstrap-icons";

function MessageArea(props) {
    return <div className="row">
        <div className="shadow rounded-4 m-3 p-4 row">
            <div className="col">
                <img src={defaultAccountPfp}
                    style={{ maxWidth: "40px" }}></img>
            </div>
            <div className="col-11">
                <div className="row">
                    <div class="d-flex flex-row-reverse bd-highlight opacity-50">
                        {props.time}
                    </div>
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                {
                    props.block === true &&
                    <div className="row">
                        <div class="d-flex flex-row-reverse bd-highlight">
                            <button className="btn btn-danger">Block this user <SlashCircle></SlashCircle></button>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
}

function ProfileArea(props) {
    return <div class="d-flex flex-row">
        <div class="p-2">
            <img
                style={{ maxWidth: "40px" }}
                className='rounded-circle'
                src={props.pfpSrc}></img>
        </div>
        <div class="p-2 container d-flex align-items-center">
            <div className='row '>
                <p className='m-0'>
                    <span className='fw-bold'>{props.name}</span> {props.with == null ? "" : `is with ${props.with}`}
                </p>
            </div>
        </div>
    </div>
}

let defaultAccountPfp = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png";
let placeholderUsers = ["Jojo", "Joey", "Patrick", "Cindy", "Brahmin", "Carlo", "Joseph", "Juan", "Pedro"];
function ContentFiltering() {
    return <div className="container-fluid row">
        <div className="col-2 m-0">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1"
                    placeholder="Search" />
            </div>
            <div className="row ms-2">
                {
                    placeholderUsers.map(x =>
                        <div className="row shadow mb-3 rounded-4">
                            <ProfileArea name={x} pfpSrc={defaultAccountPfp}></ProfileArea>
                        </div>
                    )
                }
            </div>
        </div>
        <div className="col-10">
            <div class="d-flex flex-row bd-highlight mb-3">
                <button className="btn btn-light shadow ms-2">Violation: Foul Words</button>
                <button className="btn btn-light shadow ms-2">Warning Level: 1 <ExclamationTriangle className="text-danger"></ExclamationTriangle></button>
                <button className="btn btn-light shadow ms-2">System Action: 1 Restricted for 2 hours on comments.</button>
            </div>
            <div className="row ">
                <div class="d-flex flex-row">
                    <button className="btn btn-light shadow ms-2">Name of User: Brahmin</button>
                </div>
            </div>
            <MessageArea time="Just Now" block={true}></MessageArea>
            <MessageArea time="12 Hours Ago"></MessageArea>
            <MessageArea time="5 Days Ago"></MessageArea>
        </div>
    </div>
}

export default ContentFiltering;
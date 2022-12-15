import { DiamondFill, XDiamondFill } from "react-bootstrap-icons";

function ProgressBars(props) {
    return <div className="container shadow rounded-4 p-2 mb-2">
        <h5>{props.name}</h5>
        <div class="progress mb-2">
            <div role="progressbar" class="progress-bar bg-success" style={{ "width": "" + props.first + "%" }}>{props.first}%</div>
        </div>
        <div class="progress">
            <div class="progress-bar bg-info" style={{ "width": "" + props.second + "%" }}>{props.second}%</div>
        </div>
    </div>
}

function HealthCareWorkers() {
    return <div className="container-fluid">
        <div className="mt-2 mb-2"><h3><XDiamondFill></XDiamondFill> View By</h3></div>
        <div class="d-flex align-items-center flex-row bd-highlight">
            <div className=""><strong>View By</strong></div>
            <div class="">
                <button className="btn btn-light shadow ms-2">Topics</button>
                <button className="btn btn-light shadow ms-2">Location</button>
            </div>
        </div>
        <div className="row mt-4">
            <h2>Health Care Workers</h2>
            <div className="container-fluid row">
                <div className="col-2 rounded-3 p-4">
                    <h4>Topics</h4>
                    <ProgressBars first='54' second='7' name='Covid-19'></ProgressBars>
                    <ProgressBars first='45' second='70' name='Rabbies'></ProgressBars>
                    <ProgressBars first='54' second='23' name='Dengue'></ProgressBars>
                    <ProgressBars first='90' second='45' name='Tuberculosis'></ProgressBars>
                    <ProgressBars first='12' second='90' name='Measles'></ProgressBars>
                </div>
                <div className="col-2 rounded-3 p-4">
                    <h4>Location</h4>
                    <ProgressBars first='54' second='7' name='Brgy. 168'></ProgressBars>
                    <ProgressBars first='45' second='70' name='Brgy. 171'></ProgressBars>
                    <ProgressBars first='54' second='23' name='Brgy. 176'></ProgressBars>
                    <ProgressBars first='90' second='45' name='Brgy. 175'></ProgressBars>
                    <ProgressBars first='12' second='90' name='Brgy. 173'></ProgressBars>
                </div>
                <div className="col-4 rounded-3 p-4 ">
                    <h5>Sentiments of (Topic)</h5>
                    <div class="progress mb-2">
                        <div class="progress-bar" role="progressbar" style={{ "width": "15%" }}></div>
                        <div class="progress-bar bg-success" role="progressbar" aria-label="Segment two" style={{ "width": "30%" }}></div>
                        <div class="progress-bar bg-info" role="progressbar" aria-label="Segment three" style={{ "width": "20%" }}></div>
                    </div>
                    <div className="row shadow rounded-4 p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="row shadow rounded-4 p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="row shadow rounded-4 p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div className="col-4 rounded-3 p-4">
                    <h4>Photo Gallery</h4>
                    <div className="container-fluid row">
                        <div className="col-6">
                            <img style={{ "height": "100%", "objectFit": "cover" }} className="img-fluid" src="https://cdn.oneesports.gg/cdn-data/2022/11/MLBB_Gusion.jpg"></img>
                        </div>
                        <div className="col-6">
                            <div className="row mb-2">
                                <img className="img-fluid" src="https://cdn.oneesports.gg/cdn-data/2022/11/MLBB_Gusion.jpg"></img>
                            </div>
                            <div className="row">
                                <img className="img-fluid" src="https://cdn.oneesports.gg/cdn-data/2022/11/MLBB_Gusion.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HealthCareWorkers;
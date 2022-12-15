import React from 'react';
import { Archive, BookmarkCheck, Calendar2RangeFill, Chat, Funnel, House, Paperclip } from 'react-bootstrap-icons';
import logo from './newIcon.png';
class HeadNavbar extends React.Component {
    render() {
        return <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <img src={logo} alt="Logo" height="35" class="d-inline-block align-text-top me-2" />
                <a class="navbar-brand" href="/">
                    Macro-Analytica</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#"><Calendar2RangeFill></Calendar2RangeFill> Timeline</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Chat></Chat> Messages</a>
                        </li>
                    </ul>
                </div>

                <div class="d-flex">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/"><House></House> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/filter"><Funnel></Funnel> Content Filtering</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><Archive></Archive> Name</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>;
    }
}

export default HeadNavbar;
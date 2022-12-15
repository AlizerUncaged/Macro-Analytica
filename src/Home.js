import logo from './logo.svg';
import './App.css';
import { Calendar2RangeFill, Chat, HandThumbsUp, Share } from 'react-bootstrap-icons';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { Archive, BookmarkCheck, Paperclip } from 'react-bootstrap-icons';

function ProfileArea(props) {
    return <div class="d-flex flex-row">
        <div class="p-2">
            <img
                style={{ maxWidth: "40px" }}
                className='rounded-circle'
                src={props.pfpSrc}></img>
        </div>
        <div class="p-2 container">
            <div className='row'>
                <p className='m-0'>
                    <span className='fw-bold'>{props.name}</span> {props.with == null ? "" : `is with ${props.with}`}
                </p>
            </div>
            <div className='row'>
                <p className='m-0'>
                    <span className='fw-small'>{props.date}</span>
                </p>
            </div>
        </div>
    </div>
}

function Post(props) {
    return <div className='row mb-4'>
        <ProfileArea with='Facebook Page' date="November 20, 2022" name="Eywhan Q. Sayu" pfpSrc={props.authorPfp}></ProfileArea>
        <div className='d-flex align-items-center justify-content-center' style={{ "height": "250px" }}>
            {props.content}
        </div>
        <div class="d-flex justify-content-between">
            <div className='m-2 ms-4'>
                <HandThumbsUp></HandThumbsUp>
            </div>
            <div className='m-2'>
                <Chat></Chat>
            </div>
            <div className='m-2 me-4'>
                <Share></Share>
            </div>
        </div>
        <div className='mt-2 d-flex flex-column'>
            {
                props.comments.map((x) => (
                    <div class="p-2 bd-highlight me-4 ms-4">
                        {x}
                    </div>
                ))
            }
        </div>
    </div>;
}

function Home() {
    return (
        <div className='container-fluid row'>
            <div className='col-6 container'>
                <div className='rounded-5 shadow'>

                    <Post comments={[
                        <ProfileArea date='Hello! Eywhan, could you please be
            more specific so that we can list your concern?' pfpSrc='https://cdn.discordapp.com/attachments/1022054419510075402/1052911329771520000/Alizer_3d_support_bot_original_character_support_bot_pfp_0704ab7b-9815-4032-bf70-4ff240761d3c.png' name='Support'></ProfileArea>
                    ]} name='Eywhan Q. Sayu' content="Tambak ng basura pa aksyonan" authorPfp="https://i.pinimg.com/736x/bc/f3/cb/bcf3cb98c904926c45f9111afd658079.jpg"></Post>

                </div>
                <div className='rounded-5 shadow'>

                    <Post comments={[
                        <ProfileArea
                            date="Same here."
                            pfpSrc='https://i.pinimg.com/736x/bc/f3/cb/bcf3cb98c904926c45f9111afd658079.jpg'
                            name='Eywhan Q. Sayu'></ProfileArea>,
                        <ProfileArea
                            date='Hello! Eywhan, could you please be
            more specific so that we can list your concern?'
                            pfpSrc='https://cdn.discordapp.com/attachments/1022054419510075402/1052911329771520000/Alizer_3d_support_bot_original_character_support_bot_pfp_0704ab7b-9815-4032-bf70-4ff240761d3c.png' name='Support'></ProfileArea>,
                        <ProfileArea
                            date="Brgy. 123 Caloocan City"
                            pfpSrc='https://i.pinimg.com/736x/bc/f3/cb/bcf3cb98c904926c45f9111afd658079.jpg'
                            name='Eywhan Q. Sayu'></ProfileArea>,
                        <ProfileArea
                            date="AI's response..."
                            pfpSrc='https://cdn.discordapp.com/attachments/1022054419510075402/1052911329771520000/Alizer_3d_support_bot_original_character_support_bot_pfp_0704ab7b-9815-4032-bf70-4ff240761d3c.png' name='Support'></ProfileArea>,


                    ]} name='Facebook Page' content="Tambak ng basura pa aksyonan" authorPfp="https://media.discordapp.net/attachments/1044842408602513448/1052909055028498462/clumsy-kid_girl_with_soft_brown_hair_free_ponytail__opened_red__2da5d306-d649-4b1e-ba2a-d42a74fc4359.png?width=497&height=497"></Post>

                </div>
            </div>
            <div className='col-6 container'>
                <div className='row container-fluid m-0 p-0'>
                    <div class="d-flex justify-content-between">
                        <a class="nav-link" aria-current="page" href="#"><BookmarkCheck></BookmarkCheck> Tagged Post</a>

                        <a class="nav-link" href="#"><Paperclip></Paperclip>Has Attachments</a>

                        <a class="nav-link" href="#"><Archive></Archive> Name</a>
                    </div>
                </div>
                <div className='row container-fluid'>
                    <div className='col-8 p-2'>
                        <div className='row'>
                            <h2>Sentiments</h2>

                            <div class="d-flex m-2 justify-content-between">
                                <button className='btn btn-success'>Positive</button>
                                <button className='btn btn-secondary'>Opposed</button>
                                <button className='btn btn-secondary'>Neutral</button>
                            </div>
                            <div className='w-100 shadow  m-2 p-3 rounded-4'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='w-100 shadow m-2 p-3 rounded-4'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <div class="d-flex m-2 justify-content-between">
                                <button className='btn btn-primary'>Comments</button>
                                <button className='btn btn-secondary'>Category Name</button>
                            </div>
                        </div>
                        <div className='row'>
                            <h2>Comments</h2>

                            <div class="d-flex m-2 justify-content-between">
                                <button className='btn btn-success'>Positive</button>
                                <button className='btn btn-secondary'>Opposed</button>
                                <button className='btn btn-secondary'>Neutral</button>
                            </div>
                            <div className='w-100 shadow m-3 p-3 rounded-4'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='w-100 shadow m-3 p-3 rounded-4'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                    <div className='col p-2'>
                        <h3>Topics</h3>
                        <div className='row mb-2 m-4'>
                            <div className='rounded shadow'>
                                <p className='p-0 m-0'>1. Lack of public doctors.</p>
                            </div>
                        </div>
                        <div className='row mb-2 m-4'>
                            <div className='rounded shadow'>
                                <p className='p-0 m-0'>2. Lack of healthcare facilities.</p>
                            </div>
                        </div>
                        <div className='row mb-2 m-4'>
                            <div className='rounded shadow'>
                                <p className='p-0 m-0'>3. Lack of vaccine.</p>
                            </div>
                        </div>
                        <div className='row mb-2 m-4'>
                            <div className='rounded shadow'>
                                <p className='p-0 m-0'>4. Free medicine for seniors.</p>
                            </div>
                        </div>
                        <div className='row mb-2 m-4'>
                            <div className='rounded shadow'>
                                <p className='p-0 m-0'>5. Lack of nurse.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

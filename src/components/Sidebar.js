import React from 'react'
import curvedlines from '../curvedlines.svg';
import curvedlines_bittersweet from '../curvedlines_bittersweet.svg';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';
import { Button } from 'react-bootstrap'
import  illustration  from '../assets/duck_illustration.png'

function Sidebar() {
    return (
        <div className="d-flex flex-column col-4 border-start border-light border-2 p-0">
            <div className="sidebar-gradient rounded-12 border-bottom border-1 border-light user-icon mt-4">
                <div className="container">
                    <div className="d-flex mb-3">
                        <div className="user-icon">
                            <FaIcons.FaUserCircle />
                        </div>
                        <div className="me-auto ps-2 d-flex flex-column justify-content-center">
                            <span className="fz-18 fw-bold">Floyd Miles</span>
                            <span className="fz-12">Free account</span>
                        </div>
                        <div className="my-auto mx-2 border border-2 border-light rounded-15 p-1 h-40 w-40 feature-button-icon position-relative">
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle theme-bittersweet px-2"><span class="visually-hidden"></span>3</span>
                            <IoIcons.IoIosNotificationsOutline />
                        </div>
                        <div className="my-auto ms-2 border border-2 border-light rounded-15 p-1 h-40 w-40 feature-button-icon">
                            <RiIcons.RiListSettingsLine />
                        </div>
                    </div>
                    <div>
                        <div className="pb-2 fz-20">Health</div>
                        <div className="d-flex justify-content-around">
                            <div className="d-flex flex-column">
                                <div className="fz-32">6:25</div>
                                <div className="d-flex">
                                    <div className="my-auto rounded-8 theme-dodger-blue h-30 w-30 p-1 rating-icon">
                                        <RiIcons.RiMoonClearLine />
                                    </div>
                                    <div className="fz-12 my-auto ps-2">Hours</div>
                                </div>
                                <div class="bar-container rounded-2 my-2">
                                    <div class="hour-bar rounded-2"></div>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className="d-flex flex-column">
                                <div className="fz-32">120</div>
                                <div className="d-flex">
                                    <div className="my-auto rounded-8 theme-bittersweet h-30 w-30 p-1 rating-icon">
                                        <RiIcons.RiHeartPulseLine />
                                    </div>
                                    <div className="fz-12 my-auto ps-2">Rpm</div>
                                </div>
                                <div class="bar-container rounded-2 my-2">
                                    <div class="rpm-bar rounded-2"></div>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className="d-flex flex-column">
                                <div className="fz-32">1.84</div>
                                <div className="d-flex">
                                    <div className="my-auto rounded-8 theme-mantis h-30 w-30 p-1 rating-icon">
                                        <GiIcons.GiShinyApple />
                                    </div>
                                    <div className="fz-12 my-auto ps-2">Kcal</div>
                                </div>
                                <div class="bar-container rounded-2 my-2">
                                    <div class="kcal-bar rounded-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex theme-bianca my-5 p-3 border-bottom border-2 border-white rounded-20 double-pearl-lusta-shadow">
                            <div className="my-auto">
                                <img className="h-80 w-125" src={illustration} alt="illustration" />
                            </div>
                            <div className="d-flex flex-column">
                                <div className="text-center fz-16 px-4">
                                    Sign up for a personal trainer to improve your results
                                </div>
                                <div className="mx-auto mt-3">
                                    <Button className="theme-saffron-mango fz-12 w-80 rounded-12">Sign up</Button>
                                </div>
                            </div>
                        </div>
                        <div className="fz-20">Today trainings</div>
                        <div>
                            <div style={{ backgroundImage: `url(${curvedlines})` }} className="bg-no-repeat bg-size-cover d-flex justify-content-between theme-dodger-blue my-4 p-3 border-bottom border-2 border-white rounded-20 hawkes-blue-shadow text-white">
                                <div className="d-flex flex-column">
                                    <div className="fz-22">Box</div>
                                    <div className="fz-13 py-1 fw-bold">Sports Club</div>
                                    <div className="py-1 rounded-8 bg-white text-center text-black">
                                        10:00
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center justify-content-center">
                                    <span className="fz-32">40</span>
                                    <span className="fz-12 mt-n3">min</span>
                                    <span className="fz-14">Warm-up</span>
                                </div>
                                <div className="d-flex flex-column text-center justify-content-center">
                                    <span className="fz-32">20</span>
                                    <span className="fz-12 mt-n3">min</span>
                                    <span className="fz-14">Stretch</span>
                                </div>
                                <div className="my-auto">
                                    <BsIcons.BsThreeDotsVertical />
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${curvedlines_bittersweet})` }} className="d-flex justify-content-between theme-bittersweet my-4 p-3 border-bottom border-2 border-white rounded-20 melon-shadow text-white">
                                <div className="d-flex flex-column">
                                    <div className="fz-22">Crossfit</div>
                                    <div className="fz-13 py-1 fw-bold">Sports Club</div>
                                    <div className="py-1 rounded-8 bg-white text-center text-black">
                                        12:00
                                    </div>
                                </div>
                                <div className="d-flex flex-column text-center justify-content-center">
                                    <span className="fz-32">20</span>
                                    <span className="fz-12 mt-n3">min</span>
                                    <span className="fz-14">Warm-up</span>
                                </div>
                                <div className="d-flex flex-column text-center justify-content-center">
                                    <span className="fz-32">20</span>
                                    <span className="fz-12 mt-n3">min</span>
                                    <span className="fz-14">Pull-ups</span>
                                </div>
                                <div className="my-auto">
                                    <BsIcons.BsThreeDotsVertical />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mx-auto my-2">
                            <BsIcons.BsThreeDots />
                        </div>
                    </div>
                </div>    
            </div>

            <div className="container">
                <div className="py-4 fz-22">Your trainers</div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="user-icon position-relative">
                        <FaIcons.FaUserCircle />
                        <span class="position-absolute bottom-0 start-100 translate-middle badge rounded-circle theme-reef p-2"><span class="visually-hidden"></span></span>
                    </div>
                    <div className="me-auto px-3 d-flex flex-column justify-content-center">
                        <span className="fz-18">John Kavanagh</span>
                        <span className="fz-12">MMA coach</span>
                    </div>
                    <div className="my-auto border border-2 border-light rounded-15 p-1 h-40 w-40 feature-button-icon">
                        <AiIcons.AiOutlineMessage />
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="user-icon position-relative">
                        <span class="position-absolute bottom-0 start-100 translate-middle badge rounded-circle theme-reef p-2"><span class="visually-hidden"></span></span>
                        <FaIcons.FaUserCircle />
                    </div>
                    <div className="me-auto px-3 d-flex flex-column justify-content-center">
                        <span className="fz-18">Jacob Jones</span>
                        <span className="fz-12">Boxing Coach</span>
                    </div>
                    <div className="my-auto border border-2 border-light rounded-15 p-1 h-40 w-40 feature-button-icon">
                        <AiIcons.AiOutlineMessage />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar

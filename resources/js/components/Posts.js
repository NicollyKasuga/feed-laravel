import React, { useEffect, useState } from "react";
import { BiMap } from "react-icons/bi";
import { CgImage, CgYoutube } from "react-icons/cg";
import { GrEmoji } from "react-icons/gr";
import axios from "axios";
import CreatePostModal from "./CreatePostModal";
import PostCard from "./PostCard";

export default function Posts() {
    return (
        <>
            <div className="col-12 col-lg-6 pb-5">
                <div
                    className="d-flex flex-column justify-content-center w-100 mx-auto"
                    style={{ paddingTop: 56 + "px", maxWidth: 690 + "px" }}
                >
                    <div className="bg-white p-3 mt-3 rounded border shadow">
                        <div className="d-flex" type="button">
                            <div className="p-1">
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    alt="avatar"
                                    className="rounded-circle me-2"
                                    style={{
                                        width: 38 + "px",
                                        height: 38 + "px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <input
                                type="text"
                                className="form-control rounded-pill border-1 bg-gray pointer"
                                placeholder="O que está pensando, John?"
                                onClick={() => {
                                    document
                                        .getElementById("createbuttonModal")
                                        .click();
                                }}
                            />
                        </div>
                        <div className="d-flex mt-2 justify-content-between ms-1">
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="bg-white border-0">
                                    <CgImage
                                        className="m-1"
                                        style={{ color: "#F05525" }}
                                    />
                                </button>
                                <button className="bg-white border-0">
                                    <CgYoutube
                                        className="m-1"
                                        style={{ color: "#df7211" }}
                                    />
                                </button>
                                <button className="bg-white border-0">
                                    <BiMap
                                        className="m-1"
                                        style={{ color: "#184fb9" }}
                                    />
                                </button>
                                <button className="bg-white border-0">
                                    <GrEmoji
                                        className="m-1"
                                        style={{ color: "purple" }}
                                    />
                                </button>
                            </div>
                            <CreatePostModal />
                        </div>
                    </div>
                    <PostCard />
                </div>
            </div>
        </>
    );
}

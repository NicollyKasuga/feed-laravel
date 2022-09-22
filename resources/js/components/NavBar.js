import axios from "axios";
import React, { useEffect, useState } from "react";
import linkLogo from "../../assets/linkLeiLogo.svg";
import { FiSearch } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { BsThreeDots, BsBook } from "react-icons/bs";
import { VscLaw } from "react-icons/vsc";
import { TbShare } from "react-icons/tb";

export default function NavBar() {
    let filenami;
    function createPost() {
        axios
            .post("/posts", {
                author: "oioi",
                category: "categoria1",
                textContent: "conteudoo",
                filename: "uma File aí",
                url: "URLalsidhjlasijd",
            })
            .then((response) => console.log(response));
    }

    function updatePost() {
        axios
            .patch("/posts", {
                author: "Robertao",
                category: "categoria10",
                textContent: "fera demais,conteudoo",
                id: 7,
                filename: "nome diferente tlg",
                url: "url diferente tlg",
            })
            .then((response) => console.log(response));
    }

    let yu = {
        author: "Robertao",
        category: "categoria10",
        textContent: "fera demais,conteudoo",
        id: "10",
        // filename: "nome diferente tlg",
        // url: "url diferente tlg",
    };

    function deletePost(post) {
        axios.delete(`/posts/${10}`).then((response) => console.log(response));
    }
    return (
        <>
            {/* <h1>header</h1>
            <button onClick={() => createPost()}>Criar</button>
            <button onClick={() => updatePost()}>Atualizar</button>
            <button onClick={() => deletePost()}>Deletar</button> */}
            <div
                className="bg-white d-flex align-items-center fixed-top shadow"
                style={{ minHeight: 56 + "px", zIndex: 5 }}
            >
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col d-flex align-items-center">
                            <img
                                src={linkLogo}
                                className="fab fa-facebook text-primary"
                                style={{
                                    width: 5 + "em",
                                    marginRight: 5 + "px",
                                    height: 50 + "px",
                                }}
                            ></img>
                            <div className="input-group ms-2" type="button">
                                <span
                                    className="input-group-prepend d-lg-none"
                                    id="searchMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    data-bs-auto-close="outside"
                                >
                                    <div
                                        className="input-group-text bg-gray border-0 rounded-circle"
                                        style={{ minHeight: 40 + "px" }}
                                    >
                                        <FiSearch className="fas fa-search text-muted" />
                                    </div>
                                </span>
                                <span
                                    className="input-group-prepend d-none d-lg-block"
                                    id="searchMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    data-bs-auto-close="outside"
                                >
                                    <div
                                        className="input-group-text bg-gray border-0 rounded-pill"
                                        style={{
                                            minHeight: 40 + "px",
                                            minWidth: 230 + "px",
                                        }}
                                    >
                                        <FiSearch className="fas fa-search me-2 text-muted" />
                                        <p className="m-0 fs-7 text-muted">
                                            Search Flexbook
                                        </p>
                                    </div>
                                </span>
                                <ul
                                    className="dropdown-menu overflow-auto border-0 shadow p-3"
                                    aria-labelledby="searchMenu"
                                    style={{
                                        width: 20 + "em",
                                        maxHeight: 600 + "px",
                                    }}
                                >
                                    <li>
                                        <input
                                            type="text"
                                            className="rounded-pill border-0 bg-gray dropdown-item"
                                            placeholder="Search Flexbook..."
                                            autoFocus
                                        />
                                    </li>
                                    <li className="my-4">
                                        <div
                                            className="
                      alert
                      fade
                      show
                      dropdown-item
                      p-1
                      m-0
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                                            role="alert"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://source.unsplash.com/random/1"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{
                                                        width: 35 + "px",
                                                        height: 35 + "px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <p className="m-0">
                                                    Lorem ipsum
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close p-0 m-0"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </li>
                                    <li className="my-4">
                                        <div
                                            className="
                      alert
                      fade
                      show
                      dropdown-item
                      p-1
                      m-0
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                                            role="alert"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://source.unsplash.com/random/2"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{
                                                        width: 35 + "px",
                                                        height: 35 + "px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <p className="m-0">
                                                    Lorem ipsum
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close p-0 m-0"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </li>
                                    <li className="my-4">
                                        <div
                                            className="
                      alert
                      fade
                      show
                      dropdown-item
                      p-1
                      m-0
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                                            role="alert"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src="https://source.unsplash.com/random/3"
                                                    alt="avatar"
                                                    className="rounded-circle me-2"
                                                    style={{
                                                        width: 35 + "px",
                                                        height: 35 + "px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <p className="m-0">
                                                    Lorem ipsum
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close p-0 m-0"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col d-none d-xl-flex justify-content-center">
                            <div className="mx-4 nav__btn nav__btn-active">
                                <button type="button" className="btn px-4">
                                    <BiHomeAlt className="fas fa-home text-muted fs-4" />
                                </button>
                            </div>
                            <div className="mx-4 nav__btn">
                                <button type="button" className="btn px-4">
                                    <TbShare className="fas fa-store text-muted fs-4" />
                                </button>
                            </div>
                            <div className="mx-4 nav__btn">
                                <button type="button" className="btn px-4">
                                    <VscLaw
                                        type="button"
                                        className="position-relative fas fa-users text-muted fs-4"
                                    >
                                        <span
                                            className="
                                            position-absolute
                                            top-0
                                            start-100
                                            translate-middle
                                            badge
                                            rounded-pill
                                            bg-danger
                                            "
                                            style={{ fontSize: 0.5 + "em" }}
                                        >
                                            1
                                            <span className="visually-hidden"></span>
                                        </span>
                                    </VscLaw>
                                </button>
                            </div>
                            <div className="mx-4 nav__btn">
                                <button type="button" className="btn px-4">
                                    <BsBook className="fas fa-gamepad text-muted fs-4" />
                                </button>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <div className="align-items-center justify-content-center d-none d-xl-flex">
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    className="rounded-circle me-2"
                                    alt="avatar"
                                    style={{
                                        width: 38 + "px",
                                        height: 38 + "px",
                                        objectFit: "cover",
                                    }}
                                />
                                <p className="m-0">John</p>
                            </div>
                            <div
                                className="
                                rounded-circle
                                p-1
                                bg-gray
                                d-flex
                                align-items-center
                                justify-content-center
                                mx-2
                                dropdown
                            "
                                style={{ width: 38 + "px", height: 38 + "px" }}
                                type="button"
                                id="mainMenu"
                                aria-expanded="false"
                                data-bs-auto-close="outside"
                            >
                                <BsThreeDots className="fas fa-ellipsis-h" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

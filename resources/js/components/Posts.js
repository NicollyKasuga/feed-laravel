import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { BiCategoryAlt, BiMap } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { CgImage, CgYoutube } from "react-icons/cg";
import { GrEmoji } from "react-icons/gr";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Posts() {
    const [limitCharacteres, setLimitCharacteres] = useState({
        num: 500,
        textToggle: "Ler mais...",
    });

    const formSchema = yup.object().shape({
        edit_author: yup.string().required("Campo obrigatório*"),
        edit_category: yup.string().required("Campo obrigatório*"),
        edit_textContent: yup.string().required("Campo obrigatório*"),
        edit_file: yup.mixed(),
        post_author: yup.string().required("Campo obrigatório*"),
        post_category: yup.string().required("Campo obrigatório*"),
        post_textContent: yup.string().required("Campo obrigatório*"),
        post_file: yup.mixed(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });

    function createUserPost(data) {
        console.log(data);
    }

    function updatePost(data) {
        setTimeout(() => {
            let currentModal = document.getElementById("closeEditModal");
            currentModal.click();
        }, 2000);
    }

    let textoGrande =
        "Morbi leo mrturient montes,nascetur ridiculus mus. Quisque porta. Vivamusporttitor turpis acdiculus mus. Quisque porta. Vivamusporttitor turpis ac leo. Morbi leo mi, nonummyeget, tristique non, rhoncus non, leo. Nullam PARAPAPA BARIDIDI DARIDUBABEUMA BEMAMO PARAPAPADARITIDIBARIBUBADEdiculus mus. Quisque porta. Vivamusporttitor turpis ac leo. Morbi leo mi, nonummyeget, tristique non, rhoncus non, leo. Nullam PARAPAPA BARIDIDI DARIDUBABEUMA BEMAMO PARAPAPADARITIDIBARIBUBADEdiculus mus. Quisque porta. Vivamusporttitor turpis ac leo. Morbi leo mi, nonummyeget, tristique non, rhoncus non, leo. Nullam PARAPAPA BARIDIDI DARIDUBABEUMA BEMAMO PARAPAPADARITIDIBARIBUBADEdiculus mus. Quisque porta. Vivamusporttitor turpis ac leo. Morbi leo mi, nonummyeget, tristique non, rhoncus non, leo. Nullam PARAPAPA BARIDIDI DARIDUBABEUMA BEMAMO PARAPAPADARITIDIBARIBUBADE leo. Morbi leo mi, nonummyeget, tristique non, rhoncus non, leo. Nullam PARAPAPA BARIDIDI DARIDUBABEUMA BEMAMO PARAPAPADARITIDIBARIBUBADEDEDERADENAMO";

    function readMoreAndLess(textLength) {
        if (limitCharacteres.num == 500) {
            setLimitCharacteres({
                num: textLength,
                textToggle: "Ler menos...",
            });
        } else {
            setLimitCharacteres({ num: 500, textToggle: "Ler mais..." });
        }
    }

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
                            {/* kjsdlks */}
                            <button
                                type="button"
                                className="btn btn-dark me-1"
                                data-bs-toggle="modal"
                                id="createbuttonModal"
                                data-bs-target="#exampleModal3"
                            >
                                Post
                            </button>

                            <div
                                className="modal fade"
                                id="exampleModal3"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel3"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="exampleModalLabel3"
                                            >
                                                Create Post
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <form
                                            onSubmit={handleSubmit(
                                                createUserPost
                                            )}
                                        >
                                            <div className="modal-body">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Autor
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="author2"
                                                        {...register(
                                                            "post_author"
                                                        )}
                                                    />
                                                    <p
                                                        className="text-danger"
                                                        style={{
                                                            height: 24 + "px",
                                                        }}
                                                    >
                                                        {errors.author?.message}
                                                    </p>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <label className="input-group-text">
                                                        Categoria
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="inputGroupSelect02"
                                                        // defaultValue="1"
                                                        {...register(
                                                            "post_category"
                                                        )}
                                                    >
                                                        <option defaultValue="1">
                                                            Post
                                                        </option>
                                                        <option defaultValue="2">
                                                            Artigo
                                                        </option>
                                                        <option defaultValue="3">
                                                            Grupo
                                                        </option>
                                                    </select>
                                                    <p className="text-danger">
                                                        {
                                                            errors.category
                                                                ?.message
                                                        }
                                                    </p>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Escreva sua
                                                        publicação...
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        id="exampleFormControlTextarea2"
                                                        rows="3"
                                                        {...register(
                                                            "post_textContent"
                                                        )}
                                                    ></textarea>
                                                    <p
                                                        className="text-danger"
                                                        style={{
                                                            height: 24 + "px",
                                                        }}
                                                    >
                                                        {
                                                            errors.textContent
                                                                ?.message
                                                        }
                                                    </p>
                                                </div>
                                                <div className="input-group mb-3">
                                                    <label className="input-group-text">
                                                        Imagem
                                                    </label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="inputGroupFile02"
                                                        {...register(
                                                            "post_file"
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Cancelar
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-success"
                                                >
                                                    Criar Post
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* jdskhf */}
                        </div>
                    </div>
                    {/* cada post */}
                    <div className="bg-white p-3 mt-2 shadow rounded ">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <img
                                    src="https://source.unsplash.com/collection/happy-people"
                                    alt="avatar"
                                    className="rounded-circle me-2 ms-2"
                                    style={{
                                        width: 38 + "px",
                                        height: 38 + "px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div>
                                    <p className="m-0 fw-bold">Selena Gomez</p>
                                    <p
                                        className="mb-1 text-muted text-opacity-75"
                                        style={{ fontSize: 0.8 + "em" }}
                                    >
                                        Publicado em
                                    </p>
                                </div>
                            </div>
                            <div>
                                {/* edit modal */}
                                <button
                                    type="button"
                                    className="border-0 bg-white"
                                    style={{ color: "gray", height: 25 + "px" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <RiEdit2Line
                                        style={{
                                            height: 18 + "px",
                                            width: 25 + "px",
                                        }}
                                    />
                                </button>

                                <div
                                    className="modal fade"
                                    id="exampleModal"
                                    tabIndex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5
                                                    className="modal-title"
                                                    id="exampleModalLabel"
                                                >
                                                    Editar post
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    id="closeEditModal"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <form
                                                onSubmit={handleSubmit(
                                                    updatePost
                                                )}
                                            >
                                                <div className="modal-body">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Autor
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="author"
                                                            {...register(
                                                                "edit_author"
                                                            )}
                                                            defaultValue="sdifjlsd"
                                                        />
                                                        <p
                                                            className="text-danger"
                                                            style={{
                                                                height:
                                                                    24 + "px",
                                                            }}
                                                        >
                                                            {
                                                                errors.author
                                                                    ?.message
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text">
                                                            Categoria
                                                        </label>
                                                        <select
                                                            className="form-select"
                                                            id="inputGroupSelect01"
                                                            defaultValue="1"
                                                            {...register(
                                                                "edit_category"
                                                            )}
                                                        >
                                                            <option defaultValue="1">
                                                                Post
                                                            </option>
                                                            <option defaultValue="2">
                                                                Artigo
                                                            </option>
                                                            <option defaultValue="3">
                                                                Grupo
                                                            </option>
                                                        </select>
                                                        <p className="text-danger">
                                                            {
                                                                errors.category
                                                                    ?.message
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Escreva sua
                                                            publicação...
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            id="exampleFormControlTextarea1"
                                                            defaultValue="skljdhf"
                                                            rows="3"
                                                            {...register(
                                                                "edit_textContent"
                                                            )}
                                                        ></textarea>
                                                        <p
                                                            className="text-danger"
                                                            style={{
                                                                height:
                                                                    24 + "px",
                                                            }}
                                                        >
                                                            {
                                                                errors
                                                                    .textContent
                                                                    ?.message
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <label className="input-group-text">
                                                            Imagem
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="inputGroupFile01"
                                                            {...register(
                                                                "edit_file"
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Fechar
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success"
                                                    >
                                                        Salvar mudanças
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* sdjf */}
                                {/* delete modal */}
                                <button
                                    type="button"
                                    className="border-0 bg-white"
                                    style={{ color: "gray", height: 25 + "px" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2"
                                >
                                    <MdDelete
                                        style={{
                                            height: 18 + "px",
                                            width: 25 + "px",
                                        }}
                                    />
                                </button>

                                <div
                                    className="modal fade"
                                    id="exampleModal2"
                                    tabIndex="-1"
                                    aria-labelledby="exampleModalLabel2"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5
                                                    className="modal-title"
                                                    id="exampleModalLabel2"
                                                >
                                                    Deletar Post
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    Tem certeza que deseja
                                                    deletar esse post?
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Não
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Sim
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* çoisajd */}
                        </div>
                        <div className="mt-1">
                            <span className="text-muted mb-2">
                                <BiCategoryAlt /> Post
                            </span>
                            {textoGrande.length > 500 ? (
                                <>
                                    <p className="mt-1">
                                        {textoGrande.slice(
                                            0,
                                            limitCharacteres.num
                                        )}
                                        <span
                                            onClick={(e) =>
                                                readMoreAndLess(
                                                    textoGrande.length
                                                )
                                            }
                                            className="text-primary ms-1 text-opacity-75"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {limitCharacteres.textToggle}
                                        </span>
                                    </p>
                                </>
                            ) : (
                                <p>{textoGrande}</p>
                            )}
                            <img
                                className="rounded img-fluid"
                                src="https://source.unsplash.com/collection/happy-people"
                                alt="image-post"
                                style={{
                                    width: 100 + "%",
                                    objectFit: "cover",
                                    maxHeight: 500 + "px",
                                }}
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RiEdit2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import axios from "axios";

export default function EditPostModal() {
    const editPostSchema = yup.object().shape({
        edit_author: yup.string(),
        edit_category: yup.string(),
        edit_textContent: yup.string(),
        edit_file: yup.mixed(),
    });

    const {
        register: registerEdit,
        handleSubmit: handleUpdatePost,
        formState: { errors: errorsEditPost },
        // reset: resetEditPost,
    } = useForm({ resolver: yupResolver(editPostSchema) });

    function updatePost(data) {
        let id =
            document.getElementById("editButtonModal").previousElementSibling
                .id;
        console.log(id);
        let dataToUpdate = {};
        for (let [key, value] of Object.entries(data)) {
            if (value !== "" && key !== "edit_file") {
                dataToUpdate[key] = value;
            }
        }
    }

    return (
        <>
            <button
                type="button"
                className="border-0 bg-white"
                style={{
                    color: "gray",
                    height: 25 + "px",
                }}
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal`}
                id="editButtonModal"
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
                id={`exampleModal`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
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
                        <form onSubmit={handleUpdatePost(updatePost)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Autor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        {...registerEdit("edit_author")}
                                    />
                                    <p
                                        className="text-danger"
                                        style={{
                                            height: 24 + "px",
                                        }}
                                    >
                                        {errorsEditPost.edit_author?.message}
                                    </p>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text">
                                        Categoria
                                    </label>
                                    <select
                                        className="form-select"
                                        id="inputGroupSelect01"
                                        {...registerEdit("edit_category")}
                                    >
                                        <option defaultValue="Post">
                                            Post
                                        </option>
                                        <option defaultValue="Artigo">
                                            Artigo
                                        </option>
                                        <option defaultValue="Grupo">
                                            Grupo
                                        </option>
                                    </select>
                                    <p className="text-danger">
                                        {errorsEditPost.edit_category?.message}
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Escreva sua publicação...
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        {...registerEdit("edit_textContent")}
                                    ></textarea>
                                    <p
                                        className="text-danger"
                                        style={{
                                            height: 24 + "px",
                                        }}
                                    >
                                        {
                                            errorsEditPost.edit_textContent
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
                                        {...registerEdit("edit_file")}
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
        </>
    );
}

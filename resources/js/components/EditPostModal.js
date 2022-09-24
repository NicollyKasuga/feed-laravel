import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function EditPostModal(props) {
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
    } = useForm({ resolver: yupResolver(editPostSchema) });

    function updatePost(data) {
        let dataToUpdate = {};
        for (let [key, value] of Object.entries(data)) {
            if (key !== "edit_file") {
                dataToUpdate[key] = value;
            }
        }
        axios.patch(`/posts/${props.id}`, dataToUpdate).then((response) => {
            toast.success("Post editado com sucesso!"),
                console.log(response),
                console.log(dataToUpdate);
        });
        props.hide();
    }

    return (
        <>
            <div
                className="modal show fade"
                style={{ display: "block", backgroundColor: "#000000cf" }}
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar post</h5>
                            <button
                                type="button"
                                className="btn-close"
                                id="closeEditModal"
                                onClick={props.hide}
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
                                        defaultValue={props.author}
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
                                        defaultValue={props.category}
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
                                        defaultValue={props.textContent}
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

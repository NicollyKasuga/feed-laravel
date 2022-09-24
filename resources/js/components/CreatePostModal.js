import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function CreatePostModal() {
    function createPost(data) {
        axios
            .post("/posts", {
                author: data.post_author,
                category: data.post_category,
                textContent: data.post_textContent,
                file: data.post_file[0],
            })
            .then((response) => {
                toast.success("Post criado com sucesso!");
                document.getElementById("closePostModal").click();
            });
    }

    const createPostSchema = yup.object().shape({
        post_author: yup.string().required("Campo obrigatório*"),
        post_category: yup.string().required("Campo obrigatório*"),
        post_textContent: yup.string().required("Campo obrigatório*"),
        post_file: yup.mixed(),
    });

    const {
        register: registerCreate,
        handleSubmit: handleCreatePost,
        formState: { errors: errorsCreatePost },
        // reset: resetCreatePost,
    } = useForm({ resolver: yupResolver(createPostSchema) });

    return (
        <>
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
                            <h5 className="modal-title" id="exampleModalLabel3">
                                Create Post
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                id="closePostModal"
                            ></button>
                        </div>
                        <form
                            encType="multipart/form-data"
                            onSubmit={handleCreatePost(createPost)}
                        >
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Autor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author2"
                                        {...registerCreate("post_author")}
                                    />
                                    <p
                                        className="text-danger"
                                        style={{
                                            height: 24 + "px",
                                        }}
                                    >
                                        {errorsCreatePost.post_author?.message}
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
                                        {...registerCreate("post_category")}
                                    >
                                        <option defaultValue="1">Post</option>
                                        <option defaultValue="2">Artigo</option>
                                        <option defaultValue="3">Grupo</option>
                                    </select>
                                    <p className="text-danger">
                                        {
                                            errorsCreatePost.post_category
                                                ?.message
                                        }
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Escreva sua publicação...
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea2"
                                        rows="3"
                                        {...registerCreate("post_textContent")}
                                    ></textarea>
                                    <p
                                        className="text-danger"
                                        style={{
                                            height: 24 + "px",
                                        }}
                                    >
                                        {
                                            errorsCreatePost.post_textContent
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
                                        id="inputImage"
                                        name="image"
                                        {...registerCreate("post_file")}
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
        </>
    );
}

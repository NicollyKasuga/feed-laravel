import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

export default function DeletePostModal(props) {
    function deletePost() {
        axios
            .delete(`/posts/${props.id}`)
            .then((response) => toast.success("Post deletado com sucesso!"));
        props.hide();
    }

    return (
        <>
            <div
                className="modal show fade"
                style={{ display: "block", backgroundColor: "#000000cf" }}
                id="exampleModal2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel2"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Deletar Post</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={props.hide}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Tem certeza que deseja deletar esse post?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={props.hide}
                            >
                                Não
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => deletePost()}
                            >
                                Sim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeletePostModal() {
    function deleteUserPost() {}

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
                            <h5 className="modal-title" id="exampleModalLabel2">
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
                            <p>Tem certeza que deseja deletar esse post?</p>
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
        </>
    );
}

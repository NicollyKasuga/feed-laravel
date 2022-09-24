import React, { useState, useEffect } from "react";
import DeletePostModal from "./DeletePostModal";
import EditPostModal from "./EditPostModal";
import { BiCategoryAlt } from "react-icons/bi";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import moment from "moment";

export default function PostCard() {
    const [allPosts, setAllPosts] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [tempdata, setTempdata] = useState([]);

    useEffect(() => {
        let getPosts = async () => {
            let response = await axios.get("/posts");
            setAllPosts(response.data);
        };
        getPosts();
    }, []);

    const [limitCharacteres, setLimitCharacteres] = useState({
        num: 500,
        textToggle: "Ler mais...",
    });

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

    function getData(id, author, category, textContent) {
        let tempData = [id, author, category, textContent];
        setTempdata((item) => [1, ...tempData]);
        setEditModal(!editModal);
    }

    function deleteData(id) {
        let tempData = [id];
        setTempdata((item) => [1, ...tempData]);
        setDeleteModal(!deleteModal);
    }

    return (
        <>
            {allPosts.map((currentPost, index) => (
                <div key={index} className="bg-white p-3 mt-2 shadow rounded ">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img
                                src={`https://source.unsplash.com/random/${Math.floor(
                                    Math.random() * 1000
                                )}`}
                                alt="avatar"
                                className="rounded-circle me-2 ms-2"
                                style={{
                                    width: 38 + "px",
                                    height: 38 + "px",
                                    objectFit: "cover",
                                }}
                            />
                            <div>
                                <p className="m-0 fw-bold">
                                    {currentPost.author}
                                </p>
                                <p
                                    className="mb-1 text-muted text-opacity-75"
                                    style={{ fontSize: 0.8 + "em" }}
                                >
                                    {`Publicado em ${moment(
                                        currentPost.created_at
                                    )
                                        .locale("pt")
                                        .format("LLLL")}`}
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button
                                className="border-0 bg-white"
                                style={{
                                    color: "gray",
                                    height: 25 + "px",
                                }}
                                onClick={() =>
                                    getData(
                                        currentPost.id,
                                        currentPost.author,
                                        currentPost.category,
                                        currentPost.textContent
                                    )
                                }
                            >
                                <RiEdit2Line
                                    style={{
                                        height: 18 + "px",
                                        width: 25 + "px",
                                    }}
                                />
                            </button>
                            <button
                                className="border-0 bg-white"
                                style={{
                                    color: "gray",
                                    height: 25 + "px",
                                }}
                                onClick={() => {
                                    deleteData(currentPost.id);
                                }}
                            >
                                <MdDelete
                                    style={{
                                        height: 18 + "px",
                                        width: 25 + "px",
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="mt-1">
                        <span className="text-muted mb-2">
                            <BiCategoryAlt /> {currentPost.category}
                        </span>
                        {currentPost.textContent.length > 500 ? (
                            <>
                                <p className="mt-1">
                                    {currentPost.textContent.slice(
                                        0,
                                        limitCharacteres.num
                                    )}
                                    <span
                                        onClick={(e) =>
                                            readMoreAndLess(
                                                currentPost.textContent.length
                                            )
                                        }
                                        className="text-primary ms-1 text-opacity-75"
                                        style={{
                                            cursor: "pointer",
                                        }}
                                    >
                                        {limitCharacteres.textToggle}
                                    </span>
                                </p>
                            </>
                        ) : (
                            <p>{currentPost.textContent}</p>
                        )}
                        <img
                            className="rounded img-fluid"
                            src={`https://source.unsplash.com/random/${Math.floor(
                                Math.random() * 1000
                            )}`}
                            alt="image-post"
                            style={{
                                width: 100 + "%",
                                objectFit: "cover",
                                maxHeight: 500 + "px",
                            }}
                        ></img>
                    </div>
                </div>
            ))}
            {editModal === true ? (
                <EditPostModal
                    id={tempdata[1]}
                    author={tempdata[2]}
                    category={tempdata[3]}
                    textContent={tempdata[4]}
                    hide={() => setEditModal(!editModal)}
                />
            ) : (
                ""
            )}

            {deleteModal === true ? (
                <DeletePostModal
                    id={tempdata[1]}
                    hide={() => setDeleteModal(!deleteModal)}
                />
            ) : (
                ""
            )}
        </>
    );
}

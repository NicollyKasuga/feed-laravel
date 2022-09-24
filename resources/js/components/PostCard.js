import React, { useState, useEffect } from "react";
import DeletePostModal from "./DeletePostModal";
import EditPostModal from "./EditPostModal";
import { BiCategoryAlt } from "react-icons/bi";
import moment from "moment";

export default function PostCard() {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        let getPosts = async () => {
            let response = await axios.get("/posts");
            setAllPosts(response.data);
        };
        getPosts();
    }, []);
    console.log(allPosts);

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

    setTimeout(() => {
        let currentModal = document.getElementById("closeEditModal");
        currentModal.click();
    }, 2000);

    return (
        <>
            {allPosts.map((currentPost, index) => (
                <>
                    <div
                        key={currentPost.id.toString()}
                        id={currentPost.id.toString()}
                        className="bg-white p-3 mt-2 shadow rounded "
                    >
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
                                <EditPostModal />
                                <DeletePostModal />
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
                                                    currentPost.textContent
                                                        .length
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
                </>
            ))}
        </>
    );
}

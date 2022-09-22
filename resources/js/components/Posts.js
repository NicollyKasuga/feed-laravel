import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";

export default function Posts() {
    const [limitCharacteres, setLimitCharacteres] = useState({
        num: 500,
        textToggle: "Ler mais...",
    });
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
                                className="form-control rounded-pill border-0 bg-gray pointer"
                                disabled
                                placeholder="O que está pensando, John?"
                                data-bs-toggle="modal"
                                data-bs-target="#createModal"
                            />
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
                                    <span className="text-muted">
                                        <BiCategoryAlt /> Post
                                    </span>
                                </div>
                            </div>
                            <div className="dropdown">
                                <BsThreeDots
                                    className=" dropdown-toggle "
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown button
                                </BsThreeDots>
                                <ul className="dropdown-menu">
                                    <li>
                                        <p
                                            onClick={() => updatePost()}
                                            className="dropdown-item"
                                        >
                                            Edit
                                        </p>
                                    </li>
                                    <li>
                                        <p
                                            onClick={() => deletePost()}
                                            className="dropdown-item"
                                        >
                                            Delete
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-2">
                            {textoGrande.length > 500 ? (
                                <>
                                    <p>
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
                                            className="text-primary ms-1"
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
                                className="rounded"
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
                    {/* final */}
                </div>
            </div>
        </>
    );
}

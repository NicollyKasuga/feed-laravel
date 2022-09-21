import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Header() {
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
            <h1>header</h1>
            <button onClick={() => createPost()}>Criar</button>
            <button onClick={() => updatePost()}>Atualizar</button>
            <button onClick={() => deletePost()}>Deletar</button>
        </>
    );
}

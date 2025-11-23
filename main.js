import { db, auth, provider } from "./firebaseConfig.js";
import {
    collection,
    doc,
    setDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

import {
    signInWithPopup,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

document.getElementById("googleBtn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        console.log("Usuário logado com Google:", user.email);

        await setDoc(doc(db, "Usuarios", user.uid), {
            email: user.email,
            nome: user.displayName,
            criadoEm: new Date()
        });

        alert("Logado com Google!");

    } catch (error) {
        console.error("Erro no login Google:", error);
        alert("Erro no login Google");
    }
});


document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("inId").value;
    const email = document.getElementById("inEmail").value;
    const password = document.getElementById("inPassword").value;

    try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "Usuarios", id), {
            email,
            criadoEm: new Date()
        });

        alert("Usuário cadastrado com sucesso!");

    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar");
    }
});


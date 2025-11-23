import { auth, db } from "./firebaseConfig.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

document.getElementById("formPerfil").addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (!user) {
        alert("Nenhum usuário autenticado!");
        return;
    }

    const nome = document.getElementById("nome").value;
    const nascimento = document.getElementById("nascimento").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    const interesses = [
        document.getElementById("interesse1").value,
        document.getElementById("interesse2").value,
        document.getElementById("interesse3").value,
    ];

    const i4 = document.getElementById("interesse4").value;
    const i5 = document.getElementById("interesse5").value;

    if (i4) interesses.push(i4);
    if (i5) interesses.push(i5);

    try {
        await setDoc(doc(db, "Usuarios", user.uid), {
            uid: user.uid,
            email: user.email,
            nome,
            nascimento,
            cidade,
            estado,
            interesses,
            cadastroCompleto: true,
            atualizadoEm: new Date()
        });

        alert("Cadastro concluído!");

        window.location.href = "dashboard.html";

    } catch (error) {
        console.error(error);
        alert("Erro ao salvar dados!");
    }
});

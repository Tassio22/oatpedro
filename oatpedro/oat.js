
let cursos = [];


function adicionarCurso() {
    const nome = document.getElementById('nome').value;
    const duracao = document.getElementById('duracao').value;

    if (nome === "" || duracao === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoCurso = {
        id: cursos.length + 1,
        nome: nome,
        duracao: duracao
    };
    cursos.push(novoCurso);
    atualizarListaCursos();

   
    document.getElementById('nome').value = '';
    document.getElementById('duracao').value = '';
}


function atualizarListaCursos() {
    const listaCursos = document.getElementById('lista-cursos');
    listaCursos.innerHTML = '';

    cursos.forEach(curso => {
        const cursoItem = document.createElement('li');
        cursoItem.innerHTML = `
            <table>
                <tr>
                    <th>ID</th>
                    <td>${curso.id}</td>
                </tr>
                <tr>
                    <th>Nome</th>
                    <td id="nome-${curso.id}" contenteditable="false">${curso.nome}</td>
                </tr>
                <tr>
                    <th>Duração</th>
                    <td id="duracao-${curso.id}" contenteditable="false">${curso.duracao}</td>
                </tr>
            </table>
            <button onclick="editarCurso(${curso.id})">Editar</button>
            <button onclick="salvarEdicao(${curso.id})" style="display: none;" id="salvar-${curso.id}">Salvar</button>
            <button onclick="removerCurso(${curso.id})">Remover</button>
        `;
        listaCursos.appendChild(cursoItem);
    });
}

// Função para remover um curso pelo ID
function removerCurso(id) {
    cursos = cursos.filter(curso => curso.id !== id);
    atualizarListaCursos();
}


function editarCurso(id) {
    document.getElementById(`nome-${id}`).contentEditable = true;
    document.getElementById(`duracao-${id}`).contentEditable = true;

   
    document.getElementById(`salvar-${id}`).style.display = 'inline-block';

  
    const editarBtn = document.querySelector(`button[onclick="editarCurso(${id})"]`);
    editarBtn.style.display = 'none';
}

function salvarEdicao(id) {
    const nomeEditado = document.getElementById(`nome-${id}`).innerText;
    const duracaoEditada = document.getElementById(`duracao-${id}`).innerText;

    
    const curso = cursos.find(curso => curso.id === id);
    curso.nome = nomeEditado;
    curso.duracao = duracaoEditada;

    document.getElementById(`nome-${id}`).contentEditable = false;
    document.getElementById(`duracao-${id}`).contentEditable = false;

  
    document.getElementById(`salvar-${id}`).style.display = 'none';

    
    const editarBtn = document.querySelector(`button[onclick="editarCurso(${id})"]`);
    editarBtn.style.display = 'inline-block';
}

function addNote(section) {
  const note = prompt(`Adicionar nota para "${section}":`);
  if (note) {
    const noteList = document.getElementById("note-list");
    const li = document.createElement("li");
    li.innerText = `${section}: ${note}`;
    noteList.appendChild(li);
  }
}
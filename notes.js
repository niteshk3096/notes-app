const fs = require("fs");

const addNotes = (title, body) => {
  const notes = loadData();
  const duplicate = notes.find((data) => data.title === title);
  if (!duplicate) {
    notes.push({
      title: title,
      body: body,
    });
    saveData(notes);
    console.log("Note added");
  } else {
    console.log("Note title already taken");
  }
};

const removeNotes = (title) => {
  const notes = loadData();
  const updatedNotes = notes.filter((data) => data.title !== title);
  saveData(updatedNotes);
  if (notes.length > updatedNotes.length) {
    console.log("Notes updated");
  } else {
    console.log("No note find");
  }
};

const listNote = () => {
  const data = loadData();
  console.log(data);
};

const readNote = (title) => {
  const notes = loadData();
  const readData = notes.find((data) => data.title === title);
  if (readData) {
    console.log(readData);
  } else {
    console.log(`Note not found with the title ${title}`);
  }
};

const saveData = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNote: listNote,
  readNote: readNote,
};

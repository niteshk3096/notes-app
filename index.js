const yargs = require("yargs");
const note = require("./notes");

//Add note
yargs.command({
  command: "add",
  describe: "Add note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.addNotes(argv.title, argv.body);
  },
});

//Remove note
yargs.command({
  command: "remove",
  describe: "Remove note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.removeNotes(argv.title);
  },
});

//list note
yargs.command({
  command: "list",
  describe: "List note",
  handler: function () {
    note.listNote();
  },
});

//Read note
yargs.command({
  command: "read",
  describe: "Read note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.readNote(argv.title);
  },
});
yargs.parse();
// console.log(yargs.argv);

// import fs from "fs";
// import Library from "./src/Library.js";

// function saveLibrary(library) {
//     fs.writeFileSync("libraryData.json", JSON.stringify(library), 'utf-8');
// }

// function loadLibraryData(fileName) {
//     try {
//         const data = fs.readFileSync(fileName+'.json', 'utf-8');
//         return JSON.parse(data);
//     } catch (err) {
//         console.log("No existing library found. Creating new one.");
//         const library = new Library('DHA Phase 1');
//         saveLibrary(library);
//         return library;
//     }
// }

// export { saveLibrary, loadLibraryData };
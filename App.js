// const heading = React.createElement("h1",{id:"heading"},"Hello world from React");

// console.log(heading)   creating a object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// ex:2
// create nested element

// const parent = React.createElement("div",{id:"perent"},React.createElement("div",{id:"children"},React.createElement("h1",{},"Namaste React code")))

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



// ex:3
// create a sibling / create same level of tag
const parent = React.createElement("div",{id:"perent"},React.createElement("div",{id:"children"},[React.createElement("h1",{},"Namaste React code"),React.createElement("h2",{},"h2 tag")]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

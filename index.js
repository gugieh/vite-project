import CustomDiv from "./modules/js/Hexdiv";

const row = 3
const hex = 4

for (let i = 0; i < row; i++) {
    const customDiv = new CustomDiv(hex)
    console.log(customDiv);
    document.body.append(customDiv.getRoot())
}

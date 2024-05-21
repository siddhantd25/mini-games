let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () => {
      turnO = true; 
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }

        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcon.classList.remove("hide");
}

const checkwinner = () => {
    for(let pattern of win)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
};


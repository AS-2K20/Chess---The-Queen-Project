var board = [["a8","b8","c8","d8","e8","f8","g8","h8"],

["a7","b7","c7","d7","e7","f7","g7","h7"],

["a6","b6","c6","d6","e6","f6","g6","h6"],

["a5","b5","c5","d5","e5","f5","g5","h5"],

["a4","b4","c4","d4","e4","f4","g4","h4"],

["a3","b3","c3","d3","e3","f3","g3","h3"],

["a2","b2","c2","d2","e2","f2","g2","h2"],

["a1","b1","c1","d1","e1","f1","g1","h1"]];

var queen = {
    position:
    {
        x:0,
        y:0
    }
}

function move(num,dir){
    
    let temp_x;
    let temp_y;
    switch(dir){
        case 'E': 
            temp_y = queen.position.y+num;
        if(temp_y>8 || temp_y<0){           
            stop_program();
        }
        else{
            queen.position.y=temp_y;
        }
        break;
        case 'S':
             temp_x = queen.position.x+num;
        if(temp_x>8 || temp_x<0){            
            stop_program();
        }
        else{
            queen.position.x=temp_x;
        }
        break;
        case 'W': 
            temp_y = queen.position.y-num;
        if(temp_y>8 || temp_y<0){            
            stop_program();
        }
        else{
            queen.position.y=temp_y;
        }
        break;
        case 'N':
             temp_x = queen.position.x-num;
        if(temp_x>8 || temp_x<0){            
            stop_program();
        }
        else{
            queen.position.x=temp_x;
        }
        break;
        case 'SE':
            temp_x = queen.position.x+num;
            temp_y=queen.position.y+num;
        if((temp_x>8 || temp_x<0) && (temp_y>8 ||temp_y<0)){           
            stop_program();
        }
        else{
            queen.position.x=temp_x;
            queen.position.y=temp_y;
        }
        break;
        case 'SW':
            temp_x = queen.position.x+num;
            temp_y=queen.position.y-num;
        if((temp_x>8 || temp_x<0) && (temp_y>8 || temp_y<0)){
            stop_program();
        }
        else{
            queen.position.x=temp_x;
            queen.position.y=temp_y;
        }
        break;
        case 'NE':
            temp_x=queen.position.x-num;
            temp_y=queen.position.y+num;
        if((temp_x>8 || temp_x<0) && (temp_y>8 || temp_y<0)){            
            stop_program();
        }
        else{
            queen.position.x=temp_x;
            queen.position.y=temp_y;
        }
        break;
        case 'NW': 
            temp_x=queen.position.x-num;
            temp_y=queen.position.y-num;
        if((temp_x>8 || temp_x<0) && (temp_y>8 || temp_y<0)){
            stop_program();
        }
        else{
            queen.position.x=temp_x;
            queen.position.y=temp_y;
        }
        break;             
            
    }
}

function stop_program(){  
            console.log("Incorrect Or Out of Boundary Move");   
            document.write("Incorrect Or Out of Boundary Move");

            throw new Error("Please Give Correct Input!");
}


function play(){
    var a = document.getElementById("postion").value;
    var value = a.split(" ");    
    value.forEach(element => {
        let num = Number(element.slice(element.length -1 ));
        let dir = element.slice(0,element.length-1);
        if ((num == NaN) || (dir=="") || (num.length)>=3 || (dir.length)>=3) {
            stop_program();           
        }
        else{        
        move(num,dir);
        }
    });   
    
        console.log("Your Position:"+board[queen.position.x][queen.position.y]);
        document.write("Your Position:"+board[queen.position.x][queen.position.y]);
    
    
}
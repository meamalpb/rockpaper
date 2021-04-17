//object where random values/choice are assigned to the players
val={};

//Used to show the different choices the players make in each iteration
rps = ['rock','paper','scissors'];
choice={}

//declaration of resulting object to be returned
//object of form l[iteration][first player no.][second player no.] = total wins till that iteration
sol={}
for(i=0;i<50;i++){
    sol[i] = {};
    choice[i] = {};
}
for(i=0;i<50;i++){
    for(j=1;j<5;j++){
        sol[i][j]={1:0,2:0,3:0,4:0};
    }
}

//main function

for(var k=0;k<50;k++){
    
    //assign random choices to the player with Math.random
    // 0-rock
    // 1-paper
    // 2-scissor
    for(var j =1;j<5;j++){
        val[j]= Math.floor(Math.random() * 3);
        choice[k][j] = rps[val[j]];
    }
    

    for(i=1;i<5;i++){
        for(j=1;j<5;j++){
           if (val[i]-val[j]==1){
                sol[k][i][j]++ ;   
           }
           else if(val[i]-val[j]==2){
               sol[k][j][i]++;
           }
        }
    }

    //to get total points we accumulate the points from previous iterations
    if(k<49){
        for(i=1;i<5;i++){
            for(j=1;j<5;j++){
                sol[k+1][i][j]+=sol[k][i][j];
    }}}
        
}

//to make sols of a player with himself = '-'
for(i=0;i<50;i++){
    for(j=1;j<5;j++){
        sol[i][j][j]='-';
    }
}


module.exports = {sol,choice};

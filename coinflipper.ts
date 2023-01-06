let ontails: boolean = false;

	function flipAni(random){
		setTimeout(tails, 200);
		setTimeout(heads, 400);
		setTimeout(tails, 600);
		setTimeout(heads, 800);
		setTimeout(tails, 1000);
		setTimeout(heads, 1200);
		setTimeout(tails, 1400);
		setTimeout(heads, 1600);
		setTimeout(tails, 1800);
		setTimeout(heads, 2000);
		if (random == 1)
		{
			setTimeout(tails, 2200);
		}

	}

	function toss(){
    let random: number = Math.floor(Math.random() * 2);

    flipAni(random);


}

function heads(){
document.getElementById("coin").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2005-Penny-Uncirculated-Obverse.png/800px-2005-Penny-Uncirculated-Obverse.png";
		ontails = false;
}

function tails(){
document.getElementById("coin").src = "https://upload.wikimedia.org/wikipedia/commons/e/e5/2005_Penny_Rev_Unc_D.png";
		ontails = true;
}

	function flip(){

		if (ontails == false){
		tails();
	}
	else{

		heads();
	}


	
	}
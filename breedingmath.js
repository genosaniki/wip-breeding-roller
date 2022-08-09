function clearBabies(){
  $("#errortext1").text("");
  $("#Baby1").text("");
  $("#Breed1").text("");
  $("#Health1").text("");
  $("#Ear1").text("");
  $("#Tail1").text("");
  $("#Power1").text("");
  $("#Genotype1").text("");
    $("#Chimgeno1").text("");
  $("#Bodytype1").text("");
  $("#Phenotype1").text("");
    $("#Chimpheno1").text("");
  $("#Gender1").text("");
  $("#Markmut1").text("");
  $("#Mutation1").text("");


// this checks that all of the parent info is correct
// if the parent info is incorrect, it turns false
    allCorrect = new Boolean;
// This checks if the Chimera mutation is present
// If Chimera is present, it turns True
    isChimera = new Boolean;

/*-------------------------------- HOW MANY BABIES -------------------------------------------*/

$(document).ready(function(){
$("#randomizer").click(function(){

$P1Breed = $("#sire-breed").find(":selected").text();
$P2Breed = $("#dam-breed").find(":selected").text();
$Babies = 1;


if($P1Breed === "Altite" || $P2Breed === "Altite"){
      $num = Math.floor((Math.random() * 100) + 1);
      if($num > 66){
        $Babies = 3;
      }
      if($num <= 66 && $num > 33){
        $Babies = 2;
      }
      if($num <= 33){
        $Babies = 1;
      }
    }

calculations($Babies);

});
});

/*--------------------------------- BABY FUNCTION ------------------------------------------*/

function calculations($Babies){
    clearBabies();

    $P1Breed = $("#sire-breed").find(":selected").text();
    $P2Breed = $("#dam-breed").find(":selected").text();
    $P1Ear = $("#sire-Ear").find(":selected").text();
    $P2Ear = $("#dam-Ear").find(":selected").text();
    $P1Tail = $("#sire-Tail").find(":selected").text();
    $P2Tail = $("#dam-Tail").find(":selected").text();
    $P1Bodytype = $("#sire-Bodytype").find(":selected").text();
    $P2Bodytype = $("#dam-Bodytype").find(":selected").text();
    $ParentGeno1 = $("#P1").val().split("/");
    $ParentGeno2 = $("#P2").val().split("/");
    $DadGenes = $ParentGeno1.slice(1);+
    $MomGenes = $ParentGeno2.slice(1);

    $errormessage = "";

    allCorrect = true;
    isChimera = false;

// THESE ARE THE BASE ABBREVIATIONS
    $BaseA = ["S"];
    $BaseB = ["Ss"];
    $BaseC = ["N"];
    $BaseD = ["nn"];

// PATTERN ABBREVIATIONS
    $patA = ["SP"];
    $patB = ["LA"];
    $patC = ["DR"];

    for(i = 0; i  < $Babies; i++){
    $BASE = [];
    $PAT = [];
    $GENO = [];
    $PHENO = "";
    $PBASE = "";
    $CHIMBASE = [];
    $CHIMPBASE = [];
    $CHIMGENO = [];
    $CHIMPHENO = [];
    $BEar = "";
    $BBodytype = "";
    $BMutation = "";
    $BMarkmut = "";


// FLIP A COIN AND PICK EITHER DAD'S BASE OR MOM'S BASE
    let $DadBase = $ParentGeno1[0];
    let $MomBase = $ParentGeno2[0];

    const sBases = ["S","D","N","C"];
    const randBase = Math.floor(Math.random() * sBases.length);

      if((document.getElementById("P1").value.length == 0) || (document.getElementById("P2").value.length == 0)){
        alert("Geno string missing!");
        allCorrect = false;
      } else {
        if($DadBase && $MomBase){
          $number = Math.floor((Math.random() * 100) + 1);
          if($number <= 45){
            $BASE.push($DadBase);
          } else if($number > 45 && $number <= 90){
            $BASE.push($MomBase);
          } else if($number > 90){
            $BASE.push(sBases[randBase]);
          }
        }
      }

console.log("----- CLICKED -----");
console.log("Successful: " + allCorrect);


// HOW THE BASE WILL SHOW UP IN THE PHENO
      if($BASE.slice(0,1).toString() === $BaseA.toString()){
        $PBASE = "Sand";
      }
      if($BASE.slice(0,1).toString() === $BaseB.toString()){
        $PBASE = "Dirt";
      }
      if($BASE.slice(0,1).toString() === $BaseC.toString()){
        $PBASE = "Night";
      }
      if($BASE.slice(0,1).toString() === $BaseD.toString()){
        $PBASE = "Cloud";
      }

makeGeno();
$GENO = $babyGenes;
$PHENO = $babyPheno;

//PATTERN GENO

let $DadPat = $ParentGeno1[1];
let $MomPat = $ParentGeno2[1];

const sPatterns = ["SP","DR","LA"];
const randPattern = Math.floor(Math.random() * sBases.length);

  if((document.getElementById("P1").value.length == 1) || (document.getElementById("P2").value.length == 2)){
    alert("Geno string missing!");
    allCorrect = false;
  } else {
    if($DadPat && $MomPat){
      $number = Math.floor((Math.random() * 100) + 1);
      if($number <= 45){
        $BASE.push($DadPat);
      } else if($number > 45 && $number <= 90){
        $BASE.push($MomPat);
      } else if($number > 90){
        $BASE.push(sPatterns[randPattern]);
      }
    }
  }

console.log("----- CLICKED -----");
console.log("Successful: " + allCorrect);


// HOW THE PATTERN WILL SHOW UP IN THE PHENO
      if($PAT.slice(0,1).toString() === $PatA.toString()){
        $PBASE = "Spotted";
      }
      if($BASE.slice(0,1).toString() === $PatB.toString()){
        $PBASE = "Lashed";
      }
      if($BASE.slice(0,1).toString() === $PatC.toString()){
        $PBASE = "Drunk";
      }


makeGeno();
$GENO = $babyGenes;
$PHENO = $babyPheno;
/*----------------------------- BREED / GENDER / EARS / TAILS ----------------------------------*/

      $Breed = "";
      $Ear = "";
      $Tail = "";

      if($P1Breed === "Breed" || $P2Breed === "Breed"){
        alert("Please pick a breed!");
        allCorrect = false;
      }

// Breed 1
      if($P1Breed === "Altite" && $P2Breed === "Altite"){
        $Breed = "Altite";
      }




/*---------------------------------------------------------*/

// GENDER
      $Gender = "";
      $num = Math.floor((Math.random() * 2) + 1);
      if($num < 2){
        $Gender = "Female";
      } else {
        $Gender = "Male";
      }

// HEALTH
      $Health = "Healthy";
      $Status = "Rank 1";
      const diseases = ["Blind","Frail","Deaf","Lame"];
      const randHealth = Math.floor(Math.random() * diseases.length);

      if($("#inbred").is(":checked")){
            $number = Math.floor((Math.random() * 50) + 1);
            if($number <= 30){
            $Status = "Inbred";
            $Health = "Stillborn";
          } else if($number > 30 && $number <= 45){
            $Status = "Inbred";
            $Health = (diseases[randHealth]);
          } else if($number > 45 && $number <= 50){
            $Status = "Inbred";
          }
        }

// EARS
      if($P1Ear === "Ear" || $P2Ear === "Ear"){
        alert("Please pick an Ear Type!");
        allCorrect = false;
      }

      if($P1Ear && $P2Ear){
        $num = Math.floor((Math.random() * 100) + 1);
        if($num <= 50){
          $BEar = $P1Ear;
        }
        if($num <= 100 && $num > 50){
          $BEar = $P2Ear;
        }
      }

 // TAILS
        if($P1Ear === "Tail Type" || $P2Ear === "Tail Type"){
          alert("Please pick a Tail Type!");
          allCorrect = false;
        }

        if($P1Tail && $P2Tail){
          $num = Math.floor((Math.random() * 100) + 1);
          if($num <= 50){
            $BTail = $P1Tail;
          }
          if($num <= 100 && $num > 50){
            $BTail = $P2Tail;
          }
        }
/*----------------------------------- HAIR TYPES / MUTATIONS ----------------------------------------*/

// BODY TYPES
      if($P1Bodytype === "Hair" || $P2Bodytype === "Hair"){
         alert("Please pick a Hair Type!");
         allCorrect = false;
      }

      if($P1Bodytype && $P2Bodytype){
        $num = Math.floor((Math.random() * 100) + 1);
        if($num <= 50){
          $BBodytype = $P1Bodytype;
        }
        if($num > 50){
          $BBodytype = $P2Bodytype;
        }
      }
// MUTATIONS: MARKINGS
const markMuts = ["ALBINO |","LEUCISTIC |","MELANISTIC |"];
const randMM = Math.floor(Math.random() * markMuts.length);

        $number = Math.floor((Math.random() * 100) + 1);
        if($number > 0 && $number <= 8){
          $BMarkmut = markMuts[randMM];
        }
        if($number > 8 && $number <= 10){
          $BMarkmut += "CHIMERA |";
          isChimera = true;
        } else {
          isChimera = false;
        }
        if($number > 10){
          $BMarkmut = "";
        }

// MAKE CHIMERA GENO
        if(isChimera == true){
          $number = Math.floor((Math.random() * 100) + 2);
            if($number <= 45){
              $CHIMBASE.push($DadBase);
            } else if($number > 45 && $number <= 90){
              $CHIMBASE.push($MomBase);
            } else if($number > 90){
              $CHIMBASE.push(sBases[randBase]);
            }
          if($CHIMBASE.slice(0,1).toString() === $BaseA.toString()){
            $CHIMPBASE = "Base A";
          }
          if($CHIMBASE.slice(0,1).toString() === $BaseB.toString()){
            $CHIMPBASE = "Base B";
          }
          if($CHIMBASE.slice(0,1).toString() === $BaseC.toString()){
            $CHIMPBASE = "Base C";
          }

          makeChim();
          $CHIMGENO = $babyGenes2;
          $CHIMPHENO = $babyPheno2;
        }


// MUTATIONS: PHYSICAL

  var physMuts = ["MUT 1","MUT 2","MUT 3","MUT 4","MUT 5"];
  var randPM = Math.floor(Math.random() * physMuts.length);

        $number = Math.floor((Math.random() * 100) + 1);
        if($number == 0 && $number < 20){
            $BMutation = physMuts[randPM];
          }
        if($number > 20){
            $BMutation += "";
          }



/*-------------------------------- PUT IT ALL TOGETHER -------------------------------------------*/

if($("#rank").is(":checked")){
      $number = Math.floor((Math.random() * 2) + 1);
      console.log($number);
      if($number < 2){
      allCorrect = false;
    }
  }

       if(allCorrect === false){
        $("#errortext" + (i + 1)).text("The breeding was unsuccessful.");
      } else {
        $("#Baby" + (i + 1)).text((i + 1) + ") ");
        $("#Gender"+ (i + 1)).text($Gender + " - ");
        $("#Breed" + (i + 1)).text($Breed);
        $("#Health" + (i + 1)).text($Status + " - " + $Health);
        $("#Genotype"+ (i + 1)).text($BASE);
        $("#Phenotype"+ (i + 1)).text($PBASE);
        $("#Ear" + (i + 1)).text($BEar + " Ear");
        $("#Tail" + (i + 1)).text($BTail + " Tail");
        $("#Bodytype" + (i + 1)).text($BBodytype + ", ");
        $("#Markmut" + (i + 1)).text($BMarkmut + " ");
        $("#Mutation" + (i + 1)).text($BMutation);
        if($babyGenes.length > 0){
          $("#Genotype" + (i + 1)).text($BASE + "/" + $GENO);
          $("#Phenotype"+ (i + 1)).text($PBASE + ", with " + $PHENO);
        }
        if(isChimera == true && $babyGenes2.length < 1){
            $("#Chimgeno"+ (i + 1)).text("//" + $CHIMBASE);
            $("#Chimpheno"+ (i + 1)).text(" // " + $CHIMPBASE);
        } else if(isChimera == true){
          $("#Chimgeno" + (i + 1)).text("//" + $CHIMBASE + "/" + $CHIMGENO);
          $("#Chimpheno"+ (i + 1)).text(" // " + $CHIMPBASE + ", with " + $CHIMPHENO);
        }
        }

  }
}

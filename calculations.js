// these are the passrates. rather than tying all the numbers individually,
// they are declared at the top and easily editable in case the rates change
  var cRecrate = 45;
  var cDomrate = 100;

function makeGeno(){
  // these empty arrays will contain the raw geno and pheno values
  // these are later turned into text strings and pushed to the ful geno
  var genoArray = [];
  var phenoArray = [];



/*--------------------------------------------------------------------------------------*/
/*-------------------------------- CALC HELL -------------------------------------------*/
/*--------------------------------------------------------------------------------------*/

// common genes calc
$.ajax({
        url: "gcommon.json",
        async: false,
        dataType: 'json',
        success: function(data) {
          $.each(data.cGenes, function(i, c) {
            if($DadGenes.includes(c.rec) || $DadGenes.includes(c.dom) || $MomGenes.includes(c.rec) || $MomGenes.includes(c.dom)){
              $passrate = Math.floor((Math.random() * 100) + 1);
            //  console.log($passrate);
              if($passrate > 0){
                // if dad or mom have XX gene...
                  if($DadGenes.includes(c.dom) || $MomGenes.includes(c.dom)){
                    if($passrate <= cDomrate && $passrate > (cDomrate/5)){
                      genoArray.push(c.rec);
                      // if dad AND mom have XX gene...
                    } else if($DadGenes.includes(c.dom) && $MomGenes.includes(c.dom)){
                        if($passrate <= ((cDomrate/5) * 2)){
                          genoArray.push(c.dom);
                      } // if dad has XX and mom has nX
                    } else if($DadGenes.includes(c.dom) && $MomGenes.includes(c.rec)){
                        if($passrate <= (cDomrate/5)){
                          genoArray.push(c.dom);
                      } // if dad has nX and mom has XX
                    } else if($DadGenes.includes(c.rec) && $MomGenes.includes(c.dom)){
                        if($passrate <= (cDomrate/5)){
                          genoArray.push(c.dom);
                      }
                    } // if dad AND mom have nX gene....
                  } else if($DadGenes.includes(c.rec) && $MomGenes.includes(c.rec)){
                      if($passrate <= (cRecrate/5)){
                        genoArray.push(c.dom);
                    } else if($passrate > (cRecrate/5) && $passrate <= (cRecrate*2)){
                      genoArray.push(c.rec);
                    } // if either dad or mom as nX
                  } else if($DadGenes.includes(c.rec) || $MomGenes.includes(c.rec)){
                    if($passrate <= cRecrate){
                      genoArray.push(c.rec);
                    }
                  }
                }
              }
          });
        }
      });


/*--------------------------------------------------------------------------------------*/
/*------------------------------- PHENO STRING -----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

// common pheno
$.ajax({
        url: "gcommon.json",
        async: false,
        dataType: 'json',
        success: function(data) {
          $.each(data.cGenes, function(i, c) {
            if(genoArray.includes(c.rec) || genoArray.includes(c.dom)){
            phenoArray.push(c.phen);
          }
        });
      }
    });


/*------------------------------- COMPILE GENO -----------------------------------------*/

$phenoString = phenoArray.join(", ");
$babyGenes = genoArray.join("/");
  if(genoArray.length > 1){
    $babyPheno = $phenoString.replace(/("[^"]+"|\w+)$/, "and $1");
  } else {
    $babyPheno = $phenoString;
  }

  console.log("Geno: " + $babyGenes);
  console.log("Pheno: " + $babyPheno);
}

function makeChim(){
  // these empty arrays will contain the raw geno and pheno values
  // these are later turned into text strings and pushed to the ful geno
  var genoArray2 = [];
  var phenoArray2 = [];



/*--------------------------------------------------------------------------------------*/
/*-------------------------------- CALC HELL -------------------------------------------*/
/*--------------------------------------------------------------------------------------*/

// common genes calc
$.ajax({
        url: "gcommon.json",
        async: false,
        dataType: 'json',
        success: function(data) {
          $.each(data.cGenes, function(i, c) {
            if($DadGenes.includes(c.rec) || $DadGenes.includes(c.dom) || $MomGenes.includes(c.rec) || $MomGenes.includes(c.dom)){
              $passrate = Math.floor((Math.random() * 100) + 1);
            //  console.log($passrate);
              if($passrate > 0){
                // if dad or mom have XX gene...
                  if($DadGenes.includes(c.dom) || $MomGenes.includes(c.dom)){
                    if($passrate <= cDomrate && $passrate > (cDomrate/5)){
                      genoArray2.push(c.rec);
                      // if dad AND mom have XX gene...
                    } else if($DadGenes.includes(c.dom) && $MomGenes.includes(c.dom)){
                        if($passrate <= ((cDomrate/5) * 2)){
                          genoArray2.push(c.dom);
                      } // if dad has XX and mom has nX
                    } else if($DadGenes.includes(c.dom) && $MomGenes.includes(c.rec)){
                        if($passrate <= (cDomrate/5)){
                          genoArray2.push(c.dom);
                      } // if dad has nX and mom has XX
                    } else if($DadGenes.includes(c.rec) && $MomGenes.includes(c.dom)){
                        if($passrate <= (cDomrate/5)){
                          genoArray2.push(c.dom);
                      }
                    } // if dad AND mom have nX gene....
                  } else if($DadGenes.includes(c.rec) && $MomGenes.includes(c.rec)){
                      if($passrate <= (cRecrate/5)){
                        genoArray2.push(c.dom);
                    } else if($passrate > (cRecrate/5) && $passrate <= (cRecrate*2)){
                      genoArray2.push(c.rec);
                    } // if either dad or mom as nX
                  } else if($DadGenes.includes(c.rec) || $MomGenes.includes(c.rec)){
                    if($passrate <= cRecrate){
                      genoArray2.push(c.rec);
                    }
                  }
                }
              }
          });
        }
      });


/*--------------------------------------------------------------------------------------*/
/*------------------------------- PHENO STRING -----------------------------------------*/
/*--------------------------------------------------------------------------------------*/

// common pheno
$.ajax({
        url: "gcommon.json",
        async: false,
        dataType: 'json',
        success: function(data) {
          $.each(data.cGenes, function(i, c) {
            if(genoArray2.includes(c.rec) || genoArray2.includes(c.dom)){
            phenoArray2.push(c.phen);
          }
        });
      }
    });



/*------------------------------- COMPILE GENO -----------------------------------------*/

$phenoString2 = phenoArray2.join(", ");
$babyGenes2 = genoArray2.join("/");
  if(genoArray2.length > 1){
    $babyPheno2 = $phenoString2.replace(/("[^"]+"|\w+)$/, "and $1");
  } else {
    $babyPheno2 = $phenoString2;
  }

  console.log("Chim Geno: " + $babyGenes2);
  console.log("Chim Pheno: " + $babyPheno2);
}

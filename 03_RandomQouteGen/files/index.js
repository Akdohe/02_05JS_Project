 const quote = [
            "The best way to predict the future is to create it. – Peter Drucker",
            "Do not wait for leaders; do it alone, person to person. – Mother Teresa",
            "Everything you can imagine is real. – Pablo Picasso",
            "Believe you can and you're halfway there. – Theodore Roosevelt",
            "You miss 100% of the shots you don't take. – Wayne Gretzky",
            "It always seems impossible until it's done. – Nelson Mandela",
            "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
        ];
// Declaring the  set here more faster data  structure exixsting or not for that purpose
        const usedIndexes = new Set(); //declarning new instance of set class ,ake sure the Set should be capitalized 
        const quoteElement = document.getElementById("quote");
        // populate para with quotes
      
        function generateQuote(){
        // quoteElement.innerHTML = "Hello wprdl!"
        while(true) {
        const randomIdx = Math.floor(Math.random() * quote.length);//<ath.Floor will rounnd down the num
        if (usedIndexes.has(randomIdx)) continue   
    
        const quotes = quote[randomIdx]
        quoteElement.innerHTML= quotes;
        usedIndexes.add[randomIdx]
        break;
        }
    }
// ✅ Correctly capitalized class name
//const usedIndexes = new Set(); }
function generatequote() {
    const quotes = [
      {
            quote: "This is my When you are eight years old, nothing is any of your business. quote" ,
            author: "Plutarch"
        } , 
        {
            quote: "It is certainly desirable to be well descended, but the glory belongs to our ancestors. is my second quote" ,
            author: "Lenny Bruce "
        } , 
        {
            quote: "This is The marvel of all history is the patience with which men and women submit to burdens unnecessarily laid upon them by their governments. thrid quote" ,
            author: "William H. Borah"
        } , 
        {
            quote: "This The important thing was to love rather than to be loved. my foruth quote" ,
            author: "W. Somerset Maugham"
        } , 
        {
            quote: "It's all right to have butterflies in your stomach. Just get them to fly in formation." ,
            author: "Dr. Rob Gilbert"
        } ,
        {
            quote: "This There is nothing new under the sun but there are lots of old things we don't know. my fith quote" ,
            author: "Ambrose Bierce"
        } ,
        {
            quote: "No one really listens to anyone else, and if you try it for a while you'll see why. is my fith quote" ,
            author: "Mignon McLaughlin"
        } ,
        {
            quote: "Though I am grateful for the blessings of wealth, it hasn't changed who I am. My feet are still on the ground. I'm just wearing better shoes. fith quote" ,
            author: "Oprah Winfrey"
        } ,
        {
            quote: "This is the challenge of writing. You have to be very emotionally engaged in what you re doing, or it comes out flat. You can t fake your way through this." ,
            author: "Gordon Atkinson,"
        } ,
        {
            quote: "We have to fight them daily, like fleas, those many small worries about the morrow, for they sap our energies. quote" ,
            author: "Etty Hillesum,"
        } 
    ];

    let currentquote = Math.floor(Math.random() * quotes.length);

    document.getElementById('quotation').innerHTML ='&quot;' + quotes[currentquote].quote + '&quot;' ;
    document.getElementById('author').innerHTML = "- " + quotes[currentquote].author;


}

window.onload = function() {
    generatequote();
    document.getElementById("generate").addEventListener("click", generatequote())

}
// dekh bhai kya kariyo span me bhar diya sare text
// ko then span pe gsap laga diyo
// stagger = ek ke baad ek
// scrub = sync scroller and animation reverse possible
// pura nhi chalega jitna chlana hai utna cahlega samjhe maurya jii
// error ke chance " " andar likha kar
// locomotive lagane se smooth ho jayega but 
// wraper div ki height nhi honi chaiye and 
var allh1 = document.querySelectorAll("h1");
allh1.forEach(function (elem) {
    var clutter = "";
    var val = elem.textContent.split("");
    val.forEach(function (e) {
        clutter+=`<span>${e}</span>`
    })
    elem.innerHTML = clutter;
    console.log(elem);
})

gsap.to("#page2 h1 span",{
    color: "#E3E3C4",
    // duration: 10,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 60%",
        end: "top -10%",
        markers: true,
        scrub:true
    }
})






$(document).ready( function() {
  var cards = $(".card");
  cards.eq(0).show();

  var cardIndex = 0;

  function showNextCard() {
    cards.eq(cardIndex % cards.length)
    .fadeOut(2000);
    ++cardIndex;
    cards.eq(cardIndex % cards.length).fadeIn(2000)
  };

  $("#next-button").click(function(){
      showNextCard();
  });
  console.log(cards)
});










//
//
// if ((cards.length % 3) === 0 ) {
//   cardIndex=0;
// }
//





































  // $(".card").click(function(){
  //   $(this).addClass("fade-out");
  // });
  // $(".card-last").click(function() {
  //   $(".card:nth-child(3)").removeClass("fade-out");
  //   $(".card:nth-child(3)").addClass("fade-in");
  //   setTimeout (function() {
  //     $(".card").removeClass("fade-out");
  //     $(".card").removeClass("fade-in");
  //   }, 1000);
  // });

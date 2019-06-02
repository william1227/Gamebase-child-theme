window.onscroll = function() {scrollMenu()};

function scrollMenu() {
// Viser sekundær menu når man scroller ned på siden
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
	document.getElementById("myNavBar").style.display = "block";

  } else {
    document.getElementById("myNavBar").style.display = "none";

  }
	
// Viser en knap til at gå til toppen af siden
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
	document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// sender brugeren til toppen af siden med smooth animation (via myBtn knappen)
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  window.scrollTo({
            "behavior": "smooth",
            "left": 0,
            "top": 0
        });
}



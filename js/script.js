// tooltip
$(function () {
    // for standard
    $('#card1').tooltip({
      title: "<h1>Standard</h1> <p>Repellendus eius id, architecto, voluptas nostrum nesciunt unde ipsam doloribus veniam ratione libero in, tempora similique! Inventore voluptatem quisquam ratione autem saepe distinctio provident quos, qui nam maiores velit quasi.</p>",
      html: true,
      placement: "auto",
      animation: true
    });
     // for unlimited
     $('#card2').tooltip({
      title: "<h1>Unlimited</h1> <p>Repellendus eius id, architecto, voluptas nostrum nesciunt unde ipsam doloribus veniam ratione libero in, tempora similique! Inventore voluptatem quisquam ratione autem saepe distinctio provident quos, qui nam maiores velit quasi.</p>",
      html: true,
      placement: "auto",
      animation: true
    });
    // counter au sein du card
      $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    // autre maniere de faire avec js 
    // var counters = $(".count");
    // var countersQuantity = counters.length;
    // var counter = [];

    // for (i = 0; i < countersQuantity; i++) {
    //   counter[i] = parseInt(counters[i].innerHTML);
    // }

    // var count = function(start, value, id) {
    //   var localStart = start;
    //   setInterval(function() {
    //     if (localStart < value) {
    //       localStart++;
    //       counters[id].innerHTML = localStart;
    //     }
    //   }, 500);
    // }

    // for (j = 0; j < countersQuantity; j++) {
    //   count(0, counter[j], j);
    // }
    

  });


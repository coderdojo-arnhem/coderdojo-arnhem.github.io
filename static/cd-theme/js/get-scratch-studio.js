(function($) {
    fetch("/static/data/scratch-studio.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
    });
})();
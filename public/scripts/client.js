/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $('#form').click(function(event) {
    event.preventDefault();
    loadTweets();
    if ($('#textbox').val() === null || $('#textbox').val() === '') {
      $("#alert1").slideDown(200);
    } else {
      $("#alert1").slideUp(200);

      $.ajax('/tweets', {method: 'POST', data: $(this).serialize()})
      .then(function (tweetData) {
        console.log('SSomething else:', tweetData);
        renderTweet(tweetData);
        $('#textbox').val('');

      });
    }

 

  });

  const escape = (str) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  function renderTweet(tweetdata) {
    for (let item = 0; item < tweetdata.length; item++) {
      const escape = (str) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
      let userTweet = `
      <section id="tweet-container">
        <article class="oldtweet">
          <header class="tweethead">
            <img src="${escape(tweetdata[item].user.avatars)}"/> 
            <p class="name">${escape(tweetdata[item].user.name)}</p>
            <p class="handle">${escape(tweetdata[item].user.handle)}</p>
          </header>
        <div class="tweetbody">
          <p>${escape(tweetdata[item].content.text)} </p>            
        </div>
        <footer class="tweetfoot">
        <p class=timecounter>hgjhgcjgfcjg</p>
        </footer>
        </article>
      </section>`;
      $('#tweet-container').prepend(userTweet);
    }
  }

  function loadTweets() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweetData) {
      // console.log('Success: ', tweetData);
      renderTweet(tweetData);
    });
}
loadTweets();
});


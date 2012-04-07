## Bookmarklets

### Twitter
##### Hide Mentions
<code><a href="javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f=e.jQuery)%7C%7Cg%3Ef.fn.jquery%7C%7Ch(f))%7Bc=a.createElement(%22script%22);c.type=%22text/javascript%22;c.src=%22http://ajax.googleapis.com/ajax/libs/jquery/%22+g+%22/jquery.min.js%22;c.onload=c.onreadystatechange=function()%7Bif(!b&&(!(d=this.readyState)%7C%7Cd==%22loaded%22%7C%7Cd==%22complete%22))%7Bh((f=e.jQuery).noConflict(1),b=1);f(c).remove()%7D%7D;a.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,%221.3.2%22,function($,L)%7B$(%22div.tweet%20a.twitter-atreply%22).each(function()%7B$(this).closest(%22div.tweet%22).hide()%7D);%7D);</code>
##### Hide Retweets
<code><a href="javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f=e.jQuery)%7C%7Cg%3Ef.fn.jquery%7C%7Ch(f))%7Bc=a.createElement(%22script%22);c.type=%22text/javascript%22;c.src=%22http://ajax.googleapis.com/ajax/libs/jquery/%22+g+%22/jquery.min.js%22;c.onload=c.onreadystatechange=function()%7Bif(!b&&(!(d=this.readyState)%7C%7Cd==%22loaded%22%7C%7Cd==%22complete%22))%7Bh((f=e.jQuery).noConflict(1),b=1);f(c).remove()%7D%7D;a.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,%221.3.2%22,function($,L)%7B$(%22div%5Bdata-retweet-id%5D%22).each(function()%7B$(this).hide()%7D);%7D);</code>
##### Hide Mentions and RTs
<code><a href="javascript:(function(e,a,g,h,f,c,b,d)%7Bif(!(f=e.jQuery)%7C%7Cg%3Ef.fn.jquery%7C%7Ch(f))%7Bc=a.createElement(%22script%22);c.type=%22text/javascript%22;c.src=%22http://ajax.googleapis.com/ajax/libs/jquery/%22+g+%22/jquery.min.js%22;c.onload=c.onreadystatechange=function()%7Bif(!b&&(!(d=this.readyState)%7C%7Cd==%22loaded%22%7C%7Cd==%22complete%22))%7Bh((f=e.jQuery).noConflict(1),b=1);f(c).remove()%7D%7D;a.documentElement.childNodes%5B0%5D.appendChild(c)%7D%7D)(window,document,%221.3.2%22,function($,L)%7B$(%22div%5Bdata-retweet-id%5D%22).each(function()%7B$(this).hide()%7D);$(%22div.tweet%20a.twitter-atreply%22).each(function()%7B$(this).closest(%22div.tweet%22).hide()%7D);%7D);</code>

Used Ben Alman's great [jQuery Bookmarklets generator](http://benalman.com/code/test/jquery-run-code-bookmarklet/) for these.

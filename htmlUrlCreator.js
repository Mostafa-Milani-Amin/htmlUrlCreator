const htmlUrlCreator = urlStr =>  urlStr.replace(/(https?:\/\/[^\s]+)/g,"<a href='$1' target='_blank' >$1</a>");
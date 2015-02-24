  /*
    Get the private XML URL from your Google Calendar details page and paste it below, replacing 'INSERTPRIVATEXML' in the command below
  */
  command: 'curl -s "INSERTPRIVATEXML?&orderby=starttime&sortorder=ascending&singleevents=true&max-results=5&futureevents=true"',
  refreshFrequency: 60000,



  render: function(output) {
    return "<div id=\"date\"></div>\n<div id=\"e1\" class=\"e\">\n  <p id=\"event1\" class=\"event\"></p>\n  <p id=\"location1\" class=\"loc\"></p>\n  <p id=\"time1\" class=\"time\"></p>\n</div>\n<div id=\"e2\" class=\"e\">\n  <p id=\"event2\" class=\"event\"></p>\n  <p id=\"location2\" class=\"loc\"></p>\n  <p id=\"time2\" class=\"time\"></p>\n</div>\n<div id=\"e3\" class=\"e\">\n  <p id=\"event3\" class=\"event\"></p>\n  <p id=\"location3\" class=\"loc\"></p>\n  <p id=\"time3\" class=\"time\"></p>\n</div>\n<div id=\"e4\" class=\"e\">\n  <p id=\"event4\" class=\"event\"></p>\n  <p id=\"location4\" class=\"loc\"></p>\n  <p id=\"time4\" class=\"time\"></p>\n</div>\n<div id=\"e5\" class=\"e\">\n  <p id=\"event5\" class=\"event\"></p>\n  <p id=\"location5\" class=\"loc\"></p>\n  <p id=\"time5\" class=\"time\"></p>\n</div>\n<div id=\"footer\"></div>";
  },

  update: function(output, domEl) {

    function splitSummary(str) {
    	
        var whenPos = str.indexOf("When");
        var nbspPos = str.indexOf("&nbsp");
        var wherePos = str.indexOf("Where");
        var statusPos= str.indexOf("<br>Event Status");

        var when= str.substring(whenPos, nbspPos);
        var where= str.substring(wherePos, statusPos);

        var arr=[when,where];
        return arr;
    }

    var $xml,
     dom,
     theItem,
     theLocation1,
     theLocation2,
     theLocation3,
     theLocation4,
     theLocation5,
     theTime1,
     theTime2,
     theTime3,
     theTime4,
     theTime5,
     theTitle1,
     theTitle2,
     theTitle3,
     theTitle4,
     theTitle5,
     title,
     xml;

    dom = $(domEl);
    xml = jQuery.parseXML(output);
    $xml = $(xml);
    theItem = $xml.find('feed').find('entry');
    

    theTitle1 = theItem.find('title')[0].childNodes[0].data.split(':');
    var sum= theItem.find('summary')[0].childNodes[0].data;
    var whenWhere= splitSummary(sum);
    theLocation1 = whenWhere[0];
    theTime1 = whenWhere[1];

    theTitle2 = theItem.find('title')[1].childNodes[0].data;
    sum= theItem.find('summary')[1].childNodes[0].data;
    whenWhere= splitSummary(sum);
    theLocation2 = whenWhere[0];
    theTime2 = whenWhere[1];

    theTitle3 = theItem.find('title')[2].childNodes[0].data;
    sum= theItem.find('summary')[2].childNodes[0].data;
    whenWhere= splitSummary(sum);
    theLocation3 = whenWhere[0];
    theTime3 = whenWhere[1];

    theTitle4 = theItem.find('title')[3].childNodes[0].data;
    sum= theItem.find('summary')[3].childNodes[0].data;
    whenWhere= splitSummary(sum);
    theLocation4 = whenWhere[0];
    theTime4 = whenWhere[1];

    theTitle5 = theItem.find('title')[4].childNodes[0].data;
    sum= theItem.find('summary')[4].childNodes[0].data;
    whenWhere= splitSummary(sum);
    theLocation5 = whenWhere[0];
    theTime5 = whenWhere[1];

    title = "Upcoming Events";

    //Output
    dom.find(date).html(title);
    dom.find(event1).html(theTitle1);
    dom.find(location1).html(theLocation1);
    dom.find(time1).html(theTime1);
    dom.find(event2).html(theTitle2);
    dom.find(location2).html(theLocation2);
    dom.find(time2).html(theTime2);
    dom.find(event3).html(theTitle3);
    dom.find(location3).html(theLocation3);
    dom.find(time3).html(theTime3);
    dom.find(event4).html(theTitle4);
    dom.find(location4).html(theLocation4);
    dom.find(time4).html(theTime4);
    dom.find(event5).html(theTitle5);
    dom.find(location5).html(theLocation5);
    dom.find(time5).html(theTime5);
  },
  style: "top: 20px\nleft: 20px\nwidth:400px\nmargin:0px\npadding:0px\nbackground:rgba(#FFF, 0.5)\nborder:2px solid rgba(#000, 0.5)\nborder-radius:10px\noverflow:hidden\n#date\n  margin:12pt\n  margin-bottom:12pt\n  font-family: Helvetica\n  font-size: 25pt\n  font-weight:bold\n  color: rgba(black, 0.75)\n\n#title\n  margin-left:50pt\n  margin-right:12pt\n  font-family: American Typewriter\n  font-size: 20pt\n  font-weight:bold\n#description\n  margin-left:12pt\n  margin-right:12pt\n  font-family: American Typewriter\n  font-size: 12pt\n  line-height:18pt\n  max-height:10pt\n  overflow:hidden\n  hyphens: auto\n\n#footer\n  font-family: Helvetica\n  font-size: 9pt\n  margin:12pt\n  color: rgba(#000, 0.5)\n\np\n  margin: 0 0 0 20px\n\n.e\n  height: 60pt\n\n.event\n  font-size: 17pt\n  font-weight: bold\n\"

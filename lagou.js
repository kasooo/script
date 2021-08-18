var body = $response.body;
var obj = JSON.parse(body);

if (obj.content.hasBuy != undefined) {
    obj.content.hasBuy = true;
}

if (obj.content.courseSectionList != undefined) {
    for (var i = 0; i < obj.content.courseSectionList.length; i++) {
        var section = obj.content.courseSectionList[i];
        for (var j = 0; j < section.courseLessons.length; j++) {
            section.courseLessons[j].canPlay = true;
            section.courseLessons[j].videoMediaDTO.free = true;
            section.courseLessons[j].audioMediaDTO.free = true;
        }
    }
}

if (obj.content.contentCardList != undefined) {
    for (var i = 0; i < obj.content.contentCardList.length; i++) {
        var card = obj.content.contentCardList[i];
        for (var j = 0; j < card.courseList.length; j++) {
            card.courseList[j].hasBuy = true;
        }
    }
}
body = JSON.stringify(obj);



$done(body);

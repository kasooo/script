var body = $response.body;
var obj = JSON.parse(body);

for (var i = 0; i < obj.content.contentCardList.length; i++) {
    var card = obj.content.contentCardList[i];
    for (var j = 0; j < card.courseList.length; j++) {
        card.courseList[j].hasBuy = true;
    }
}
body = JSON.stringify(obj);

$done(body);

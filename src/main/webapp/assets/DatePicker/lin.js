var $d, $dp, $pdp = parent.$dp, $dt, $tdt, $sdt, $lastInput, $IE=$pdp.ie, $FF = $pdp.ff,$OPERA=$pdp.opera, $ny, $cMark = false;

if ($pdp.eCont) {
	$dp = {};
	for (var p in $pdp) {
		$dp[p] = $pdp[p];
	}
}
else
	$dp = $pdp;
$dp.realLang = getCurr(langList, $dp.lang);
document.write("<script src='lang/" + $dp.realLang.name + ".js' charset='" + $dp.realLang.charset + "'><\/script>");
for (var i = 0; i < skinList.length; i++) {
    document.write('<link rel="stylesheet" type="text/css" href="skin/' + skinList[i].name + '/datepicker.css" title="' + skinList[i].name + '" charset="' + skinList[i].charset + '" disabled="true"/>');
}
function getCurr(arr, name){
	var isFound = false;
	var item = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].name == name) {
			item = arr[i];
			break;
		}
	}
	return item;
}
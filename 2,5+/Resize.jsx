// CS6


var pluginName = "Resizer";

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
// $.level = 0;
//debugger; // launch debugger on next line

// on localized builds we pull the $$$/Strings from a .dat file, see documentation for more details
// $.localize = true;

var b = new File((new File($.fileName)).parent + "/Config/amount.txt");

b.open('r');
var amount = "";
while(!b.eof)
amount += b.readln();
b.close();
amount = parseFloat(amount);

var originalUnit = preferences.rulerUnits;

preferences.rulerUnits = Units.CM;

// alert(app.activeDocument.width.value + " " + amount)

var cw = (app.activeDocument.width.value);
var ch = (app.activeDocument.height.value);

var cwa = cw + amount;
var cha = ch + amount;

app.activeDocument.resizeImage(
  cwa,
  cha,
  app.activeDocument.resolution,
  ResampleMethod.BICUBIC
);

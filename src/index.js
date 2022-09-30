var fs = require('fs');
var subsrt = require('subsrt');
 
//Sample captions
var captions = [
    { text: 'this', start: 90, end: 330 },
    { text: 'is', start: 330, end: 450 },
    { text: 'sample', start: 450, end: 870 },
    { text: 'text', start: 870, end: 1140 },
    { text: 'to', start: 1140, end: 1230 },
    { text: 'showcase', start: 1230, end: 1800 },
    { text: 'intended', start: 1801.6989999999998, end: 2280 },
    { text: 'use', start: 2280, end: 2730 }
  ];

//Build the WebVTT content
var options = { format: 'srt' };
var content = subsrt.build(captions, options);
 
//Write content to .vtt file
fs.writeFileSync('generated-new.srt', content);
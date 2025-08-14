// make-vcf.js
const fs = require('fs');
const vCardsJS = require('vcards-js');

const v = vCardsJS();
v.version = '3.0';
v.firstName = '한비';
v.lastName = '권';
v.formattedName = '권한비(BIBI)';
v.organization = '';
v.cellPhone = '010-7410-0030';
v.email = '072hanvy@gmail.com';
v.url = 'https://www.linkedin.com/in/hanbi-kwon/';
v.note = '';

// 줄바꿈을 CRLF로 통일 (BOM 넣지 않음: Android 호환성↑)
const body = v.getFormattedString().replace(/\r?\n/g, '\r\n');
fs.writeFileSync('./hanbi.vcf', body, { encoding: 'utf8' });

console.log('wrote hanbi.vcf');

var canvas      = document.querySelector('.canvas'),
	context     = canvas.getContext('2d'),
	context2    = canvas.getContext('2d'),
	rad1        = 0,
	rad2        = 0,
	varOffSetX  = -6;

// **** Draw Santa Claus ****

function drawSanta() {

// 1. Draw the bag

// - Gifts

// * Yellow one

//box
context.beginPath();

context.moveTo(840, 90);
context.lineTo(815, 170);
context.lineTo(875, 170);
context.lineTo(895, 110);
context.lineTo(840, 90);

context.fillStyle = '#F7B137';
context.fill();

context.closePath();

//node
context.beginPath();

context.moveTo(875, 103);
context.lineTo(858, 150);

context.lineWidth = 13;
context.lineCap = 'butt';
context.strokeStyle = '#F4DBA3';
context.stroke();

context.closePath();

context.beginPath();

context.arc(865, 130, 10, 0, Math.PI * 2);

context.fillStyle = '#EBF2FC';
context.fill();

context.closePath();

// * Red one

//box
context.beginPath();

context.moveTo(800, 110);
context.lineTo(780, 170);
context.lineTo(890, 170);
context.lineTo(900, 140);
context.lineTo(800, 110);

context.fillStyle = '#E54837';
context.fill();

context.closePath();

//node
context.beginPath();

context.moveTo(845, 123);
context.lineTo(832, 165);

context.lineWidth = 13;
context.lineCap = 'butt';
context.strokeStyle = '#EDCB74';
context.stroke();

context.closePath();

// *  Green one

//box
context.beginPath();

context.moveTo(888, 90);
context.lineTo(840, 170);
context.lineTo(938, 172);
context.lineTo(960, 140);
context.lineTo(888, 90);

context.fillStyle = '#CEC649';
context.fill();

context.closePath();

//node
context.beginPath();

context.moveTo(923, 113);
context.lineTo(870, 190);

context.lineWidth = 15;
context.lineCap = 'butt';
context.strokeStyle = '#FAEDCB';
context.stroke();

context.closePath();

context.beginPath();

context.moveTo(923, 105);
context.lineTo(919, 88);
context.lineTo(908, 98);
context.quadraticCurveTo(899, 110, 925, 115);

context.moveTo(923, 105);
context.lineTo(930,110);
context.lineTo(950,113);
context.lineTo(942,125);
context.quadraticCurveTo(930, 140, 925, 115);

context.fillStyle = '#E9E1B0';
context.fill();

context.closePath();

context.beginPath();

context.arc(923, 113, 10, 0, Math.PI * 2);

context.fillStyle = '#CEC649';
context.fill();

context.closePath();

// - Basket

context.beginPath();

context.moveTo(790, 179);
context.lineTo(940, 190);
context.lineTo(915, 350);
context.quadraticCurveTo(912, 380, 880, 380);
context.lineTo(790, 373);
context.quadraticCurveTo(775, 370, 776, 350);
context.lineTo(780, 233);
context.quadraticCurveTo(782, 200, 770, 178);
context.lineTo(790, 179);

context.fillStyle = '#C79F7C';
context.fill();

context.closePath();

// - Braiding

//under
context.beginPath();

context.moveTo(779, 277);
context.lineTo(920, 188);
context.lineTo(885, 185);
context.lineTo(780, 252);

context.fillStyle = '#B98A5E';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(775, 315);
context.lineTo(935, 215);
context.lineTo(928, 260);
context.lineTo(777, 355);
context.lineTo(775, 315);

context.fillStyle = '#BD9068';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(800, 373);
context.lineTo(923, 295);
context.lineTo(916, 335);
context.lineTo(850, 378);
context.lineTo(800, 373);

context.fillStyle = '#B9895B';
context.fill();

context.closePath();

//over
context.beginPath();

context.moveTo(800, 180);
context.lineTo(915, 350);
context.lineTo(921, 310);
context.lineTo(835, 180);
context.lineTo(800, 180);

context.fillStyle = '#BC8F66';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(865, 180);
context.lineTo(927, 275);
context.lineTo(931, 248);
context.lineTo(888, 180);
context.lineTo(800, 180);

context.fillStyle = '#C1966E';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(775, 190);
context.lineTo(920, 400);
context.lineTo(890, 400);
context.lineTo(775, 235);
context.lineTo(775, 190);

context.globalCompositeOperation = 'source-atop';
context.fillStyle = '#C1966E';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(775, 270);
context.lineTo(865, 400);
context.lineTo(845, 400);
context.lineTo(775, 305);
context.lineTo(775, 290);


context.globalCompositeOperation = 'source-atop';
context.fillStyle = '#BC8F66';
context.fill();

context.closePath();

// - Handle

context.beginPath();

context.moveTo(650, 160);
context.lineTo(780, 180);
context.lineTo(785, 209);
context.lineTo(650, 160);

context.globalCompositeOperation = 'destination-over';
context.fillStyle = '#A56F41';
context.fill();

context.closePath();

// - Flange

context.beginPath();

context.moveTo(770, 179);
context.lineTo(940, 190);
context.bezierCurveTo(950, 190, 950, 170, 940, 170);
context.lineTo(770, 160);
context.bezierCurveTo(760, 160, 760, 179, 770, 179);

context.globalCompositeOperation = 'source-over';
context.fillStyle = '#A56F41';
context.fill();

context.closePath();

// 2. Draw the belly

context.beginPath();

context.arc(627.5, 307.5, 150, 0, Math.PI * 2);

context.fillStyle = '#E07160';
context.fill();

context.closePath();

//buttons
context.beginPath();

context.moveTo(489, 300);
context.bezierCurveTo(497, 300, 497, 319, 489, 319);
context.moveTo(489, 300);
context.bezierCurveTo(481, 300, 481, 319, 489, 319);

context.moveTo(492, 330);
context.bezierCurveTo(501, 330, 501, 349, 495, 349);
context.moveTo(492, 330);
context.bezierCurveTo(484, 330, 484, 350, 495, 349);

context.fillStyle = '#2D2C32';
context.fill();

context.closePath();

//belt
context.beginPath();

context.moveTo(478, 359);
context.quadraticCurveTo(640, 335, 770, 365);
context.quadraticCurveTo(768, 375, 759, 385);
context.quadraticCurveTo(640, 356, 490, 380);
context.quadraticCurveTo(480, 369, 478, 359);

context.globalCompositeOperation = 'source-over';
context.fillStyle = '#EDF1FA';
context.fill();

context.closePath();

// 3. Draw the head

// - Head

context.beginPath();

context.arc(560, 120, 70, 0, Math.PI * 2);
context.fillStyle = '#FACFAF';
context.globalCompositeOperation = 'destination-over';
context.fill();

context.closePath();

// - Nose

context.beginPath();

context.moveTo(492, 125);
context.lineTo(470,125);
context.bezierCurveTo(455, 122, 455, 148, 470, 145);
context.lineTo(495,145);

context.fillStyle = '#FACFAF';
context.fill();

context.closePath();

// - Beard

context.beginPath();

context.moveTo(495, 145);
context.lineTo(485,260);
context.quadraticCurveTo(600, 250, 560, 145);
context.quadraticCurveTo(550, 115, 570, 110);
context.quadraticCurveTo(590, 115, 580, 145);
context.quadraticCurveTo(580, 155, 590, 160);
context.quadraticCurveTo(605, 157, 618, 157);
context.quadraticCurveTo(645, 110, 611, 75);
context.lineTo(515,67);
context.bezierCurveTo(525, 105, 581, 145, 495, 145);

context.fillStyle = 'white';
context.globalCompositeOperation = 'source-over';
context.fill();

context.closePath();

// - Ear

context.beginPath();

context.moveTo(565, 120);
context.bezierCurveTo(590, 105, 575, 160, 565, 140);

context.lineWidth = 2;
context.lineCap = 'round';
context.strokeStyle = '#F7BC92';
context.stroke();

context.closePath();

// - Mouth

context.beginPath();

context.moveTo(505, 151);
context.bezierCurveTo(513, 151, 513, 167, 505, 167);
context.moveTo(505, 151);
context.bezierCurveTo(497, 151, 497, 167, 505, 167);

context.shadowColor    = '#DCE8F8';
context.shadowBlur     = 3;
context.shadowOffsetX  = 5;
context.shadowOffsetY  = 0;

context.fillStyle = '#302D30'
context.fill();

context.closePath();

// - Cap

//red part
context.beginPath();

context.moveTo(520, 62);
context.quadraticCurveTo(535, 43, 555, 40);
context.lineTo(625, 33);
context.quadraticCurveTo(665, 53, 700, 55);
context.lineTo(700, 75);
context.lineTo(635, 80);
context.lineTo(629, 105);
context.quadraticCurveTo(595, 82, 520, 62);

context.shadowBlur     = 0;
context.shadowOffsetX  = 0;
context.shadowOffsetY  = 0;

context.fillStyle = '#E07160';
context.fill();

context.closePath();

//pompom

context.beginPath();

context.arc(700, 65, 24, 0, Math.PI * 2);
context.moveTo(677,65);
context.arc(677,65,4,0,Math.PI * 2);
context.arc(678,57,4,0,Math.PI * 2);
context.arc(681,50,4,0,Math.PI * 2);
context.arc(688,45,4,0,Math.PI * 2);
context.arc(696,42.5,4,0,Math.PI * 2);
context.arc(705,42.5,4,0,Math.PI * 2);
context.arc(713,45.5,4,0,Math.PI * 2);
context.arc(718,50,4,0,Math.PI * 2);
context.moveTo(723,59);
context.arc(722,57,4,0,Math.PI * 2);
context.moveTo(722,65);
context.arc(723,65,4,0,Math.PI * 2);
context.moveTo(722,73);
context.arc(722,73,4,0,Math.PI * 2);
context.moveTo(718,80);
context.arc(718,80,4,0,Math.PI * 2);
context.moveTo(712,85);
context.arc(712,85,4,0,Math.PI * 2);
context.arc(704,88,4,0,Math.PI * 2);
context.arc(696,88,4,0,Math.PI * 2);
context.arc(688,85,4,0,Math.PI * 2);
context.arc(682,80,4,0,Math.PI * 2);
context.arc(678,73,4,0,Math.PI * 2);

context.fillStyle = 'white';
context.fill();

context.closePath();

//white part
context.beginPath();

context.moveTo(503, 78);
context.quadraticCurveTo(570, 100, 630, 130);
context.quadraticCurveTo(635, 120, 632, 105);
context.quadraticCurveTo(595, 82, 515, 60);
context.quadraticCurveTo(503, 70, 503, 78);

context.shadowColor    = '#D9E7F4';
context.shadowBlur     = 10;
context.shadowOffsetX  = 0;
context.shadowOffsetY  = 6;

context.fillStyle = 'white';
context.globalCompositeOperation = 'source-over';
context.fill();

context.closePath();

//to erase the shadow on the eye
context.beginPath();

context.save();
context.moveTo(503, 78);
context.lineTo(523, 85);
context.lineTo(528, 95);
context.lineTo(508, 110);
context.lineTo(500, 85);
context.lineTo(503, 78);

context.shadowBlur     = 0;
context.shadowOffsetX  = 0;
context.shadowOffsetY  = 0;

context.fillStyle = '#FACFAF';
context.fill();

context.closePath();

// - Eye

//white part
context.beginPath();

context.moveTo(500, 90);
context.bezierCurveTo(485, 90, 485, 115, 500, 115);
context.moveTo(500, 90);
context.bezierCurveTo(515, 90, 515, 115, 500, 115);

context.globalCompositeOperation = 'source-over';
context.fillStyle = 'white';
context.fill();

context.closePath();

//brown part
context.beginPath();

context.moveTo(495, 93);
context.bezierCurveTo(485, 93, 485, 112, 495, 112);
context.moveTo(495, 93);
context.bezierCurveTo(505, 93, 505, 112, 495, 112);

context.globalCompositeOperation = 'source-over';
context.fillStyle = '#A37041';
context.fill();

context.closePath();

//black part
context.beginPath();

context.moveTo(493, 95);
context.bezierCurveTo(487, 95, 487, 107, 490, 107);
context.moveTo(493, 95);
context.bezierCurveTo(499, 95, 500, 110, 490, 107);

context.globalCompositeOperation = 'source-over';
context.fillStyle = 'black';
context.fill();

context.closePath();

//little white parts
context.beginPath();

context.arc(492, 96, 3, 0, Math.PI * 2);

context.globalCompositeOperation = 'source-atop';
context.fillStyle = 'white';
context.fill();

context.closePath();

context.beginPath();

context.arc(495, 98, 1.5, 0, Math.PI * 2);

context.globalCompositeOperation = 'source-over';
context.fillStyle = 'white';
context.fill();

context.closePath();

// - Eyebrow

context.beginPath();

context.moveTo(496, 87);
context.quadraticCurveTo(510, 79, 515, 98);

context.lineWidth = 4;
context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'black';
context.globalCompositeOperation = 'source-over';
context.stroke();

context.closePath();

// 4. Draw the gifts

// - Green one

//box
context.beginPath();

context.moveTo(445, 185);
context.lineTo(505, 280);
context.lineTo(440, 300);
context.lineTo(400, 210);
context.lineTo(445, 185);

context.lineWidth = 1;
context.lineCap = 'butt';
context.fillStyle = '#CEC44A';
context.fill();

context.closePath();

//node
context.beginPath();

context.moveTo(419, 199);
context.lineTo(445, 250);

context.lineWidth = 14
context.strokeStyle = '#F9EDCB';
context.stroke();

context.closePath();

// - Yellow one

//box
context.beginPath();

context.moveTo(500, 199);
context.lineTo(543, 215);
context.lineTo(526, 255);
context.lineTo(480, 255);
context.lineTo(500, 199);

context.fillStyle = '#F6B137';
context.fill();

context.closePath();

//node

context.beginPath();

context.moveTo(516, 205);
context.lineTo(489, 280);
context.moveTo(500, 230);
context.lineTo(532, 242);

context.lineWidth = 10;
context.strokeStyle = '#F4DBA1';
context.stroke();

context.closePath();

context.beginPath();

context.arc(506, 233, 9, 0, Math.PI * 2);

context.fillStyle = '#EBF2FC';
context.fill();

context.closePath();

// - Red one

//box
context.beginPath();

context.moveTo(440, 190);
context.lineTo(499, 187);
context.lineTo(507, 290);
context.lineTo(450,290);

context.fillStyle = '#E84639'
context.fill();

context.closePath();

//node
context.beginPath();

context.moveTo(469, 188);
context.lineTo(477, 290);

context.lineWidth = 10;
context.lineCap = 'butt';
context.strokeStyle = '#EDCE73';
context.stroke();

context.closePath();

context.beginPath();

context.moveTo(444, 238);
context.lineTo(503, 234);

context.lineWidth = 13;
context.lineCap = 'butt';
context.strokeStyle = '#F2DCA1';
context.stroke();

context.closePath();

context.beginPath();

context.moveTo(472, 182);
context.bezierCurveTo(500, 165, 493, 203, 473, 191);

context.moveTo(467, 182);
context.bezierCurveTo(445, 170, 444, 203, 467, 193);

context.fillStyle = '#F2DCA1';
context.fill();

context.closePath();

context.beginPath();

context.arc(469,188, 8, 0, Math.PI * 2);

context.globalCompositeOperation = 'source-over';
context.fillStyle = '#EDCE73';
context.fill();

context.closePath();

// 5. Draw the arm

// - Glove

context.beginPath();

context.arc(396, 230, 19, 0, Math.PI * 2);
context.fillStyle = '#EDF1FA';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(377, 230);
context.quadraticCurveTo(375, 250, 400, 263);
context.quadraticCurveTo(400, 230, 415, 230);
context.fillStyle = '#EDF1FA';
context.fill();

context.closePath();

// - Portion with shadow

context.beginPath();

context.moveTo(610,275);
context.lineTo(510,300); //elbow
context.lineTo(400,275); //sleeve
context.lineTo(415,230); //sleeve
context.lineTo(505,250);
context.lineTo(585,240);

context.lineWidth = 5;
context.lineCap = 'square';
context.lineJoin = 'round';
context.fillStyle = '#E07160';

context.shadowColor    = '#DB614C';
context.shadowBlur     = 5;
context.shadowOffsetX  = 0;
context.shadowOffsetY  = 7;

context.globalCompositeOperation = 'source-atop';
context.fill();

context.closePath();

// - Portion without shadow

context.beginPath();

context.moveTo(610,275);
context.lineTo(510,300); //elbow
context.lineTo(400,275); //sleeve
context.lineTo(415,230); //sleeve
context.lineTo(505,250);
context.lineTo(585,240);

context.lineCap = 'square';
context.lineJoin = 'round';
context.fillStyle = '#E07160';

context.shadowBlur     = 0;
context.shadowOffsetX  = 0;
context.shadowOffsetY  = 0;

context.globalCompositeOperation = 'source-over';
context.fill();

context.closePath();

//to sharp the shadow of the armpit
context.beginPath();

context.moveTo(610, 275);
context.lineTo(520, 305);
context.lineTo(610, 305);
context.lineTo(610, 275);

context.fillStyle = '#E07160';
context.fill();

context.closePath();

//to hide the shadow unwanted on gifts... :p

//recreate green one
context.beginPath();

context.moveTo(432, 283);
context.lineTo(468, 291);
context.lineTo(440, 300);
context.lineTo(432, 283);

context.fillStyle = '#CEC44A';
context.fill();

context.closePath();

context.beginPath();

context.moveTo(455, 289);
context.lineTo(460,294);
context.lineTo(470,291);
context.lineTo(455,289);

context.lineWidth = 1;
context.fillStyle = '#F9EDCB';
context.fill();

context.closePath();

//recreat red one
context.beginPath();

context.moveTo(450, 286);
context.lineTo(451, 292);
context.lineTo(468, 290.5);
context.lineTo(450, 286.5);

context.fillStyle = '#E84639';
context.fill();

context.closePath();

// - Rounded toe

context.beginPath();
context.moveTo(400,275);
context.quadraticCurveTo(385, 250, 415, 230);

//to stuff the juncture between the sleeve and the hand
context.moveTo(400,275);
context.quadraticCurveTo(415, 250, 415, 230);

context.fillStyle = '#E07160';
context.fill();

context.closePath();

};

// 6. Draw the legs

function drawLegs(rad1, rad2, varOffSetX) {

// - Under
var xvar = 627.5,
	yvar = 307.5;

context2.save();
context2.translate(xvar,yvar);
context2.rotate(rad1);

context2.beginPath();

context2.moveTo(530-xvar, 400-yvar);
context2.quadraticCurveTo(420-xvar, 390-yvar, 450-xvar, 510-yvar);
context2.lineTo(500-xvar, 510-yvar);
context2.quadraticCurveTo(470-xvar, 425-yvar, 580-xvar, 440-yvar);

context2.globalCompositeOperation = 'destination-over';
context2.fillStyle = '#E07160';
context2.fill();

context2.closePath();

//feet
context2.beginPath();

context2.moveTo(505-xvar, 510-yvar);
context2.lineTo(415-xvar, 525-yvar);
context2.bezierCurveTo(424-xvar, 473-yvar, 525-xvar, 510-yvar, 505-xvar, 510-yvar);

context2.globalCompositeOperation = 'source-over';
context2.fillStyle = '#2D2C2F';
context2.fill();

context2.closePath();

context2.beginPath();

context2.moveTo(424-xvar, 500-yvar);
context2.lineTo(439-xvar, 510-yvar);
context2.lineTo(445-xvar, 506-yvar);
context2.lineTo(430-xvar, 495-yvar);
context2.lineTo(424-xvar, 500-yvar);

context2.globalCompositeOperation = 'source-atop';
context2.fillStyle = '#EDF1FC';
context2.fill();

context2.closePath();

//to create the shadow of the belly

context2.beginPath();

context2.moveTo(512-xvar, 400-yvar);
context2.quadraticCurveTo(526-xvar, 420-yvar, 557-xvar, 438-yvar);
context2.lineTo(565-xvar, 435-yvar);
context2.lineTo(525-xvar, 400-yvar);

context2.globalCompositeOperation = 'source-over';
context2.shadowColor    = '#DB614C';
context2.shadowBlur     = 8;
context2.shadowOffsetX  = varOffSetX; //-5 normal 5 pas normal
context2.shadowOffsetY  = 4;

context2.fillStyle = '#E07160';
context2.fill();

context2.closePath();

//to erase the overflow
context2.beginPath();

context2.moveTo(555-xvar, 438-yvar);
context2.lineTo(535-xvar, 439-yvar);
context2.lineTo(550-xvar, 450-yvar);
context2.lineTo(565-xvar, 445-yvar);
context2.lineTo(555-xvar, 438-yvar);

context2.shadowBlur     = 0;
context2.shadowOffsetX  = 0;
context2.shadowOffsetY  = 0;

context2.globalCompositeOperation = 'source-over';
context2.fillStyle = '#D4CAD8';//'#E07160';
context2.fill();

context2.closePath();

// - Above

context2.rotate(rad2);

//with shadow
context2.beginPath();

context2.moveTo(630-xvar, 420-yvar);
context2.bezierCurveTo(670-xvar, 510-yvar, 680-xvar, 540-yvar, 780-xvar, 475-yvar);
context2.lineTo(768-xvar, 440-yvar);
context2.bezierCurveTo(710-xvar, 460-yvar, 710-xvar, 460-yvar, 695-xvar, 423-yvar);

context2.shadowColor    = '#DB614C';
context2.shadowBlur     = 6;
context2.shadowOffsetX  = -7;
context2.shadowOffsetY  = 5;

context2.globalCompositeOperation = 'source-atop'
context2.fillStyle = '#E07160';
context2.fill();
context2.closePath();

//without shadow
context2.beginPath();

context2.moveTo(630-xvar, 420-yvar);
context2.bezierCurveTo(670-xvar, 510-yvar, 680-xvar, 540-yvar, 780-xvar, 475-yvar);
context2.lineTo(768-xvar, 440-yvar);
context2.bezierCurveTo(710-xvar, 460-yvar, 710-xvar, 460-yvar, 695-xvar, 423-yvar);

context2.shadowBlur     = 0;
context2.shadowOffsetX  = 0;
context2.shadowOffsetY  = 0;

context2.globalCompositeOperation = 'source-over';
context2.fillStyle = '#E07160';
context2.fill();

context2.closePath();

//to sharp the shadow of the leg
context2.beginPath();

context2.moveTo(630-xvar, 420-yvar);
context2.lineTo(636-xvar, 456-yvar);
context2.lineTo(610-xvar, 450-yvar);
context2.lineTo(610-xvar, 400-yvar);
context2.lineTo(630-xvar, 420-yvar);

context2.fillStyle = '#E07160';
context2.fill();

context2.closePath();

//feet
context2.beginPath();

context2.moveTo(770-xvar, 430-yvar);
context2.lineTo(830-xvar, 495-yvar);
context2.bezierCurveTo(765-xvar, 500-yvar, 765-xvar, 440-yvar, 770-xvar, 430-yvar);

context2.fillStyle = '#2D2C2F';
context2.fill();

context2.closePath();

context2.beginPath();

context2.moveTo(790-xvar, 475-yvar);
context2.lineTo(797-xvar, 481-yvar);
context2.lineTo(797-xvar, 500-yvar);
context2.lineTo(790-xvar, 500-yvar);
context2.lineTo(790-xvar, 475-yvar);

context2.globalCompositeOperation = 'source-atop';
context2.fillStyle = '#EDF1FC';
context2.fill();

context2.closePath();
context2.restore();

//to recreat the belt over

context2.beginPath();

context2.moveTo(478, 359);
context2.quadraticCurveTo(640, 335, 770, 365);
context2.quadraticCurveTo(768, 375, 759, 385);
context2.quadraticCurveTo(640, 356, 490, 380);
context2.quadraticCurveTo(480, 369, 478, 359);

context2.globalCompositeOperation = 'source-over';
context2.fillStyle = '#EDF1FA';
context2.fill();

context2.closePath();
};


// *** Animate Santa Claus ***

// rad1 0 à -1.2
// rad2 0 à 2.1
// offset -5 à 5
// /*

drawSanta();
drawLegs();

var rad1max = true,
	rad1min = false,
	rad2max = false,
	rad2min = true,
  	counter = 0;

function move() {

	window.requestAnimationFrame(move);

	counter++;

	// if (counter >= 100) return;
	context.clearRect(0, 0, 1255, 615);

	if (rad1 > -1.2 && rad1max)
	{
		rad1 = Math.round( (rad1 - 0.05) * 100 ) / 100; // decrement
	}

	if (rad1 == -1.2 && rad1max)
	{
		rad1min = true;
		rad1max = false;
	}

	if (rad1 == 0 && rad1min)
	{
		rad1min = false;
		rad1max = true;
	}

	if (rad1 < 0 && !rad1max) rad1 = Math.round( (rad1 + 0.05) * 100 ) /100;

	// console.log('counter = '+counter+ ':rad1 = '+rad1+ ' rad1max='+rad1max+ ' rad1min='+rad1min);

	if (rad2 < 2.1 && !rad2max)
	{
		rad2 = Math.round( (rad2 + 0.05) * 100 ) / 100; // increment
	}

	if (rad2 == 2.1 && rad2min)
	{
		rad2min = false;
		rad2max = true;
	}

	if (rad2 == 0 && rad2max)
	{
		rad2min = true;
		rad2max = false;
	}

	if (rad2 > 0 && !rad2min) rad2 = Math.round( (rad2 - 0.05) * 100 ) / 100;

	//console.log('           rad2 = '+rad2+ ' rad2max='+rad2max+ ' rad2min='+rad2min);

	varOffSetX = varOffSetX + 1;
	if (varOffSetX > 5) varOffSetX = 5;

	// console.log('varOffSetX = '+varOffSetX);

	drawSanta();
	drawLegs(rad1, rad2, varOffSetX);
}

canvas.addEventListener('click', function(){
	move();
	var audio = document.getElementById('audio');
	audio.play();
})

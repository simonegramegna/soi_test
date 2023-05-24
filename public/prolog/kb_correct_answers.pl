:- module(kb_correct_answers, [correct_answer/3]).


% module CFU
correct_answer(cfu, 1, 'dog').
correct_answer(cfu, 1, 'pup').
correct_answer(cfu, 1, 'puppy').
correct_answer(cfu, 1, 'fido').

correct_answer(cfu, 2, 'chickie').
correct_answer(cfu, 2, 'chick').

correct_answer(cfu, 3, 'duck').
correct_answer(cfu, 3, 'duckling').
correct_answer(cfu, 3, 'drake duck').
correct_answer(cfu, 3, 'gosling').

correct_answer(cfu, 4, 'cup').
correct_answer(cfu, 4, 'bowl').
correct_answer(cfu, 4, 'mug').
correct_answer(cfu, 4, 'coffee').
correct_answer(cfu, 4, 'tea').

correct_answer(cfu, 5, 'hammer').

correct_answer(cfu, 6, 'shoe').
correct_answer(cfu, 6, 'shoes').
correct_answer(cfu, 6, 'boot').
correct_answer(cfu, 6, 'boots').
correct_answer(cfu, 6, 'loafer').
correct_answer(cfu, 6, 'loafers').
correct_answer(cfu, 6, 'sneaker').
correct_answer(cfu, 6, 'sneakers').

correct_answer(cfu, 7, 'frog').
correct_answer(cfu, 7, 'toad').

correct_answer(cfu, 8, 'butterfly').
correct_answer(cfu, 8, 'moth').

correct_answer(cfu, 9, 'hand').
correct_answer(cfu, 9, 'hands').
correct_answer(cfu, 9, 'fist').

correct_answer(cfu, 10, 'key').
correct_answer(cfu, 10, 'keys').

correct_answer(cfu, 11, 'banana').
correct_answer(cfu, 11, 'bananas').
correct_answer(cfu, 11, 'plantain').
correct_answer(cfu, 11, 'plantains').

correct_answer(cfu, 12, 'slice of bread').
correct_answer(cfu, 12, 'bread').
correct_answer(cfu, 12, 'toast').

correct_answer(cfu, 13, 'switch').
correct_answer(cfu, 13, 'breaker').
correct_answer(cfu, 13, 'jack').
correct_answer(cfu, 13, 'socket').

correct_answer(cfu, 14, 'iron').
correct_answer(cfu, 14, 'steam iron').

correct_answer(cfu, 15, 'pumpkin').
correct_answer(cfu, 15, 'squash').
correct_answer(cfu, 15, 'gourd').


% module CFC
correct_answer(cfc, 1, '7').
correct_answer(cfc, 2, '4').
correct_answer(cfc, 2, '5').
correct_answer(cfc, 3, '4').
correct_answer(cfc, 4, '3').
correct_answer(cfc, 5, '8').
correct_answer(cfc, 6, '2').
correct_answer(cfc, 7, '1').
correct_answer(cfc, 8, '6').


% module CFT
correct_answer(cft, 1, '3').
correct_answer(cft, 2, '5').
correct_answer(cft, 3, '4').
correct_answer(cft, 4, '2').
correct_answer(cft, 5, '1').
correct_answer(cft, 6, '3').
correct_answer(cft, 7, '5').


% module CMR
correct_answer(cmr, 1, '3').
correct_answer(cmr, 2, '2').
correct_answer(cmr, 3, '3').
correct_answer(cmr, 4, '1').
correct_answer(cmr, 5, '2').
correct_answer(cmr, 6, '3').
correct_answer(cmr, 7, '3').


% module CMS
correct_answer(cms, 1, '4').
correct_answer(cms, 2, '2').
correct_answer(cms, 3, '3').
correct_answer(cms, 4, '1').
correct_answer(cms, 5, '4').
correct_answer(cms, 6, '2').

% module EFU
correct_answer(efu, 1, '5').
correct_answer(efu, 2, '2').
correct_answer(efu, 3, '3').
correct_answer(efu, 4, '1').
correct_answer(efu, 5, '5').
correct_answer(efu, 6, '2').
correct_answer(efu, 7, '3').


% module NST First Level
correct_answer(nst_1, 1, 'dog').
correct_answer(nst_1, 2, 'saw').
correct_answer(nst_1, 3, 'many').
correct_answer(nst_1, 4, 'came').
correct_answer(nst_1, 5, 'line').
correct_answer(nst_1, 6, 'good').


% module NST Second Level
correct_answer(nst_2, 1, 'the').
correct_answer(nst_2, 1, 'girl').
correct_answer(nst_2, 1, 'is').
correct_answer(nst_2, 1, 'very').
correct_answer(nst_2, 1, 'pretty').

correct_answer(nst_2, 2, 'he').
correct_answer(nst_2, 2, 'found').
correct_answer(nst_2, 2, 'a').
correct_answer(nst_2, 2, 'house').
correct_answer(nst_2, 2, 'by').
correct_answer(nst_2, 2, 'the').
correct_answer(nst_2, 2, 'school').

correct_answer(nst_2, 3, 'black').
correct_answer(nst_2, 3, 'white').
correct_answer(nst_2, 3, 'and').
correct_answer(nst_2, 3, 'brown').
correct_answer(nst_2, 3, 'are').
correct_answer(nst_2, 3, 'good').
correct_answer(nst_2, 3, 'colors').

correct_answer(nst_2, 4, 'to').
correct_answer(nst_2, 4, 'feel').
correct_answer(nst_2, 4, 'glad').
correct_answer(nst_2, 4, 'and').
correct_answer(nst_2, 4, 'happy').
correct_answer(nst_2, 4, 'is').
correct_answer(nst_2, 4, 'a').
correct_answer(nst_2, 4, 'fun').
correct_answer(nst_2, 4, 'trip').
correct_answer(nst_2, 4, 'for').
correct_answer(nst_2, 4, 'people').


% module MSU
correct_answer(msu_auditory, 1, '386').
correct_answer(msu_auditory, 2, '7492').
correct_answer(msu_auditory, 3, '53186').

correct_answer(msu_visual, 1, '251').
correct_answer(msu_visual, 2, '7296').
correct_answer(msu_visual, 3, '41375').

% module MSS 
correct_answer(mss_auditory, 1, '715').
correct_answer(mss_auditory, 2, '4968').
correct_answer(mss_auditory, 3, '13572').

correct_answer(mss_visual, 1, '475').
correct_answer(mss_visual, 2, '3948').
correct_answer(mss_visual, 3, '25869').
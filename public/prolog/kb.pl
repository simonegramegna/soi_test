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


% Weights for adjusting scores
weights(dfu_f, 2, 6).
weights(dfu_s, 0.83, 6).
weights(dfu_t, 1.33, 6).
weights(dfu_o, 0.67, 6).
weights(cfu, 2.5, 6).
weights(cfc, 1.33, 6).
weights(cft, 1.17, 6).
weights(cmr, 1.17, 6).
weights(cms, 1, 6).
weights(efu, 1.17, 6).
weights(nst, 6, 6).
weights(nfu, 5, 6).
weights(msu, 2, 6).
weights(mss, 2, 6).
weights(mfu, 2, 6).


% SOI abilities
ability(cognition,      [cfu, cfc, cft, cmr, cms]).
ability(memory,         [msu, mss, mfu]).
ability(evaluation,     [efu]).
ability(convergent,     [cfu, cfc, cft, cmr, cms]).
ability(divergent,      [nst, nfu]).

ability(figural,        [dfu, cfu, cfc, cft, efu, nfu, mfu]).
ability(symbolic,       [nst, msu, mss]).
ability(semantic,       [cmr, cms]).

ability(units,          [dfu, cfu, efu, nfu, msu, mfu]).
ability(classes,        [cfc]).
ability(relations,      [cmr]).
ability(systems,        [cms, mss]).
ability(transformations,[cft, nst]).



get_score([], _, _, 0).
get_score([H|B], Test, Question, Score) :-
    correct_answer(Test, Question, H),
    Question1 is Question + 1,
    get_score(B, Test, Question1, Score1),
    Score is Score1 + 1,!.
get_score([H|B], Test, Question, Score) :-
    \+ correct_answer(Test, Question, H),
    Question1 is Question + 1,
    get_score(B, Test, Question1, Score1),
    Score is Score1,!.


get_weighted_score(Answers, Test, WeightedScore) :-
    get_score(Answers, Test, 1, Score),
    weights(Test, Divider1, Divider2),
    WScore is Score / Divider1 / Divider2,
    my_rounding_function(WScore, WeightedScore, 2).


my_rounding_function(Number, Rounded, NrDecimal) :-
    Number1 is Number * 10^NrDecimal,
    round(Number1, Integer),
    Rounded is Integer / 10^NrDecimal.
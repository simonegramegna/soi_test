:- module(utils, [ get_weighted_score/3, write_test_result_to_file/3, my_rounding_function/3, check_range/4 ]).
:- use_module(kb_correct_answers, [ correct_answer/3 ]).
:- use_module(kb_weights, [ weights/3 ]).
:- use_module(library(lists)).
:- use_module(kb_fake_results, [ test_result/2 ]).


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
    my_rounding_function(WScore, WeightedScore, 3), !.


my_rounding_function(Number, Rounded, NrDecimal) :-
    Number1 is Number * 10^NrDecimal,
    round(Number1, Integer),
    Rounded is Integer / 10^NrDecimal.


write_test_result_to_file(Filename, TestName, TestScore) :-
    open(Filename, append, Out),
    write(Out, test_result(TestName, TestScore)),
    write(Out, '.'),
    nl(Out),
    close(Out).


check_range(LowerBound, UpperBound, Value, Range) :-
    Value < LowerBound -> Range is 0; Value > UpperBound -> Range is 2 ; Range is 1.
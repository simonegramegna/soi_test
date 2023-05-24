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
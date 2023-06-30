:- use_module(utils, [ get_weighted_score/3 ]).

get_result([], [], 0).
get_result([Answers|Tail], [Test|Tests], Result) :-
    get_weighted_score(Answers, Test, WeightedScore),
    get_result(Tail, Tests, Result1),
    Result is Result1 + WeightedScore.

:- use_module(utils, [ get_weighted_score/3 ]).

get_result(Answers, Test, WeightedScore) :- get_weighted_score(Answers, Test, WeightedScore).

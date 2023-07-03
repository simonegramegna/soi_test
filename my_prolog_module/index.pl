:- use_module(utils, [ get_weighted_score/3, write_test_result_to_file/3, check_range/4 ]).
:- use_module(kb_fake_results, [ test_result/2 ]).
:- use_module(library(lists)).


% It returs the Score obtained at a given ability test set.
get_score_result([], [], _, 0, _).
get_score_result([Answers|Tail], [Test|Tests], SoiAbility, Result, Filename) :-
    get_weighted_score(Answers, Test, WeightedScore),
    get_score_result(Tail, Tests, SoiAbility, Result1, Filename),
    Result is Result1 + WeightedScore,
    write_test_result_to_file(Filename, SoiAbility, Result).


% It returs 0 if Score is under average, 2 if is over average, 1 if it is in between.
get_avg_result(TestName, Score, Result) :-
    findall(X, test_result(TestName, X), ListResults),
    min_list(ListResults, Min),
    max_list(ListResults, Max),
    Interval is (Max - Min) / 3,
    LowerBound is Min + Interval,
    UpperBound is Max - Interval,
    check_range(LowerBound, UpperBound, Score, Result).

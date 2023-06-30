:- module(faker, [ generate_fake_results/1, generate_fake_results/2 ]).

:- use_module(kb_soi_abilities, [ ability/2 ]).
:- use_module(kb_weights, [ score_range/3 ]).
:- use_module(utils, [ write_test_result_to_file/3, my_rounding_function/3 ]).


generate_fake_results(_, 0) :- !.
generate_fake_results(ListOfAbilities, N) :-
    N > 0,
    generate_one_fake_results(ListOfAbilities),
    N1 is N - 1,
    generate_fake_results(ListOfAbilities, N1).


generate_fake_results(0) :- !.
generate_fake_results(N) :-
    N > 0,
    get_all_abilities(ListOfAbilities),
    generate_one_fake_results(ListOfAbilities),
    N1 is N - 1,
    generate_fake_results(N1).


generate_one_fake_results([]).
generate_one_fake_results([Ability|AbilityList]) :-
    ability(Ability, Tests),
    get_fake_score(Tests, FakeScore),
    my_rounding_function(FakeScore, FakeScoreRounded, 3),
    write_test_result_to_file('kb_fake_results.pl', Ability, FakeScoreRounded),
    generate_one_fake_results(AbilityList).


get_fake_score([], 0).
get_fake_score([Test|Tests], FakeScore) :-
    score_range(Test, Min, Max),
    random(Min, Max, RandomScore),
    get_fake_score(Tests, RandomScore1),
    FakeScore is RandomScore + RandomScore1.


get_all_abilities(MyList) :- findall(X, ability(X, _), MyList).


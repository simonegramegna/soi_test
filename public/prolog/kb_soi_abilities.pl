:- module(kb_soi_abilities, [weights/3]).


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
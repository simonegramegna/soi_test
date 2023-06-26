:- module(kb_soi_abilities, [weights/3]).


% SOI abilities with related tests

% OPERATION
ability(divergent,      [dfu]).
ability(convergent,     [nst, nfu]).
ability(evaluation,     [efu]).
ability(memory,         [msu, mss, mfu]).
ability(cognition,      [cfu, cfc, cft, cmr, cms]).

% CONTENT
ability(figural,        [dfu, cfu, cfc, cft, efu, nfu, mfu]).
ability(symbolic,       [nst, msu, mss]).
ability(semantic,       [cmr, cms]).

% PRODUCT
ability(units,          [dfu, cfu, efu, nfu, msu, mfu]).
ability(classes,        [cfc]).
ability(relations,      [cmr]).
ability(systems,        [cms, mss]).
ability(transformations,[cft, nst]).
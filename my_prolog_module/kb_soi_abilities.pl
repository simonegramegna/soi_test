:- module(kb_soi_abilities, [ability/2]).


% SOI abilities with related tests

% OPERATION
% ability(divergent_production,      []). % DFU not available
ability(convergent_production,     [nst]). % NFU not availble
ability(evaluation,     [efu]).
ability(memory,         [msu, mss]). % MFU not available
ability(cognition,      [cfu, cfc, cft, cmr, cms]).

% CONTENT
ability(figural,        [cfu, cfc, cft, efu]). % DFU, NFU, MFU not available
ability(symbolic,       [nst, msu, mss]).
ability(semantic,       [cmr, cms]).

% PRODUCT
ability(units,          [cfu, efu, msu]). % DFU, NFU, MFU not available
ability(classes,        [cfc]).
ability(relations,      [cmr]).
ability(systems,        [cms, mss]).
ability(transformations,[cft, nst]).
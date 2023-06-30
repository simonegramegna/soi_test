:- module(kb_weights, [ weights/3, score_range/3 ]).


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


% Scores ranges (Test, Min_score, Max_score)
% Min_score = all wrong answers
% Max_score = all correct answers
score_range(cfc, 0.000, 0.251).
score_range(cft, 0.000, 0.997).
score_range(cfu, 0.000, 1.000).
score_range(cmr, 0.000, 0.997).
score_range(cms, 0.000, 1.000).
score_range(efu, 0.000, 0.997).
score_range(mss, 0.000, 1.000).
score_range(msu, 0.000, 1.000).
score_range(nst, 0.000, 0.167).
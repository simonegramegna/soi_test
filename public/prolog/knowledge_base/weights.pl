:- module(weights, [weights/3]).

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
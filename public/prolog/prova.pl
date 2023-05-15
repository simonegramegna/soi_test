parent(carlo, stefano).
parent(alfonso, marcella).
parent(anna, stefano).
parent(francesco, alfonso).
parent(lucia, alfonso).
parent(iginia, carlo).
parent(alfonso, carlo).
parent(iginia, marcella).
parent(pietro, francesco).
parent(giovanni, anna).
parent(immacolata, anna).

%parent(X) :- parent(X,_).
parent(X, Y) :- parent(X, Y), !.

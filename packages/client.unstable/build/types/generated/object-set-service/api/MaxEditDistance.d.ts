/**
* The maximum distance between words to consider them to be a match.
*
* The distance is measured as the minimum number of operations required to change one word into another. Operations consist of insertions,
* deletions or substitutions of a single character, or transposition of two adjacent characters. (Damerau–Levenshtein distance)
*
* The AUTO strategy determines the max edit distance based on the length of the term:
* - terms of length {0, 1, 2} must match exactly,
* - terms of length {3, 4, 5} have one edit allowed,
* - terms longer than 5 have two edits allowed.
*
* AUTO should generally be the preferred value for the edit distance.
*/
export type MaxEditDistance = "AUTO" | "LEVENSHTEIN_ZERO" | "LEVENSHTEIN_ONE" | "LEVENSHTEIN_TWO";

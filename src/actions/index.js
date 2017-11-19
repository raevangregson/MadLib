export function newStory(words) {
    return {
        type: "READ",
        adjective:words.adjective,
        verb:words.verb,
        adverb:words.adverb
    }
}

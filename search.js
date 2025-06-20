class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const suggestions = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      const currentSuggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          currentSuggestions.push(product);
          if (currentSuggestions.length === 3) break;
        }
      }

      suggestions.push(currentSuggestions);
    }

    return suggestions;
  }
}

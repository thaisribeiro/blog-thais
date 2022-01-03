export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5)
  // let bowls = 0
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill("🍱")
      .join("")} ${minutes} min leitura`
  }
  return `${new Array(cups || 1).fill("☕️").join("")} ${minutes} min leitura`
}

export function formatPostDate(date) {
  if (typeof Date.prototype.toLocaleDateString !== "function") {
    return date
  }

  return new Date(date).toLocaleDateString("pt-br", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

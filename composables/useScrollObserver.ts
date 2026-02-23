/**
 * Composable: useScrollObserver
 * Adds an IntersectionObserver that adds the "visible" class
 * to every element matching `selector` when it enters the viewport.
 */
export function useScrollObserver(selector = '.scroll-fade') {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })
}

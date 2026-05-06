import { onBeforeUnmount } from 'vue'

/**
 * Scroll-reveal observer composable.
 *
 * @param {Object} [options]
 * @param {string} [options.revealedClass='is-revealed'] Class added when element enters viewport
 * @param {string} [options.hiddenClass='is-hidden'] Class added immediately on observe (optional)
 * @param {boolean} [options.once=true] If true, reveal only once and then unobserve
 * @param {number|number[]} [options.threshold=0.15]
 * @param {string} [options.rootMargin='0px 0px -10% 0px']
 */
export function useRevealObserver(options = {}) {
  const {
    revealedClass = 'is-revealed',
    hiddenClass = 'is-hidden',
    once = true,
    threshold = 0.15,
    rootMargin = '0px 0px -10% 0px',
  } = options

  /** @type {IntersectionObserver | null} */
  let observer = null

  /** @type {Set<Element>} */
  const observed = new Set()

  const ensureObserver = () => {
    if (observer) return observer

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const el = entry.target
          el.classList.add(revealedClass)
          if (hiddenClass) el.classList.remove(hiddenClass)

          if (once) {
            observer?.unobserve(el)
            observed.delete(el)
          }
        }
      },
      { threshold, rootMargin }
    )

    return observer
  }

  /**
   * Observe a single element.
   * @param {Element | null | undefined} el
   */
  const observe = (el) => {
    if (!el) return
    const obs = ensureObserver()

    if (hiddenClass) el.classList.add(hiddenClass)
    obs.observe(el)
    observed.add(el)
  }

  /**
   * Stop observing element (optional).
   * @param {Element | null | undefined} el
   */
  const unobserve = (el) => {
    if (!el || !observer) return
    observer.unobserve(el)
    observed.delete(el)
  }

  /**
   * Disconnect observer and clear tracked elements.
   */
  const disconnect = () => {
    if (!observer) return
    for (const el of observed) observer.unobserve(el)
    observed.clear()
    observer.disconnect()
    observer = null
  }

  onBeforeUnmount(disconnect)

  return {
    observe,
    unobserve,
    disconnect,
  }
}

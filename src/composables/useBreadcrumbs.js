import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Breadcrumb composable based on vue-router route.matched.
 *
 * Route meta options:
 * - meta.breadcrumb: string | (route) => string
 * - meta.breadcrumbHidden: boolean
 */
export function useBreadcrumbs() {
  const route = useRoute()

  const crumbs = computed(() => {
    return route.matched
      .filter((record) => !record.meta?.breadcrumbHidden)
      .map((record) => {
        const metaCrumb = record.meta?.breadcrumb

        const label =
          typeof metaCrumb === 'function'
            ? metaCrumb(route)
            : metaCrumb || record.name || record.path

        // record.path sokszor paramos ("/blog/:slug"), ezért inkább route-t építünk name alapjan
        const to = record.name ? { name: record.name, params: route.params } : record.path

        return {
          label: String(label),
          to,
        }
      })
  })

  return { crumbs }
}

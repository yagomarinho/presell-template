export function mergeNames(...names: (string | undefined)[]): string {
  return names.filter(Boolean).join(' ')
}

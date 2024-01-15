
export const demos = import.meta.glob('./**/*.vue', { eager: true })

export const sources = import.meta.glob('./**/*.vue', { as: 'raw', eager: true })
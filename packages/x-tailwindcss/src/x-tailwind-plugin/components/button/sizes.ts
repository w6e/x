import { TailwindHelpers } from '../../../types';

/**
 * Returns the `sizes` variants for component `button`.
 *
 * @param helpers - The {@link TailwindHelpers} to generate CSS.
 * @returns The {@link CssStyleOptions} for the variant.
 */
// eslint-disable-next-line  @typescript-eslint/explicit-function-return-type
export function buttonSizes({ theme }: TailwindHelpers) {
  return {
    sm: {
      minHeight: theme('spacing.32'),
      gap: theme('spacing.8'),
      paddingInlineStart: theme('spacing.8'),
      paddingInlineEnd: theme('spacing.8'),
      fontSize: theme('fontSize.xs')
    },

    md: {
      minHeight: theme('spacing.40'),
      gap: theme('spacing.8'),
      paddingInlineStart: theme('spacing.12'),
      paddingInlineEnd: theme('spacing.12'),
      fontSize: theme('fontSize.sm')
    },

    lg: {
      minHeight: theme('spacing.48'),
      gap: theme('spacing.8'),
      paddingInlineStart: theme('spacing.16'),
      paddingInlineEnd: theme('spacing.16'),
      fontSize: theme('fontSize.md')
    },

    xl: {
      minHeight: theme('spacing.56'),
      gap: theme('spacing.8'),
      paddingInlineStart: theme('spacing.24'),
      paddingInlineEnd: theme('spacing.24'),
      fontSize: theme('fontSize.lg')
    }
  };
}

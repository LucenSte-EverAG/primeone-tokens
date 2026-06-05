import type { ProgressSpinnerDesignTokens } from '@primeuix/themes/types/progressspinner';

 export default {
    colorScheme: {
        dark: {
            root: {
                colorOne: "{danger.color}",
                colorTwo: "{info.color}",
                colorFour: "{warn.color}",
                colorThree: "{success.color}"
            }
        },
        light: {
            root: {
                colorOne: "{danger.color}",
                colorTwo: "{info.color}",
                colorFour: "{warn.color}",
                colorThree: "{success.color}"
            }
        }
    }
} satisfies ProgressSpinnerDesignTokens;
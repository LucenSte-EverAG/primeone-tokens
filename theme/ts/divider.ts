import type { DividerDesignTokens } from '@primeuix/themes/types/divider';

 export default {
    root: {
        borderColor: "{warn.border.color}"
    },
    content: {
        color: "{content.color}",
        background: "{content.background}"
    },
    vertical: {
        margin: "{vertical.margin}",
        content: {
            padding: "{vertical.content.padding}"
        },
        padding: "{vertical.padding}"
    },
    horizontal: {
        margin: "{horizontal.margin}",
        content: {
            padding: "{horizontal.content.padding}"
        },
        padding: "{horizontal.padding}"
    }
} satisfies DividerDesignTokens;
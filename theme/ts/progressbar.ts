import type { ProgressBarDesignTokens } from '@primeuix/themes/types/progressbar';

 export default {
    root: {
        height: "{progressbar.height}",
        background: "{warn.color}",
        borderRadius: "{action.border.radius}"
    },
    label: {
        color: "{surface.0}",
        fontSize: "0.6563rem",
        fontWeight: "{typography.weight.semibold}"
    },
    value: {
        background: "{primary.500}"
    }
} satisfies ProgressBarDesignTokens;
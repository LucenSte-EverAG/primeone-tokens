import type { DialogDesignTokens } from '@primeuix/themes/types/dialog';

 export default {
    root: {
        color: "{content.color}",
        shadow: "0 8px 10px -6px #0000001a, 0 20px 25px -5px #0000001a",
        background: "{content.background}",
        borderColor: "{content.color}",
        borderRadius: "{overlay.modal.border.radius}"
    },
    title: {
        fontSize: "1.0938rem",
        fontWeight: "{typography.weight.semibold}"
    },
    footer: {
        gap: "{footer.gap}",
        padding: "{overlay.modal.padding}"
    },
    header: {
        gap: "{header.gap}",
        padding: "{overlay.modal.padding}"
    },
    content: {
        padding: "{overlay.modal.padding}"
    }
} satisfies DialogDesignTokens;
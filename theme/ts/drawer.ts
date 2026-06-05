import type { DrawerDesignTokens } from '@primeuix/themes/types/drawer';

 export default {
    root: {
        color: "{warn.color}",
        shadow: "0 8px 10px -6px #0000001a, 0 20px 25px -5px #0000001a",
        background: "{warn.color}",
        borderColor: "{warn.border.color}"
    },
    title: {
        fontSize: "1.3125rem",
        fontWeight: "{typography.weight.semibold}"
    },
    footer: {
        padding: "{overlay.modal.padding}"
    },
    header: {
        padding: "{overlay.modal.padding}"
    },
    content: {
        padding: "{overlay.modal.padding}"
    }
} satisfies DrawerDesignTokens;
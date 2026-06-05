import type { PasswordDesignTokens } from '@primeuix/themes/types/password';

 export default {
    icon: {
        color: "{form.field.icon.color}"
    },
    meter: {
        height: "{form.field.meter.height}",
        background: "{form.field.disabled.background}",
        borderRadius: "{form.field.meter.border.radius}"
    },
    content: {
        gap: "{form.field.content.gap}"
    },
    overlay: {
        color: "{surface.700}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        padding: "{form.field.overlay.padding}",
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderRadius: "{form.field.overlay.border.radius}"
    },
    colorScheme: {
        dark: {
            strength: {
                weakBackground: "{danger.color}",
                mediumBackground: "{warn.color}",
                strongBackground: "{success.color}"
            }
        },
        light: {
            strength: {
                weakBackground: "{danger.color}",
                mediumBackground: "{warn.color}",
                strongBackground: "{success.color}"
            }
        }
    }
} satisfies PasswordDesignTokens;
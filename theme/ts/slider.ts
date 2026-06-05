import type { SliderDesignTokens } from '@primeuix/themes/types/slider';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    range: {
        background: "{primary.active.background}"
    },
    track: {
        size: "{form.field.track.size}",
        background: "{content.hover.background}",
        borderRadius: "{form.field.track.border.radius}"
    },
    handle: {
        width: "{form.field.handle.width}",
        height: "{form.field.handle.height}",
        content: {
            width: "{form.field.handle.content.width}",
            height: "{form.field.handle.content.height}",
            shadow: "0 1px 1px 0 #00000024, 0 1px 0 0 #00000014",
            borderRadius: "{content.border.radius}",
            hoverBackground: "{surface.0}"
        },
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{form.field.background}",
        borderRadius: "{form.field.handle.border.radius}",
        hoverBackground: "{form.field.disabled.background}"
    },
    colorScheme: {
        dark: {
            handle: {
                content: {
                    background: "{surface.950}"
                }
            }
        },
        light: {
            handle: {
                content: {
                    background: "{surface.950}"
                }
            }
        }
    }
} satisfies SliderDesignTokens;
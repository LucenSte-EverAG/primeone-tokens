import type { EditorDesignTokens } from '@primeuix/themes/types/editor';

 export default {
    content: {
        color: "{content.color}",
        background: "{content.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{content.border.radius}"
    },
    overlay: {
        color: "{surface.700}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        padding: "{list.padding}",
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderRadius: "{form.field.overlay.border.radius}"
    },
    toolbar: {
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderRadius: "{form.field.toolbar.border.radius}"
    },
    toolbarItem: {
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        activeColor: "{primary.500}"
    },
    overlayOption: {
        color: "{surface.700}",
        padding: "{list.option.padding}",
        focusColor: "{surface.800}",
        borderRadius: "{form.field.overlay.option.border.radius}",
        focusBackground: "{list.option.focus.background}"
    }
} satisfies EditorDesignTokens;
import type { MenuDesignTokens } from '@primeuix/themes/types/menu';

 export default {
    item: {
        gap: "{navigation.item.gap}",
        icon: {
            color: "{primary.active.background}",
            focusColor: "{list.option.focus.color}"
        },
        color: "{navigation.item.color}",
        padding: "{navigation.item.padding}",
        focusColor: "{surface.800}",
        borderRadius: "{navigation.item.border.radius}",
        focusBackground: "{surface.800}"
    },
    list: {
        gap: "{navigation.list.gap}",
        padding: "{navigation.list.padding}"
    },
    root: {
        color: "{surface.800}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        background: "{surface.0}",
        borderColor: "{surface.100}",
        borderRadius: "{action.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    submenuLabel: {
        color: "{navigation.submenu.label.color}",
        padding: "{navigation.submenu.label.padding}",
        background: "{navigation.submenu.label.background}",
        fontWeight: "{navigation.submenu.label.font.weight}"
    }
} satisfies MenuDesignTokens;
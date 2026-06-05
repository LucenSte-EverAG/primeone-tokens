import type { TieredMenuDesignTokens } from '@primeuix/themes/types/tieredmenu';

 export default {
    item: {
        gap: "{navigation.item.gap}",
        icon: {
            color: "{form.field.icon.color}",
            focusColor: "{list.option.focus.color}",
            activeColor: "{navigation.item.active.color}"
        },
        color: "{navigation.item.color}",
        padding: "{navigation.item.padding}",
        focusColor: "{list.option.focus.color}",
        activeColor: "{navigation.item.active.color}",
        borderRadius: "{navigation.item.border.radius}",
        focusBackground: "{list.option.focus.background}",
        activeBackground: "{navigation.item.active.background}"
    },
    list: {
        gap: "{navigation.list.gap}",
        padding: "{navigation.list.padding}"
    },
    root: {
        color: "{warn.color}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        background: "{warn.color}",
        borderColor: "{warn.border.color}",
        borderRadius: "{action.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    submenu: {
        mobileIndent: "0.875rem"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    submenuIcon: {
        size: "{navigation.submenu.icon.size}",
        color: "{form.field.icon.color}",
        focusColor: "{list.option.focus.color}",
        activeColor: "{navigation.item.active.color}"
    }
} satisfies TieredMenuDesignTokens;
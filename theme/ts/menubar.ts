import type { MenubarDesignTokens } from '@primeuix/themes/types/menubar';

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
    root: {
        gap: "{basic.gap}",
        color: "{warn.color}",
        padding: "{footer.padding}",
        background: "{form.field.background}",
        borderColor: "{warn.border.color}",
        borderRadius: "{action.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    submenu: {
        gap: "{navigation.submenu.gap}",
        icon: {
            size: "{navigation.submenu.icon.size}",
            color: "{form.field.icon.color}",
            focusColor: "{list.option.focus.color}",
            activeColor: "{navigation.item.active.color}"
        },
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        padding: "{navigation.submenu.padding}",
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderRadius: "{navigation.submenu.border.radius}",
        mobileIndent: "0.875rem"
    },
    baseItem: {
        padding: "{base.item.padding}",
        borderRadius: "{base.item.border.radius}"
    },
    separator: {
        borderColor: "{content.border.color}"
    },
    mobileButton: {
        size: "{mobile.button.size}",
        color: "{surface.500}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        hoverColor: "{surface.600}",
        borderRadius: "{mobile.button.border.radius}",
        hoverBackground: "{content.hover.background}"
    }
} satisfies MenubarDesignTokens;
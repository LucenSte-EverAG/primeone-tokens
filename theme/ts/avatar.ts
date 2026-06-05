import type { AvatarDesignTokens } from '@primeuix/themes/types/avatar';

 export default {
    lg: {
        icon: {
            size: "{lg.icon.size}"
        },
        group: {
            offset: "{lg.group.offset}"
        },
        width: "{dropdown.lg.width}",
        height: "2.625rem",
        fontSize: "1.3125rem"
    },
    xl: {
        icon: {
            size: "{xl.icon.size}"
        },
        group: {
            offset: "{xl.group.offset}"
        },
        width: "{xl.width}",
        height: "{xl.height}",
        fontSize: "1.75rem"
    },
    icon: {
        size: "{action.icon.size}"
    },
    root: {
        color: "{warn.color}",
        width: "{border.width}",
        height: "{date.height}",
        fontSize: "0.875rem",
        background: "{warn.color}",
        borderRadius: "{action.border.radius}"
    },
    group: {
        offset: "{group.offset}",
        borderColor: "{surface.0}"
    }
} satisfies AvatarDesignTokens;
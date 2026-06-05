import type { ImageCompareDesignTokens } from '@primeuix/themes/types/imagecompare';

 export default {
    handle: {
        size: "0.9375rem",
        focusRing: {
            color: "{eads-white.whiteF-30}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        hoverSize: "{handle.hover.size}",
        background: "{eads-white.whiteF-30}",
        borderColor: "{list.option.group.background}",
        borderWidth: "{handle.border.width}",
        borderRadius: "{handle.border.radius}",
        hoverBackground: "{eads-white.whiteF-30}",
        hoverBorderColor: "{list.option.group.background}",
        transitionDuration: "{transition.duration}"
    }
} satisfies ImageCompareDesignTokens;
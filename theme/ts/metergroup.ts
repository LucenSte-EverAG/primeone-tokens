import type { MeterGroupDesignTokens } from '@primeuix/themes/types/metergroup';

 export default {
    root: {
        gap: "{basic.gap}",
        borderRadius: "{action.border.radius}"
    },
    label: {
        gap: "{label.gap}"
    },
    meters: {
        size: "{meters.size}",
        background: "{form.field.disabled.background}"
    },
    labelIcon: {
        size: "{label.icon.size}"
    },
    labelList: {
        verticalGap: "{label.list.vertical.gap}",
        horizontalGap: "{label.list.horizontal.gap}"
    },
    labelMarker: {
        size: "{label.marker.size}"
    }
} satisfies MeterGroupDesignTokens;
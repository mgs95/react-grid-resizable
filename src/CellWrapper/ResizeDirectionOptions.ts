export interface ResizeDirections {
    top       : boolean;
    bottom    : boolean;
    left      : boolean;
    right     : boolean;
}
/**
 * By default, all of these values are `true`, except for `disabled` which is `false` by default
 * 
 */
export interface ResizeDirectionOptions {
    /**
     * Default `true`
     * Set to `false` to disable resizing by separator above
     */
    top?       : boolean;
    /**
     * Default `true`
     * Set to `false` to disable resizing by separator below
     */
    bottom?    : boolean;
    /**
     * Default `true`
     * Set to `false` to disable resizing by separator on the left
     */
    left?      : boolean;
    /**
     * Default `true`
     * Set to `false` to disable resizing by separator on the right
     */
    right?     : boolean;
    /**
     * Default `true`
     * Set to `false` to disable resizing by separator on the right and left
     */
    horizontal?: boolean;
    /**
     * Default `true`
     * Set to `false` to disable resizing by separator above and below
     */
    vertical?  : boolean;
    /**
     * Default `false`
     * Set to `true` to disable resizing
     */
    disabled?  : boolean;
}

export const processOptions = (
    options: ResizeDirectionOptions = {}
): ResizeDirections => {
    let {
        top        = true,
        bottom     = true,
        left       = true,
        right      = true,
        horizontal = true,
        vertical   = true,
        disabled   = false,
    } = options;

    if (disabled) {
        top = bottom = left = right = false;
    }

    if (!horizontal) {
        left  = false;
        right = false;
    }

    if (!vertical) {
        top    = false;
        bottom = false;
    }
    
    return {
        top, bottom, left, right,
    };
}
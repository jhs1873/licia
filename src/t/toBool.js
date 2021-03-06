/* Convert value to a boolean.
 *
 * |Name  |Type   |Desc             |
 * |------|-------|-----------------|
 * |val   |*      |Value to convert |
 * |return|boolean|Converted boolean|
 */

/* example
 * toBool(true); // -> true
 * toBool(null); // -> false
 * toBool(1); // -> true
 * toBool(0); // -> false
 * toBool('0'); // -> false
 * toBool('1'); // -> true
 * toBool('false'); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function toBool(val: any): boolean;
 */

_('isStr');

exports = function(val) {
    if (isStr(val)) {
        val = val.toLowerCase();
        return val !== '0' && val !== '' && val !== 'false';
    }

    return !!val;
};

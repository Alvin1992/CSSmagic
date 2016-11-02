/**
 * Created by alvin on 16-11-2.
 */

function $$(selector, context) {
    context = context || document;
    var elems = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elems);
}

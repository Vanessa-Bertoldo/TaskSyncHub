/**
 * Used to remove circular dependencies when importing from store.js, instead use this com interface
 *
 * @type {null|function(T)}
 */
export let dispatch = null;
/**
 * Used to remove circular dependencies when importing from store.js, instead use this com interface
 *
 * @type {null|{dispatch:function(T), getState:function(): {}}}
 */
export let store = null;

export function initializeValues(_dispatch, _store) {
    dispatch = _dispatch;
    store = _store;
}
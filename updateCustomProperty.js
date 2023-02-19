export function getCustomProperty(element, prop) {
    return parseFloat(getComputedStyle(element).getPropertyValue(prop)) || 0
}

export function setCustomProperty(element, prop, value) {
    element.style.setProperty(prop, value)
    console.log(element, prop, value);
}

export function incrementCustomProperty(element, prop, inc) {
    setCustomProperty(element, prop, getCustomProperty(element, prop) + inc)
}
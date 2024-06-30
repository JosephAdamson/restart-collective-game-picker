

// Hey, why not?
function standardHash(contentName: string, index: number): number {
    if (contentName && index >= 0) {
        let sum = 0
        for (let i = 0; i < contentName.length; i++) {
            sum += contentName.charCodeAt(i)
        }
        return sum * 5 + index - 7;
    } 
    return -1;
}

function sleep(ticks: number) {
    return new Promise(resolve => setTimeout(resolve, ticks));
}

// case insentive version of includes
function caseInsensitiveIncludes(arr: string[], newValue: string) {
    for (let value of arr) {
        if (value.toLowerCase() === newValue.toLocaleLowerCase()) {
            return true
        }
    }
    return false;
}

export {
    standardHash, 
    caseInsensitiveIncludes,
    sleep
}
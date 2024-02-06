const choice = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const remove = (arr, item) => {
    // const index = arr.indexOf(item);

    // if(index === -1) {
    //     return undefined;
    // } else {
    //     return arr.splice(index, 1)[0];
    // }

    return arr.indexOf(item) === -1 ? undefined : arr.splice(arr.indexOf(item), 1)[0];
};

export { choice, remove };
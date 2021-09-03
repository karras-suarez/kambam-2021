export const format = (data) => {
    const formatedData = [];

    for (let key in data) {
        const val = data[key];
        val['id'] = key;
        formatedData.push(val);
    }
    return formatedData
}

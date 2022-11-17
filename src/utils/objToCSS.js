function objectToCss(obj) {
    return Object.keys(obj)
        .map((key) => {
            const newKey = key.replace(/[A-Z]/, (match) => "-" + match.toLowerCase());
            return `${newKey}:${obj[key]};`;
        })
        .join("\n");
}

export default objectToCss;

let basePaths = {
    node: 'node_modules/',
    src: 'resources/',
    dest: 'build/'
};

let paths = {
    js: {
        src: basePaths.src + 'js/',
        dest: basePaths.dest + 'js/'
    },
    css: {
        src: basePaths.src + 'scss/',
        dest: basePaths.dest + 'css/'
    },
};

module.exports = {
    basePaths: basePaths,
    paths: paths,
};
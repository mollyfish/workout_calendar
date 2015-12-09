var dest = './build';
var src = './app';

module.exports = {
  javascript: {
    src: src + '/app/**/*.js',
    dest: dest + '/js/',
    entryPoint: src + '/js/entry.js',
    packedFile: 'bundle.js'
  },
  sass: {
    src: src + '/styles/**/*.{sass,scss}',
    dest: dest + '/styles/',
    settings: {
      indentedSyntax: true,
    }
  },
  html: {
    src: src + "/app/*.html",
    dest: dest,
  },
  server: {
    serverFile: './server.js'
  },
  production: {
    cssSrc: dest + '/styles/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};

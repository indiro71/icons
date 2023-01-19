function defaultTemplate(
    { template },
    opts,
    { imports, interfaces, componentName, props, jsx }
) {
    const compIcon = `${componentName.name.replace('Svg', '')}`;
    const plugins = ['jsx'];
    if (opts.typescript) {
        plugins.push('typescript');
    }
    const typeScriptTpl = template.smart({ plugins });
    return typeScriptTpl.ast`${imports}
  ${interfaces}
  function ${compIcon}(${props}) {
    return ${jsx};
  }
  export default ${compIcon}
    `;
}
module.exports = defaultTemplate;
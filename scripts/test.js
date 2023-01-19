const svgReactContent = await svgr(
    content,
    {
        icon: false,
        replaceAttrValues: { '#00497A': "{props.color || '#00497A'}" },
        svgProps: {
            width: 24,
            height: 24,
        },
    },
    { componentName }
);
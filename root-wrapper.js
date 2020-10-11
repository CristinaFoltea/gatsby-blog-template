pre: ({ children: { props } }) => {
  if (props.mdxType === 'code') {
    return (
      <Code
        codeString={props.children.trim()}
        language={
          props.className && props.className.replace('language-', '')
        }
        {...props}
      />
    );
  }
};
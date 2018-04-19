Html Webpack Plugin:
<pre>
  Error: E:\Assignments\ReactAssignment\webpack-react-tutorial\src\index.js:22
   */var r=n(4),o=n(3),a=n(2),i=n(1),l="function"==typeof Symbol&&Symbol.for,u=l?Symbol.for("react.element"):60103,c=l?Symbol.for("react.portal"):60106,s=l?Symbol.for("react.f  ragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,d=l?Symbol.for("react.provider"):60109,p=l?Symbol.for("react.context"):60110,h=l?Symbol.for("react.async_mode"):601  11,m=l?Symbol.for("react.forward_ref"):60112,v="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t=arguments.length-1,n="http://reactjs.org/docs/error-decoder  .html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev   environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enq  ueueSetState:function(){}};function b(e,t,n){this.props=e,this.context=t,this.refs=a,th
  ReferenceError: document is not defined
  
  - index.js:22 Object.<anonymous>
    E:/Assignments/ReactAssignment/webpack-react-tutorial/src/index.js:22:5354
  
  - index.js:1 n
    E:/Assignments/ReactAssignment/webpack-react-tutorial/src/index.js:1:140
  
  - index.js:1 
    E:/Assignments/ReactAssignment/webpack-react-tutorial/src/index.js:1:554
  
  - index.js:1 
    E:/Assignments/ReactAssignment/webpack-react-tutorial/src/index.js:1:564
  
  - index.js:247 HtmlWebpackPlugin.evaluateCompilationResult
    [webpack-react-tutorial]/[html-webpack-plugin]/index.js:247:28
  
  - index.js:161 Promise.resolve.then.then.then.compiledTemplate
    [webpack-react-tutorial]/[html-webpack-plugin]/index.js:161:23
  
  
</pre>
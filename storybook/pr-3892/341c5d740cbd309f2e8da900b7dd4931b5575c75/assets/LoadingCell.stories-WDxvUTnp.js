import{j as e}from"./iframe-Dux2Qj3g.js";import{L as s}from"./LoadingCell-Bu6ye8hm.js";import"./preload-helper-Bmm2hojr.js";import"./index-DYXOz2KI.js";import"./SkeletonBar-DjvHpYhU.js";const p={title:"Components/ObjectTable/Building Blocks/LoadingCell",component:s,tags:["beta"],args:{width:200},argTypes:{width:{description:"The width of the cell in pixels",control:{type:"number",min:50,max:600}}},parameters:{docs:{description:{component:"A full `<td>` element with a skeleton loading indicator. Use this when rendering a complete table cell in a custom row renderer."}}},decorators:[a=>e.jsx("table",{children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx(a,{})})})})]},t={parameters:{docs:{source:{code:`import { LoadingCell } from "@osdk/react-components/experimental/object-table";

<table>
  <tbody>
    <tr>
      <LoadingCell width={200} />
    </tr>
  </tbody>
</table>`}}}};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { LoadingCell } from "@osdk/react-components/experimental/object-table";

<table>
  <tbody>
    <tr>
      <LoadingCell width={200} />
    </tr>
  </tbody>
</table>\`
      }
    }
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,p as default};

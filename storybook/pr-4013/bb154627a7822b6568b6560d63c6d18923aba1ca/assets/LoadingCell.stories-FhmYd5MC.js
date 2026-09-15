import{j as e}from"./iframe-DUDgTVFJ.js";import{L as s}from"./LoadingCell-BDDtdYeF.js";import"./preload-helper-BVnI7eCi.js";import"./index-BmzW3lpk.js";import"./SkeletonBar-BmHP5YBu.js";const p={title:"Components/ObjectTable/Building Blocks/LoadingCell",component:s,tags:["beta"],args:{width:200},argTypes:{width:{description:"The width of the cell in pixels",control:{type:"number",min:50,max:600}}},parameters:{docs:{description:{component:"A full `<td>` element with a skeleton loading indicator. Use this when rendering a complete table cell in a custom row renderer."}}},decorators:[a=>e.jsx("table",{children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx(a,{})})})})]},t={parameters:{docs:{source:{code:`import { LoadingCell } from "@osdk/react-components/object-table";

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
        code: \`import { LoadingCell } from "@osdk/react-components/object-table";

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

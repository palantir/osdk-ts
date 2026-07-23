import{M as a}from"./MultiColumnSortDialog-BQzqj-vw.js";import"./DraggableList-DP6k3c64.js";import"./iframe-B6-_QUtU.js";import"./preload-helper-BDRjb6OB.js";import"./svgIconContainer-DlKcWleM.js";import"./index-CAZGJab0.js";import"./search-B9pHM3fF.js";import"./Input-CN4vw-S9.js";import"./useBaseUiId-DZx6O2JG.js";import"./useControlled-CPgNZq1w.js";import"./index-DvgWcRwX.js";import"./index-BmjgV4Nn.js";import"./isEqual-Cysh_gUQ.js";import"./isObject-DU3fNQcc.js";import"./Button-15Cyb3e-.js";import"./ActionButton-DgMrOFUx.js";import"./Dialog-CtKZ3KtJ.js";import"./cross-D0oGkNoB.js";import"./InternalBackdrop-APGrKctp.js";import"./composite-DjQ2yLAq.js";import"./index-C6QdS4Xp.js";import"./MenuTrigger-DRZeqkb_.js";import"./CompositeItem-B1nT4QUA.js";import"./ToolbarRootContext-qv2Bumaf.js";import"./getDisabledMountTransitionStyles-DZeYNS25.js";import"./getPseudoElementBounds-DdOIWP6y.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>`}}}};var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

const [isOpen, setIsOpen] = useState(false);

<MultiColumnSortDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  columnOptions={[
    { id: "fullName", name: "Full Name", canSort: true },
    { id: "email", name: "Email", canSort: true },
    { id: "department", name: "Department", canSort: true },
  ]}
  currentSorting={[
    { id: "fullName", desc: false },
    { id: "department", desc: true },
  ]}
  onApply={(sorting) => console.log("Applied:", sorting)}
/>\`
      }
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,I as default};

import{M as a}from"./MultiColumnSortDialog-5xWPRE3S.js";import"./DraggableList-qVk8ReXj.js";import"./iframe-BYRe4uJK.js";import"./preload-helper-Cum0qz8-.js";import"./svgIconContainer-Cwfx5WFd.js";import"./index-BSiGs5jY.js";import"./search-BNXEAWI6.js";import"./Input-CeyVjWeu.js";import"./useBaseUiId-7Cfuz0uT.js";import"./useControlled-Cz1PwyZ0.js";import"./index-JMZ2rmHA.js";import"./index-BSDlleOE.js";import"./isEqual-B1i8JgkM.js";import"./isObject-BVZtGy2m.js";import"./Button-DOx7OVVZ.js";import"./ActionButton-JgzY3pFc.js";import"./Dialog-5sGPqiei.js";import"./cross-BhpL9m1U.js";import"./InternalBackdrop-BZBXVGAn.js";import"./composite-Dd4L05U8.js";import"./index-RnITh2Pk.js";import"./MenuTrigger-D-Cf_7ec.js";import"./CompositeItem-Crcaf1__.js";import"./ToolbarRootContext-C3DcUEtK.js";import"./getDisabledMountTransitionStyles-C4nkIV6E.js";import"./getPseudoElementBounds-DpFAaFeN.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

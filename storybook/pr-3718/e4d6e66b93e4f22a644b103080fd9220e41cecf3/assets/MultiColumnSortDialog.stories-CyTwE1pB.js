import{M as a}from"./MultiColumnSortDialog-CGmXG29a.js";import"./DraggableList-VGLolp8U.js";import"./iframe-CT8qFPUV.js";import"./preload-helper-BHyrK0we.js";import"./svgIconContainer-9rSG-q0q.js";import"./index-IIFqr_Jh.js";import"./search-B7W0NEyo.js";import"./Input-Hz6uGvXQ.js";import"./useBaseUiId-CAvMPjp1.js";import"./useControlled-BSUn0zkZ.js";import"./index-CnAG97BE.js";import"./index-G14nPyHu.js";import"./isEqual-CezrfRsb.js";import"./isObject-DFiQBwbw.js";import"./Button-CIZ3jWX3.js";import"./ActionButton-CzUPf6AH.js";import"./Dialog-CM51v1Ey.js";import"./cross-CMW1v6Nr.js";import"./InternalBackdrop-Cmwys2rA.js";import"./composite-Cvq6s1zD.js";import"./index-D23kGKaC.js";import"./MenuTrigger-U21ZTp6v.js";import"./CompositeItem-CS9_X5Cg.js";import"./ToolbarRootContext-DTfoBz1Z.js";import"./getDisabledMountTransitionStyles-Y5ZZEkI9.js";import"./getPseudoElementBounds-Dk4xseC2.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

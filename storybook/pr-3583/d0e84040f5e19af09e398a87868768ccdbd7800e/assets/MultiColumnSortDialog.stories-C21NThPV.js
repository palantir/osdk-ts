import{M as a}from"./MultiColumnSortDialog-DyVHFNVd.js";import"./DraggableList-Cd0qKp6_.js";import"./iframe-BFXaAbMi.js";import"./preload-helper-BMwoJTCs.js";import"./svgIconContainer-Bh0Nq4SG.js";import"./index-BuWbQMrM.js";import"./search-B98iV6aJ.js";import"./Input-CxdS1BnJ.js";import"./useBaseUiId-Bn5xxBMD.js";import"./useControlled-Fbf28rFc.js";import"./index-jh4ljTMC.js";import"./index-DzedeEFd.js";import"./Button-BnaQ_oXM.js";import"./small-cross-CVg4kuK3.js";import"./ActionButton-BOLBDvYq.js";import"./Dialog-BS27ms-N.js";import"./cross-CAFFJ4_C.js";import"./InternalBackdrop-Ccb0LpAb.js";import"./composite-BXOLT3kb.js";import"./index-8iHI4BiL.js";import"./MenuTrigger-BcWjFIgc.js";import"./CompositeItem-C15X9b4C.js";import"./ToolbarRootContext-CDfXkfnW.js";import"./getDisabledMountTransitionStyles-Bz_yAVAr.js";import"./getPseudoElementBounds-_bBXU7TS.js";import"./caret-down-C0ZBJoBq.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

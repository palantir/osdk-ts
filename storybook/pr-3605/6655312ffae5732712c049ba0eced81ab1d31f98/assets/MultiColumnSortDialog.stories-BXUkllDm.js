import{M as a}from"./MultiColumnSortDialog-B1WKnpTi.js";import"./DraggableList-Kpd_DNHJ.js";import"./iframe-gNe9ReqN.js";import"./preload-helper-BWzPsQJa.js";import"./svgIconContainer-QgcOta_8.js";import"./index-DEY9Rjmf.js";import"./search-mXj_8Ppd.js";import"./Input-CiGjYClw.js";import"./useBaseUiId-BAIfk5kV.js";import"./useControlled-B2IaLJKX.js";import"./index-BFRTdDwg.js";import"./index-DmajPU2-.js";import"./Button-CHvqhQPU.js";import"./small-cross-BM9PWxzD.js";import"./ActionButton-Bb2hxfNj.js";import"./Dialog-DFaOMfz7.js";import"./cross-CjeCVve4.js";import"./InternalBackdrop-CAZWagDR.js";import"./composite-DMVB6Olt.js";import"./index-CYEQrn89.js";import"./MenuTrigger-DDdcEjzN.js";import"./CompositeItem-Cqp-Y5zN.js";import"./ToolbarRootContext-C7KD-nph.js";import"./getDisabledMountTransitionStyles-BCht8du3.js";import"./getPseudoElementBounds-B4vZvIIJ.js";import"./caret-down-CQkem9FY.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

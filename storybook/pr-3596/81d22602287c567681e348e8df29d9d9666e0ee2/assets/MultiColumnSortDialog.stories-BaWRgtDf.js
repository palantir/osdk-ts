import{M as a}from"./MultiColumnSortDialog-6sR8BZaW.js";import"./DraggableList-D15gStUs.js";import"./iframe-D0SoGzlw.js";import"./preload-helper-DZb8OqUn.js";import"./svgIconContainer-DtLLs9FE.js";import"./index-NIcpiCuB.js";import"./search-bfQtBKKt.js";import"./Input-Bn3p-c3n.js";import"./useBaseUiId-0iVEX2QT.js";import"./useControlled-Bi-kOtn8.js";import"./index-Dokg2UqZ.js";import"./index--L61Dm0x.js";import"./Button-6j7tEnHD.js";import"./small-cross-BgRvRrt5.js";import"./ActionButton-BhK-S006.js";import"./Dialog-CUiiEYW7.js";import"./cross-B7-LJPHp.js";import"./InternalBackdrop-XOeF0jZ0.js";import"./composite-CiiEyupo.js";import"./index-DWvOPFpb.js";import"./MenuTrigger-CUlueeaV.js";import"./CompositeItem-MAxqLPAf.js";import"./ToolbarRootContext-Xkrq5RfV.js";import"./getDisabledMountTransitionStyles-Bc5E5XVH.js";import"./getPseudoElementBounds-Cn12-CzF.js";import"./caret-down-DFDSgNRy.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

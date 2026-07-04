import{M as a}from"./MultiColumnSortDialog-JV7B42df.js";import"./DraggableList-CTKpXlM5.js";import"./iframe-BeCKStTi.js";import"./preload-helper-BICrzKRt.js";import"./svgIconContainer-D-9_AOAs.js";import"./index-BfYzXW_3.js";import"./search-CZf2_gwq.js";import"./Input-fr7UgVSn.js";import"./useBaseUiId-COsIpFVh.js";import"./useControlled-5Cxw9uoZ.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./Button-to0u69wN.js";import"./small-cross-BWK0DWdF.js";import"./ActionButton-BABms-rZ.js";import"./Dialog-sahsqXct.js";import"./cross-DDXI9CZ5.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-ya4S42ZF.js";import"./MenuTrigger-Boxj4qRh.js";import"./CompositeItem-DkAKuEhG.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./getDisabledMountTransitionStyles-CyUadLiF.js";import"./getPseudoElementBounds-DW-1RV5o.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{canSort:!0,id:"fullName",name:"Full Name"},{canSort:!0,id:"email",name:"Email"},{canSort:!0,id:"jobTitle",name:"Job Title"},{canSort:!0,id:"department",name:"Department"},{canSort:!0,id:"startDate",name:"Start Date"},{canSort:!1,id:"location",name:"Location"}],x={argTypes:{columnOptions:{control:!1,description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu."},currentSorting:{control:!1,description:"Current sorting state from TanStack Table"},isOpen:{control:"boolean",description:"Whether the dialog is open"},onApply:{control:!1,description:"Called with the new sorting state when the user clicks Apply",table:{category:"Events"}},onClose:{control:!1,description:"Called when the dialog is closed",table:{category:"Events"}}},args:{columnOptions:i,currentSorting:[{desc:!1,id:"fullName"},{desc:!0,id:"department"}],isOpen:!0,onApply:t(),onClose:t()},component:a,parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}},tags:["beta"],title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog"},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,x as default};

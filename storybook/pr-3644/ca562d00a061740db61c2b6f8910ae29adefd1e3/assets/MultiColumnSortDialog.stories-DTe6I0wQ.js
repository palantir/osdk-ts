import{M as a}from"./MultiColumnSortDialog-CL3gHRKc.js";import"./DraggableList-DAIO4tbP.js";import"./iframe-CuiKkwwG.js";import"./preload-helper-UfN2IsO2.js";import"./svgIconContainer-CGaU8KkA.js";import"./index-Dlf_uAgv.js";import"./search-DqFyHzjH.js";import"./Input-a6gyL33e.js";import"./useBaseUiId-Nay19rjG.js";import"./useControlled-BtnNsy4-.js";import"./index-miFttS1J.js";import"./index-DZQ9ChWc.js";import"./Button-BVUZT5h4.js";import"./small-cross-D99Uepqj.js";import"./ActionButton-DgZhFU-u.js";import"./Dialog-B-MT5ACH.js";import"./cross-ClsL6Oym.js";import"./InternalBackdrop-BxnVPcA5.js";import"./composite-Dpj2Ofmh.js";import"./index-DLWZHi5B.js";import"./MenuTrigger-y-gNeWn1.js";import"./CompositeItem-DI9sV6CD.js";import"./ToolbarRootContext-BXvqC9VJ.js";import"./getDisabledMountTransitionStyles-Dni2U9Ja.js";import"./getPseudoElementBounds-B1WNuy2m.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],x={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

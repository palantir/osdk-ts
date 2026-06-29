import{M as a}from"./MultiColumnSortDialog-BZ1LOXTj.js";import"./DraggableList-DIpd3lyk.js";import"./iframe-f66FgX7Y.js";import"./preload-helper-raEF4RES.js";import"./svgIconContainer-vQy4jNvU.js";import"./index-DPqglQtc.js";import"./search-B8vnpBH9.js";import"./Input-CAFxf21S.js";import"./useBaseUiId-D571T0a4.js";import"./useControlled-Bu7YFQSN.js";import"./index-njRI7QSI.js";import"./index-CcMjMhdC.js";import"./Button-TDsMSWT0.js";import"./small-cross-BgZgA7uo.js";import"./ActionButton-CnKvj-QN.js";import"./Dialog-BpUid-uw.js";import"./cross-BghbwRkQ.js";import"./InternalBackdrop-xG7fM3E5.js";import"./composite-CJwo4Axb.js";import"./index-CogHfYbz.js";import"./MenuTrigger-DuneGM08.js";import"./CompositeItem-QGELHeCS.js";import"./ToolbarRootContext-COAEHk7J.js";import"./getDisabledMountTransitionStyles-DGKnXBN6.js";import"./getPseudoElementBounds-lQcxfzhD.js";import"./caret-down-CLEvivYC.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

import{M as a}from"./MultiColumnSortDialog-DyGiUi9Z.js";import"./DraggableList-C5JmjFNf.js";import"./iframe-CL4UessJ.js";import"./preload-helper-X9tQ-Ro6.js";import"./svgIconContainer-CMOMNq3G.js";import"./index-CuQscTLS.js";import"./search-CFrkmuc2.js";import"./Input-CbgCfohB.js";import"./useBaseUiId-C0g9vfON.js";import"./useControlled-C4g4Ro2e.js";import"./index-CZ6Gtb-I.js";import"./index-D5nMUh2o.js";import"./isEqual-hG_4ZrXX.js";import"./isObject-B6GdqpCO.js";import"./Button-DCwXYkIS.js";import"./ActionButton-Bu1kVHNE.js";import"./Dialog-DVpuAAE2.js";import"./cross-BrJ6ooB2.js";import"./InternalBackdrop-00goDF2v.js";import"./composite-C9gZWjPR.js";import"./index-kfQfKf2J.js";import"./MenuTrigger-D3QIkUB3.js";import"./CompositeItem-BJ8h2cBk.js";import"./ToolbarRootContext-YHEW-YfH.js";import"./getDisabledMountTransitionStyles-DzgvcXWi.js";import"./getPseudoElementBounds-BiPncuNY.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

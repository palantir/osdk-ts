import{M as a}from"./MultiColumnSortDialog-ThZjXe_9.js";import"./DraggableList-B4bDwMrD.js";import"./iframe-NQaBDcT-.js";import"./preload-helper-C4FqHzWe.js";import"./svgIconContainer-DQO0w72t.js";import"./index-CLkxnMKD.js";import"./search--uA81GPQ.js";import"./Input-B3gMQo3k.js";import"./useBaseUiId-CWfAhtPJ.js";import"./useControlled-B0nGvhOb.js";import"./index-Bi0qSrUM.js";import"./index-B3idfxCC.js";import"./isEqual-RgKOcXbb.js";import"./isObject-C9NXGwv9.js";import"./Button-DR9fgxtU.js";import"./ActionButton-DLrP6ZI2.js";import"./Dialog-BjhlK-2w.js";import"./cross-DcxhLvUw.js";import"./InternalBackdrop-BAhTmnaR.js";import"./composite-CoANlsJZ.js";import"./index-A2uxy8p8.js";import"./MenuTrigger-jO4hp_Ng.js";import"./CompositeItem-Heg_SISl.js";import"./ToolbarRootContext-KFSz4O2O.js";import"./getDisabledMountTransitionStyles-CQZ7k50D.js";import"./getPseudoElementBounds-loX8GLnh.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

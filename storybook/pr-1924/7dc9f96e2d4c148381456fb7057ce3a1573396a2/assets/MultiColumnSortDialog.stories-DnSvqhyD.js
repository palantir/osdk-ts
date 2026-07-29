import{M as a}from"./MultiColumnSortDialog-CQnsfhBk.js";import"./DraggableList-BX1X0rhs.js";import"./iframe-BlKzkmtn.js";import"./preload-helper-CJb7ZBwp.js";import"./svgIconContainer-DTMdlGkn.js";import"./index-BE33dGXM.js";import"./search-DTlUtZ9H.js";import"./Input-BdMnwJ3c.js";import"./useBaseUiId-QFjXRhmc.js";import"./useControlled-C8Xhu7sh.js";import"./index-DVqE6h_f.js";import"./index-EtRT7Ia5.js";import"./isEqual-90GY5dh2.js";import"./isObject-ClZ4w9zb.js";import"./Button-CR_nzyNk.js";import"./ActionButton-BUcZVkw2.js";import"./Dialog-Dfpzi-SI.js";import"./cross-CDSlzZ_j.js";import"./InternalBackdrop-eJVev9cg.js";import"./composite-DWj46q8f.js";import"./index-gHjVE7W3.js";import"./MenuTrigger-DdkeI051.js";import"./CompositeItem-DdICfa7h.js";import"./ToolbarRootContext-DkjfOPRa.js";import"./getDisabledMountTransitionStyles-CkgNCITp.js";import"./getPseudoElementBounds-yhK2vVLh.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

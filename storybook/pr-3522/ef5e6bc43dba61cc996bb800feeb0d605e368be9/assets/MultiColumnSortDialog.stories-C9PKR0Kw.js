import{M as a}from"./MultiColumnSortDialog-BxX3Gf7u.js";import"./DraggableList-B2l0L13f.js";import"./iframe-ZUB6IC-i.js";import"./preload-helper-JSGDW2EE.js";import"./svgIconContainer-vkeEtLLq.js";import"./index-kkF-sHSR.js";import"./search-Cxmpkc3b.js";import"./Input-B0ErIUZ2.js";import"./useBaseUiId-8JVytAd4.js";import"./useControlled-D5JAD95y.js";import"./index-BnGIgAZn.js";import"./index-BjqQMb7M.js";import"./Button-9-saF2rs.js";import"./small-cross-CiR4Ogs1.js";import"./ActionButton-Dg6ResVF.js";import"./Dialog-C5bdms97.js";import"./cross-DAlFLQ8V.js";import"./InternalBackdrop-C1gMFC_6.js";import"./composite-CYJkcK0Q.js";import"./index-BtELYtbZ.js";import"./MenuTrigger-DvWnlAjk.js";import"./CompositeItem-DxD9hL6l.js";import"./ToolbarRootContext-DXYxYbuP.js";import"./getDisabledMountTransitionStyles-BAiLTdY4.js";import"./getPseudoElementBounds-6ElEA1xK.js";import"./caret-down-CM67Qc_g.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

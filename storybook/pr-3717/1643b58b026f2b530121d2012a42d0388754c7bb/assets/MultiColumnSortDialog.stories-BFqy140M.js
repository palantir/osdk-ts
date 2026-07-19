import{M as a}from"./MultiColumnSortDialog-BdephSiG.js";import"./DraggableList-FqoFY7LZ.js";import"./iframe-C9caj-uS.js";import"./preload-helper-Dm7ndjo5.js";import"./svgIconContainer-B4Ghhqx2.js";import"./index-DJDCuZSS.js";import"./search-DJ1CgP8p.js";import"./Input-BoWXJjuZ.js";import"./useBaseUiId-BLHAOWKu.js";import"./useControlled-DZFGlnZc.js";import"./index-CDWH6ybA.js";import"./index-BdqcR2Fk.js";import"./isEqual-HRVzg3WQ.js";import"./isObject-DLFtkRLQ.js";import"./Button-C_2J43G-.js";import"./ActionButton-B-8xUM8_.js";import"./Dialog-DtbMpwEc.js";import"./cross-BqWAuO9Q.js";import"./InternalBackdrop-B4exXygs.js";import"./composite-bXu8NOAH.js";import"./index-FaRahgIA.js";import"./MenuTrigger-Dw7ka3uS.js";import"./CompositeItem-iG_-J612.js";import"./ToolbarRootContext-WTq_GHpE.js";import"./getDisabledMountTransitionStyles-iUIJl5bc.js";import"./getPseudoElementBounds-ClPhAI2i.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

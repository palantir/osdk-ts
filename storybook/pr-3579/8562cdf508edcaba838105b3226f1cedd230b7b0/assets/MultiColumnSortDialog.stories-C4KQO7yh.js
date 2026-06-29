import{M as a}from"./MultiColumnSortDialog-CvF5FERj.js";import"./DraggableList-B40TwhtF.js";import"./iframe-BgQGCMZK.js";import"./preload-helper-DceMzvTp.js";import"./svgIconContainer-DjCbUlQN.js";import"./index-D0qM6_3F.js";import"./search-Zc7R-E_2.js";import"./Input-CUdm70rf.js";import"./useBaseUiId-DUweHuqm.js";import"./useControlled-DCsXBaGY.js";import"./index-DI0-04On.js";import"./index-Wkp08oh_.js";import"./Button-GgYxfYWW.js";import"./small-cross-BZ7ydq7Y.js";import"./ActionButton-DVXNZ8jM.js";import"./Dialog-XTOgmdwi.js";import"./cross-RpoL6ucO.js";import"./InternalBackdrop-C-KkXhVz.js";import"./composite-BbaMzsMX.js";import"./index-CTszkxCl.js";import"./MenuTrigger-D4GTioZh.js";import"./CompositeItem-Ww2GySUz.js";import"./ToolbarRootContext-BbJw-Q_h.js";import"./getDisabledMountTransitionStyles-_WTJrDNH.js";import"./getPseudoElementBounds-C31_Y2ZQ.js";import"./caret-down-_fRrvn0V.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

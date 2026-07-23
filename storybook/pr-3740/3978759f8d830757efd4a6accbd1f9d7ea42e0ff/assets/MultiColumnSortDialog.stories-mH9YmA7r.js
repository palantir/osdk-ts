import{M as a}from"./MultiColumnSortDialog-Te6ZGCOe.js";import"./DraggableList-Buw5fkzU.js";import"./iframe-C9l55MfW.js";import"./preload-helper-BaR7j1qy.js";import"./svgIconContainer-B36bqId8.js";import"./index-B8sSDI6e.js";import"./search-CxxUnvng.js";import"./Input-Bv6ABtkM.js";import"./useBaseUiId-ChnMimVR.js";import"./useControlled-D2BKU9rQ.js";import"./index-DO7KJbr1.js";import"./index-DgjXWxOU.js";import"./isEqual-Cxmw8cnE.js";import"./isObject-CIVrJQuX.js";import"./Button-CoqVnaSH.js";import"./ActionButton-CaEwDF2o.js";import"./Dialog-Br-r_Jz5.js";import"./cross-BiQ3YqUJ.js";import"./InternalBackdrop-BlruP4ni.js";import"./composite-BIs1fDYc.js";import"./index-BW1Lfmqj.js";import"./MenuTrigger-Doe0cvbN.js";import"./CompositeItem-DE8DbRAW.js";import"./ToolbarRootContext-CKqEQDfC.js";import"./getDisabledMountTransitionStyles-CPanS3YJ.js";import"./getPseudoElementBounds-D7kXGV-U.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

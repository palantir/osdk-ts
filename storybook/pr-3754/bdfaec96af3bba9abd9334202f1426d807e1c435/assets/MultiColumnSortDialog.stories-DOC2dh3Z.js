import{M as a}from"./MultiColumnSortDialog-D0MoyL6S.js";import"./DraggableList-D-hNhtrV.js";import"./iframe-Cpo2Lb7Q.js";import"./preload-helper-BTyBDeYw.js";import"./svgIconContainer-CNBgUvgp.js";import"./index-DAIxb8lO.js";import"./search-81KRYPyx.js";import"./Input-Cq3cg5h0.js";import"./useBaseUiId-C71UhqfB.js";import"./useControlled-Du4CUvuR.js";import"./index-P8ZVWR7P.js";import"./index-BzSe1Ywi.js";import"./isEqual-C-XNtB89.js";import"./isObject-DQzLRM1_.js";import"./Button-DvY2Q1-Z.js";import"./ActionButton-CEbVE-_9.js";import"./Dialog-BcvgDMAE.js";import"./cross-CZFyZqXF.js";import"./InternalBackdrop-BbBNeTmM.js";import"./composite-lg9O8pjM.js";import"./index-BbCiixnW.js";import"./MenuTrigger-DjPrBlqb.js";import"./CompositeItem-Can9NOH7.js";import"./ToolbarRootContext-4YzqWCdW.js";import"./getDisabledMountTransitionStyles-CVyvKvVG.js";import"./getPseudoElementBounds-B1IEE38k.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,i=[{id:"fullName",name:"Full Name",canSort:!0},{id:"email",name:"Email",canSort:!0},{id:"jobTitle",name:"Job Title",canSort:!0},{id:"department",name:"Department",canSort:!0},{id:"startDate",name:"Start Date",canSort:!0},{id:"location",name:"Location",canSort:!1}],I={title:"Components/ObjectTable/Building Blocks/MultiColumnSortDialog",component:a,tags:["beta"],args:{isOpen:!0,onClose:t(),onApply:t(),columnOptions:i,currentSorting:[{id:"fullName",desc:!1},{id:"department",desc:!0}]},argTypes:{isOpen:{description:"Whether the dialog is open",control:"boolean"},onClose:{description:"Called when the dialog is closed",control:!1,table:{category:"Events"}},onApply:{description:"Called with the new sorting state when the user clicks Apply",control:!1,table:{category:"Events"}},columnOptions:{description:"Available columns to sort by. Only columns with `canSort: true` appear in the add menu.",control:!1},currentSorting:{description:"Current sorting state from TanStack Table",control:!1}},parameters:{docs:{description:{component:"A dialog for configuring multi-column sorting. Users can add sort columns, toggle between ascending/descending, and drag to reorder sort priority."}}}},e={parameters:{docs:{source:{code:`import { MultiColumnSortDialog } from "@osdk/react-components/experimental/object-table";

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

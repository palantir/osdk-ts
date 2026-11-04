import{f as p,j as e}from"./iframe-Cm6Hi8JW.js";import{O as i}from"./object-table-CpajiRD3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYxBeAAs.js";import"./Table-Ct_a1hW1.js";import"./index-CDpDzJRy.js";import"./Dialog-CdmQQCwI.js";import"./cross-CqZ8qeBD.js";import"./svgIconContainer-agsfS07p.js";import"./useBaseUiId-DhmqNEB-.js";import"./InternalBackdrop-CJZwU14-.js";import"./composite-F8udgwsX.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./index-DJKRGaVd.js";import"./useEventCallback-C2xB0U8G.js";import"./SkeletonBar-DlBW95tE.js";import"./LoadingCell-DOkaa0iK.js";import"./ColumnConfigDialog-G4e5dztx.js";import"./DraggableList-BTFqvx5V.js";import"./search-9QnSKEDq.js";import"./Input-YqDpCJ5-.js";import"./useControlled-DQSuLFKk.js";import"./Button-Bc-QcRr6.js";import"./small-cross-B71BinCO.js";import"./ActionButton-CVOWP0Vj.js";import"./Checkbox-CHgUS3Dm.js";import"./useValueChanged-BgnUyWLY.js";import"./CollapsiblePanel-oFEh-cWN.js";import"./MultiColumnSortDialog-CYrgSMGk.js";import"./MenuTrigger-BBOOXY-p.js";import"./CompositeItem-BMwGHp9X.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./getDisabledMountTransitionStyles-DwNKIeA1.js";import"./getPseudoElementBounds-7U3MdNEW.js";import"./chevron-down-yfyql6cd.js";import"./index-DID7t8gF.js";import"./error-Dmy_j7rB.js";import"./BaseCbacBanner-BDEZgR9M.js";import"./makeExternalStore-BMRo_idP.js";import"./Tooltip-YgKwei3V.js";import"./PopoverPopup-Al1KuNNN.js";import"./debounce-D0B2zS6f.js";import"./useOsdkClient-BlYAWhvy.js";import"./tick-4BXQbbZv.js";import"./DropdownField-CY7MjU_C.js";import"./isEqual-CCItJCpy.js";import"./withOsdkMetrics-BXiHxUU0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};

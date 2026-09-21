import{f as p,j as e}from"./iframe-DRBbLQEP.js";import{O as i}from"./object-table-sUL5tWKm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bt1-OzgM.js";import"./Table-rR_QztEz.js";import"./index-DKGchVF5.js";import"./Dialog-D9u2m3uG.js";import"./cross-CUrCvhqT.js";import"./svgIconContainer-DUoraq0-.js";import"./useBaseUiId-0Fcyn-Yx.js";import"./InternalBackdrop-TfRvWb5r.js";import"./composite-BQ1GsMvw.js";import"./index-6P3gaHhW.js";import"./index-DRFL7mOG.js";import"./index-BXLTNv1i.js";import"./useEventCallback-D23WH7I3.js";import"./SkeletonBar-CkkbWTlQ.js";import"./LoadingCell-BMEY3efX.js";import"./ColumnConfigDialog-Cpe2EKts.js";import"./DraggableList-CBNUak8l.js";import"./search-DM25wUgq.js";import"./Input-DCqgylfG.js";import"./useControlled-D-0ahwbd.js";import"./Button-YsHjEWcc.js";import"./small-cross-Qpn-pdOm.js";import"./ActionButton-xScfZGhC.js";import"./Checkbox-DiMmQyM_.js";import"./useValueChanged-B9a9bBNB.js";import"./CollapsiblePanel-CfADBTSn.js";import"./MultiColumnSortDialog-BEDY0mXN.js";import"./MenuTrigger-CI1ocvnA.js";import"./CompositeItem-DHU6LUkY.js";import"./ToolbarRootContext-Dq5VhD1u.js";import"./getDisabledMountTransitionStyles-CRFpWsUL.js";import"./getPseudoElementBounds-CEq_ua0q.js";import"./chevron-down-D9sfivXL.js";import"./index-BFx1Z8Pw.js";import"./error-Bly5Bi76.js";import"./BaseCbacBanner-DWPKuije.js";import"./makeExternalStore-DUU8gKNu.js";import"./Tooltip-BokzoO6e.js";import"./PopoverPopup-BNl-xY3a.js";import"./debounce-F863pl25.js";import"./useOsdkClient-4YE_Fd5v.js";import"./tick-N613LFVJ.js";import"./DropdownField-Dwy3SrHP.js";import"./isEqual-DmoAqAF3.js";import"./withOsdkMetrics-BqMyyD8f.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

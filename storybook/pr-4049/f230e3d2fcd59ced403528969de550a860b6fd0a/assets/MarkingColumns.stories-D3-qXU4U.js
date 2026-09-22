import{f as p,j as e}from"./iframe-CxxM9p3K.js";import{O as i}from"./object-table-BCOM_Q_i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Clfhc9e2.js";import"./Table-CERILenu.js";import"./index-BFBsPuy5.js";import"./Dialog-CeAU4pGS.js";import"./cross-DVlZmvQu.js";import"./svgIconContainer-BDX64ThR.js";import"./useBaseUiId-6hcgy7hR.js";import"./InternalBackdrop-CLXXO-pE.js";import"./composite-DnTfWsZ7.js";import"./index-Cmw2FWOc.js";import"./index-U9rL3bD6.js";import"./index-ChdzrcBL.js";import"./useEventCallback-twJMSJh5.js";import"./SkeletonBar-BmxyWPnR.js";import"./LoadingCell-C31Aag0D.js";import"./ColumnConfigDialog-BvvSCjGt.js";import"./DraggableList-0r1jvYcu.js";import"./search-BLctbnBP.js";import"./Input-BEL6yzPH.js";import"./useControlled-BM7wy7zH.js";import"./Button-BSoYYLdN.js";import"./small-cross-BeQrGWQ3.js";import"./ActionButton-VAbO0Pky.js";import"./Checkbox-1FKOIi3w.js";import"./useValueChanged-DOWNQBb0.js";import"./CollapsiblePanel-BS-lVxoG.js";import"./MultiColumnSortDialog-k8mQSZef.js";import"./MenuTrigger-CdIkBQVS.js";import"./CompositeItem-D91fXLRV.js";import"./ToolbarRootContext-DrjoHCqu.js";import"./getDisabledMountTransitionStyles-DTSBvSw4.js";import"./getPseudoElementBounds-DYfgqtqr.js";import"./chevron-down-jQiKIGSz.js";import"./index-DXQ0Y341.js";import"./error-CFTb0-g7.js";import"./BaseCbacBanner-DeC626Ph.js";import"./makeExternalStore-Ryz_3n-W.js";import"./Tooltip-CDs-lAuM.js";import"./PopoverPopup-DAq0-7NO.js";import"./debounce-CX8zVuen.js";import"./useOsdkClient-CYTSjB1o.js";import"./tick-BPFcYePS.js";import"./DropdownField-nXSmGKVx.js";import"./isEqual-3hwHAxpd.js";import"./withOsdkMetrics-axCUhS1P.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-DGqAxy0c.js";import{O as i}from"./object-table-C4h2AQng.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOu5LciR.js";import"./Table-Bb4YPgdo.js";import"./index-DKVHPnER.js";import"./Dialog-anGNN7I_.js";import"./cross-Br8T-iI2.js";import"./svgIconContainer-DFE3qBEK.js";import"./useBaseUiId-C0sG7UN2.js";import"./InternalBackdrop-DxmAXLH9.js";import"./composite-D73ytotq.js";import"./index-DN9D6M_y.js";import"./index-BAufJju8.js";import"./index-DnyuXxdT.js";import"./useEventCallback-BnNKA4GA.js";import"./SkeletonBar-C_0umCEh.js";import"./LoadingCell-DElOG7wi.js";import"./ColumnConfigDialog-CQ_9puDf.js";import"./DraggableList-bael48kc.js";import"./search-C1O3fBRz.js";import"./Input-DVJhqCpr.js";import"./useControlled-BP_B87Zc.js";import"./isEqual-B8ezDNLz.js";import"./isObject-BnTUQNm1.js";import"./Button-CF2ri-xc.js";import"./ActionButton-CN4sh4zX.js";import"./Checkbox-BZ-uyspo.js";import"./useValueChanged-CSgSC1y2.js";import"./CollapsiblePanel-B6eddjM4.js";import"./MultiColumnSortDialog-AcZSQ5x4.js";import"./MenuTrigger-BkwAR0Z1.js";import"./CompositeItem-Bz35U6U_.js";import"./ToolbarRootContext-B_tVNmjA.js";import"./getDisabledMountTransitionStyles-BHGLl1Fn.js";import"./getPseudoElementBounds-DP1LYQiJ.js";import"./chevron-down-mI4RWT8g.js";import"./index-DeBUQceq.js";import"./error-DGKlIM1X.js";import"./BaseCbacBanner-PP6H_S_N.js";import"./makeExternalStore-DpgkNH8V.js";import"./Tooltip-9l-evPVY.js";import"./PopoverPopup-xJPVMP21.js";import"./toNumber-fAoGURUP.js";import"./useOsdkClient-DcNNMvLK.js";import"./tick-Dia0AHNe.js";import"./DropdownField-lga8VtBz.js";import"./withOsdkMetrics-Bs3jbmHC.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

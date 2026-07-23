import{f as p,j as e}from"./iframe-Z2aXJPdd.js";import{O as i}from"./object-table-2xRchvLA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-HH98OTG_.js";import"./Table-DCEDbCej.js";import"./index-BDwbbs7g.js";import"./Dialog-CQ9bW3NZ.js";import"./cross-BUXL1pRc.js";import"./svgIconContainer-6r4Cq3if.js";import"./useBaseUiId-DsRLOs7K.js";import"./InternalBackdrop-MWzh2A1Y.js";import"./composite-D_ju5rZt.js";import"./index-wmvnWSa4.js";import"./index-CMHsxFJx.js";import"./index-BeCsuUiB.js";import"./useEventCallback-BSIMXIrB.js";import"./SkeletonBar-CqKWNE3e.js";import"./LoadingCell-gMAiXv4Z.js";import"./ColumnConfigDialog-DZLqpkjj.js";import"./DraggableList-hVGM03aj.js";import"./search-CnOrU0Lt.js";import"./Input-Cnfz6hBh.js";import"./useControlled-CwIh3vpr.js";import"./isEqual-DUEJ2syM.js";import"./isObject-F1m0DPX1.js";import"./Button-SBHQNUwv.js";import"./ActionButton-DfA2iWyA.js";import"./Checkbox-DstZ21Vq.js";import"./useValueChanged-Dw41idhr.js";import"./CollapsiblePanel-CD6CVsm_.js";import"./MultiColumnSortDialog-C7hgMBaM.js";import"./MenuTrigger-DI52AfNk.js";import"./CompositeItem-yg9xry01.js";import"./ToolbarRootContext-By8aQOR7.js";import"./getDisabledMountTransitionStyles-Bn5Izddt.js";import"./getPseudoElementBounds-CApyAz7W.js";import"./chevron-down-DdKTBYWI.js";import"./index-r54kb4_d.js";import"./error-lpxbkNMO.js";import"./BaseCbacBanner-CFGfRyaG.js";import"./makeExternalStore-tnX_KQS7.js";import"./Tooltip-C831Zbcc.js";import"./PopoverPopup-BjzqWGQ-.js";import"./toNumber-CUo8G2qG.js";import"./useOsdkClient-FRG2gFj_.js";import"./tick-BL3MemI_.js";import"./DropdownField-D8Gkk5jg.js";import"./withOsdkMetrics-YL2Lw-aJ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

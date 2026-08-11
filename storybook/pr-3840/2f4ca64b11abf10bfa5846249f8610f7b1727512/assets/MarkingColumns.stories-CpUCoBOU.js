import{f as p,j as e}from"./iframe-BYn0Dbkf.js";import{O as i}from"./object-table-B0lAPirf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bs3XUXmU.js";import"./Table-9ofcA_L-.js";import"./index-DAPmu22T.js";import"./Dialog-a20WTzra.js";import"./cross-BXV7hkb7.js";import"./svgIconContainer-BVGjJ7Ho.js";import"./useBaseUiId-BF9dGCHt.js";import"./InternalBackdrop-C6QQSOU_.js";import"./composite-DJ1g0dtg.js";import"./index-XbPpfGjN.js";import"./index-3eUfjQeA.js";import"./index-k0LAveS5.js";import"./useEventCallback-C2Vv72P0.js";import"./SkeletonBar-B8UnVDE_.js";import"./LoadingCell-CXCaMwdV.js";import"./ColumnConfigDialog-Crc9dj67.js";import"./DraggableList-DX3N03Ic.js";import"./search-BHLX4gDD.js";import"./Input-JHNZlMmd.js";import"./useControlled-BjeGab0J.js";import"./isEqual-C6o1lCTI.js";import"./isObject-D59ADqrH.js";import"./Button-SDlJ1SYG.js";import"./ActionButton-3OKX3KKo.js";import"./Checkbox-Cw8U-R78.js";import"./useValueChanged-lInqvc-E.js";import"./CollapsiblePanel-CS8vV5wB.js";import"./MultiColumnSortDialog-DxC7E4Cw.js";import"./MenuTrigger-B6ffxhp1.js";import"./CompositeItem-D_irOX6v.js";import"./ToolbarRootContext-CIeppiht.js";import"./getDisabledMountTransitionStyles-BFmswiN_.js";import"./getPseudoElementBounds-DddCY1gg.js";import"./chevron-down-CkcBV-EM.js";import"./index-BcYpOZ5o.js";import"./error-Ca0TYJkV.js";import"./BaseCbacBanner-CbvQ2cnZ.js";import"./makeExternalStore-yw69iLs7.js";import"./Tooltip--_7id-zF.js";import"./PopoverPopup-BtDf8BBC.js";import"./toNumber-BIk96f3L.js";import"./useOsdkClient-DwNUV0Zv.js";import"./tick-CGOrJa2L.js";import"./DropdownField-DYO0cR2M.js";import"./withOsdkMetrics-C6gKOAoe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

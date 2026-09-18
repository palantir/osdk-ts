import{f as p,j as e}from"./iframe-DJaET-4W.js";import{O as i}from"./object-table-CuSa47sm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BLsfXLTb.js";import"./Table-JrxAFI5T.js";import"./index-CXAjf3Lj.js";import"./Dialog-Dwent98Z.js";import"./cross-DREoRCVi.js";import"./svgIconContainer-ZOxHgtx1.js";import"./useBaseUiId-C64d8rt1.js";import"./InternalBackdrop-BLBvj5zY.js";import"./composite-DJhk57sk.js";import"./index-DBzGUm2T.js";import"./index-BtLQLn9f.js";import"./index-w7P2l7vQ.js";import"./useEventCallback-CXs_hqhL.js";import"./SkeletonBar-Bcjdnsfw.js";import"./LoadingCell-e-bxlp72.js";import"./ColumnConfigDialog-J6w0_pmW.js";import"./DraggableList-XTrRxHlY.js";import"./search-DhdNxuaM.js";import"./Input-Ckb4ze0a.js";import"./useControlled-CUKxlT-G.js";import"./Button-BMrMSDOy.js";import"./small-cross-BsEXntmc.js";import"./ActionButton-BmGbsUdR.js";import"./Checkbox-Jt8RyrRN.js";import"./useValueChanged-Bp7ZN932.js";import"./CollapsiblePanel--Hfy1MmM.js";import"./MultiColumnSortDialog-yuAnYgW8.js";import"./MenuTrigger-t78-yvMd.js";import"./CompositeItem-DfP3tBe3.js";import"./ToolbarRootContext-geDYh26O.js";import"./getDisabledMountTransitionStyles-DhGiANWb.js";import"./getPseudoElementBounds-BuefBtP4.js";import"./chevron-down-LDtg690T.js";import"./index-Cy507Wuk.js";import"./error-BfaKs4G2.js";import"./BaseCbacBanner-u1noguyg.js";import"./makeExternalStore-Bp_quvMW.js";import"./Tooltip-CSQ5aHI4.js";import"./PopoverPopup-BCoOy9bx.js";import"./debounce-D8PkG1oB.js";import"./useOsdkClient-CVweCxJ6.js";import"./tick-DE6CHk5m.js";import"./DropdownField-Bf4KN3tx.js";import"./isEqual-C-56PDu6.js";import"./withOsdkMetrics-DfivTNsf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

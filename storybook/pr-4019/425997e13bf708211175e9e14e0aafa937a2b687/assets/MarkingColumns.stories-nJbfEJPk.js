import{f as p,j as e}from"./iframe-CN_vvEvV.js";import{O as i}from"./object-table-DX7CTvjQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WuzznOu3.js";import"./Table-xHkxr4dJ.js";import"./index-Yn_grBDh.js";import"./Dialog-DFIKjt_b.js";import"./cross-BTNfX9AB.js";import"./svgIconContainer-Cuv7eTan.js";import"./useBaseUiId-D6GNKrv7.js";import"./InternalBackdrop-cUW2sy_R.js";import"./composite-Dgt1ShdF.js";import"./index-DmpSrWu6.js";import"./index-BZSZGkip.js";import"./index-CCC1qb5m.js";import"./useEventCallback-CKtb97LM.js";import"./SkeletonBar-DfT678KI.js";import"./LoadingCell-DO8BK_3m.js";import"./ColumnConfigDialog-jxRXajs0.js";import"./DraggableList-EI0d774X.js";import"./search-BL454ash.js";import"./Input-D-TN7H1o.js";import"./useControlled-DY8zlZhG.js";import"./Button-GYys4WHS.js";import"./small-cross-Bnuet9W-.js";import"./ActionButton-DNB_8X09.js";import"./Checkbox-CgSh6FsU.js";import"./useValueChanged-BAUdQdKF.js";import"./CollapsiblePanel-Btx1XCpX.js";import"./MultiColumnSortDialog-Cq5nIQkj.js";import"./MenuTrigger-BJCiSHbj.js";import"./CompositeItem-CUoXO_HL.js";import"./ToolbarRootContext-DFFN_XcR.js";import"./getDisabledMountTransitionStyles-BMjHeHnL.js";import"./getPseudoElementBounds-Blrc2Fw3.js";import"./chevron-down-CuRI24Zn.js";import"./index-e9J7zdgf.js";import"./error-DJd0ydtA.js";import"./BaseCbacBanner-pbTMe1h8.js";import"./makeExternalStore-DNuR4f-v.js";import"./Tooltip-CEURmlww.js";import"./PopoverPopup-B_u8qz4L.js";import"./debounce-DK3ARArn.js";import"./useOsdkClient-DrtQRBcg.js";import"./tick-DRndoMTx.js";import"./DropdownField-D5NveR3K.js";import"./isEqual-Z4hf267W.js";import"./withOsdkMetrics-C7EoGoEb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

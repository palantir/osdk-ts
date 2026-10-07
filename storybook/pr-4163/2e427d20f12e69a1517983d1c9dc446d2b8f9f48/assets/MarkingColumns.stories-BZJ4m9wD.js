import{f as p,j as e}from"./iframe-DTvoIH2r.js";import{O as i}from"./object-table-DcBRKP2Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl5BDaS_.js";import"./Table-B5BM-1ts.js";import"./index-Cm5sGWxJ.js";import"./Dialog-DOwUxWz4.js";import"./cross-dEikKBUB.js";import"./svgIconContainer-TNOoFETa.js";import"./useBaseUiId-DFuLIzAR.js";import"./InternalBackdrop-BtTRXxuq.js";import"./composite-u0e-F1rW.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./index-BJuMumhG.js";import"./useEventCallback-ClE8dN3c.js";import"./SkeletonBar-B_QvOAKR.js";import"./LoadingCell-Db0NAIaK.js";import"./ColumnConfigDialog-DFcvH2Ry.js";import"./DraggableList-BhFAB-0e.js";import"./search-CkOB4LMx.js";import"./Input-C-tth6vb.js";import"./useControlled-0uh_9m14.js";import"./Button-Eyz2dERQ.js";import"./small-cross-b1Gc4au3.js";import"./ActionButton-DvyFEALd.js";import"./Checkbox-DD7fo72m.js";import"./useValueChanged-C0F3L9Dh.js";import"./CollapsiblePanel-CmQJ5gXg.js";import"./MultiColumnSortDialog-C1nSqxJj.js";import"./MenuTrigger-BvK8OaRd.js";import"./CompositeItem-OtQFnxkB.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./getDisabledMountTransitionStyles-jYzEuXLs.js";import"./getPseudoElementBounds-DP6PNIaO.js";import"./chevron-down-Kc2WAjaE.js";import"./index-C_BS0Bod.js";import"./error-CAqUL9Mb.js";import"./BaseCbacBanner-Dgtv0AkD.js";import"./makeExternalStore-B3yQfg4Y.js";import"./Tooltip-D8UVCGwD.js";import"./PopoverPopup-BTvzJrlx.js";import"./debounce-Kfo2TjOI.js";import"./useOsdkClient-DgEbhQnl.js";import"./tick-xV1uMXxC.js";import"./DropdownField-_nnCiIcu.js";import"./isEqual-osHTpoDt.js";import"./withOsdkMetrics-iCsj3SqR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

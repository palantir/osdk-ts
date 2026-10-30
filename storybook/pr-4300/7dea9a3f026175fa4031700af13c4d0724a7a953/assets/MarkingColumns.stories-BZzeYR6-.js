import{f as p,j as e}from"./iframe-D3mBTfqd.js";import{O as i}from"./object-table-BmSiyhH0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-RhNKQ2Pa.js";import"./Table-D5-h2zwh.js";import"./index-DCS7OdDx.js";import"./Dialog-DbVEFERY.js";import"./cross-Cs7mtZ7v.js";import"./svgIconContainer-CwmlAS-2.js";import"./useBaseUiId-hynuT-IP.js";import"./InternalBackdrop-DNSxnLlU.js";import"./composite-BE_H9BAX.js";import"./index-YNTwsynL.js";import"./index-Ch5DNylK.js";import"./index-yxRsWDJt.js";import"./useEventCallback-CEvZMKXh.js";import"./SkeletonBar-BORqTxsq.js";import"./LoadingCell-Bx56T2Bi.js";import"./ColumnConfigDialog-DzzE2iwn.js";import"./DraggableList-DF47COil.js";import"./search-CxMCC1Wj.js";import"./Input-eLGPTS9w.js";import"./useControlled-k1vl1-pB.js";import"./Button-B0c6HnvU.js";import"./small-cross-C_POnZQE.js";import"./ActionButton-y2sXfkTG.js";import"./Checkbox-QvPT4pF7.js";import"./useValueChanged-i2iant8L.js";import"./CollapsiblePanel-GMK9kxHe.js";import"./MultiColumnSortDialog-C_VRaZdF.js";import"./MenuTrigger-DOHOHG30.js";import"./CompositeItem-20RMszAx.js";import"./ToolbarRootContext-DKBBgUjn.js";import"./getDisabledMountTransitionStyles-CltXDkvP.js";import"./getPseudoElementBounds-uAR-4phM.js";import"./chevron-down-CTo4p9pl.js";import"./index-BL026QrW.js";import"./error-ifBqoXQc.js";import"./BaseCbacBanner-Be8DWF3Z.js";import"./makeExternalStore-D3BDuZOH.js";import"./Tooltip-D4jJN_ia.js";import"./PopoverPopup-BlPyX7uT.js";import"./debounce-8v_G0MM7.js";import"./useOsdkClient-BXgSuM8y.js";import"./tick-Bdbhcehw.js";import"./DropdownField-BFO3Yx-p.js";import"./isEqual-BvS6zo9P.js";import"./withOsdkMetrics-Crg_ITzK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

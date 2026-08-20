import{f as p,j as e}from"./iframe-C1kKKYdD.js";import{O as i}from"./object-table-EugYSPRX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6rhobWF.js";import"./Table-CLbo6gpE.js";import"./index-B1n8gOgb.js";import"./Dialog-D7ukJCKc.js";import"./cross-BR0Y4p7f.js";import"./svgIconContainer-BTr0PbTv.js";import"./useBaseUiId-DXAZbTHW.js";import"./InternalBackdrop-3F3xyHcj.js";import"./composite-ByHxOBay.js";import"./index-DQDP2CQD.js";import"./index-BLcLrxFs.js";import"./index-U-Kwg7sY.js";import"./useEventCallback-CdKhensz.js";import"./SkeletonBar-CPN9tZcc.js";import"./LoadingCell-ClyVakYH.js";import"./ColumnConfigDialog-BgefYkLR.js";import"./DraggableList-CHuZ_t3T.js";import"./search-D608KClO.js";import"./Input-BuF9ZIUF.js";import"./useControlled-unM0ZLUw.js";import"./Button-BSvNohBM.js";import"./small-cross-BIpg1ePk.js";import"./ActionButton-B68xFw_I.js";import"./Checkbox-xlu2pDu0.js";import"./useValueChanged-DFOr3chR.js";import"./CollapsiblePanel-CKUKf9Bh.js";import"./MultiColumnSortDialog-MHmSP81g.js";import"./MenuTrigger-o8CXHElR.js";import"./CompositeItem-BdX0jAKM.js";import"./ToolbarRootContext-BtomAQOF.js";import"./getDisabledMountTransitionStyles-Clu-nqTW.js";import"./getPseudoElementBounds-B5hqRMo8.js";import"./chevron-down-nMTcBTam.js";import"./index-BzLe4OJj.js";import"./error-BDemNBQ2.js";import"./BaseCbacBanner-BUjFwL83.js";import"./makeExternalStore-Cl4nhu8w.js";import"./Tooltip-CWzX8-a-.js";import"./PopoverPopup-BDqDxjcQ.js";import"./debounce-CcUXcLi7.js";import"./useOsdkClient-CK76NQ5O.js";import"./tick-BitGxqRP.js";import"./DropdownField-D9mPTLqi.js";import"./isEqual-CHP7bcZD.js";import"./withOsdkMetrics-BcxhsS6v.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

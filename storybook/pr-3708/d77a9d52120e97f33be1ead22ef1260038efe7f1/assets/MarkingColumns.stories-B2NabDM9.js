import{f as p,j as e}from"./iframe-D3dMtWZi.js";import{O as i}from"./object-table-BeHgCGqE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUWG9kqD.js";import"./Table-B5NHn00D.js";import"./index-BkLNCLKs.js";import"./Dialog-1gCrd1Uo.js";import"./cross-BRNjhRUe.js";import"./svgIconContainer-B-3gwpq3.js";import"./useBaseUiId-BeKkfQxb.js";import"./InternalBackdrop-DKOdGewL.js";import"./composite-HvEyyie1.js";import"./index-Jm7ycLnY.js";import"./index-sXXayhsV.js";import"./index-isd7A8Bg.js";import"./useEventCallback-DRF4uTc8.js";import"./SkeletonBar-BtfAOyAe.js";import"./LoadingCell-78ePr_a-.js";import"./ColumnConfigDialog-BBvOqor6.js";import"./DraggableList-DMsDLqi0.js";import"./search-DFI2cd-q.js";import"./Input-BYKHfHEU.js";import"./useControlled-4H3BxY_w.js";import"./isEqual-Anm0EuOL.js";import"./isObject-BpnOCVri.js";import"./Button-uPNp4rf8.js";import"./ActionButton-B-2tjZGW.js";import"./Checkbox-D7ztiN93.js";import"./useValueChanged-DnkPIsnW.js";import"./CollapsiblePanel-kjs4fFN4.js";import"./MultiColumnSortDialog-CfQqLbwS.js";import"./MenuTrigger-BxOLggb0.js";import"./CompositeItem-iHcCjNZO.js";import"./ToolbarRootContext-D4W13f8M.js";import"./getDisabledMountTransitionStyles-o_rFTdHd.js";import"./getPseudoElementBounds-DCo2t0nz.js";import"./chevron-down-CQdp532l.js";import"./index-DpVeZ48A.js";import"./error-DQrsSH8S.js";import"./BaseCbacBanner-B-b2sRaf.js";import"./makeExternalStore-DtcHQJz3.js";import"./Tooltip-34lHkITk.js";import"./PopoverPopup-G3gX-z97.js";import"./toNumber-BZuukCBe.js";import"./useOsdkClient-DvB4rEU5.js";import"./tick-DaiI_RUX.js";import"./DropdownField-TJZE7D83.js";import"./withOsdkMetrics-BxkdfDLM.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-CGqc1mNB.js";import{O as i}from"./object-table-CZvyIlfB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJdpauA9.js";import"./Table-AaR6pvOa.js";import"./index-Dgk2zAqJ.js";import"./Dialog-CNejIhKL.js";import"./cross-XlQOrTFd.js";import"./svgIconContainer-CBRazqRm.js";import"./useBaseUiId-CLH5ZdSv.js";import"./InternalBackdrop-C-zUCy48.js";import"./composite-D6bWet8H.js";import"./index-Dp5yRYTx.js";import"./index-DbvXLa6Y.js";import"./index-D1snueEy.js";import"./useEventCallback-Dk3_50Ao.js";import"./SkeletonBar-Dq5kGonv.js";import"./LoadingCell---M2Y8x3.js";import"./ColumnConfigDialog-BvvF93p6.js";import"./DraggableList-BG62YbY1.js";import"./search-DpFh14Cw.js";import"./Input-BrLbJg7l.js";import"./useControlled-BVW9yO_V.js";import"./Button-BDmqxq31.js";import"./small-cross-thz1Z2sy.js";import"./ActionButton-ObfHG4WA.js";import"./Checkbox-Dh2IMSOE.js";import"./useValueChanged-fsujBZUg.js";import"./CollapsiblePanel-D2eiku1v.js";import"./MultiColumnSortDialog-9dILp4tw.js";import"./MenuTrigger-6n7-f6B8.js";import"./CompositeItem-CUyPJbYK.js";import"./ToolbarRootContext-BdKEdjkY.js";import"./getDisabledMountTransitionStyles-B1I7mcq2.js";import"./getPseudoElementBounds-DBuVCIci.js";import"./chevron-down-UapZ8jOT.js";import"./index-BtlPha85.js";import"./error-U35dGLvC.js";import"./BaseCbacBanner-l3IWoUW7.js";import"./makeExternalStore-B9NtbuNt.js";import"./Tooltip-DNiBwXUD.js";import"./PopoverPopup-Ds1pQBCB.js";import"./debounce-CaPbwKEN.js";import"./useOsdkClient-KrpErzls.js";import"./tick-CgkwFM7w.js";import"./DropdownField-Be4XT9or.js";import"./isEqual-1eZ0xhVS.js";import"./withOsdkMetrics-Ct9fR7z_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

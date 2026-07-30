import{f as p,j as e}from"./iframe-CzXyKteJ.js";import{O as i}from"./object-table-CmWkGHB8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtA1fO60.js";import"./Table-DJyGBHex.js";import"./index-n_H_jwj_.js";import"./Dialog-BWrIUMPt.js";import"./cross-B881VNei.js";import"./svgIconContainer-Btsr4gWM.js";import"./useBaseUiId-DFni2TzW.js";import"./InternalBackdrop-DEh8AMoC.js";import"./composite-BOMrbHlv.js";import"./index-Bk_q8mAy.js";import"./index-DArwu2FJ.js";import"./index-C7GM_zIq.js";import"./useEventCallback-zJZ4uVQD.js";import"./SkeletonBar-BntjMwNR.js";import"./LoadingCell-nmxELGMl.js";import"./ColumnConfigDialog-MS0Fd7di.js";import"./DraggableList-hRvIeA4O.js";import"./search-Kg3rAhij.js";import"./Input-CskI9HNq.js";import"./useControlled-BNTSXjm5.js";import"./isEqual-BGWZMeks.js";import"./isObject-BDs9UMZ_.js";import"./Button-D88wUQtr.js";import"./ActionButton-gGZEW4kV.js";import"./Checkbox-B1f_ifVo.js";import"./useValueChanged-DPGbOcWg.js";import"./CollapsiblePanel-CoUAtF6h.js";import"./MultiColumnSortDialog-3dYQGq5a.js";import"./MenuTrigger-CcwiJMR2.js";import"./CompositeItem-B9seLPIq.js";import"./ToolbarRootContext-DP20GWxN.js";import"./getDisabledMountTransitionStyles-FpXHtK5V.js";import"./getPseudoElementBounds-D-ex2Zop.js";import"./chevron-down-2uq3yvyE.js";import"./index-CwELXqcq.js";import"./error-YEC2L9e4.js";import"./BaseCbacBanner-CSAm_yts.js";import"./makeExternalStore-deaRhxWg.js";import"./Tooltip-Cb516tOt.js";import"./PopoverPopup-CESQGYy_.js";import"./toNumber-lt1qQnvl.js";import"./useOsdkClient-RZKJZcxi.js";import"./tick-Dxb9pXer.js";import"./DropdownField-RSDYPlMD.js";import"./withOsdkMetrics-Bf0ACKKN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

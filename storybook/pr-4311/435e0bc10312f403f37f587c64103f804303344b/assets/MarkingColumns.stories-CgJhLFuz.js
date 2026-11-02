import{f as p,j as e}from"./iframe-CvsrxUF4.js";import{O as i}from"./object-table-BGRqFDk_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-uWi1ckbZ.js";import"./Table-FapocmMs.js";import"./index-DCyy6adA.js";import"./Dialog-BcIQF-0e.js";import"./cross-DtTtrll4.js";import"./svgIconContainer-DzgbD020.js";import"./useBaseUiId-B5t4I27A.js";import"./InternalBackdrop-Cugch1V3.js";import"./composite-B3OVmB-U.js";import"./index-DJNWwc48.js";import"./index-CEMwvdDY.js";import"./index-AdzqFMQC.js";import"./useEventCallback-CWso9AzW.js";import"./SkeletonBar-DNcYviI0.js";import"./LoadingCell-D4aa-3Yl.js";import"./ColumnConfigDialog-Gsmn_JKq.js";import"./DraggableList-Dt_y-hjj.js";import"./search-DUdimr2h.js";import"./Input-C5HOYdeG.js";import"./useControlled-m2VSv2nN.js";import"./Button-COOo6KA1.js";import"./small-cross-BdHCzf60.js";import"./ActionButton-BacuR1Ht.js";import"./Checkbox-Cu78tutu.js";import"./useValueChanged-DJNKhzCf.js";import"./CollapsiblePanel-C8Ffq7bK.js";import"./MultiColumnSortDialog-CFw1tWaG.js";import"./MenuTrigger-MhD22OcO.js";import"./CompositeItem-Df2qP5O_.js";import"./ToolbarRootContext-CSZctfrL.js";import"./getDisabledMountTransitionStyles-BqX912Sn.js";import"./getPseudoElementBounds-C85wL7-g.js";import"./chevron-down-eSVm9fha.js";import"./index-DWgnpQrU.js";import"./error-DR19w44a.js";import"./BaseCbacBanner-B4OTIvOe.js";import"./makeExternalStore-BsYlQUVX.js";import"./Tooltip-B-kgUKy-.js";import"./PopoverPopup-DNc4ifyx.js";import"./debounce-CNMotwK2.js";import"./useOsdkClient-7BSZc32P.js";import"./tick-NgklbaJL.js";import"./DropdownField-CdiCIvXD.js";import"./isEqual-CIWEuh_q.js";import"./withOsdkMetrics-DQZsQ0ny.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

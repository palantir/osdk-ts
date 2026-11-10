import{f as p,j as e}from"./iframe-CfbjiUO2.js";import{O as i}from"./object-table-0X7ZW0yx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9qFOutGb.js";import"./Table-Cq3Sqb6_.js";import"./index-DhEKv3k8.js";import"./Dialog-CdVAhUr7.js";import"./cross-CDv3c9ZT.js";import"./svgIconContainer-n1-XLaqe.js";import"./useBaseUiId-KkzZtg6c.js";import"./InternalBackdrop-Cj0yGS8w.js";import"./composite-BLsaDnsq.js";import"./index-DeN7WaWx.js";import"./index-Cdt2HnwD.js";import"./index-Vop21I5L.js";import"./useEventCallback-AK_04X0m.js";import"./SkeletonBar-o0aOuB0t.js";import"./LoadingCell-DnqoRZAo.js";import"./ColumnConfigDialog-oUPR49Lo.js";import"./DraggableList-BHuI1GyK.js";import"./search-BvtxNbE5.js";import"./Input-C6r2dONX.js";import"./useControlled-NF1yqRGY.js";import"./Button-BVuGahtR.js";import"./small-cross-CUl6D4zD.js";import"./ActionButton-Dc4Qt7pU.js";import"./Checkbox-YLRlOnRM.js";import"./useValueChanged-Bsmvo0qV.js";import"./CollapsiblePanel-B5IJejoA.js";import"./MultiColumnSortDialog-Dkz6CRLS.js";import"./MenuTrigger-DWA6dgqe.js";import"./CompositeItem-CXj7-nx_.js";import"./ToolbarRootContext-DEszTe9o.js";import"./getDisabledMountTransitionStyles-ApLJ3Lvx.js";import"./getPseudoElementBounds-C6fv_0nX.js";import"./chevron-down-7jPpylX5.js";import"./index-Bv3dL3pD.js";import"./error-CdqVFWE7.js";import"./BaseCbacBanner-Cnu_4zKu.js";import"./makeExternalStore-bIg36UO0.js";import"./Tooltip-79oqwAuG.js";import"./PopoverPopup-Bb7fveQO.js";import"./debounce-aqSqiTwE.js";import"./useOsdkClient-Cth9whbI.js";import"./tick-CrjnM-Na.js";import"./DropdownField-C41H6ZVs.js";import"./isEqual-3dKwApqB.js";import"./withOsdkMetrics-1iZQrA2_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

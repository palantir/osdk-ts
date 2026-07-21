import{f as p,j as e}from"./iframe-Ds6ci5f_.js";import{O as i}from"./object-table-DJo8Hvyp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmgiVgXk.js";import"./Table-CY2fqUML.js";import"./index-BF2buGCB.js";import"./Dialog-B4j4VlaZ.js";import"./cross-T2wtcCzG.js";import"./svgIconContainer-Dc9SJ_SV.js";import"./useBaseUiId-D5z5kVld.js";import"./InternalBackdrop-fgnk488v.js";import"./composite-CfTm1kpt.js";import"./index-C7rj8PmX.js";import"./index-BF1y1McZ.js";import"./index-C4iA4fv0.js";import"./useEventCallback-DTlUutSa.js";import"./SkeletonBar-CC-vdX0Q.js";import"./LoadingCell-yrde3eJz.js";import"./ColumnConfigDialog-DM-xJKcv.js";import"./DraggableList-GUAg5Dpp.js";import"./search-VNnWqJuM.js";import"./Input-C_GkCnWt.js";import"./useControlled-aWNAMtDj.js";import"./isEqual-CeuVkr2d.js";import"./isObject-DbC-Jx7m.js";import"./Button-BBlEXWMP.js";import"./ActionButton-BiW9Byve.js";import"./Checkbox-Cdiv4-44.js";import"./useValueChanged-Ch4Rz8la.js";import"./CollapsiblePanel-BYC6FcRU.js";import"./MultiColumnSortDialog-3aN9_CA3.js";import"./MenuTrigger-jcY8nQZI.js";import"./CompositeItem-CPz6r1FZ.js";import"./ToolbarRootContext-DxXa8C9m.js";import"./getDisabledMountTransitionStyles-DYPS8V0e.js";import"./getPseudoElementBounds-B-uuo1bm.js";import"./chevron-down-CpZWm6E5.js";import"./index-DZ4gcSou.js";import"./error-B-cgWIQQ.js";import"./BaseCbacBanner-D9abOnIg.js";import"./makeExternalStore-nT7iX2bb.js";import"./Tooltip-BFfOeZG7.js";import"./PopoverPopup-D5u1s52y.js";import"./toNumber-DNsx6Z-r.js";import"./useOsdkClient-cR6nS2vF.js";import"./tick-3jlUv760.js";import"./DropdownField-CJr-lUV4.js";import"./withOsdkMetrics-DRsF52NJ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

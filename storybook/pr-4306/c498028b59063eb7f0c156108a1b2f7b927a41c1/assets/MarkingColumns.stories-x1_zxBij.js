import{f as p,j as e}from"./iframe-Bjmz4Pw6.js";import{O as i}from"./object-table-Cbq5OCuZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChdqJ_Fk.js";import"./Table-5_CJmnAL.js";import"./index-CteV8V5-.js";import"./Dialog-RyhhQJPG.js";import"./cross-DLiU4vOO.js";import"./svgIconContainer-waXVP79l.js";import"./useBaseUiId-Dab5gkr1.js";import"./InternalBackdrop-wmuwnNCk.js";import"./composite-D5kvXpM3.js";import"./index-B0jhHXrB.js";import"./index-xuV1OxFF.js";import"./index-DXs3na67.js";import"./useEventCallback-CEkSFShG.js";import"./SkeletonBar-RK8wJKnc.js";import"./LoadingCell-DzfUiNrU.js";import"./ColumnConfigDialog-C7PhcgmF.js";import"./DraggableList-DEQHvBAg.js";import"./search-BFNLN2pg.js";import"./Input-CYsfOYNb.js";import"./useControlled-UgrzeJ-P.js";import"./Button-gMxn8bZ8.js";import"./small-cross-CwgSRf6S.js";import"./ActionButton-BXkFs4JK.js";import"./Checkbox-B30WmTbv.js";import"./useValueChanged-CtNi9ozz.js";import"./CollapsiblePanel-7Vg1XIbp.js";import"./MultiColumnSortDialog-5T3HYw5a.js";import"./MenuTrigger-iuHF1wpt.js";import"./CompositeItem-XruUBT06.js";import"./ToolbarRootContext-D0yTrMZy.js";import"./getDisabledMountTransitionStyles-BclIXzND.js";import"./getPseudoElementBounds-CVsUqdMo.js";import"./chevron-down-DYnrRDqf.js";import"./index-BqU459RR.js";import"./error-DXq7Sg4A.js";import"./BaseCbacBanner-DNpt7vOE.js";import"./makeExternalStore-Czv1SlrP.js";import"./Tooltip-B6HLdM-u.js";import"./PopoverPopup-B8vKH9Gz.js";import"./debounce-BS14Ht-K.js";import"./useOsdkClient-DWH25UnA.js";import"./tick-DI_p6XGO.js";import"./DropdownField-E6FKc9RM.js";import"./isEqual-Cb_ACtXN.js";import"./withOsdkMetrics-DHpFVYZj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

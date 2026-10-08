import{f as p,j as e}from"./iframe-BgM5ILJD.js";import{O as i}from"./object-table-Dqm71HsL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1sAdP5a.js";import"./Table-DfE3HXIV.js";import"./index-ah8Na9h1.js";import"./Dialog-C1fnwkaV.js";import"./cross-B5mOqZwT.js";import"./svgIconContainer-De6gxcHK.js";import"./useBaseUiId-CzAuSX_4.js";import"./InternalBackdrop-B3lJ8A-i.js";import"./composite-BS7dFqvY.js";import"./index-DAXSmbbp.js";import"./index-YnWjipca.js";import"./index-BtZ9XuP3.js";import"./useEventCallback-ED2yFhLZ.js";import"./SkeletonBar-c3-BssZC.js";import"./LoadingCell-UzH3i-RV.js";import"./ColumnConfigDialog-BG6weTj9.js";import"./DraggableList-Cj8oPYGs.js";import"./search-C2iFy_Yx.js";import"./Input-DL79KIMl.js";import"./useControlled-COnm-wVi.js";import"./Button-KrMtAmhv.js";import"./small-cross-R2Kh-d3N.js";import"./ActionButton-4Ees6e5q.js";import"./Checkbox-Gq8tw6H7.js";import"./useValueChanged-Deeelsz_.js";import"./CollapsiblePanel-IXMutafc.js";import"./MultiColumnSortDialog-CKj_uiZa.js";import"./MenuTrigger-98n7_1EC.js";import"./CompositeItem-B6xGoOu0.js";import"./ToolbarRootContext-CjwaP5zw.js";import"./getDisabledMountTransitionStyles-7N3HMxRW.js";import"./getPseudoElementBounds-CdSGgRcD.js";import"./chevron-down-D1QYpBiI.js";import"./index-DturTZ53.js";import"./error-BFuWQWXY.js";import"./BaseCbacBanner-D3f4VTUa.js";import"./makeExternalStore-CkeVFEY-.js";import"./Tooltip-nFXiDwkG.js";import"./PopoverPopup-BBlagmYo.js";import"./debounce-8yqP3aY_.js";import"./useOsdkClient-EIls4xNE.js";import"./tick-B5Dk5gWg.js";import"./DropdownField-7t-kwafh.js";import"./isEqual-w7VvbcfM.js";import"./withOsdkMetrics-DYzG-urA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-B1cjW9lN.js";import{O as i}from"./object-table-B9PygxED.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-esge5jOw.js";import"./Table-Eq_CeIkf.js";import"./index-DBKcAKBa.js";import"./Dialog-Jn4y4XS8.js";import"./cross-B-sNKi3J.js";import"./svgIconContainer-z9g6oSzF.js";import"./useBaseUiId-CtX_9P1W.js";import"./InternalBackdrop-wKJgBdeU.js";import"./composite-rAM9AtlZ.js";import"./index-CuHejiQW.js";import"./index-CalZYv_8.js";import"./index-Bql2IapG.js";import"./useEventCallback-92aUWZ3N.js";import"./SkeletonBar-BLVnUxZg.js";import"./LoadingCell-BQamoQUk.js";import"./ColumnConfigDialog-_8oVLR1B.js";import"./DraggableList-gqUnaBKo.js";import"./search-050tV6oC.js";import"./Input-DbrQZdXa.js";import"./useControlled-DdMiAZ8X.js";import"./Button-Dy6NAp_j.js";import"./small-cross-BVJ_zxjg.js";import"./ActionButton-3Dynih0B.js";import"./Checkbox-ChDDet3u.js";import"./useValueChanged-CEYyAvOZ.js";import"./CollapsiblePanel-56xbF4C6.js";import"./MultiColumnSortDialog-BlHZIdWq.js";import"./MenuTrigger-79xVCCUd.js";import"./CompositeItem-CR9WkMFf.js";import"./ToolbarRootContext-CQYaUzuu.js";import"./getDisabledMountTransitionStyles-B5gHyAnx.js";import"./getPseudoElementBounds-Cs7nJpkY.js";import"./chevron-down-Qs9iMpX5.js";import"./index-B7TJ5Vg6.js";import"./error-4QB3sX_8.js";import"./BaseCbacBanner-BUmy3QjG.js";import"./makeExternalStore-CvmwDfYu.js";import"./Tooltip-DzMrezpL.js";import"./isObject-ekK2jEIM.js";import"./debounce-BsGa84tP.js";import"./useOsdkClient-DPZRapDv.js";import"./tick-7_Cax-oj.js";import"./DropdownField-Bhsc50nt.js";import"./isEqual-WveHXPpz.js";import"./_baseIsEqual-DkPaQEsL.js";import"./withOsdkMetrics-NF_KYzrC.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

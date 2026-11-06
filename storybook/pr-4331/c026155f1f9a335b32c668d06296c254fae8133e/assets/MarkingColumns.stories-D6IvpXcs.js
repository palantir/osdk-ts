import{f as p,j as e}from"./iframe-Ck95bxu4.js";import{O as i}from"./object-table-yfo4r35p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KA9de6lE.js";import"./Table-BfpJ92cE.js";import"./index-Cif5jAEJ.js";import"./Dialog-CxNG9xUy.js";import"./cross-D4AVy5in.js";import"./svgIconContainer-CPHbIRji.js";import"./useBaseUiId-CWyLFOC8.js";import"./InternalBackdrop-BN5IDP0f.js";import"./composite-Yh1yynjC.js";import"./index-BhAq9v2h.js";import"./index-QaBJUBwA.js";import"./index-jkcmc-OQ.js";import"./useEventCallback-B4j9PWJ8.js";import"./SkeletonBar-8iEwSFxF.js";import"./LoadingCell-D9PdMFhW.js";import"./ColumnConfigDialog-M8P9_gve.js";import"./DraggableList-AYfFvqAw.js";import"./search-BS_g30el.js";import"./Input-s6yy9vkz.js";import"./useControlled-B8TEOr6k.js";import"./Button-PWPX_ks7.js";import"./small-cross-B8CohMqi.js";import"./ActionButton-r8oP0f9s.js";import"./Checkbox-D7ynqdrt.js";import"./useValueChanged-B4fSJG4I.js";import"./CollapsiblePanel-D4YJo7Ff.js";import"./MultiColumnSortDialog-CEzGqhr_.js";import"./MenuTrigger-BPdJ6fv_.js";import"./CompositeItem-B10VO3gZ.js";import"./ToolbarRootContext-BRWZ8sOA.js";import"./getDisabledMountTransitionStyles-D5C9DTmw.js";import"./getPseudoElementBounds-skEh5NHv.js";import"./chevron-down-bheQQ_PQ.js";import"./index-K_6WRtRx.js";import"./error-RnJ96IVH.js";import"./BaseCbacBanner-DjBChTmW.js";import"./makeExternalStore-BMm4gCLi.js";import"./Tooltip-rzDvG8SV.js";import"./isObject-1wBlTIbM.js";import"./debounce-xVAvVgAm.js";import"./useOsdkClient-BanL0364.js";import"./tick-CkjrrKLh.js";import"./DropdownField-nQt9qvfV.js";import"./isEqual-DPuwhVwN.js";import"./_baseIsEqual-TosI8jgs.js";import"./withOsdkMetrics-Dr6WHfBD.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

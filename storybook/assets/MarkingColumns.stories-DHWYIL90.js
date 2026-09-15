import{f as p,j as e}from"./iframe-BqmsmROC.js";import{O as i}from"./object-table-BmRPizOX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CgrDiYbC.js";import"./index-DE_4plrx.js";import"./Dialog-uksgf5Bf.js";import"./cross-DfmyAU8B.js";import"./svgIconContainer-DwHFgry-.js";import"./useBaseUiId-C8C4OFgB.js";import"./InternalBackdrop-Cy1aLXhF.js";import"./composite-CiV_UR9j.js";import"./index-DFyqPKTO.js";import"./index-CWE85mCR.js";import"./index-Bey-y-w6.js";import"./useEventCallback-fsvAZTzq.js";import"./SkeletonBar-CniGFXhP.js";import"./LoadingCell-rXQWvxCs.js";import"./ColumnConfigDialog-BBlD2g_8.js";import"./DraggableList-BEFUbznw.js";import"./search-BBGycv-1.js";import"./Input-C3AYJYVI.js";import"./useControlled-DXWlWATE.js";import"./Button-zbZf0J9i.js";import"./small-cross-Bk6bCekb.js";import"./ActionButton-Lq8BIY2Z.js";import"./Checkbox-CPgQg4fN.js";import"./useValueChanged-BkcQ3FBO.js";import"./CollapsiblePanel-VNdFnwVY.js";import"./MultiColumnSortDialog-BrcQy9AT.js";import"./MenuTrigger-DN14xV_t.js";import"./CompositeItem-C1DMYRuJ.js";import"./ToolbarRootContext--CuPwDjZ.js";import"./getDisabledMountTransitionStyles-yrOwfUkE.js";import"./getPseudoElementBounds-CbKhuRFY.js";import"./chevron-down-s5zpD1xF.js";import"./index-B0TE2znt.js";import"./error-DKXNqTp4.js";import"./BaseCbacBanner-N_ry9LS-.js";import"./makeExternalStore-jkqHHCtl.js";import"./Tooltip-DHQwjn4a.js";import"./PopoverPopup-k-Hpnjxy.js";import"./debounce-DL2qpSTk.js";import"./useOsdkClient-D-sadKnS.js";import"./tick-BOnCrQFY.js";import"./DropdownField-8ctGfF9y.js";import"./isEqual-Bzk8R1VE.js";import"./withOsdkMetrics-DVk1cW14.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

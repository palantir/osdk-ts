import{f as p,j as e}from"./iframe-Dtb1PIwC.js";import{O as i}from"./object-table-Br6Q4v9E.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CrZ439aZ.js";import"./Table-CZR12SqA.js";import"./index-CLrFOtS8.js";import"./Dialog-qmfyp1_P.js";import"./cross-CVJIQSJP.js";import"./svgIconContainer-DpSb0Wlf.js";import"./useBaseUiId-COzzw9eg.js";import"./InternalBackdrop-B9T7uYNU.js";import"./composite-BY6IafNz.js";import"./index-v7pWAnnW.js";import"./index-0o9LwOHv.js";import"./index-Kclo__p-.js";import"./useEventCallback-r4_5tZHq.js";import"./SkeletonBar-LfD4cjLN.js";import"./LoadingCell-YAFXgfIN.js";import"./ColumnConfigDialog-DuogBYgf.js";import"./DraggableList-BkSx7UZi.js";import"./search-BvnVhgRx.js";import"./Input-77thj6XN.js";import"./useControlled-C9h-MgnN.js";import"./Button-CLxSMUqH.js";import"./small-cross-BU1CI3Ri.js";import"./ActionButton-BVFIiiEV.js";import"./Checkbox-CUJBJRlP.js";import"./useValueChanged-BlnwCZsu.js";import"./CollapsiblePanel-C6l7NaqJ.js";import"./MultiColumnSortDialog-CZ7uSgVr.js";import"./MenuTrigger-Ms8jt9xm.js";import"./CompositeItem-DJjbAwA2.js";import"./ToolbarRootContext-CVyIw6JT.js";import"./getDisabledMountTransitionStyles-Bo5uM1fX.js";import"./getPseudoElementBounds-C6ruZhMa.js";import"./chevron-down-CjmVxAZS.js";import"./index-BYzRMw1m.js";import"./error-BTkWOlta.js";import"./BaseCbacBanner-FkN-Yjr_.js";import"./makeExternalStore-DJHAEnib.js";import"./Tooltip-JVmLA6-U.js";import"./PopoverPopup-BxsY-gjv.js";import"./debounce-Da9L3ttw.js";import"./useOsdkClient-too7NMkO.js";import"./tick-sHGnIXkS.js";import"./DropdownField-BmlojZ_x.js";import"./isEqual-Cwb8oMGa.js";import"./withOsdkMetrics-B_mXWVb4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

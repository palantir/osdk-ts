import{f as p,j as e}from"./iframe-Czm_u8Ar.js";import{O as i}from"./object-table-oAmlQ3St.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BuAj_jN-.js";import"./Table-TR_5CIzU.js";import"./index-XKqF3n2I.js";import"./Dialog-BVdf1Plj.js";import"./cross-BlHijBJ4.js";import"./svgIconContainer-CgTn6RWL.js";import"./useBaseUiId-Me4okoRq.js";import"./InternalBackdrop-CSYiZwEF.js";import"./composite-C_KD_tny.js";import"./index-C3TofrwO.js";import"./index-D17LzocE.js";import"./index-DqRB57_4.js";import"./useEventCallback-CQUNaXho.js";import"./SkeletonBar-BvQmf4En.js";import"./LoadingCell-C-tmWlRS.js";import"./ColumnConfigDialog-BTFK5Wnj.js";import"./DraggableList-QZUMC6gD.js";import"./search-DY6wtpjt.js";import"./Input-C4CruWhv.js";import"./useControlled-Bgi6lmRr.js";import"./Button-DycfsGl1.js";import"./small-cross-CFLQZxWq.js";import"./ActionButton-CUg5ARhM.js";import"./Checkbox-BL2kZSvF.js";import"./useValueChanged-BSuWxBvq.js";import"./CollapsiblePanel-B3l-zgfo.js";import"./MultiColumnSortDialog-BpZ3Sg6L.js";import"./MenuTrigger-kXC2WmKi.js";import"./CompositeItem-y1T0uWu2.js";import"./ToolbarRootContext-CxE6VRH9.js";import"./getDisabledMountTransitionStyles-De4xDMuu.js";import"./getPseudoElementBounds-DfVhyAPU.js";import"./chevron-down-CPUKsW46.js";import"./index-C7-NS5HO.js";import"./error-DU7bFYdf.js";import"./BaseCbacBanner-DU_0BRZz.js";import"./makeExternalStore-DKjvIENS.js";import"./Tooltip-BhsvKrtc.js";import"./PopoverPopup-DGUEg27x.js";import"./debounce-D6HpQvGw.js";import"./useOsdkClient-D-g2OSKy.js";import"./tick-Dq-bnKtS.js";import"./DropdownField-ByNhlw8y.js";import"./isEqual-CtWSL3Nd.js";import"./withOsdkMetrics-BQzxgqT1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

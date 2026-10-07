import{f as p,j as e}from"./iframe-BqwXQKpA.js";import{O as i}from"./object-table-CuuBfL8J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPn3kR4s.js";import"./Table-DZ6bvBAp.js";import"./index-CYwWJaLD.js";import"./Dialog-Dp3EsUox.js";import"./cross-CedSfFXt.js";import"./svgIconContainer-r8u0NG4v.js";import"./useBaseUiId-DA7_UCFd.js";import"./InternalBackdrop-BKOhgmyu.js";import"./composite-Bp-cKdPO.js";import"./index-C72iR5_f.js";import"./index-jZeUOwty.js";import"./index-8nJMg384.js";import"./useEventCallback-Cv2hevdH.js";import"./SkeletonBar-ZCxSjfu7.js";import"./LoadingCell-DQMmvmgu.js";import"./ColumnConfigDialog-DCLkqrVc.js";import"./DraggableList-DqQhEMPD.js";import"./search-1XCyntXF.js";import"./Input-DTs9C08W.js";import"./useControlled-BcFAz7-u.js";import"./Button-DZqTJuVj.js";import"./small-cross-ClthSwzC.js";import"./ActionButton-BAZu2Krn.js";import"./Checkbox-D7v3Sdtf.js";import"./useValueChanged-CCMKETAO.js";import"./CollapsiblePanel-OwoGrBMO.js";import"./MultiColumnSortDialog-DtjY-7OY.js";import"./MenuTrigger-bU0oA_1O.js";import"./CompositeItem-DhjczCvx.js";import"./ToolbarRootContext-D7_GPkI_.js";import"./getDisabledMountTransitionStyles-BfGLnaja.js";import"./getPseudoElementBounds-DZfA0kMC.js";import"./chevron-down-Dhf3bz-4.js";import"./index-BmvdlYct.js";import"./error-CT5yNLGi.js";import"./BaseCbacBanner-BGfTp9D9.js";import"./makeExternalStore-CyyUqBSG.js";import"./Tooltip-Bk8ovUyB.js";import"./PopoverPopup-nFVTJuTn.js";import"./debounce-BqMuZJVi.js";import"./useOsdkClient-r71R63wR.js";import"./tick-BEDQHRbq.js";import"./DropdownField-QmoT8zOZ.js";import"./isEqual-CSC2yrxv.js";import"./withOsdkMetrics-p_rJ049m.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

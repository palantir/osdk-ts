import{f as p,j as e}from"./iframe-A_fOpVjR.js";import{O as i}from"./object-table-CCMmutgl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NNWOvscG.js";import"./Table-Ct0jk0QM.js";import"./index-C7FsEBhG.js";import"./Dialog-D5xAhZEq.js";import"./cross-BwNW8yAx.js";import"./svgIconContainer-Bq9Z_PVa.js";import"./useBaseUiId-C7m94P3Q.js";import"./InternalBackdrop-A8sqO8XG.js";import"./composite-BNlZpCYa.js";import"./index-CSGRTjjX.js";import"./index-BpdiA8C2.js";import"./index-CQmYgAHq.js";import"./useEventCallback-D0ioUuoD.js";import"./SkeletonBar-D_FkMl9_.js";import"./LoadingCell-Bq-rfy4t.js";import"./ColumnConfigDialog-D_VKogHN.js";import"./DraggableList-D9SbGZ1S.js";import"./search-DjdTcbXm.js";import"./Input-CPD69t9E.js";import"./useControlled-C2rTfK3U.js";import"./Button-DqOCaaxJ.js";import"./small-cross-DNEXD1XY.js";import"./ActionButton-D4KDRNf3.js";import"./Checkbox-CdBaEuZk.js";import"./useValueChanged-R8r5ZzIC.js";import"./CollapsiblePanel-D5N62OEf.js";import"./MultiColumnSortDialog-BTRSkNMD.js";import"./MenuTrigger-Dx8kVSll.js";import"./CompositeItem-CZZ_uEuP.js";import"./ToolbarRootContext-DqquyoSz.js";import"./getDisabledMountTransitionStyles-ChkLH3QV.js";import"./getPseudoElementBounds-C_2Jp177.js";import"./chevron-down-C0LTAe4-.js";import"./index-BLNyRWLa.js";import"./error-CBOQy5rF.js";import"./BaseCbacBanner-Cd-uPTKw.js";import"./makeExternalStore-BnincROM.js";import"./Tooltip-BmW3AFCg.js";import"./PopoverPopup-CgMv4Y2M.js";import"./debounce-DtL1LGCj.js";import"./useOsdkClient-Bel45J9c.js";import"./tick-C7t8KzWK.js";import"./DropdownField-3zZSXBjS.js";import"./isEqual-BVMfoPU4.js";import"./withOsdkMetrics-SqCQVKc1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

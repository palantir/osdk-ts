import{f as p,j as e}from"./iframe-B1dY-uMG.js";import{O as i}from"./object-table-CvecTQF5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CsaNr_BP.js";import"./Table-CIC0jyyL.js";import"./index-J8POe0xc.js";import"./Dialog-C3vgrSIv.js";import"./cross-CGzVaZsI.js";import"./svgIconContainer-Hqh_F8lK.js";import"./useBaseUiId-BEMvDf4X.js";import"./InternalBackdrop-kXRP9i2Q.js";import"./composite-DafZoXqK.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./index-v0K9-PBP.js";import"./useEventCallback-Bxw2h9-8.js";import"./SkeletonBar-DdytvZtY.js";import"./LoadingCell-ElQ-L1kg.js";import"./ColumnConfigDialog-Dy_a0PBd.js";import"./DraggableList-LvcSAiE7.js";import"./search-NElMm_h6.js";import"./Input-Bow4iCTS.js";import"./useControlled-Q3FRIAaO.js";import"./Button-WD0YpcbL.js";import"./small-cross-DNXIHvDW.js";import"./ActionButton-evAWPmgm.js";import"./Checkbox-BLZb2wdW.js";import"./useValueChanged-OMxVTtNE.js";import"./CollapsiblePanel-Dxik0TAh.js";import"./MultiColumnSortDialog-DIi6uGpb.js";import"./MenuTrigger-D4C0_RsP.js";import"./CompositeItem-DJ7Q7uHL.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./getDisabledMountTransitionStyles-DNBCt1sN.js";import"./getPseudoElementBounds-C1qwlXI7.js";import"./chevron-down-DfdYdGBP.js";import"./index-BxyuVSQw.js";import"./error-BzEZzAbM.js";import"./BaseCbacBanner-C2caImhq.js";import"./makeExternalStore-CS-gtHXP.js";import"./Tooltip-xVmFEZY1.js";import"./PopoverPopup-vg0eWmB0.js";import"./debounce-DLzjPmFs.js";import"./useOsdkClient-wEoel6XM.js";import"./tick-C9npLudO.js";import"./DropdownField-BrITrwHx.js";import"./isEqual-ixVCBZxa.js";import"./withOsdkMetrics-DuwMRDrg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

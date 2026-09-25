import{f as p,j as e}from"./iframe-DvmPM8XM.js";import{O as i}from"./object-table-CkUPVJKK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWXBbGOK.js";import"./Table-BLHlsaeM.js";import"./index-Ckyxf5ES.js";import"./Dialog-D0BD0rSH.js";import"./cross-CWK_3iX0.js";import"./svgIconContainer-CKvBglfs.js";import"./useBaseUiId-BK6rm_vX.js";import"./InternalBackdrop-CDbm9lnE.js";import"./composite-BtMZy7bH.js";import"./index-DxRIPJNB.js";import"./index-DFwggDQF.js";import"./index-CiLgD-FQ.js";import"./useEventCallback-BHLH-nqa.js";import"./SkeletonBar-CK3zDoai.js";import"./LoadingCell-qfi7oMtY.js";import"./ColumnConfigDialog-CJjI4U8O.js";import"./DraggableList-DbOnBNdn.js";import"./search-TBI5J1QZ.js";import"./Input-DAJjBhoV.js";import"./useControlled-BlFMc0zn.js";import"./Button-CdgEMVNK.js";import"./small-cross-COHScf5C.js";import"./ActionButton-B0jn8mYL.js";import"./Checkbox-D5VxKTgt.js";import"./useValueChanged-B2Byj99o.js";import"./CollapsiblePanel-Bu8C3hKI.js";import"./MultiColumnSortDialog-Dmb1Dgf0.js";import"./MenuTrigger-CcHInNCV.js";import"./CompositeItem-kRLneeY3.js";import"./ToolbarRootContext-E7hSXQbh.js";import"./getDisabledMountTransitionStyles--bG59vx_.js";import"./getPseudoElementBounds-DIk-7fYl.js";import"./chevron-down-BE3Vkzfj.js";import"./index-DPz56gTU.js";import"./error-C_RDaNST.js";import"./BaseCbacBanner-DioKTDKG.js";import"./makeExternalStore-DPCzTg_N.js";import"./Tooltip-3Oq2VbSf.js";import"./PopoverPopup-BSlx7FSn.js";import"./debounce-B_vGr92p.js";import"./useOsdkClient-DYbXS0Lf.js";import"./tick-BBkj7T5w.js";import"./DropdownField-siiIARW9.js";import"./isEqual-1s0ixZs9.js";import"./withOsdkMetrics-C3HZbqv9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

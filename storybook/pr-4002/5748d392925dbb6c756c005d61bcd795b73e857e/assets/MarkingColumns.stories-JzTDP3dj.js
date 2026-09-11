import{f as p,j as e}from"./iframe-DrGL59fh.js";import{O as i}from"./object-table-BAMPb11c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-pltsU0.js";import"./Table-CrterXlj.js";import"./index-BPJV00wo.js";import"./Dialog-BySReYmf.js";import"./cross-B3fC_apP.js";import"./svgIconContainer-CHeYR8wC.js";import"./useBaseUiId-2W_ytHMV.js";import"./InternalBackdrop-m5QQAybv.js";import"./composite-VGQUbzTm.js";import"./index-CAwEJolB.js";import"./index-cKTu6glV.js";import"./index-BFxVNMj8.js";import"./useEventCallback-Be1n87Un.js";import"./SkeletonBar-BrIvGh1U.js";import"./LoadingCell-CeRyGgiy.js";import"./ColumnConfigDialog-93nvgRut.js";import"./DraggableList-0EZpZvz0.js";import"./search-D_KAjQsE.js";import"./Input-GRmoIvE6.js";import"./useControlled-D76B4nnK.js";import"./Button-Dz98rt32.js";import"./small-cross-CITcdkqm.js";import"./ActionButton-D6TgzS-d.js";import"./Checkbox-DeOFI8HA.js";import"./useValueChanged-Cv10pSZl.js";import"./CollapsiblePanel-C-SqBgY1.js";import"./MultiColumnSortDialog-CegqPi6L.js";import"./MenuTrigger-MBe05SYz.js";import"./CompositeItem-BckOB5Eo.js";import"./ToolbarRootContext-C91J_2EK.js";import"./getDisabledMountTransitionStyles-CLY_oqku.js";import"./getPseudoElementBounds-D97GaXSX.js";import"./chevron-down-DCzbMy7Q.js";import"./index-Bzlu61KO.js";import"./error-B4r2g8yv.js";import"./BaseCbacBanner-Co78UpQW.js";import"./makeExternalStore-Dar-D9jL.js";import"./Tooltip-CqOLiVEe.js";import"./PopoverPopup-DyYNic55.js";import"./debounce-C9pzeh_f.js";import"./useOsdkClient-Bq4QpKzc.js";import"./tick-BYEzfJH7.js";import"./DropdownField-CcRkuqdD.js";import"./isEqual-DYGtsIue.js";import"./withOsdkMetrics-tWMBpvoz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

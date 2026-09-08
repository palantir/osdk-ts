import{f as p,j as e}from"./iframe-BXNko62s.js";import{O as i}from"./object-table-BQNnLDn7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bj6UNjqi.js";import"./Table-D7LzyEaH.js";import"./index-BraeF99A.js";import"./Dialog-Ro4O5HA1.js";import"./cross-CxMC5EUY.js";import"./svgIconContainer-DY8ASQOr.js";import"./useBaseUiId-Ca98QWO9.js";import"./InternalBackdrop-BbBElhcW.js";import"./composite-C9CWzIa9.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./index-BJy_f7fa.js";import"./useEventCallback-DgeT9ZNj.js";import"./SkeletonBar-D1qxCam4.js";import"./LoadingCell-B0CJVPiT.js";import"./ColumnConfigDialog-DNqQ-Oum.js";import"./DraggableList-IBkcEZag.js";import"./search-0j6eRv30.js";import"./Input-DXEo1WM0.js";import"./useControlled-B2FQFptp.js";import"./Button-Cb25ceXV.js";import"./small-cross-C8K6sWXT.js";import"./ActionButton-BE6hJp0R.js";import"./Checkbox-BIQR1PfE.js";import"./useValueChanged-BQ311yh_.js";import"./CollapsiblePanel-Cyvbu1GF.js";import"./MultiColumnSortDialog-CvcuatNu.js";import"./MenuTrigger-Dd2kzYgY.js";import"./CompositeItem-BnI6v8nN.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./getDisabledMountTransitionStyles-DcJvx271.js";import"./getPseudoElementBounds-8XCyV84c.js";import"./chevron-down-Za9QV_62.js";import"./index-hSkBF6vZ.js";import"./error-CgTFtvP9.js";import"./BaseCbacBanner-3-2aKYTm.js";import"./makeExternalStore-BdN3LE2k.js";import"./Tooltip-Cy_tDvEN.js";import"./PopoverPopup-fmJe70Q9.js";import"./debounce-DTLh2Ef3.js";import"./useOsdkClient-Cn5D3g-o.js";import"./tick-qSbAdot2.js";import"./DropdownField--_gkEn_J.js";import"./isEqual-CEZhzjj7.js";import"./withOsdkMetrics-BmO3Nivv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-kyVM35Yw.js";import{O as i}from"./object-table-D8OhNeI7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwEFl8vP.js";import"./Table-BnWzUCOy.js";import"./index-C0Dea0yk.js";import"./Dialog-BcXX0CrW.js";import"./cross-C0YFkToE.js";import"./svgIconContainer-CLz_w4rV.js";import"./useBaseUiId-DRkyghGt.js";import"./InternalBackdrop-Dx6yt2XY.js";import"./composite-uhZO0Uyq.js";import"./index-B5tuGXqc.js";import"./index-Cq4C7hwK.js";import"./index-DxlcEZaF.js";import"./useEventCallback-CIPRgi3m.js";import"./SkeletonBar-BjqkVB1N.js";import"./LoadingCell-BJW-sMyd.js";import"./ColumnConfigDialog-DRBrnmt-.js";import"./DraggableList-BhTnGkHR.js";import"./search-BZ_r27kW.js";import"./Input-DdIUmJav.js";import"./useControlled-Dv9OfWlo.js";import"./Button-t3LDiAFT.js";import"./small-cross-DNKmjcOe.js";import"./ActionButton-B593_ubA.js";import"./Checkbox-DVqeNtQS.js";import"./useValueChanged-CAuHoBW5.js";import"./CollapsiblePanel-D0Ogg_Z1.js";import"./MultiColumnSortDialog-BHLFsck8.js";import"./MenuTrigger-DsnX6w12.js";import"./CompositeItem-CcZT4jH0.js";import"./ToolbarRootContext-hOfYlQDN.js";import"./getDisabledMountTransitionStyles-2PFrzZkZ.js";import"./getPseudoElementBounds-BcX2UMFr.js";import"./chevron-down-CnIiSLCf.js";import"./index-C5nN5HSw.js";import"./error-C0jSc5Zw.js";import"./BaseCbacBanner-CsPxqNag.js";import"./makeExternalStore-DOr5nas7.js";import"./Tooltip-Dvd9Tqx6.js";import"./isObject-DXUV5EWh.js";import"./debounce-DEN9d_8f.js";import"./useOsdkClient-DYm6JtiE.js";import"./tick-ZlXNtKJQ.js";import"./DropdownField-CiuWLNC-.js";import"./isEqual-Bi9yJZpm.js";import"./_baseIsEqual-DdLFoz5X.js";import"./withOsdkMetrics-B7MvmXC4.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

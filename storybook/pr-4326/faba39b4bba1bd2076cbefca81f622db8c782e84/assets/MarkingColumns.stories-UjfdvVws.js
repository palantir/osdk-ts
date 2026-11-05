import{f as p,j as e}from"./iframe-DRt3Isqi.js";import{O as i}from"./object-table-W0q1sdDx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-P_ieVj0_.js";import"./Table-B_a1aUTP.js";import"./index-VZHhRlUf.js";import"./Dialog-BsDbymC6.js";import"./cross-DLSleMt0.js";import"./svgIconContainer-BmwptnE7.js";import"./useBaseUiId-CztA3AVu.js";import"./InternalBackdrop-EjSNiGN3.js";import"./composite-D3E114vb.js";import"./index-BQPVtwuZ.js";import"./index-CrOP_FhY.js";import"./index-VXwizB6q.js";import"./useEventCallback-BHN3JDT4.js";import"./SkeletonBar-BSkDtycC.js";import"./LoadingCell-DazkA7t9.js";import"./ColumnConfigDialog-TSrFnXld.js";import"./DraggableList-Bhy4xN1M.js";import"./search-CWVCG-ID.js";import"./Input-_E04yI64.js";import"./useControlled-DZ1rHDeJ.js";import"./Button-K9hISpnC.js";import"./small-cross-COsO8y4M.js";import"./ActionButton-BmJ2vYOO.js";import"./Checkbox-CWz6jXA7.js";import"./useValueChanged-BriOV7QZ.js";import"./CollapsiblePanel-CXb3tt2d.js";import"./MultiColumnSortDialog-CWaWKl8p.js";import"./MenuTrigger-CjGuIo7E.js";import"./CompositeItem-1obZGpSi.js";import"./ToolbarRootContext-ChcKGMcF.js";import"./getDisabledMountTransitionStyles-B9hx_YPP.js";import"./getPseudoElementBounds-Dk-P-RRg.js";import"./chevron-down-BpTeELc3.js";import"./index-BfZquH4_.js";import"./error-WyHMdGFH.js";import"./BaseCbacBanner-CW08FqFB.js";import"./makeExternalStore-IMLrRmfN.js";import"./Tooltip-B5fG8wMR.js";import"./isObject-DRxxfzO8.js";import"./debounce-D5V8bM6L.js";import"./useOsdkClient-B72RjCJ-.js";import"./tick-C84Ma0-E.js";import"./DropdownField-DukSAwck.js";import"./isEqual-CANLVVFg.js";import"./_baseIsEqual-BwQ5mLM5.js";import"./withOsdkMetrics-Drl0wAn6.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

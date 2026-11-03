import{f as p,j as e}from"./iframe-BPsV-cND.js";import{O as i}from"./object-table-Bd84NMYm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1nX7WCL.js";import"./Table-CRdgNMKl.js";import"./index-npdz9ccL.js";import"./Dialog-CSELK3mA.js";import"./cross-e0Z9OM7S.js";import"./svgIconContainer-CZZJ1Sam.js";import"./useBaseUiId-CFNxIaBI.js";import"./InternalBackdrop-BYQB8CTu.js";import"./composite-Cd7xAWbk.js";import"./index-g7oHnE4A.js";import"./index-DLTSwoUf.js";import"./index-Qjyvj9j-.js";import"./useEventCallback-CQwery97.js";import"./SkeletonBar-Hu0BRFFS.js";import"./LoadingCell-D8F06a6N.js";import"./ColumnConfigDialog-iYnSyDeg.js";import"./DraggableList-CsuTCxVA.js";import"./search-hkaYb7x5.js";import"./Input-BkWiOI8x.js";import"./useControlled-DoUE8kJv.js";import"./Button-DLrft56q.js";import"./small-cross-DPwXBijp.js";import"./ActionButton-DM5XNJmd.js";import"./Checkbox-C7UDq2FQ.js";import"./useValueChanged-DyOnhIxB.js";import"./CollapsiblePanel-CYve3QRN.js";import"./MultiColumnSortDialog-D3tMXdvS.js";import"./MenuTrigger-BUk58eZp.js";import"./CompositeItem-HwzticEg.js";import"./ToolbarRootContext-B-c1meOe.js";import"./getDisabledMountTransitionStyles-CBO3vWZa.js";import"./getPseudoElementBounds-BtlBYKnw.js";import"./chevron-down-C-mS6li4.js";import"./index-arYZ6QX0.js";import"./error-Cql48BE9.js";import"./BaseCbacBanner-2tiUvTZ2.js";import"./makeExternalStore-CCTjlDRd.js";import"./Tooltip-D6UWtj7x.js";import"./isObject-CcXWBQ_P.js";import"./debounce-DEe1oMkc.js";import"./useOsdkClient-CEOi39dU.js";import"./tick-RH3_NPL7.js";import"./DropdownField-DFiIaddS.js";import"./isEqual-CBxAtas3.js";import"./_baseIsEqual-BK77yKGx.js";import"./withOsdkMetrics-DzJKMlE9.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

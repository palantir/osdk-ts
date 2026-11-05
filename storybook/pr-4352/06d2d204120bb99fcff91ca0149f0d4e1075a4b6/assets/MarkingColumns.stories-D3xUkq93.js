import{f as p,j as e}from"./iframe-w4y9aXDU.js";import{O as i}from"./object-table-DKZptHFY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnLs-Hgu.js";import"./Table-DGXl8lCv.js";import"./index-Dt7u2oHj.js";import"./Dialog-DRi7MYpb.js";import"./cross-DXnz5KvW.js";import"./svgIconContainer-CmEhYz6E.js";import"./useBaseUiId-F1YYLfsj.js";import"./InternalBackdrop-MfBzn4fw.js";import"./composite-B-RTr01b.js";import"./index-BIFcK0O4.js";import"./index-B0uCtLgl.js";import"./index-BlxHpFGo.js";import"./useEventCallback-BXF47S9-.js";import"./SkeletonBar-BIDpA40h.js";import"./LoadingCell-LVMMQK3T.js";import"./ColumnConfigDialog-ymokFQ3x.js";import"./DraggableList-Dt_zEa3K.js";import"./search-Cp34eK_v.js";import"./Input-O7Y8xsdh.js";import"./useControlled-C9ba4gpK.js";import"./Button-o-glHusr.js";import"./small-cross-C92MDA4P.js";import"./ActionButton-U4isYHc7.js";import"./Checkbox-D55iodXx.js";import"./useValueChanged-D3XhtpAV.js";import"./CollapsiblePanel-BLYyv3wb.js";import"./MultiColumnSortDialog-DUWaEEgT.js";import"./MenuTrigger-CUAkYVeE.js";import"./CompositeItem-Cd8pgrRU.js";import"./ToolbarRootContext-D5jHJ_gp.js";import"./getDisabledMountTransitionStyles-CuTU5WjT.js";import"./getPseudoElementBounds-Bg2TtJd6.js";import"./chevron-down-BBcbr8vg.js";import"./index-OXOrABe5.js";import"./error-8BgSEFU8.js";import"./BaseCbacBanner-CBpK3U6l.js";import"./makeExternalStore-BvoAQS4K.js";import"./Tooltip-Dj27hk9q.js";import"./isObject-WnGrlPIk.js";import"./debounce-CkZWp4sm.js";import"./useOsdkClient-Bbq68KDs.js";import"./tick-SaijwqI0.js";import"./DropdownField-aGwR7wao.js";import"./isEqual-DiUSZu8r.js";import"./_baseIsEqual-CUKKLhLC.js";import"./withOsdkMetrics-BEOTlVIH.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

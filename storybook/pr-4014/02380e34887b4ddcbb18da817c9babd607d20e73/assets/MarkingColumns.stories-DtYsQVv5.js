import{f as p,j as e}from"./iframe-DVYiR4EF.js";import{O as i}from"./object-table-sQKT1Hms.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dxk87wO7.js";import"./Table-BWsLtIqg.js";import"./index-BHhu1kj6.js";import"./Dialog-D9t2Q_eT.js";import"./cross-Clyp6xFe.js";import"./svgIconContainer-DdXGKFJg.js";import"./useBaseUiId-zYEXD-mx.js";import"./InternalBackdrop-45RWgNJh.js";import"./composite-C7v8Qqey.js";import"./index-DIoaGE9P.js";import"./index-yOUNHIkz.js";import"./index-D7AKpZwx.js";import"./useEventCallback-CL7T-E8E.js";import"./SkeletonBar-DklFIqEo.js";import"./LoadingCell-9wE-_EeY.js";import"./ColumnConfigDialog-2cC7ZUXL.js";import"./DraggableList-BnidScZ4.js";import"./search-CYXYxyYM.js";import"./Input-DXhcExkR.js";import"./useControlled-DcB6TY6E.js";import"./Button-B_OVrsNR.js";import"./small-cross-Dlrwx8kU.js";import"./ActionButton-BPkJKo5R.js";import"./Checkbox-CuQ8P-mi.js";import"./useValueChanged-DGoAYXNJ.js";import"./CollapsiblePanel-CVyMq5pH.js";import"./MultiColumnSortDialog-DrZkFUz7.js";import"./MenuTrigger-CoIP7yCb.js";import"./CompositeItem-DR-oTCoP.js";import"./ToolbarRootContext-DQtyGnCu.js";import"./getDisabledMountTransitionStyles-DLwvsE1G.js";import"./getPseudoElementBounds-CjM1EGF3.js";import"./chevron-down-DS4rSc_R.js";import"./index-F6YJXidF.js";import"./error-BkP1c58R.js";import"./BaseCbacBanner-B0ujK9Fu.js";import"./makeExternalStore-CYe5TaAL.js";import"./Tooltip-B5IkKrvL.js";import"./PopoverPopup-DPI-Oc34.js";import"./debounce-Dh9coxFN.js";import"./useOsdkClient-IgD677I1.js";import"./tick-HHHCZX4A.js";import"./DropdownField-CbgRYZRX.js";import"./isEqual-CM-FwJhI.js";import"./withOsdkMetrics-B0MkRVBC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

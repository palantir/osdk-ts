import{f as p,j as e}from"./iframe-TApi_89H.js";import{O as i}from"./object-table-BTQFoSvM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sYHE9xkK.js";import"./Table-D3kE7lwv.js";import"./index-C7k_RZGy.js";import"./Dialog-Bg4zyYCG.js";import"./cross-fnS0M6qm.js";import"./svgIconContainer-C7DRNdJN.js";import"./useBaseUiId-D7C__S_-.js";import"./InternalBackdrop-BhQtLhn1.js";import"./composite-DCCTyU-Y.js";import"./index-XwwRSRPj.js";import"./index-ZB-gWh6L.js";import"./index-Dn2TvP5W.js";import"./useEventCallback-KgfsELs8.js";import"./SkeletonBar-D2swFyMU.js";import"./LoadingCell-cXm-n914.js";import"./ColumnConfigDialog-rbXzBjOW.js";import"./DraggableList-mr8Dcpod.js";import"./search-COp09I1s.js";import"./Input-BvP2l_mS.js";import"./useControlled-CD3Nk51s.js";import"./Button-5wphI9oR.js";import"./small-cross-DXF_ebkC.js";import"./ActionButton-BmfN5KEN.js";import"./Checkbox-Dg_-6R30.js";import"./useValueChanged-CNTNGm5z.js";import"./CollapsiblePanel-CaSK4355.js";import"./MultiColumnSortDialog-WFw7Y8Dr.js";import"./MenuTrigger-lHb-ZApG.js";import"./CompositeItem-DWMayDud.js";import"./ToolbarRootContext-CXJo9eGs.js";import"./getDisabledMountTransitionStyles-BmIh8Y3H.js";import"./getPseudoElementBounds-C6viFtxP.js";import"./chevron-down-Bn6U06zL.js";import"./index-s3cuk91h.js";import"./error-BnvoNHjd.js";import"./BaseCbacBanner-DkqqNNoR.js";import"./makeExternalStore-DBGeSdOF.js";import"./Tooltip-CwOwKjZa.js";import"./PopoverPopup-gXjRdvfp.js";import"./debounce-DSR4xN0n.js";import"./useOsdkClient-C1l1n529.js";import"./tick-BWPgjUrc.js";import"./DropdownField-4rIfCihF.js";import"./isEqual-DE5Efej-.js";import"./withOsdkMetrics-B-5Iqtjd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

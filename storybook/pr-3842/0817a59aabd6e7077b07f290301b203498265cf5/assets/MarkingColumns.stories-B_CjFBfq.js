import{f as p,j as e}from"./iframe-DmJLQBd5.js";import{O as i}from"./object-table-E43KJI_n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CoTlAjbz.js";import"./Table-DwTOTD2I.js";import"./index-V2vu0DX-.js";import"./Dialog-dllkLaXF.js";import"./cross-DNMFTXiP.js";import"./svgIconContainer-BIOjXbdo.js";import"./useBaseUiId-9PouUcpY.js";import"./InternalBackdrop-5gsghqXD.js";import"./composite-JydS1iwf.js";import"./index-BtdR2Hou.js";import"./index-D21gG2VV.js";import"./index-cuoVkR4F.js";import"./useEventCallback-byBYDvcL.js";import"./SkeletonBar-B9L_DStn.js";import"./LoadingCell-DcXqZJAC.js";import"./ColumnConfigDialog-DqG9YoD3.js";import"./DraggableList-C5manxDx.js";import"./search-DRPDmTbF.js";import"./Input-DND4jSO6.js";import"./useControlled-Brt8x5-e.js";import"./isEqual-DmiAgtts.js";import"./isObject-BWf8MA5A.js";import"./Button-CMc7chm1.js";import"./ActionButton-B4zZjGVU.js";import"./Checkbox-iqbJKU2o.js";import"./useValueChanged-CjIBuOlm.js";import"./CollapsiblePanel-6Z1QE5xZ.js";import"./MultiColumnSortDialog-X5jJ1kgE.js";import"./MenuTrigger-BkSsBu17.js";import"./CompositeItem-CI5jeQ9i.js";import"./ToolbarRootContext-D0YLC8MO.js";import"./getDisabledMountTransitionStyles-DLPDieqM.js";import"./getPseudoElementBounds-BBE3_y7N.js";import"./chevron-down--IKdXKG2.js";import"./index-D6zsaxaR.js";import"./error-8IdCo3sJ.js";import"./BaseCbacBanner-CUODHxmz.js";import"./makeExternalStore-ChPwoXju.js";import"./Tooltip-CVp9JHdj.js";import"./PopoverPopup-48aZ5vF1.js";import"./toNumber-Ize7j_rT.js";import"./useOsdkClient-Bl8Z_uxW.js";import"./tick-DKvhNy2w.js";import"./DropdownField-BOHi3o6l.js";import"./withOsdkMetrics-DhjGq0fZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

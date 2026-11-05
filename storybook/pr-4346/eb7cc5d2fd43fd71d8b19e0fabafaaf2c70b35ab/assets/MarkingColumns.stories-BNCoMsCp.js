import{f as p,j as e}from"./iframe-BA-BTX3-.js";import{O as i}from"./object-table-DJTS9wrk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5CDmGBs.js";import"./Table-C_2lHXzU.js";import"./index-CLtmtywH.js";import"./Dialog-yKAqP5Qg.js";import"./cross-D4r7ZnVQ.js";import"./svgIconContainer-Dgy3GTZl.js";import"./useBaseUiId-BfS85IZC.js";import"./InternalBackdrop-BRtp06hW.js";import"./composite-CTuwrQcp.js";import"./index-CHEuFMH1.js";import"./index-PipwlUCm.js";import"./index-BwCVEmQa.js";import"./useEventCallback-LqHpjxlt.js";import"./SkeletonBar-BFsZEIKo.js";import"./LoadingCell-eIOm7TzJ.js";import"./ColumnConfigDialog-DvQseXxN.js";import"./DraggableList-DmkMX12O.js";import"./search-DGIpilYo.js";import"./Input-BeTQsBeq.js";import"./useControlled-UrjDpzSo.js";import"./Button-CYmxxZwT.js";import"./small-cross-CnxqgFjC.js";import"./ActionButton-D60qZq-8.js";import"./Checkbox-BMFNhNk5.js";import"./useValueChanged-DkO6q2A4.js";import"./CollapsiblePanel-CpPszFea.js";import"./MultiColumnSortDialog-BO-EQQbS.js";import"./MenuTrigger-B_xBsrpb.js";import"./CompositeItem-domKBhoO.js";import"./ToolbarRootContext-DhyEOAqU.js";import"./getDisabledMountTransitionStyles-Due7wGO5.js";import"./getPseudoElementBounds-COzzTRAU.js";import"./chevron-down-BhnESDG4.js";import"./index-BJs7nm0G.js";import"./error-rq6qiBRx.js";import"./BaseCbacBanner-rOVSJyTs.js";import"./makeExternalStore-BUw-VQ9F.js";import"./Tooltip-DtxlDfYK.js";import"./isObject-DKRs3Wgv.js";import"./debounce-DGT6__t6.js";import"./useOsdkClient-DX1BaHYe.js";import"./tick-_PKXPN2p.js";import"./DropdownField-ClRlB2T0.js";import"./isEqual-C5OEvHwJ.js";import"./_baseIsEqual-dQE-vf0U.js";import"./withOsdkMetrics-bastq8vC.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

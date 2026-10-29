import{f as p,j as e}from"./iframe-tf0495v_.js";import{O as i}from"./object-table-BX2UKp4I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DUTrEumB.js";import"./index-D2AIaBAZ.js";import"./Dialog-BaER-36K.js";import"./cross--xJKKgee.js";import"./svgIconContainer-C-fh6e97.js";import"./useBaseUiId-CWsIXkuU.js";import"./InternalBackdrop-DJyPzldm.js";import"./composite-Ba9ifDV9.js";import"./index-DcxI05po.js";import"./index-BDW4zxbF.js";import"./index-9oKwKnEm.js";import"./useEventCallback-sbdHrv5E.js";import"./SkeletonBar-DFrGLOcG.js";import"./LoadingCell-DwlMJcze.js";import"./ColumnConfigDialog-D-fNtj8v.js";import"./DraggableList-Y630FWkj.js";import"./search-BWQUBjsa.js";import"./Input-DEfwNsC4.js";import"./useControlled-1fYDQt6k.js";import"./Button-6k_Ayrrm.js";import"./small-cross-DE-iog-f.js";import"./ActionButton-DNbVxKUR.js";import"./Checkbox-RIqPUoes.js";import"./useValueChanged-CPTd0fEe.js";import"./CollapsiblePanel-B86Q-6Un.js";import"./MultiColumnSortDialog-BOTtqull.js";import"./MenuTrigger-BlhdYyJf.js";import"./CompositeItem-D--GgbU9.js";import"./ToolbarRootContext-DPqmeZr5.js";import"./getDisabledMountTransitionStyles-BSjFObFI.js";import"./getPseudoElementBounds-DJjcZenL.js";import"./chevron-down-DSCp4Cy5.js";import"./index-DhVg9-FN.js";import"./error-DLfqe8ag.js";import"./BaseCbacBanner-1apOPMlj.js";import"./makeExternalStore-C_sk4jS_.js";import"./Tooltip-CvL86HHa.js";import"./PopoverPopup-CrMFPZWz.js";import"./debounce-ChAJRBGQ.js";import"./useOsdkClient-BNBK5eBr.js";import"./tick-BcpYaFi0.js";import"./DropdownField-D7Y-P9Ep.js";import"./isEqual-Dx457W3T.js";import"./withOsdkMetrics-B9UpkJYI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

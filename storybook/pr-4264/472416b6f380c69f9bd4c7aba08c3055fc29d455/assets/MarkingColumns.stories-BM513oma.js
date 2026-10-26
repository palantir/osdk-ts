import{f as p,j as e}from"./iframe-DXehzrLy.js";import{O as i}from"./object-table-eq6MmzNO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-kK_P88Zt.js";import"./Table-BrjIQUiH.js";import"./index-CXAIDCBV.js";import"./Dialog-DSREPINS.js";import"./cross-CRuTMTSr.js";import"./svgIconContainer-DQDL5XU9.js";import"./useBaseUiId-DZnCUGwj.js";import"./InternalBackdrop-CT6Wdma2.js";import"./composite-DYr_GRHn.js";import"./index-D0HNivTS.js";import"./index-BZAJEyr8.js";import"./index-Dnoineba.js";import"./useEventCallback-CZG_LILO.js";import"./SkeletonBar-DJmf5vx2.js";import"./LoadingCell-B_gs1veW.js";import"./ColumnConfigDialog-BY_QY2kY.js";import"./DraggableList-DzeBMc9N.js";import"./search-DeuEp5ow.js";import"./Input-CpfpiQM-.js";import"./useControlled-Dzo11YgF.js";import"./Button-arOEvFAs.js";import"./small-cross-VrEzkJ3d.js";import"./ActionButton-t4tgv0qW.js";import"./Checkbox-Dkrna0kS.js";import"./useValueChanged-CFb9BlJL.js";import"./CollapsiblePanel-Cc67GzP9.js";import"./MultiColumnSortDialog-wPam3DYq.js";import"./MenuTrigger-Cs-Esf_B.js";import"./CompositeItem-B8unsUL4.js";import"./ToolbarRootContext-CjkOTyMm.js";import"./getDisabledMountTransitionStyles-DTMwFgZF.js";import"./getPseudoElementBounds-CdE3xhre.js";import"./chevron-down-D0FRwBSH.js";import"./index-19DjQapZ.js";import"./error-DuLOR7GK.js";import"./BaseCbacBanner-CZebZxFt.js";import"./makeExternalStore-CXnsRNRI.js";import"./Tooltip-D3vpqYyy.js";import"./PopoverPopup-BMj9dgf7.js";import"./debounce-Bq9WTc_K.js";import"./useOsdkClient-DcXtZI_6.js";import"./tick-D67MiW11.js";import"./DropdownField-CNXn3QuQ.js";import"./isEqual-D-xvKB5X.js";import"./withOsdkMetrics-CA3oK6ip.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

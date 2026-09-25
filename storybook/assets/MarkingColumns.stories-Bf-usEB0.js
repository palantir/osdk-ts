import{f as p,j as e}from"./iframe-CNaoCaD-.js";import{O as i}from"./object-table-Dv8WFw4M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CJJJF1mi.js";import"./index-D0c6s8Wh.js";import"./Dialog-CYE5QabX.js";import"./cross-BAAhVfqY.js";import"./svgIconContainer-DMxMunFc.js";import"./useBaseUiId-BLzWWyTo.js";import"./InternalBackdrop-DyZTC2Np.js";import"./composite-DI12gblL.js";import"./index-CO70LKAy.js";import"./index-bkL56BYD.js";import"./index-CSDWflQO.js";import"./useEventCallback-BrzJPUe-.js";import"./SkeletonBar-CtWeGlbs.js";import"./LoadingCell-DUGd5kLz.js";import"./ColumnConfigDialog-VZ7pVwTS.js";import"./DraggableList-CRMLmkvs.js";import"./search-ORWNQV-Y.js";import"./Input-BBHZGssD.js";import"./useControlled-DxXwsmI6.js";import"./Button-DnaSBDda.js";import"./small-cross-C9OctJ-L.js";import"./ActionButton-ZoDGCRxC.js";import"./Checkbox-BRNaMGYm.js";import"./useValueChanged-utG5gEoU.js";import"./CollapsiblePanel-DOMeHPZv.js";import"./MultiColumnSortDialog-_dMBWUMX.js";import"./MenuTrigger-BmwUumsZ.js";import"./CompositeItem-DGSUi3Oj.js";import"./ToolbarRootContext-C6YFR30y.js";import"./getDisabledMountTransitionStyles-D7USJ7g2.js";import"./getPseudoElementBounds-CYw6K46U.js";import"./chevron-down-LMtkkQTV.js";import"./index-CbXbemY1.js";import"./error-CEVIMozV.js";import"./BaseCbacBanner-BB1L2uA5.js";import"./makeExternalStore-DdM6Dx34.js";import"./Tooltip-Dt3tWdRA.js";import"./PopoverPopup-BPcvF2qn.js";import"./debounce-9NycXt_B.js";import"./useOsdkClient-D_c3zo70.js";import"./tick-DOziRHZF.js";import"./DropdownField-BSsZW_49.js";import"./isEqual-DZnhSfZI.js";import"./withOsdkMetrics-C088wNt_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

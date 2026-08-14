import{f as p,j as e}from"./iframe-CQ8GnM4F.js";import{O as i}from"./object-table-BPqZt8Xh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTHymVTT.js";import"./Table-BqwFxCuG.js";import"./index-D-qb5elk.js";import"./Dialog-BiR9_kSU.js";import"./cross-B-B76LsO.js";import"./svgIconContainer-CFj_QVpE.js";import"./useBaseUiId-DNylri0h.js";import"./InternalBackdrop-Bnpz9z3C.js";import"./composite-D8Op5omk.js";import"./index-CBfM1eTV.js";import"./index-vRbi-hPZ.js";import"./index-CWxTPRvQ.js";import"./useEventCallback-CwBNysST.js";import"./SkeletonBar-Co95I2t2.js";import"./LoadingCell-DWloxnsX.js";import"./ColumnConfigDialog-CruqBtkT.js";import"./DraggableList-QH52Hljs.js";import"./search-BD7N_Px9.js";import"./Input-DxXc3FHJ.js";import"./useControlled-Nzu8rvWU.js";import"./Button-D03uZiM4.js";import"./small-cross-Dd0EKvPu.js";import"./ActionButton-C1IWap4H.js";import"./Checkbox-CG60OHSc.js";import"./useValueChanged--dnQ0E3_.js";import"./CollapsiblePanel-CjOn5bi3.js";import"./MultiColumnSortDialog-CtGjZ3gI.js";import"./MenuTrigger-BkjkPR8E.js";import"./CompositeItem-DUQ-QWk-.js";import"./ToolbarRootContext-Cuym0TD9.js";import"./getDisabledMountTransitionStyles-COIZu6QW.js";import"./getPseudoElementBounds-_QKh0K1T.js";import"./chevron-down-ELLpGOmV.js";import"./index-Il0eZ9cQ.js";import"./error-BTrU7oox.js";import"./BaseCbacBanner-D8j1QTMP.js";import"./makeExternalStore-DtmpZgSb.js";import"./Tooltip-CrdnIALV.js";import"./PopoverPopup-Bw_tKaRO.js";import"./debounce-Drhc6M_Y.js";import"./useOsdkClient-DswCZ-gI.js";import"./tick-YtV6mj8r.js";import"./DropdownField--HKs-g6O.js";import"./isEqual-CfQIWlQk.js";import"./withOsdkMetrics-D2yFydsJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

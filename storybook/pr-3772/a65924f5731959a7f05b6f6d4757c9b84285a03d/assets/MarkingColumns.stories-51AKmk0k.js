import{f as p,j as e}from"./iframe-5Yblr-NW.js";import{O as i}from"./object-table-c1GWaMPj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Btewyy37.js";import"./Table-BGKldzvB.js";import"./index-DhSuFMxY.js";import"./Dialog-yZxDZi1G.js";import"./cross-AcYogNoU.js";import"./svgIconContainer-C-JdNNRF.js";import"./useBaseUiId-CAIjkwyZ.js";import"./InternalBackdrop-CN9NhUNj.js";import"./composite-koNAMkMV.js";import"./index-CCrwpy9x.js";import"./index-Dy445fm6.js";import"./index-DhxqCc18.js";import"./useEventCallback-CxKTPJzO.js";import"./SkeletonBar-DiM1XXxY.js";import"./LoadingCell-BEZh4DfC.js";import"./ColumnConfigDialog-BJcXMY0A.js";import"./DraggableList-BzD4-3db.js";import"./search-D1uGJSkA.js";import"./Input-BOhHHxG9.js";import"./useControlled-CA2G7MeH.js";import"./Button-MK9UA-SJ.js";import"./small-cross-BffCLWOx.js";import"./ActionButton-d6xzy603.js";import"./Checkbox-Cc-NsMO8.js";import"./useValueChanged-m37Rn1H6.js";import"./CollapsiblePanel-BBxBNB35.js";import"./MultiColumnSortDialog-DuiPARGk.js";import"./MenuTrigger-C2DN0Qlf.js";import"./CompositeItem-DP9Ij0vi.js";import"./ToolbarRootContext-Cm13ddJg.js";import"./getDisabledMountTransitionStyles-7aMNvG5X.js";import"./getPseudoElementBounds-BQ6Zc3zn.js";import"./chevron-down-CwlGMO0g.js";import"./index-D3dVTsWE.js";import"./error-CKIF3yHX.js";import"./BaseCbacBanner-MGoalnpS.js";import"./makeExternalStore-CdX6NCF6.js";import"./Tooltip-0zkur8B8.js";import"./PopoverPopup-CendakA5.js";import"./debounce-ZeZufrM2.js";import"./useOsdkClient-CmlS7muK.js";import"./tick-Bb3E6T37.js";import"./DropdownField-DD-cuKca.js";import"./isEqual-Wc-dAf2j.js";import"./withOsdkMetrics-QG2B1sMI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

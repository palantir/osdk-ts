import{f as p,j as e}from"./iframe-CGwmlW2r.js";import{O as i}from"./object-table-BdiaLjP_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVIGiO6F.js";import"./Table-CqdlxWqq.js";import"./index-CjgswMxd.js";import"./Dialog-DOOox7qs.js";import"./cross-DQgNlB5k.js";import"./svgIconContainer-BTPb8DLH.js";import"./useBaseUiId-Bm2cFh6B.js";import"./InternalBackdrop-B-ry2Uvu.js";import"./composite-BJmQcV2t.js";import"./index-DxRKQXJQ.js";import"./index-CafwHe0h.js";import"./index-CgjmDikR.js";import"./useEventCallback-BiRgUSbg.js";import"./SkeletonBar-BMy2XXrH.js";import"./LoadingCell-BUTVej-9.js";import"./ColumnConfigDialog-Ch004eyC.js";import"./DraggableList-BAjeUcaG.js";import"./search-DcxUYSzD.js";import"./Input-pi6zEsGe.js";import"./useControlled-DsP0nmCG.js";import"./Button-DFUwv3AU.js";import"./small-cross-Dlo2xc3T.js";import"./ActionButton-Cqfuw1XW.js";import"./Checkbox-BRlEJGBQ.js";import"./useValueChanged-Bttiqhne.js";import"./CollapsiblePanel-Dbr7GgxQ.js";import"./MultiColumnSortDialog-C_hr8XYu.js";import"./MenuTrigger-CJM2cb2l.js";import"./CompositeItem-7T1omaB9.js";import"./ToolbarRootContext-CxtjwMoV.js";import"./getDisabledMountTransitionStyles-Do49NmND.js";import"./getPseudoElementBounds-DDUtEhAw.js";import"./chevron-down-CfoUsUUp.js";import"./index-Z2JS55l6.js";import"./error-CgUQsRwJ.js";import"./BaseCbacBanner-Cdi8VTcB.js";import"./makeExternalStore-B5u8APGM.js";import"./Tooltip-D5ZU9d0s.js";import"./PopoverPopup-ByMkl8rO.js";import"./debounce-ZyuHSE7w.js";import"./useOsdkClient-Be2ZREGr.js";import"./tick-DaMMKKEV.js";import"./DropdownField-B4moQZxn.js";import"./isEqual-CjASy58h.js";import"./withOsdkMetrics-DDzV_xju.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

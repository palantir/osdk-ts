import{f as p,j as e}from"./iframe-DL4FbcwS.js";import{O as i}from"./object-table-DhigSl7G.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-Y5E90C.js";import"./Table-Cs_iWV8n.js";import"./index-Br0G3foT.js";import"./Dialog-BFHfmQPP.js";import"./cross-BgWeKxEC.js";import"./svgIconContainer-CE-AmYzF.js";import"./useBaseUiId-CP7gZe2z.js";import"./InternalBackdrop-CN-xTacf.js";import"./composite-WIX2LHhX.js";import"./index-CDxRvv5g.js";import"./index-XqdSQUcL.js";import"./index-DLGuQieX.js";import"./useEventCallback-BEeBAO93.js";import"./SkeletonBar-CQVaDy0B.js";import"./LoadingCell-BlAiaYMr.js";import"./ColumnConfigDialog-C6cZo_LK.js";import"./DraggableList-CiiAn0FN.js";import"./search-DR1h9EWJ.js";import"./Input-CoqvOIT8.js";import"./useControlled-QO3Raoq-.js";import"./Button-B99bddLT.js";import"./small-cross-CUfUs31H.js";import"./ActionButton-CBHhv2Lw.js";import"./Checkbox-DExDIyfW.js";import"./useValueChanged-CXZmRiDQ.js";import"./CollapsiblePanel-Cm-pYAoG.js";import"./MultiColumnSortDialog-BkIL3f4O.js";import"./MenuTrigger-7-9CY8yx.js";import"./CompositeItem-BT24yxUg.js";import"./ToolbarRootContext-Dvyrl1Ns.js";import"./getDisabledMountTransitionStyles-BZoy_dEn.js";import"./getPseudoElementBounds-DbDICFV0.js";import"./chevron-down-CJf371D2.js";import"./index-1dYW8fLm.js";import"./error-CQAN26ZF.js";import"./BaseCbacBanner-DPX4y917.js";import"./makeExternalStore-CfOH3M3i.js";import"./Tooltip-BZG5pa3L.js";import"./PopoverPopup-go6UfqHP.js";import"./debounce-Ta3u6n_O.js";import"./useOsdkClient-C5Zu7SVp.js";import"./tick-Cy5aEDFq.js";import"./DropdownField-CxOSqgDd.js";import"./isEqual-B7FydaS0.js";import"./withOsdkMetrics-tOkw8TA4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

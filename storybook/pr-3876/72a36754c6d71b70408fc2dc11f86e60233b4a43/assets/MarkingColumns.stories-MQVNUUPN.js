import{f as p,j as e}from"./iframe-BKIDvt-K.js";import{O as i}from"./object-table-BHTV2P9z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-mI3tBMWP.js";import"./Table-DkpSR35_.js";import"./index-CrGl0mKT.js";import"./Dialog-DFWmCx4e.js";import"./cross-ZQbGVcUs.js";import"./svgIconContainer-DPW23OxO.js";import"./useBaseUiId-C9o0bL4p.js";import"./InternalBackdrop-5RCVmnT-.js";import"./composite-CQudhTJ9.js";import"./index-CC4pQ_7y.js";import"./index-DDZLkqmq.js";import"./index-CFReLSn_.js";import"./useEventCallback-ldBmTO9w.js";import"./SkeletonBar-CpXeghMb.js";import"./LoadingCell-BlJ8VdtH.js";import"./ColumnConfigDialog-n3ZPbTPe.js";import"./DraggableList-90FoAimS.js";import"./search-D85PJwgE.js";import"./Input-CEoxDAhD.js";import"./useControlled-BJ__83MY.js";import"./Button-DQ9OY2hI.js";import"./small-cross-DkHYyVsX.js";import"./ActionButton-C31vbNq1.js";import"./Checkbox-DL1FpdO7.js";import"./useValueChanged-DSjkwF1h.js";import"./CollapsiblePanel-ByITDqAC.js";import"./MultiColumnSortDialog-CDnWpuli.js";import"./MenuTrigger-Cs0oQJbr.js";import"./CompositeItem-Bk-qRhF5.js";import"./ToolbarRootContext-CbtqnU-s.js";import"./getDisabledMountTransitionStyles-BveNZaSb.js";import"./getPseudoElementBounds-BxYk8t8e.js";import"./chevron-down-DjDYprbt.js";import"./index-BmVXlrb-.js";import"./error-venNczME.js";import"./BaseCbacBanner-DiJ5ZmWM.js";import"./makeExternalStore-C22ZFOyU.js";import"./Tooltip-jKH0Fw_X.js";import"./PopoverPopup-BEqbOZj_.js";import"./debounce-BteKW-AL.js";import"./useOsdkClient-CIFuIhFw.js";import"./tick-B3k5R_JT.js";import"./DropdownField-Cc2vtwzQ.js";import"./isEqual-0dZgA1V5.js";import"./withOsdkMetrics-8E7XigZV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

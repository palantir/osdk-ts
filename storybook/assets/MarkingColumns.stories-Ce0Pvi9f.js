import{f as p,j as e}from"./iframe-DbqyfEpT.js";import{O as i}from"./object-table-Dew9_BCD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CbRA1MLt.js";import"./index-DXCImGV3.js";import"./Dialog-CMyfvdap.js";import"./cross-B4u0_v8A.js";import"./svgIconContainer-BeMYhW5y.js";import"./useBaseUiId-DOBNQZSS.js";import"./InternalBackdrop-BppENXZo.js";import"./composite-DLhe-Jn_.js";import"./index-BKOBkvBW.js";import"./index-CqQVZqBR.js";import"./index-DKwFbfLR.js";import"./useEventCallback-BOXba5-9.js";import"./SkeletonBar-CT56I8l3.js";import"./LoadingCell-DyjLUt0J.js";import"./ColumnConfigDialog-ABiTi9sK.js";import"./DraggableList-Dcun8_bD.js";import"./search-C4sRLKui.js";import"./Input-Bb36fr0S.js";import"./useControlled-3R4FDQ1-.js";import"./Button-D6iKZuwX.js";import"./small-cross-BKymWZKQ.js";import"./ActionButton-o8yF2Kx3.js";import"./Checkbox-D1QzlLNZ.js";import"./useValueChanged-ClgxGk8N.js";import"./CollapsiblePanel-DuorPJkU.js";import"./MultiColumnSortDialog-BW3zIbZT.js";import"./MenuTrigger-Ce7ldmZi.js";import"./CompositeItem-pt-Agyrs.js";import"./ToolbarRootContext-Cz4TE7JJ.js";import"./getDisabledMountTransitionStyles-axPgQXbs.js";import"./getPseudoElementBounds-DDAbSkfW.js";import"./chevron-down-BZavjwn-.js";import"./index-BPz5ga9u.js";import"./error-DmLEJ7LA.js";import"./BaseCbacBanner-Yz2WdOYZ.js";import"./makeExternalStore-Bfg6k2dl.js";import"./Tooltip-FO5R604L.js";import"./PopoverPopup-BQ5kZ_Z7.js";import"./debounce-DRTpIDWD.js";import"./useOsdkClient-BvViJLPG.js";import"./tick-DHzl-Jfy.js";import"./DropdownField-D7wJSxdM.js";import"./isEqual-Conb4iRJ.js";import"./withOsdkMetrics-DIB0jy1n.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

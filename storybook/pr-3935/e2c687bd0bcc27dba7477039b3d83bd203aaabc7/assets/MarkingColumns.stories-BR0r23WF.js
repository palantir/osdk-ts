import{f as p,j as e}from"./iframe-XrofcpbD.js";import{O as i}from"./object-table-CQUtluaU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-4aKSNE4Z.js";import"./Table-PyHbwIL1.js";import"./index-BpIQk31K.js";import"./Dialog-CK0ThOMi.js";import"./cross-xvFBNCq9.js";import"./svgIconContainer-BRYxzENj.js";import"./useBaseUiId-Pjnp1WCR.js";import"./InternalBackdrop-CS9GDJ0k.js";import"./composite-CVP2vWQr.js";import"./index-YIz0O6eI.js";import"./index-BiB6mgaY.js";import"./index-COS5oq6K.js";import"./useEventCallback-D-w8hKF8.js";import"./SkeletonBar-wEBtoQJI.js";import"./LoadingCell-7gmLP_EL.js";import"./ColumnConfigDialog-CLkIWZFy.js";import"./DraggableList-2ENQuMLR.js";import"./search-CpQHwDsV.js";import"./Input-DP0HZuep.js";import"./useControlled-DZJgL9vi.js";import"./Button-D93TIJdR.js";import"./small-cross-D5AmJrUy.js";import"./ActionButton-CvgtCG2W.js";import"./Checkbox-KLRIxs55.js";import"./useValueChanged-DMuoZqzV.js";import"./CollapsiblePanel-CrlLnisy.js";import"./MultiColumnSortDialog-BTDzGz_3.js";import"./MenuTrigger-B-_LgIM3.js";import"./CompositeItem-BEvI0D6E.js";import"./ToolbarRootContext-AhwQqi4V.js";import"./getDisabledMountTransitionStyles-BIi-_6hn.js";import"./getPseudoElementBounds-CMVTFGwo.js";import"./chevron-down-CD2YsHKM.js";import"./index-UBL3yvSp.js";import"./error-CCJEPyJx.js";import"./BaseCbacBanner-DLUQs4q_.js";import"./makeExternalStore-YYVkatD5.js";import"./Tooltip-Co0onlWy.js";import"./PopoverPopup-BlCB73eB.js";import"./debounce-DZml1LHx.js";import"./useOsdkClient-BWNNp0nW.js";import"./tick-CT2U49RP.js";import"./DropdownField-6GQjb6-H.js";import"./isEqual-ByMEfs2L.js";import"./withOsdkMetrics-BHkoZ0sq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

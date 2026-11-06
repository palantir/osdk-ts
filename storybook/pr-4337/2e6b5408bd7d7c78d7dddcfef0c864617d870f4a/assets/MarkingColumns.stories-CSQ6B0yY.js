import{f as p,j as e}from"./iframe-BX25vaaY.js";import{O as i}from"./object-table-dzzGL-Nt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B4fqOqCe.js";import"./Table-dFabYKTU.js";import"./index-cHBOMeEB.js";import"./Dialog-Bz88ckYq.js";import"./cross-DYoAuDNi.js";import"./svgIconContainer-CdYxDvot.js";import"./useBaseUiId-CcSHD2go.js";import"./InternalBackdrop-DAZjwhZx.js";import"./composite-CR6ea9de.js";import"./index-CwTTdI6G.js";import"./index-3gZ9GYf_.js";import"./index-Z6EGSFM5.js";import"./useEventCallback-rCSZBNnH.js";import"./SkeletonBar-iUlUOGnb.js";import"./LoadingCell-E-HcHpI-.js";import"./ColumnConfigDialog-B1PCFNF_.js";import"./DraggableList-BDPSc9uV.js";import"./search-Cq3hJNRT.js";import"./Input-B7_1OxfG.js";import"./useControlled-CncYrOIz.js";import"./Button-_HXzGyBt.js";import"./small-cross-ua1KNA1W.js";import"./ActionButton-YaVL47EC.js";import"./Checkbox-ChpXb7lQ.js";import"./useValueChanged-B5wvfKOk.js";import"./CollapsiblePanel-DUxCMy3H.js";import"./MultiColumnSortDialog-BGy0bW4w.js";import"./MenuTrigger-EWj52u5X.js";import"./CompositeItem-CmMVOFT8.js";import"./ToolbarRootContext-aY85yZom.js";import"./getDisabledMountTransitionStyles-DhBpb285.js";import"./getPseudoElementBounds-CIQTJ_fk.js";import"./chevron-down-EEZ-gmtO.js";import"./index-BzEoWnZU.js";import"./error-CJ3zu-Fv.js";import"./BaseCbacBanner-Ce8x1hpN.js";import"./makeExternalStore-M7acJIlW.js";import"./Tooltip-CQ8DNFV6.js";import"./PopoverPopup-BlgnwBvy.js";import"./debounce-CJILhTW-.js";import"./useOsdkClient-BMWDxtmb.js";import"./tick-D6Q1wyk4.js";import"./DropdownField-BMURQ1aW.js";import"./isEqual-_AKmbi14.js";import"./withOsdkMetrics-WVBxLOJx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

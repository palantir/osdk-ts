import{f as p,j as e}from"./iframe-C9aInfce.js";import{O as i}from"./object-table-DuDcc432.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PMI8cRcX.js";import"./Table-BlJwVm8P.js";import"./index-Cr0L3GZN.js";import"./Dialog-Dflssdnc.js";import"./cross-DetncErB.js";import"./svgIconContainer-BJqGJbKn.js";import"./useBaseUiId-bh5ywVzc.js";import"./InternalBackdrop-B3ucOVZd.js";import"./composite-CLAAs_xp.js";import"./index-6S-kg2yi.js";import"./index-ScvUSFZz.js";import"./index-YtZtBJ6H.js";import"./useEventCallback-1FeWEKRC.js";import"./SkeletonBar-DD0yFs0X.js";import"./LoadingCell-BlttZOTh.js";import"./ColumnConfigDialog-D85Sqzbo.js";import"./DraggableList-QIjFVjIY.js";import"./search-DFxfowIj.js";import"./Input-CG7QoG-N.js";import"./useControlled-BMW5V9nZ.js";import"./Button-DLimHkL6.js";import"./small-cross-BzhMeLn8.js";import"./ActionButton-8qmPdMKn.js";import"./Checkbox-Dc9VhTPS.js";import"./useValueChanged-DPxHLeei.js";import"./CollapsiblePanel-CEhqOGjS.js";import"./MultiColumnSortDialog-C2ZPbguB.js";import"./MenuTrigger-Dh3FVW8N.js";import"./CompositeItem-DcXO7kaY.js";import"./ToolbarRootContext-BuD4rpNO.js";import"./getDisabledMountTransitionStyles-DP-946Fx.js";import"./getPseudoElementBounds-Bl18tBQw.js";import"./chevron-down-CAB1YUBN.js";import"./index-hG-BfAMR.js";import"./error-CwJEBYlM.js";import"./BaseCbacBanner-BSWzWBzS.js";import"./makeExternalStore-CqZkZ6X0.js";import"./Tooltip-u4pIgaNq.js";import"./PopoverPopup-CmF8uWKK.js";import"./debounce-G0Gt7iOQ.js";import"./useOsdkClient-CoTph7YD.js";import"./tick-BzlYcUXY.js";import"./DropdownField-DSk9Pf-V.js";import"./isEqual-Co9CzCVL.js";import"./withOsdkMetrics-7XGlhu7o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

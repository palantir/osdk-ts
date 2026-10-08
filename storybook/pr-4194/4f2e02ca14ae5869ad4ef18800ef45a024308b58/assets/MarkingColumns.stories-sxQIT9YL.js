import{f as p,j as e}from"./iframe-CRfkLV31.js";import{O as i}from"./object-table-Dq0vyH8t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YWkr71E4.js";import"./Table-C7gaOaO6.js";import"./index-DFmae8Ml.js";import"./Dialog-BE9C1eNO.js";import"./cross-2MhXpbG_.js";import"./svgIconContainer-Cv_5fobV.js";import"./useBaseUiId-CtBQzgSV.js";import"./InternalBackdrop-Hd16GtHK.js";import"./composite-Caz7Fjnj.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./index-D4xobDeS.js";import"./useEventCallback-BWqA8sXr.js";import"./SkeletonBar-h9eX593x.js";import"./LoadingCell-B9H0SnSs.js";import"./ColumnConfigDialog-DBWSmJ3l.js";import"./DraggableList-CjVbtBqm.js";import"./search-DgbssBMa.js";import"./Input-C9MxuagH.js";import"./useControlled-B56Cy6tA.js";import"./Button-COPRfQ9y.js";import"./small-cross-Bp20qFfY.js";import"./ActionButton-DCGdEOGa.js";import"./Checkbox-DM9Tz5iE.js";import"./useValueChanged-ojMWA7Lu.js";import"./CollapsiblePanel-BpxJ4S1Z.js";import"./MultiColumnSortDialog-BXhBUuFE.js";import"./MenuTrigger-DFdYgIUQ.js";import"./CompositeItem-BIX1YXND.js";import"./ToolbarRootContext-DesSIIiD.js";import"./getDisabledMountTransitionStyles-DL_MWW6U.js";import"./getPseudoElementBounds-CXdwiOru.js";import"./chevron-down-CQ908lz2.js";import"./index-BTr8Rb7H.js";import"./error-Bjl4tfNj.js";import"./BaseCbacBanner-wzZeSJV7.js";import"./makeExternalStore-DD66B2VR.js";import"./Tooltip-C3E-sj79.js";import"./PopoverPopup-qLtR5Yx9.js";import"./debounce-D-aRhyl3.js";import"./useOsdkClient-BNC8fnuO.js";import"./tick-DaS6FevP.js";import"./DropdownField-IPwkGfmB.js";import"./isEqual-BQ5yqGMv.js";import"./withOsdkMetrics-BXaEjRyq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

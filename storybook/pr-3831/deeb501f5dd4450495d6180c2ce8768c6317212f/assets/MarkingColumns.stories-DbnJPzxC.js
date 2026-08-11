import{f as p,j as e}from"./iframe-pVQp6_80.js";import{O as i}from"./object-table-cAS_VnQd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvrEbwMF.js";import"./Table-C4OuJWKq.js";import"./index-BKHZTTuk.js";import"./Dialog-C4aRVyOz.js";import"./cross-p15vEzF4.js";import"./svgIconContainer-CLNzJqq-.js";import"./useBaseUiId-CFh57Y09.js";import"./InternalBackdrop-DQioF-Ai.js";import"./composite-DXQY7w3G.js";import"./index-rPQo9pxM.js";import"./index-BPbZVciS.js";import"./index-DEht1joJ.js";import"./useEventCallback-BKZyMEkx.js";import"./SkeletonBar-Cb3aiOU-.js";import"./LoadingCell-DFCnWyZX.js";import"./ColumnConfigDialog-Csb-f-G8.js";import"./DraggableList-DToh6N06.js";import"./search-DKMeJpmh.js";import"./Input-BEUZb4Zo.js";import"./useControlled-rB5MAIpC.js";import"./isEqual-u1Cjlt50.js";import"./isObject-CB39icel.js";import"./Button-Cgl5xkj-.js";import"./ActionButton-uxghCAx5.js";import"./Checkbox-D7mBHrR7.js";import"./useValueChanged-DF6AXwIs.js";import"./CollapsiblePanel--leL7Bz0.js";import"./MultiColumnSortDialog-B2Vgx8lm.js";import"./MenuTrigger-dBgN3Rwc.js";import"./CompositeItem-DLKVePVU.js";import"./ToolbarRootContext-BWr-STqk.js";import"./getDisabledMountTransitionStyles-DKpRPk7J.js";import"./getPseudoElementBounds-C76l7YaE.js";import"./chevron-down-kqlA2gTm.js";import"./index-B-tGz8RK.js";import"./error-DHHv-x7q.js";import"./BaseCbacBanner-XivDNOEp.js";import"./makeExternalStore-CYd-_mYw.js";import"./Tooltip-CDWahB5d.js";import"./PopoverPopup-DZmOnHRY.js";import"./toNumber-BbTGcjrE.js";import"./useOsdkClient-BufF5Jmy.js";import"./tick-n9oaX1Yg.js";import"./DropdownField-CjuzqDjo.js";import"./withOsdkMetrics-CIu58Hun.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

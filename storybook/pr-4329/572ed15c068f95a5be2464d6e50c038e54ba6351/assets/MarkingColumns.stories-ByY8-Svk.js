import{f as p,j as e}from"./iframe-WKt3pp3u.js";import{O as i}from"./object-table-CeAM-xFj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C-2N1dom.js";import"./Table-DcYprFpJ.js";import"./index-Cn0NPQc9.js";import"./Dialog-BDkF5r6D.js";import"./cross-4ZdF9rso.js";import"./svgIconContainer-Dd6XoJmG.js";import"./useBaseUiId-KSUwx5Md.js";import"./InternalBackdrop-BtH0Ysif.js";import"./composite-B4lF1Gsb.js";import"./index-CyjL2alN.js";import"./index-CK4IlmQS.js";import"./index-DafvFaXh.js";import"./useEventCallback-BvXzRC06.js";import"./SkeletonBar-CsOoAcCP.js";import"./LoadingCell-x5OFViSJ.js";import"./ColumnConfigDialog-sgAUv_aj.js";import"./DraggableList-C2qJbBwZ.js";import"./search-Dn1087-G.js";import"./Input-Caz2RzvD.js";import"./useControlled-CFMpFbMm.js";import"./Button-cNgJCMyB.js";import"./small-cross-DAIM-tYh.js";import"./ActionButton-DoHs3WwA.js";import"./Checkbox-CbONRRnG.js";import"./useValueChanged-C-7bhyhT.js";import"./CollapsiblePanel-Dr3s6TPy.js";import"./MultiColumnSortDialog-9_MSS2z8.js";import"./MenuTrigger-BkVhitah.js";import"./CompositeItem-Bj3DFZfQ.js";import"./ToolbarRootContext-BEEAtmxq.js";import"./getDisabledMountTransitionStyles-CHcwnca1.js";import"./getPseudoElementBounds-Bwny5PcZ.js";import"./chevron-down-sDl6Q2Tv.js";import"./index-D0XVpPOf.js";import"./error-Cfg0wGHf.js";import"./BaseCbacBanner-D6JFbrjt.js";import"./makeExternalStore-S8Y7W4h4.js";import"./Tooltip-gNTiaPxS.js";import"./PopoverPopup-ZW8wbg7e.js";import"./debounce-JIbAFHw4.js";import"./useOsdkClient-DCOM6Bqd.js";import"./tick-C6QdtsXi.js";import"./DropdownField-CYa_9fL1.js";import"./isEqual-uOZoXSsZ.js";import"./withOsdkMetrics-D4VhY3gv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

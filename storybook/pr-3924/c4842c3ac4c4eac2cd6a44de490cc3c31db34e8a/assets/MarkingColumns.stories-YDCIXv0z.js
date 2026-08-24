import{f as p,j as e}from"./iframe-ZGCn2odS.js";import{O as i}from"./object-table-65kVujAe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHCQWj8s.js";import"./Table-DJ88caPP.js";import"./index-CJGEKRO7.js";import"./Dialog-BNMNfqMb.js";import"./cross-YMBvsQPC.js";import"./svgIconContainer-DIbGb-SV.js";import"./useBaseUiId-BcKFnlc-.js";import"./InternalBackdrop-GK49McLi.js";import"./composite-DhwjcmOa.js";import"./index-C1SFOp3X.js";import"./index-DI6Iv9sH.js";import"./index-FqvCCkDn.js";import"./useEventCallback-DpDjAOam.js";import"./SkeletonBar-8t2888Rf.js";import"./LoadingCell-yllCbyUI.js";import"./ColumnConfigDialog-fsMZnXZS.js";import"./DraggableList-BeTr9Grg.js";import"./search-BSxa54sW.js";import"./Input-Dz8AuOJD.js";import"./useControlled-BCVu5IOV.js";import"./Button-BDPNYI21.js";import"./small-cross-BniKjSh0.js";import"./ActionButton-C3yeZ1Au.js";import"./Checkbox-aw_MMjVw.js";import"./useValueChanged-CpK0Am2a.js";import"./CollapsiblePanel-C4xCl0yn.js";import"./MultiColumnSortDialog-BOtT3fMs.js";import"./MenuTrigger-CV1o5oXP.js";import"./CompositeItem-Dfs12gOS.js";import"./ToolbarRootContext-DERGfUKY.js";import"./getDisabledMountTransitionStyles-DiyUlUYW.js";import"./getPseudoElementBounds-C_04zlSA.js";import"./chevron-down-B6AtoUz4.js";import"./index-KYd_Sluk.js";import"./error-CFUEkdAJ.js";import"./BaseCbacBanner-BIHQDsQT.js";import"./makeExternalStore-CfgYssbm.js";import"./Tooltip-BIZ4_c9E.js";import"./PopoverPopup-wyULYtii.js";import"./debounce-CCBwI6Yb.js";import"./useOsdkClient-CFyv3ORA.js";import"./tick-Do777ZNN.js";import"./DropdownField-BgzDLEZ2.js";import"./isEqual-DOJUpwKE.js";import"./withOsdkMetrics-BCmHmvai.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

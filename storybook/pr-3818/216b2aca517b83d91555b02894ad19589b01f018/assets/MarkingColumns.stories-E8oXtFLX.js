import{f as p,j as e}from"./iframe-DLfRO3Lg.js";import{O as i}from"./object-table-CQFOzclR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bdf9-Z3s.js";import"./Table-cPS1r1XX.js";import"./index-BqYFiItS.js";import"./Dialog-DoC0h8Nu.js";import"./cross-CwX8lo9D.js";import"./svgIconContainer-D-_aLtNj.js";import"./useBaseUiId-Pd_dUfv7.js";import"./InternalBackdrop-M65KPPc8.js";import"./composite-DjVE7iON.js";import"./index-BxNcLRzx.js";import"./index-CZtPOQqE.js";import"./index-V92L6jqn.js";import"./useEventCallback-BgjDHyqs.js";import"./SkeletonBar-Bgte_PC1.js";import"./LoadingCell-DnEJk0Y4.js";import"./ColumnConfigDialog-BvyUY4WH.js";import"./DraggableList-BT6aMXQZ.js";import"./search-B8OuVE4x.js";import"./Input-CHaXSXBK.js";import"./useControlled-D944oDES.js";import"./isEqual-55QXIRK5.js";import"./isObject-D2BEkhGb.js";import"./Button-DIC9pYqS.js";import"./ActionButton-CpLSqin4.js";import"./Checkbox-DV1LOGil.js";import"./useValueChanged-CLYrEhb1.js";import"./CollapsiblePanel-Bzz-IIYb.js";import"./MultiColumnSortDialog-CGRFT1qc.js";import"./MenuTrigger-Dp_AIT2-.js";import"./CompositeItem-BB7BEcYe.js";import"./ToolbarRootContext-BUhsl4O4.js";import"./getDisabledMountTransitionStyles-C6nqMOWm.js";import"./getPseudoElementBounds-nprKqVc_.js";import"./chevron-down-Ca7o4DzB.js";import"./index-BT-0esWW.js";import"./error-2D9zNcfs.js";import"./BaseCbacBanner-DO_LeAD3.js";import"./makeExternalStore-BRKvb-bN.js";import"./Tooltip-BwJ5zswW.js";import"./PopoverPopup-Biygt9Xg.js";import"./toNumber-AisZokn0.js";import"./useOsdkClient-BvQbHpa2.js";import"./tick-jOYZxFh9.js";import"./DropdownField-f5HIQCcv.js";import"./withOsdkMetrics-3Zji6GBR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

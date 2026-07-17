import{f as p,j as e}from"./iframe-DCnfJfDX.js";import{O as i}from"./object-table-g9ZK89Qf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CnwPFSqV.js";import"./index-CK4tPmIq.js";import"./Dialog-CyWT6P_-.js";import"./cross-BWPxU8HK.js";import"./svgIconContainer-lpidV9d0.js";import"./useBaseUiId-CvJYpspQ.js";import"./InternalBackdrop-DIRV51CA.js";import"./composite-BrPWYwNS.js";import"./index-Bj8DxCft.js";import"./index-BRy1z15N.js";import"./index-CfIWsSs2.js";import"./useEventCallback-CGMVGT0k.js";import"./SkeletonBar-uiLHb5qF.js";import"./LoadingCell-CUM70vr8.js";import"./ColumnConfigDialog-v0T5x9Uh.js";import"./DraggableList-1uGE92oG.js";import"./search-DhuNCp0b.js";import"./Input-CKBBm_fB.js";import"./useControlled-CJV_KiK_.js";import"./isEqual-CzCB9fgH.js";import"./isObject-Bdg83h5t.js";import"./Button-BzOQGWgV.js";import"./ActionButton-DJ2SDKCb.js";import"./Checkbox-BqtIOsoQ.js";import"./useValueChanged-CJUCrNMy.js";import"./CollapsiblePanel-WVxs6_T2.js";import"./MultiColumnSortDialog-sf81l5Vf.js";import"./MenuTrigger-BIrDSfb0.js";import"./CompositeItem-DFiM2dDA.js";import"./ToolbarRootContext-DoDafLBS.js";import"./getDisabledMountTransitionStyles-B5OWSx1X.js";import"./getPseudoElementBounds-D9tCNBkJ.js";import"./chevron-down-B-HVMT16.js";import"./index-COs5bPTu.js";import"./error-GpWhiuFP.js";import"./BaseCbacBanner-CVgtMvbb.js";import"./makeExternalStore-CYycOKz0.js";import"./Tooltip-NdcYc4ky.js";import"./PopoverPopup-B42jhifp.js";import"./toNumber-DqZzMfsx.js";import"./useOsdkClient-Cm_i7PjY.js";import"./tick-D4Wr0uoM.js";import"./DropdownField-BsS1tcua.js";import"./withOsdkMetrics-C30Mp5sE.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

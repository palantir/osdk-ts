import{f as p,j as e}from"./iframe-BLv43k9J.js";import{O as i}from"./object-table-CfqzNlg3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWK7XSWt.js";import"./Table-Cd-K4oo0.js";import"./index-DnJ2XWrc.js";import"./Dialog-_2cjytIi.js";import"./cross-DZXT4_BE.js";import"./svgIconContainer-lFjoNcIE.js";import"./useBaseUiId-CsF7lQng.js";import"./InternalBackdrop-CvobybXb.js";import"./composite-Vd-yFJr-.js";import"./index-DH-aFVg8.js";import"./index-DBEuXQAb.js";import"./index-DFDkrfgO.js";import"./useEventCallback-YEBD5x35.js";import"./SkeletonBar-D_bW7dyd.js";import"./LoadingCell-CRtzj3qs.js";import"./ColumnConfigDialog-DyjLMgrD.js";import"./DraggableList-Dq696kRu.js";import"./search-BWAauGWf.js";import"./Input-H0U0jFqR.js";import"./useControlled-B_Pv1aNz.js";import"./Button-DoM6qM8k.js";import"./small-cross-BcoMLS_p.js";import"./ActionButton-CJ4K9Met.js";import"./Checkbox-DNXGCy1w.js";import"./useValueChanged-ChySQNHi.js";import"./CollapsiblePanel-BiT66lzW.js";import"./MultiColumnSortDialog-CsfDm5BD.js";import"./MenuTrigger-CgS7ClOi.js";import"./CompositeItem-NoKSjGCV.js";import"./ToolbarRootContext-iQjixVp7.js";import"./getDisabledMountTransitionStyles-y1SnP05P.js";import"./getPseudoElementBounds-91yw0TMr.js";import"./chevron-down-ZtIbBqb_.js";import"./index-C3haW_Xn.js";import"./error-DcpnTrTJ.js";import"./BaseCbacBanner-CJR8Hsvn.js";import"./makeExternalStore-DEk6s8Wu.js";import"./Tooltip-9IRQ37U3.js";import"./PopoverPopup-CdXttUjH.js";import"./debounce-B4MZBVPv.js";import"./useOsdkClient-nxHTLk5y.js";import"./tick-Cc0iQIqY.js";import"./DropdownField-BRIST8Bj.js";import"./isEqual-DIZ2BKPq.js";import"./withOsdkMetrics-Dp2Ae3-Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-DxvjiuoG.js";import{O as i}from"./object-table-C1rIg07t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2Cdctxvp.js";import"./Table-Bt7I-9fh.js";import"./index-D2DXMnPC.js";import"./Dialog-D8iGCXY0.js";import"./cross-CU5iUeZK.js";import"./svgIconContainer-Bc-LX5w1.js";import"./useBaseUiId-i2ghUAO7.js";import"./InternalBackdrop-CF51yINN.js";import"./composite-MpnK6H_E.js";import"./index-DN7VKkaP.js";import"./index-CgTiDnZY.js";import"./index-DT-Ax1H_.js";import"./useEventCallback-DPD1XA1q.js";import"./SkeletonBar-ByvRbgLN.js";import"./LoadingCell-DH0nmNKa.js";import"./ColumnConfigDialog-DCRof0cd.js";import"./DraggableList-o0x5Lz3i.js";import"./search-fJEePfyI.js";import"./Input-B0kS4IYW.js";import"./useControlled-D-Xx0mSD.js";import"./Button-C-PpSW9Y.js";import"./small-cross-BlyD_TgH.js";import"./ActionButton-8gADSdhA.js";import"./Checkbox-Dk9uVSa8.js";import"./useValueChanged-CApWWG6C.js";import"./CollapsiblePanel-Jf-2Om3A.js";import"./MultiColumnSortDialog-Bzb2juOk.js";import"./MenuTrigger-tMIluLVa.js";import"./CompositeItem-CRP27kpk.js";import"./ToolbarRootContext-DuzuuZ_P.js";import"./getDisabledMountTransitionStyles-O_Za4iz6.js";import"./getPseudoElementBounds-2CPKLsDC.js";import"./chevron-down-QZl6FCPt.js";import"./index-DzU4p4MN.js";import"./error-6Ostu_bN.js";import"./BaseCbacBanner-BSrTd76m.js";import"./makeExternalStore-BFeJ6DMi.js";import"./Tooltip-DK3UmKno.js";import"./PopoverPopup-D-UXvPmv.js";import"./debounce-cAzSpEOp.js";import"./useOsdkClient-BL3DQAGe.js";import"./tick-6ZyvJRYq.js";import"./DropdownField-Bj3DtAmp.js";import"./isEqual-BZ4w7fHr.js";import"./withOsdkMetrics-Vqy1EVn8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

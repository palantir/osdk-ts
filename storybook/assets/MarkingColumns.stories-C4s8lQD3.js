import{f as p,j as e}from"./iframe-431E4LQg.js";import{O as i}from"./object-table-dPGcdVPh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BWpivP1v.js";import"./index-BbWCzhmW.js";import"./Dialog-t_1XK8Zx.js";import"./cross-BpRFgWFZ.js";import"./svgIconContainer-CV2TKJDI.js";import"./useBaseUiId-PrWN03i5.js";import"./InternalBackdrop-C20WJJcT.js";import"./composite-DF9yjivc.js";import"./index-DVf7JyOD.js";import"./index-DPQeQcQk.js";import"./index-zToJB9eW.js";import"./useEventCallback-mmCmp6GS.js";import"./SkeletonBar-CnxFqsDt.js";import"./LoadingCell-B41IYy0N.js";import"./ColumnConfigDialog-ramoj-HC.js";import"./DraggableList-D714YOMH.js";import"./search-D9nf6d3V.js";import"./Input-DR9taV_j.js";import"./useControlled-M9mWr4jz.js";import"./isEqual-Bt2mz_A2.js";import"./isObject-BT_9R7CO.js";import"./Button-DQim2McI.js";import"./ActionButton-BpX1YI-D.js";import"./Checkbox-Zhrb63ez.js";import"./useValueChanged-XFoHlAeQ.js";import"./CollapsiblePanel-DK1pS9nS.js";import"./MultiColumnSortDialog-BgDhXipL.js";import"./MenuTrigger-Mes3dX_c.js";import"./CompositeItem-Bx4DSMlZ.js";import"./ToolbarRootContext-Dar9nRMQ.js";import"./getDisabledMountTransitionStyles-B4qWDZrz.js";import"./getPseudoElementBounds-DnBd_onX.js";import"./chevron-down-aSGYZFUK.js";import"./index-BvAj92lD.js";import"./error-C_C4jw6J.js";import"./BaseCbacBanner-BYVkt7RO.js";import"./makeExternalStore-D34wlhpf.js";import"./Tooltip-DE2xFsIG.js";import"./PopoverPopup-661pYevp.js";import"./toNumber-DD6_Axav.js";import"./useOsdkClient-BQsPso7c.js";import"./tick-PwUMxNNd.js";import"./DropdownField-D5zPM2-4.js";import"./withOsdkMetrics-BRYSsTVO.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

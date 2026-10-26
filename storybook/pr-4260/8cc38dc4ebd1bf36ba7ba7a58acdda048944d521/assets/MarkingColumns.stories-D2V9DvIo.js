import{f as p,j as e}from"./iframe-HJ0Gtc-x.js";import{O as i}from"./object-table-BrtVywDY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOUoT_Gy.js";import"./Table-DZYPZAtB.js";import"./index-211_BqLo.js";import"./Dialog-CPQRVis-.js";import"./cross-ChjkGLAA.js";import"./svgIconContainer-BOUC7MPM.js";import"./useBaseUiId-CeZXZ9Z0.js";import"./InternalBackdrop-Ds4oR6Ed.js";import"./composite-CuUXCjDd.js";import"./index-CAQybw0C.js";import"./index-BPe5620H.js";import"./index-BhSWDlLz.js";import"./useEventCallback-CBE-X_q_.js";import"./SkeletonBar-BJ8asOzR.js";import"./LoadingCell-DC5Q3UnN.js";import"./ColumnConfigDialog-DzvX6v-V.js";import"./DraggableList-B4Hv6fvF.js";import"./search-BjFqXd51.js";import"./Input-BRC4lGnf.js";import"./useControlled-C74o2pv-.js";import"./Button-Cg7ItP1u.js";import"./small-cross-Bhi2-tHH.js";import"./ActionButton-B88YLnLq.js";import"./Checkbox-YM35Zgrv.js";import"./useValueChanged-l1kass9c.js";import"./CollapsiblePanel-B3ADmTiC.js";import"./MultiColumnSortDialog-C9w02LjT.js";import"./MenuTrigger-4LBwiAxB.js";import"./CompositeItem-CHrD2JLR.js";import"./ToolbarRootContext-Cec3nuK8.js";import"./getDisabledMountTransitionStyles-BazR3s1k.js";import"./getPseudoElementBounds-Cf3JM-Dw.js";import"./chevron-down-Db91ZRmD.js";import"./index-BbA9vrwp.js";import"./error-BQ1AWTRy.js";import"./BaseCbacBanner-CUdfbKKq.js";import"./makeExternalStore-AnzMBZSn.js";import"./Tooltip-D9CYaD7B.js";import"./PopoverPopup-CCXUh3Ez.js";import"./debounce-B7uP-EKg.js";import"./useOsdkClient-CoXY6Vlt.js";import"./tick-CYuRXF5J.js";import"./DropdownField-hZtNo6MG.js";import"./isEqual-DSQoh2h8.js";import"./withOsdkMetrics-DmM4mVY6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

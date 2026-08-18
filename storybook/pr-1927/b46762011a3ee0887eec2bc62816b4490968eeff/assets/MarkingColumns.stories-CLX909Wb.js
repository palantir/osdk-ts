import{f as p,j as e}from"./iframe-BOYw5zy-.js";import{O as i}from"./object-table-D81tTWvf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rlM1gbkG.js";import"./Table-DL2T0EZB.js";import"./index-BiLXe7b8.js";import"./Dialog-DIZILVPE.js";import"./cross-CsFY0Vd9.js";import"./svgIconContainer-DR1S8Glm.js";import"./useBaseUiId-BaQZ9H47.js";import"./InternalBackdrop-jHkma8F_.js";import"./composite-B4RYJvOx.js";import"./index-DJ2EryKw.js";import"./index-0lKohxv1.js";import"./index-iucmux4F.js";import"./useEventCallback-2k-8oajA.js";import"./SkeletonBar-CGMO35AQ.js";import"./LoadingCell-CmuJvP6e.js";import"./ColumnConfigDialog-BS8J0jq7.js";import"./DraggableList-DvXNu-Bu.js";import"./search-BTWV523N.js";import"./Input-D2kKGhXI.js";import"./useControlled-jWAlfo7U.js";import"./Button-WZTUEUss.js";import"./small-cross-Bl3dZfTj.js";import"./ActionButton-BqxdywPW.js";import"./Checkbox-CqZpR2LE.js";import"./useValueChanged-DibL0JTX.js";import"./CollapsiblePanel-C3WjnvDq.js";import"./MultiColumnSortDialog-BHScrzXj.js";import"./MenuTrigger-DTKkTg9R.js";import"./CompositeItem-CFBGvBu5.js";import"./ToolbarRootContext-po-fYSto.js";import"./getDisabledMountTransitionStyles-BgyDuN12.js";import"./getPseudoElementBounds-lvyQN2rY.js";import"./chevron-down-D_OtGuxk.js";import"./index-BKNNKL9I.js";import"./error-1JPgoJzQ.js";import"./BaseCbacBanner-CkMD_K2_.js";import"./makeExternalStore-BH853qpO.js";import"./Tooltip-D-uoAdky.js";import"./PopoverPopup-DO5EffCW.js";import"./debounce-DDF3v6y6.js";import"./useOsdkClient-r4YoKJoo.js";import"./tick-DAhMGnUy.js";import"./DropdownField-cmZfnDUJ.js";import"./isEqual-CU0W-K1Y.js";import"./withOsdkMetrics-BaHbUuYM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

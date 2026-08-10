import{f as p,j as e}from"./iframe-BBtjza0D.js";import{O as i}from"./object-table-VAgW1ltd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DIpLrdyg.js";import"./Table-BEnfOoEp.js";import"./index-B5Ib5NgX.js";import"./Dialog-CCUdZMbo.js";import"./cross-BAgiJhuh.js";import"./svgIconContainer-Cv3Whexl.js";import"./useBaseUiId-HwKRTBOZ.js";import"./InternalBackdrop-BBv82JT6.js";import"./composite-BoMOOGfe.js";import"./index-CzUdZzH9.js";import"./index-z3NWRD_P.js";import"./index-DY4mmY1u.js";import"./useEventCallback-C-6kmm7l.js";import"./SkeletonBar-DDTcX3hN.js";import"./LoadingCell-7hlIoA0q.js";import"./ColumnConfigDialog-BaW5HGmi.js";import"./DraggableList-GBg65Pa-.js";import"./search-DOUHr1do.js";import"./Input-CLtZs9ea.js";import"./useControlled-n1nITqfY.js";import"./isEqual-DRbQ_qQ8.js";import"./isObject-CRoSQNk8.js";import"./Button-DGjGmxxw.js";import"./ActionButton-dU6sc1YN.js";import"./Checkbox-BvRdeDWJ.js";import"./useValueChanged-B2tPWHcI.js";import"./CollapsiblePanel-BRYkOrMA.js";import"./MultiColumnSortDialog-82xGBFJG.js";import"./MenuTrigger-BalqVSgk.js";import"./CompositeItem-CDPE0MsY.js";import"./ToolbarRootContext-DZE0giUi.js";import"./getDisabledMountTransitionStyles-HfVWLkeP.js";import"./getPseudoElementBounds-DTnaAh_r.js";import"./chevron-down-BM8P94BW.js";import"./index-3zRTNHrM.js";import"./error-WTxwKOKI.js";import"./BaseCbacBanner-DdowyWAq.js";import"./makeExternalStore-DRwq3rQb.js";import"./Tooltip-D56y5GIx.js";import"./PopoverPopup-BqYcoYkA.js";import"./toNumber-DC-nmIwK.js";import"./useOsdkClient-DWO6jtgp.js";import"./tick-jgZPqcGy.js";import"./DropdownField-NYNeufQb.js";import"./withOsdkMetrics-CouVRm-f.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-waVwnd8z.js";import{O as i}from"./object-table-B37noZz5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_DI9v3Ms.js";import"./Table-CDSk3qZZ.js";import"./index-BtVM0B8b.js";import"./Dialog-DZKuwoTT.js";import"./cross--4_91Uz1.js";import"./svgIconContainer-DBjtKq0D.js";import"./useBaseUiId-ngJP8Egc.js";import"./InternalBackdrop-DOwTGEnQ.js";import"./composite-BKQDvwIx.js";import"./index-DlxZMsTY.js";import"./index-DTckBnCv.js";import"./index-DNMK3Dlm.js";import"./useEventCallback-C8zoK5yu.js";import"./SkeletonBar-AtcBFmYO.js";import"./LoadingCell-JchLfttt.js";import"./ColumnConfigDialog-DuT4g_JM.js";import"./DraggableList-FHTXDZWd.js";import"./search-gNfwsCxG.js";import"./Input-D9kz7Dq-.js";import"./useControlled-DTkfeOVI.js";import"./isEqual-ChETJcVC.js";import"./isObject-DuQN6dR2.js";import"./Button-D0ROykH0.js";import"./ActionButton-CjDV9J7b.js";import"./Checkbox-DoRZtO1O.js";import"./useValueChanged-BaU65kcb.js";import"./CollapsiblePanel-C2wk_l-C.js";import"./MultiColumnSortDialog-DaTetqcY.js";import"./MenuTrigger-CSIvfVEf.js";import"./CompositeItem-EoJb-xq2.js";import"./ToolbarRootContext-D1H6jriz.js";import"./getDisabledMountTransitionStyles-D34L6rsT.js";import"./getPseudoElementBounds-FnIT-7_p.js";import"./chevron-down-y5ucr_FJ.js";import"./index-BznGz8cd.js";import"./error-BD6fdJql.js";import"./BaseCbacBanner-D9Sq2YFk.js";import"./makeExternalStore-Bu7BQiVo.js";import"./Tooltip-CtxoOBmL.js";import"./PopoverPopup-B4gBojUt.js";import"./toNumber-DrXt2dy_.js";import"./useOsdkClient-XcxJ5BHl.js";import"./tick-CUiRHY_y.js";import"./DropdownField-DctZTxob.js";import"./withOsdkMetrics-Cy2NuPJb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

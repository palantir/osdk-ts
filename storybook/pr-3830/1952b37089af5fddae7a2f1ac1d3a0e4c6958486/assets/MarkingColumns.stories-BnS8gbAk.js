import{f as p,j as e}from"./iframe-4oHGkuTU.js";import{O as i}from"./object-table-ChWef5YK.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CaPHuCn3.js";import"./Table-DjySsBqf.js";import"./index-kQMuiEEZ.js";import"./Dialog-BwJ3bvLD.js";import"./cross-CS-E3Jqr.js";import"./svgIconContainer-BYtzLwSJ.js";import"./useBaseUiId-L69EryzD.js";import"./InternalBackdrop-DLQ-XQ1Q.js";import"./composite-DvY8KKq7.js";import"./index-CdFiVlz_.js";import"./index-MlSSfkvS.js";import"./index-hJLvGUeE.js";import"./useEventCallback-B3dipcxV.js";import"./SkeletonBar-3byQ7UIl.js";import"./LoadingCell-CrrCVNnE.js";import"./ColumnConfigDialog-BdR0qbLi.js";import"./DraggableList-SUPZ4Dlf.js";import"./search-CzC2mfci.js";import"./Input-CMGw5uoM.js";import"./useControlled-DqhxuUIS.js";import"./isEqual-Bt8_Qt01.js";import"./isObject-3f4cHVEZ.js";import"./Button-DuiD40L5.js";import"./ActionButton-B0hzXAbp.js";import"./Checkbox-Bgc8LYUw.js";import"./useValueChanged-D4XGILHx.js";import"./CollapsiblePanel-BF1Z7bkI.js";import"./MultiColumnSortDialog-TWdhu7PG.js";import"./MenuTrigger-BeH_kL2c.js";import"./CompositeItem-Bws-ThTH.js";import"./ToolbarRootContext-Dnje_Y91.js";import"./getDisabledMountTransitionStyles-XzcSIywQ.js";import"./getPseudoElementBounds-DYKFGKba.js";import"./chevron-down-BAfkw_KU.js";import"./index-BCA2Tmmy.js";import"./error-XGL3A7TA.js";import"./BaseCbacBanner-B9E0Bt9v.js";import"./makeExternalStore-DF89X3xe.js";import"./Tooltip-KVrRIRvv.js";import"./PopoverPopup-BUWPqtBC.js";import"./toNumber-DRlo2dDs.js";import"./useOsdkClient-MPynvfJk.js";import"./tick-CoWZRvKt.js";import"./DropdownField-Bqc45FPs.js";import"./withOsdkMetrics-C3D8HdW9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

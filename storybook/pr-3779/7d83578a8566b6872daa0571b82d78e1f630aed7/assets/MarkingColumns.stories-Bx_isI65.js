import{f as p,j as e}from"./iframe-CVbJrMx7.js";import{O as i}from"./object-table-Bcho5ZdX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bi2CkPaH.js";import"./Table-Dgj-KEc-.js";import"./index-4zqcjDaD.js";import"./Dialog-Ctn42VeV.js";import"./cross-CMD59SEE.js";import"./svgIconContainer-CSuEqcx2.js";import"./useBaseUiId-6l5ZMBvp.js";import"./InternalBackdrop-D0LdYj0Q.js";import"./composite-DU8HRqMQ.js";import"./index-ByBvz6yB.js";import"./index-BBjaT9-B.js";import"./index-Bvv2KJcj.js";import"./useEventCallback-DnwhgWiF.js";import"./SkeletonBar-vVakX1FI.js";import"./LoadingCell-BJeluyL9.js";import"./ColumnConfigDialog-B8n0OJ5R.js";import"./DraggableList-DAQv2E1C.js";import"./search-BIKIgIOT.js";import"./Input-CCWoJTpA.js";import"./useControlled-BjiYNtSn.js";import"./isEqual-DBIrGstF.js";import"./isObject-DyOuyG5A.js";import"./Button-BRR8MBDs.js";import"./ActionButton-JTtsLIS3.js";import"./Checkbox-DDEE0C56.js";import"./useValueChanged-DZlo1eLL.js";import"./CollapsiblePanel-C6pZJrt2.js";import"./MultiColumnSortDialog-BDVS65V3.js";import"./MenuTrigger-CCHLTuVP.js";import"./CompositeItem-DgkAeX91.js";import"./ToolbarRootContext-BQ1Os6dU.js";import"./getDisabledMountTransitionStyles-DXIS3a3T.js";import"./getPseudoElementBounds-CNmedg3f.js";import"./chevron-down-B7HicDSz.js";import"./index-DNvASVW6.js";import"./error-CnlAvsn-.js";import"./BaseCbacBanner-DQCr1LoZ.js";import"./makeExternalStore-vLSrVJKb.js";import"./Tooltip-BZlE1UbS.js";import"./PopoverPopup-16X7FiIT.js";import"./toNumber-DTHC56UF.js";import"./useOsdkClient-RliEKiAs.js";import"./tick-DNFy_FvK.js";import"./DropdownField-D0P5-rPf.js";import"./withOsdkMetrics-DuX2Gvrb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-C7GOuxD1.js";import{O as i}from"./object-table-dWlD71lL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-cLq0tmXV.js";import"./Table-L0bmwFCN.js";import"./index-DBBBWmqo.js";import"./Dialog-BDIg23NE.js";import"./cross-CeilH9rC.js";import"./svgIconContainer-C5oTgJel.js";import"./useBaseUiId-BenimXYg.js";import"./InternalBackdrop-BVf0vh6D.js";import"./composite-Cgb7pd84.js";import"./index-CQ4MzVYN.js";import"./index-DuOry3-s.js";import"./index-CS8Y0uId.js";import"./useEventCallback-BjL9jj3Y.js";import"./SkeletonBar-T4H5mM_R.js";import"./LoadingCell-BjFAbchK.js";import"./ColumnConfigDialog-I-C9Eoid.js";import"./DraggableList-D5qaZpJa.js";import"./search-B3SFcxMO.js";import"./Input-D4NdRTVJ.js";import"./useControlled-B_f3t71o.js";import"./Button-BUb3i5ek.js";import"./small-cross-DxtvnSNv.js";import"./ActionButton-nA6tqUpX.js";import"./Checkbox-Cz1MnAyf.js";import"./useValueChanged-BrLcnIBL.js";import"./CollapsiblePanel-C8GrEU9w.js";import"./MultiColumnSortDialog-DZH5EtZC.js";import"./MenuTrigger-h0mNM3q6.js";import"./CompositeItem-CyvxmxVc.js";import"./ToolbarRootContext-BdzdDLJF.js";import"./getDisabledMountTransitionStyles-9hFn6TYo.js";import"./getPseudoElementBounds-DmIzNuzx.js";import"./chevron-down-D0zt0lGj.js";import"./index-DJdnGM3o.js";import"./error-Gwb1RVKo.js";import"./BaseCbacBanner-DnINnSdh.js";import"./makeExternalStore-Bn6Cuzy6.js";import"./Tooltip-CPPwKixL.js";import"./PopoverPopup-CXEQhiRY.js";import"./debounce-Bny3E4j5.js";import"./useOsdkClient-DfGQp-uN.js";import"./tick-CQmS5E0-.js";import"./DropdownField-hrh1cG0I.js";import"./isEqual-ic_Rm2u_.js";import"./withOsdkMetrics-BaeX4vAH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

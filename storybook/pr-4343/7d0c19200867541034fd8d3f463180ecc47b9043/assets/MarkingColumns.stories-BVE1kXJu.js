import{f as p,j as e}from"./iframe-DnJOFPSX.js";import{O as i}from"./object-table-gFqlJS5g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DE0LB-In.js";import"./Table-BJcfBT_4.js";import"./index-BsrGUZmH.js";import"./Dialog--q8TWEco.js";import"./cross-RxTC7yT1.js";import"./svgIconContainer-C9e6psM5.js";import"./useBaseUiId-BmOtxMBQ.js";import"./InternalBackdrop-7uH3PXR7.js";import"./composite-ActYTO9Q.js";import"./index-C47JnOK2.js";import"./index-CN_nZvI2.js";import"./index-DQIivcku.js";import"./useEventCallback-C_WDvZGp.js";import"./SkeletonBar-BGTPHBC_.js";import"./LoadingCell-DJghmWTk.js";import"./ColumnConfigDialog-BJKPTxxk.js";import"./DraggableList-DiNHAcJn.js";import"./search-1uNTCuXG.js";import"./Input-DAAzhLOd.js";import"./useControlled-LZY0zNEU.js";import"./Button-cZ9KvtCU.js";import"./small-cross--HeoX71E.js";import"./ActionButton-CLFbgSEP.js";import"./Checkbox-9sBFzHkG.js";import"./useValueChanged-Dwzdf7-z.js";import"./CollapsiblePanel-ZSBWQMSx.js";import"./MultiColumnSortDialog-DrXRIxJ_.js";import"./MenuTrigger-C-pCHk80.js";import"./CompositeItem-C0xu2aal.js";import"./ToolbarRootContext-C0ive6C5.js";import"./getDisabledMountTransitionStyles-Dp_4ImaZ.js";import"./getPseudoElementBounds-CwjzgNQM.js";import"./chevron-down-DnnfJ5YY.js";import"./index-Dz6yRx1S.js";import"./error-BL2HC2Sp.js";import"./BaseCbacBanner-Dfw4KXDB.js";import"./makeExternalStore-CKgPh2OO.js";import"./Tooltip-DFNnZgP9.js";import"./PopoverPopup-DM0BfveY.js";import"./debounce-DbuR1tvL.js";import"./useOsdkClient-B002ZQ1y.js";import"./tick-DQ7wMG8T.js";import"./DropdownField-FHfvzp38.js";import"./isEqual-DzKwZRaR.js";import"./withOsdkMetrics-DbwiXd_V.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

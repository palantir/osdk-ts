import{f as p,j as e}from"./iframe-sxtnZ__3.js";import{O as i}from"./object-table-4tt7hdOi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DN2WWHpq.js";import"./Table-BGPShlqn.js";import"./index-B43ZU6C6.js";import"./Dialog-CXmBI3Rr.js";import"./cross-59RLUben.js";import"./svgIconContainer-p2RMTI7a.js";import"./useBaseUiId-Ba5m3KpF.js";import"./InternalBackdrop-DRPW9LZb.js";import"./composite-C8kR_XfL.js";import"./index-BFg6-CgA.js";import"./index-CgOTndjm.js";import"./index-zNfO2gJL.js";import"./useEventCallback-D5KlyZoa.js";import"./SkeletonBar-CK-yRV8p.js";import"./LoadingCell-1ChU6nL2.js";import"./ColumnConfigDialog-DFBJLtnX.js";import"./DraggableList-D00Tg26d.js";import"./search-t4p9zjVy.js";import"./Input-BXAWaOKi.js";import"./useControlled-qu9E_ZvC.js";import"./Button-BMtY7X7F.js";import"./small-cross-ZSOiCyZ5.js";import"./ActionButton-D86xvSSL.js";import"./Checkbox-B-gPcLSG.js";import"./useValueChanged-C8cRSBzx.js";import"./CollapsiblePanel-BegV3C45.js";import"./MultiColumnSortDialog-RBoqswCG.js";import"./MenuTrigger-Ba6gU_CA.js";import"./CompositeItem-CQpfGOEN.js";import"./ToolbarRootContext-C88ng33h.js";import"./getDisabledMountTransitionStyles-BqiNfuke.js";import"./getPseudoElementBounds-BTObdfHz.js";import"./chevron-down-Dv8O8W9l.js";import"./index-DmmZjvsT.js";import"./error-B8i5ABXk.js";import"./BaseCbacBanner-CyF9HA0J.js";import"./makeExternalStore-zzt6bEAW.js";import"./Tooltip-ByAr14nR.js";import"./isObject-Bh9lnnOC.js";import"./debounce-th_H1hxT.js";import"./useOsdkClient-CFrWyuCF.js";import"./tick-Ogtike7m.js";import"./DropdownField-CtO5bKXX.js";import"./isEqual-C9IjsvIh.js";import"./_baseIsEqual-BHBxrEn3.js";import"./withOsdkMetrics-CQhdGkJo.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

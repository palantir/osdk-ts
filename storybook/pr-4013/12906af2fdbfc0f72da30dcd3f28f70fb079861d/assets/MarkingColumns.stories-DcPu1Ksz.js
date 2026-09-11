import{f as p,j as e}from"./iframe-CmbQZ_H0.js";import{O as i}from"./object-table-B5qpanxf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ecu5FnuN.js";import"./Table-CRH1JdfM.js";import"./index-QKQySa8F.js";import"./Dialog-BIlR81C_.js";import"./cross-6T8h1X1A.js";import"./svgIconContainer-CUFAWoTA.js";import"./useBaseUiId-M00ioKA7.js";import"./InternalBackdrop-CpiUjw4e.js";import"./composite-Cb2is0DJ.js";import"./index-DlNrqWid.js";import"./index-CnDEnPo5.js";import"./index-DCPZZ569.js";import"./useEventCallback-DpC9eqeR.js";import"./SkeletonBar-BXbXBzB8.js";import"./LoadingCell-u_w18lMh.js";import"./ColumnConfigDialog-CC4LTt-u.js";import"./DraggableList-BywbQPU9.js";import"./search-CVqyjRk8.js";import"./Input-B5NiOwJX.js";import"./useControlled-CF22MFs5.js";import"./Button-CDF-lBwk.js";import"./small-cross-BIkNXmJL.js";import"./ActionButton-BK-luMEu.js";import"./Checkbox-DV7yfsNm.js";import"./useValueChanged-sq-Bi9MD.js";import"./CollapsiblePanel-COC1FjJY.js";import"./MultiColumnSortDialog-CLzqvvaJ.js";import"./MenuTrigger-DoYNc0Qv.js";import"./CompositeItem-ByYHjWLD.js";import"./ToolbarRootContext-B1xhX1z_.js";import"./getDisabledMountTransitionStyles-nKH94PKf.js";import"./getPseudoElementBounds-1u2TW9bY.js";import"./chevron-down-BhlVnWsI.js";import"./index-B3o3BLIH.js";import"./error-Beqgpujq.js";import"./BaseCbacBanner-BOiuNJMc.js";import"./makeExternalStore-BB3Iwwej.js";import"./Tooltip-DwJa0Vj6.js";import"./PopoverPopup-Do5Thirt.js";import"./debounce-CqRFkPfJ.js";import"./useOsdkClient-xLtiSbvO.js";import"./tick-C2UWJ6pc.js";import"./DropdownField-B46cTE2Y.js";import"./isEqual-DV0aS7dm.js";import"./withOsdkMetrics-DoacziBi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

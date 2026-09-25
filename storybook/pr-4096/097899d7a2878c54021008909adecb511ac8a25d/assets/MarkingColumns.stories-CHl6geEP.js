import{f as p,j as e}from"./iframe-BDbu9q2A.js";import{O as i}from"./object-table-r5KIudPw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6UvTfT_.js";import"./Table-5Yml5Xs2.js";import"./index-DEdyH3XD.js";import"./Dialog--obHru8z.js";import"./cross-Bo4wpdXT.js";import"./svgIconContainer-BgjPZfOH.js";import"./useBaseUiId-CtmE4PNK.js";import"./InternalBackdrop-Dy4GWDNn.js";import"./composite-qafLk_f6.js";import"./index-pcLxGNcq.js";import"./index-D3cIaVh4.js";import"./index-xTMwd6_8.js";import"./useEventCallback-DUE__rea.js";import"./SkeletonBar-M79YPoFw.js";import"./LoadingCell-Yqu47OmZ.js";import"./ColumnConfigDialog-tZTWQZOk.js";import"./DraggableList-CZaqx5-r.js";import"./search-0NZlkEeX.js";import"./Input-D0XLj4En.js";import"./useControlled-BgF6R6qa.js";import"./Button-_DMppLDt.js";import"./small-cross-ByEHRRHU.js";import"./ActionButton-C9OU-BMe.js";import"./Checkbox-C0Ae0ETc.js";import"./useValueChanged-CHtKwLX1.js";import"./CollapsiblePanel-DZrk-vCV.js";import"./MultiColumnSortDialog-hYhH0G21.js";import"./MenuTrigger-DwKmIuV2.js";import"./CompositeItem-C6O1ODqo.js";import"./ToolbarRootContext-BVuL7AT2.js";import"./getDisabledMountTransitionStyles-B6rpAzbi.js";import"./getPseudoElementBounds-hadpdZ34.js";import"./chevron-down-CbFUQfJ_.js";import"./index-BlDxMK-s.js";import"./error-fH6ihPoO.js";import"./BaseCbacBanner-QJ9nuAqq.js";import"./makeExternalStore-BESDrPLk.js";import"./Tooltip-lyyHm0PB.js";import"./PopoverPopup--CBugPnx.js";import"./debounce-C0l7oIGH.js";import"./useOsdkClient-BZtGer6H.js";import"./tick-pXXOgXsW.js";import"./DropdownField-DE_NmpmO.js";import"./isEqual-CXEdjpTk.js";import"./withOsdkMetrics-B5onp4Cc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

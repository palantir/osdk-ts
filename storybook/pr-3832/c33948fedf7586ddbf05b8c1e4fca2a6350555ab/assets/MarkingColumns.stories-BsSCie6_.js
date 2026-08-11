import{f as p,j as e}from"./iframe-DQJhsGVr.js";import{O as i}from"./object-table-BjV_vJjr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYPnNrHf.js";import"./Table-BubZaiGx.js";import"./index-1_EsOKwE.js";import"./Dialog-Bb1l7Kje.js";import"./cross-RNHwHsza.js";import"./svgIconContainer-HMv0MEad.js";import"./useBaseUiId-EuR0djcZ.js";import"./InternalBackdrop-Cs0T4rJ3.js";import"./composite-DvpYcJ4q.js";import"./index-CbwbPLuB.js";import"./index-d5GOwTqG.js";import"./index-DUQBSqzq.js";import"./useEventCallback-DVzfprMv.js";import"./SkeletonBar-CT5sY0Sj.js";import"./LoadingCell-BwmFV4Ps.js";import"./ColumnConfigDialog-BS59tt78.js";import"./DraggableList-dBpIwsbr.js";import"./search-DJW6FQCH.js";import"./Input-DLTHdalW.js";import"./useControlled-CavIZvRH.js";import"./isEqual-B-xwiFzL.js";import"./isObject-DDLvUWU9.js";import"./Button-DoThKF3_.js";import"./ActionButton-Dg9OJBAE.js";import"./Checkbox-C13FyR1l.js";import"./useValueChanged-Bjtcn_OZ.js";import"./CollapsiblePanel-CTL5FTpu.js";import"./MultiColumnSortDialog-BiwLfm0u.js";import"./MenuTrigger-BSrSjDrL.js";import"./CompositeItem-BHa5W7al.js";import"./ToolbarRootContext-DPrCQgAj.js";import"./getDisabledMountTransitionStyles-BXFxCvRe.js";import"./getPseudoElementBounds-YUnfbs-Q.js";import"./chevron-down-Mkun0WwY.js";import"./index-mkeG7rQI.js";import"./error-OGxYpfA4.js";import"./BaseCbacBanner-DllNzV1_.js";import"./makeExternalStore-pYvmGBhQ.js";import"./Tooltip-ClcT_wsL.js";import"./PopoverPopup-Bq1IEmwF.js";import"./toNumber-DQYOTChI.js";import"./useOsdkClient-Dj7AzKP-.js";import"./tick-D8gY6lgy.js";import"./DropdownField-tDuqkBrj.js";import"./withOsdkMetrics-Do5HPYid.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-CMYq_tcz.js";import{O as i}from"./object-table-chC0aMy3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CM9HDmHc.js";import"./Table-HbIDX6wp.js";import"./index-xVeJSQI1.js";import"./Dialog-BVb0pQgK.js";import"./cross-dRI083CA.js";import"./svgIconContainer-exLH2FjZ.js";import"./useBaseUiId-DSFxpXlB.js";import"./InternalBackdrop-BcLUyUm4.js";import"./composite-DiZpwFe_.js";import"./index-BY7tovu0.js";import"./index-BFodXj3S.js";import"./index-CbXc65Z2.js";import"./useEventCallback-Ce6dWKw4.js";import"./SkeletonBar-Tsn6iOqu.js";import"./LoadingCell-CydlYTU4.js";import"./ColumnConfigDialog-jtuM7b8R.js";import"./DraggableList-BYvbYXgI.js";import"./search-QHRMuF2d.js";import"./Input-C2JC1_0u.js";import"./useControlled-Cizv6LhD.js";import"./Button-Cx35rN_X.js";import"./small-cross-DgdOOgoQ.js";import"./ActionButton-L6DUuvD5.js";import"./Checkbox-BHMoxAgM.js";import"./useValueChanged-BCgyiXw4.js";import"./CollapsiblePanel-DQ-gJg9V.js";import"./MultiColumnSortDialog-qD0rIV6_.js";import"./MenuTrigger-BrBgYbtl.js";import"./CompositeItem-zd83RHVO.js";import"./ToolbarRootContext-BkwDgNb_.js";import"./getDisabledMountTransitionStyles-UwTH6edI.js";import"./getPseudoElementBounds-eVkaC__S.js";import"./chevron-down-BNRseUEV.js";import"./index-C0T6zzR8.js";import"./error-BMW1MkdC.js";import"./BaseCbacBanner-pp-M4p2X.js";import"./makeExternalStore-DnxSotUN.js";import"./Tooltip-DibPgXFy.js";import"./PopoverPopup-BZ8d3rO1.js";import"./debounce-BQrMOEs3.js";import"./useOsdkClient-BF6Arrdj.js";import"./tick-BWkBomqM.js";import"./DropdownField-BI-yI3jd.js";import"./isEqual-BJnJYBP9.js";import"./withOsdkMetrics-KpOnxc9_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

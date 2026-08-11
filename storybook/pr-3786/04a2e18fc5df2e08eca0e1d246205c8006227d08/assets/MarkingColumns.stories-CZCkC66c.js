import{f as p,j as e}from"./iframe-DYVamJ0c.js";import{O as i}from"./object-table-DblF4JDE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKQhuHFM.js";import"./Table-DP--Ko5L.js";import"./index-DDVzKPeS.js";import"./Dialog-BdGRGrER.js";import"./cross-ZvvnBvAW.js";import"./svgIconContainer-DDKAKQ5N.js";import"./useBaseUiId-Dp5szWtR.js";import"./InternalBackdrop-Y7EEmORf.js";import"./composite-DvVYIwpT.js";import"./index-CS_faMAq.js";import"./index-4i5nJL9N.js";import"./index-D6PjjnI1.js";import"./useEventCallback-It5AU2GK.js";import"./SkeletonBar-U_6zsVeg.js";import"./LoadingCell-B68td28d.js";import"./ColumnConfigDialog-DjgJXpSK.js";import"./DraggableList-Dzg79a4e.js";import"./search-CNj8TXQm.js";import"./Input-BJ9fIVV-.js";import"./useControlled-rbncU9dQ.js";import"./isEqual-D9FM6jV5.js";import"./isObject-CWjh4YEm.js";import"./Button-B0mGoHRN.js";import"./ActionButton--6p0rxTX.js";import"./Checkbox-qhAqN2iD.js";import"./useValueChanged-BLJdW2rA.js";import"./CollapsiblePanel-CwNM9_AI.js";import"./MultiColumnSortDialog-BR-X1BMR.js";import"./MenuTrigger-B11uQSdh.js";import"./CompositeItem-BBaNk5MK.js";import"./ToolbarRootContext-1-HwXect.js";import"./getDisabledMountTransitionStyles-B41_0Tyr.js";import"./getPseudoElementBounds-BnEX3Sqz.js";import"./chevron-down-CDvyxAm0.js";import"./index-ClMUYth_.js";import"./error-BsbpZONe.js";import"./BaseCbacBanner-BqnpFmEE.js";import"./makeExternalStore-Ci8gWGJ6.js";import"./Tooltip-RCvIwlHR.js";import"./PopoverPopup-jsI3MN-h.js";import"./toNumber-58R2wJ1m.js";import"./useOsdkClient-DZnVKV7U.js";import"./tick-D-N2RUy5.js";import"./DropdownField-5xkyWwwi.js";import"./withOsdkMetrics-DIqDKAks.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

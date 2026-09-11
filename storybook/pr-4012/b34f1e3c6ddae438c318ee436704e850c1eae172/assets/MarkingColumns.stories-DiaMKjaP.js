import{f as p,j as e}from"./iframe-BW9rbZjN.js";import{O as i}from"./object-table-D6uyDopU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_oZNT5AE.js";import"./Table-BoMRUDWK.js";import"./index-qZzwlkOA.js";import"./Dialog-BQ7qEwTW.js";import"./cross-BMKp4c2D.js";import"./svgIconContainer-c8HYcTYH.js";import"./useBaseUiId-bQLFYp4J.js";import"./InternalBackdrop-CKd5MsCE.js";import"./composite-DIc49Li7.js";import"./index-C88Pj_Ew.js";import"./index-CRuyPTCE.js";import"./index-DvSwkwzx.js";import"./useEventCallback-BwkPSbL2.js";import"./SkeletonBar-BlTcRZOI.js";import"./LoadingCell-BWEPztFD.js";import"./ColumnConfigDialog-D4cOUPl1.js";import"./DraggableList-Cjx102Hx.js";import"./search-CKuArl9i.js";import"./Input-DapIOR9y.js";import"./useControlled-C9bKjxUP.js";import"./Button-DXKWCxc8.js";import"./small-cross-DPXcetjy.js";import"./ActionButton-Br5-QwIr.js";import"./Checkbox-I9JLT3mi.js";import"./useValueChanged-5yWlHOsJ.js";import"./CollapsiblePanel-BO030zQL.js";import"./MultiColumnSortDialog-COlh9DSW.js";import"./MenuTrigger-ByyLkC45.js";import"./CompositeItem-CfT9zTJr.js";import"./ToolbarRootContext-tp4wTZqh.js";import"./getDisabledMountTransitionStyles-DuFqv9O7.js";import"./getPseudoElementBounds-cJb6hBmW.js";import"./chevron-down-DnA8hxYU.js";import"./index-DQfloIhJ.js";import"./error-DKZCTWAx.js";import"./BaseCbacBanner-B5oQvseO.js";import"./makeExternalStore-RW-A0j4x.js";import"./Tooltip-DARXcT77.js";import"./PopoverPopup-DZ1vqIll.js";import"./debounce-BijLWZBG.js";import"./useOsdkClient-CY_b6Lwm.js";import"./tick-qItvjZhi.js";import"./DropdownField-BoM_lVwS.js";import"./isEqual-BL5I-1RN.js";import"./withOsdkMetrics-C9bjwSD5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

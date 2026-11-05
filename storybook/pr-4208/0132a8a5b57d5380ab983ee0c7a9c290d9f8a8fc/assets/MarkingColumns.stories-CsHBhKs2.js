import{f as p,j as e}from"./iframe-ReE2Q7yp.js";import{O as i}from"./object-table-MAGjIDR9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7Z9MrKi.js";import"./Table-CopLwwJC.js";import"./index-BewkrVTa.js";import"./Dialog-CZ_JPe82.js";import"./cross-jItXGdNq.js";import"./svgIconContainer-DReIj__U.js";import"./useBaseUiId-D8bMBWWs.js";import"./InternalBackdrop-C14mfAnw.js";import"./composite-BwZods8z.js";import"./index-B0bWJrJS.js";import"./index-gciaynI9.js";import"./index-B-CZhjmL.js";import"./useEventCallback-DSxaVaZ9.js";import"./SkeletonBar-C7A8YeA1.js";import"./LoadingCell-CZSCqk4l.js";import"./ColumnConfigDialog-iWINWIDN.js";import"./DraggableList-DYf_eZ1S.js";import"./search-BhOewJBY.js";import"./Input-B8139ni5.js";import"./useControlled-CiRsQt_l.js";import"./Button-BlxZNp8T.js";import"./small-cross-sxi8v31H.js";import"./ActionButton-BbqGHHOq.js";import"./Checkbox-f-XzpaRv.js";import"./useValueChanged-DIzh1Vve.js";import"./CollapsiblePanel-8t3xxJ8x.js";import"./MultiColumnSortDialog-DbqYgnN8.js";import"./MenuTrigger-5_fkVDIe.js";import"./CompositeItem-CiU9fGHE.js";import"./ToolbarRootContext-Bl5a0QSn.js";import"./getDisabledMountTransitionStyles-rH4RKoLB.js";import"./getPseudoElementBounds-iOtDRySU.js";import"./chevron-down-BzzFswn9.js";import"./index-DFSTGtRN.js";import"./error-CPS8uYGW.js";import"./BaseCbacBanner-CqM5sqJ7.js";import"./makeExternalStore-CzYz1Gie.js";import"./Tooltip-CgjwpZg6.js";import"./PopoverPopup-DfcYj7fK.js";import"./debounce-DXVTweio.js";import"./useOsdkClient-CH1S_bx0.js";import"./tick-D9DVZKih.js";import"./DropdownField-usIkxFYB.js";import"./isEqual-BrODwJu8.js";import"./withOsdkMetrics-CzWROb4n.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

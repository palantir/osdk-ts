import{f as p,j as e}from"./iframe-B4KZUNWb.js";import{O as i}from"./object-table-Ci1c3UDh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ui8H5KaA.js";import"./Table-BCRy3iCw.js";import"./index-DESZZjJb.js";import"./Dialog-Do7D9TXp.js";import"./cross-D6lNZtEd.js";import"./svgIconContainer-CPLrBI81.js";import"./useBaseUiId-DqBZmwDf.js";import"./InternalBackdrop-Du74jqkg.js";import"./composite-kqMgXMmz.js";import"./index-CRzCVguq.js";import"./index-BuRp3NOn.js";import"./index-U4wKfCVv.js";import"./useEventCallback-B7s_WPhy.js";import"./SkeletonBar-CGSSVG4t.js";import"./LoadingCell-BGpZ6WD3.js";import"./ColumnConfigDialog-g8vO-KBG.js";import"./DraggableList-CbycsscA.js";import"./search-B4kRZAFp.js";import"./Input-d873acvu.js";import"./useControlled-DUnmiOhJ.js";import"./Button-B0sQZAH6.js";import"./small-cross-3FFS-2BP.js";import"./ActionButton-jQd9zIQY.js";import"./Checkbox-fRoN73K4.js";import"./useValueChanged-w3RyUsx0.js";import"./CollapsiblePanel-B6Kb1g9F.js";import"./MultiColumnSortDialog-BZ_x3Bcp.js";import"./MenuTrigger-BN7uWxTJ.js";import"./CompositeItem-BeLkJ8RK.js";import"./ToolbarRootContext-DvKJDRkf.js";import"./getDisabledMountTransitionStyles-q8cXRota.js";import"./getPseudoElementBounds-D5Mn0K7G.js";import"./chevron-down-BqCbkmmJ.js";import"./index-B8MTfnNm.js";import"./error-D-IekXva.js";import"./BaseCbacBanner-BL-xmbdR.js";import"./makeExternalStore-FuGpKWwp.js";import"./Tooltip-Dlw9XQHv.js";import"./PopoverPopup-Cqe_G0pW.js";import"./debounce-DtJpUOtB.js";import"./useOsdkClient-DKvjyiDA.js";import"./tick-Y60tUWqi.js";import"./DropdownField-DqTCpZZ-.js";import"./isEqual-B3i1pzS0.js";import"./withOsdkMetrics-DZhR0TNz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

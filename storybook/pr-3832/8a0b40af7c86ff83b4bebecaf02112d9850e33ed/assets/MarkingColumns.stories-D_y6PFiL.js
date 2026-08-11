import{f as p,j as e}from"./iframe-CCe3oj1_.js";import{O as i}from"./object-table-CROb0HRq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFkWM7QD.js";import"./Table-DoIqAcaB.js";import"./index-BPyzy7qu.js";import"./Dialog-BFaMtkwF.js";import"./cross-BDTGYN03.js";import"./svgIconContainer-BcG3A1s1.js";import"./useBaseUiId-DWTWML2t.js";import"./InternalBackdrop-1uHa4FUe.js";import"./composite-DqbFj3tO.js";import"./index-DTGTU5kW.js";import"./index-CkYleNx0.js";import"./index-CQvhHm5l.js";import"./useEventCallback-QjNDkh9X.js";import"./SkeletonBar-BNlO8cb5.js";import"./LoadingCell-D34UfXj6.js";import"./ColumnConfigDialog-aR_PIIpd.js";import"./DraggableList-DrokCpor.js";import"./search-CNcIQLsn.js";import"./Input-B1ejoj9_.js";import"./useControlled-AVWP1zK_.js";import"./isEqual-BwtxOLUF.js";import"./isObject-BSF7yE2W.js";import"./Button-DYv7LQZU.js";import"./ActionButton-BWTIEXpg.js";import"./Checkbox-CjAK5ooC.js";import"./useValueChanged-CLC9UCU3.js";import"./CollapsiblePanel-BP-T8vPY.js";import"./MultiColumnSortDialog-DZt2E2UT.js";import"./MenuTrigger-CMuSifoI.js";import"./CompositeItem-DcCJzpjE.js";import"./ToolbarRootContext-D_9Dq2Dw.js";import"./getDisabledMountTransitionStyles-TfqTWo-i.js";import"./getPseudoElementBounds-DgTPtVsI.js";import"./chevron-down-5Odr2hDD.js";import"./index-DpZ-Ikd6.js";import"./error-gLdyLM8b.js";import"./BaseCbacBanner-CbF4nqNt.js";import"./makeExternalStore-ee2D0j5X.js";import"./Tooltip-C9jv0QeK.js";import"./PopoverPopup-B1NzfUu_.js";import"./toNumber-CAcNYWAx.js";import"./useOsdkClient-Dn8nHjzs.js";import"./tick-qjntkw8T.js";import"./DropdownField-Bdf2R4vw.js";import"./withOsdkMetrics-BE4radvo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

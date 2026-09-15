import{f as p,j as e}from"./iframe-VN1YMwbH.js";import{O as i}from"./object-table-lZxpoCM_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgM3fVqV.js";import"./Table-BD5OenkE.js";import"./index-BQ-hfR18.js";import"./Dialog-C7a3ueT_.js";import"./cross-CRpIa4b8.js";import"./svgIconContainer-BXOSkGjh.js";import"./useBaseUiId-DJ36Kcth.js";import"./InternalBackdrop-BrgOtY4c.js";import"./composite-DEJ-tsuW.js";import"./index-C-8kYW2Y.js";import"./index-CJqO1XSq.js";import"./index-BKRJqYvH.js";import"./useEventCallback-nXdgyEdi.js";import"./SkeletonBar-BGXPo9d8.js";import"./LoadingCell-DHyEQ1wW.js";import"./ColumnConfigDialog-DYyfzMOY.js";import"./DraggableList-DAv0Dm5F.js";import"./search-BLvYvb41.js";import"./Input-CGbGPxHL.js";import"./useControlled-BilpsNEK.js";import"./Button-Cj2Rzj_x.js";import"./small-cross-dIKOYPBo.js";import"./ActionButton-qmmmYuGS.js";import"./Checkbox-CuBCvicT.js";import"./useValueChanged-D-aOQneF.js";import"./CollapsiblePanel-DF51Tb6H.js";import"./MultiColumnSortDialog-BeHYm0oj.js";import"./MenuTrigger-BXL-DwYA.js";import"./CompositeItem-BMVV3PhA.js";import"./ToolbarRootContext--QULbV7a.js";import"./getDisabledMountTransitionStyles-CVnZ4zDW.js";import"./getPseudoElementBounds-CrZB1QbV.js";import"./chevron-down-DrICZ5Jz.js";import"./index-Bu8THvZS.js";import"./error-BSNYyaSK.js";import"./BaseCbacBanner-B8-bK1KU.js";import"./makeExternalStore-Dy4LBBRG.js";import"./Tooltip-CLzQYsh0.js";import"./PopoverPopup--znTKWjy.js";import"./debounce-DR4NOvcQ.js";import"./useOsdkClient-ClOfe-xH.js";import"./tick-6T4uvXq1.js";import"./DropdownField-DPxf8Qq2.js";import"./isEqual-B4TW5YJf.js";import"./withOsdkMetrics-BlQ92REe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

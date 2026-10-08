import{f as p,j as e}from"./iframe-CYRFLlEO.js";import{O as i}from"./object-table-DaNbMdac.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChluBdBb.js";import"./Table-DeorVykX.js";import"./index-DgFaecLv.js";import"./Dialog-C6L85Dhc.js";import"./cross-DBpyyU9C.js";import"./svgIconContainer-DXkF8wrQ.js";import"./useBaseUiId-CT8xqfBr.js";import"./InternalBackdrop-CTPF33qa.js";import"./composite-DBnR4BVO.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./index-C2MDVEGT.js";import"./useEventCallback-BJFvrRyb.js";import"./SkeletonBar-Bq3sXSF2.js";import"./LoadingCell-itgjIH8K.js";import"./ColumnConfigDialog-DbPbP15T.js";import"./DraggableList-BRGnhRIN.js";import"./search-gMbThLhN.js";import"./Input-CemPVcnY.js";import"./useControlled-D5UJw3Fq.js";import"./Button-CGEba4bS.js";import"./small-cross-BXgSEa8S.js";import"./ActionButton-D0Fx6r_2.js";import"./Checkbox-C5DJcaMm.js";import"./useValueChanged-CsL5tjte.js";import"./CollapsiblePanel-D8-L6clc.js";import"./MultiColumnSortDialog-CVgjOhqE.js";import"./MenuTrigger-B4oHyfVO.js";import"./CompositeItem-EG5A4Ctt.js";import"./ToolbarRootContext-DIul4zOr.js";import"./getDisabledMountTransitionStyles-DPyBQpoo.js";import"./getPseudoElementBounds-C_2zFZOn.js";import"./chevron-down-QtZPW63O.js";import"./index-BjdI_b09.js";import"./error-CvsmrG6o.js";import"./BaseCbacBanner-Dz0E0Sve.js";import"./makeExternalStore-B-fBg6wj.js";import"./Tooltip-Dib25ex8.js";import"./PopoverPopup-DotHPyVZ.js";import"./debounce-BWdTtlOi.js";import"./useOsdkClient-BJqJ3t0X.js";import"./tick-BxUNHTte.js";import"./DropdownField-wXZN_aVL.js";import"./isEqual-a93sYdb6.js";import"./withOsdkMetrics-Ihi9z85c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

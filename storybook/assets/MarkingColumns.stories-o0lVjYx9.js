import{f as p,j as e}from"./iframe-BFbL1Gdy.js";import{O as i}from"./object-table-BHlz1Qzb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHk8vu6g.js";import"./index-B-4LJO37.js";import"./Dialog-tRb13ISr.js";import"./cross-CiiI7JQR.js";import"./svgIconContainer-0lXizkcA.js";import"./useBaseUiId-B_dYCIar.js";import"./InternalBackdrop-CgS-H1_5.js";import"./composite-CD4lktG6.js";import"./index-DDIAvSNo.js";import"./index-B-e29tx4.js";import"./index-D8oWUzRK.js";import"./useEventCallback-C9L2xivg.js";import"./SkeletonBar-CaDduvDQ.js";import"./LoadingCell-CT0rQg-P.js";import"./ColumnConfigDialog-C_QfwcY9.js";import"./DraggableList-BKFkVBQK.js";import"./search-C8I8REFJ.js";import"./Input-CYN8k52N.js";import"./useControlled-ToeGQqG-.js";import"./Button-B0F0CQLE.js";import"./small-cross-Cx_rak8E.js";import"./ActionButton-CvItV4wZ.js";import"./Checkbox-BoNO07xy.js";import"./useValueChanged-CGdMW2jm.js";import"./CollapsiblePanel-dt7gQwV1.js";import"./MultiColumnSortDialog-CtqMqDMQ.js";import"./MenuTrigger-CeLKiBYE.js";import"./CompositeItem-Du8ycWHV.js";import"./ToolbarRootContext-DJCNS1t_.js";import"./getDisabledMountTransitionStyles-DQZbsbN5.js";import"./getPseudoElementBounds-CAtkH-xO.js";import"./chevron-down-BNkVC-pe.js";import"./index-DxV3WRGx.js";import"./error-CA9h5Tsj.js";import"./BaseCbacBanner-DabSZZE-.js";import"./makeExternalStore-Cttn8Ubc.js";import"./Tooltip-BzUCPYl_.js";import"./PopoverPopup-Dy-HzyQe.js";import"./Select-Ca8OZlWh.js";import"./useOsdkClient-CwGjW6j8.js";import"./tick-DI-jk0OK.js";import"./DropdownField-DnpT5rdQ.js";import"./useDebouncedCallback-Clj3Dq5C.js";import"./isEqual-C3incRMf.js";import"./_baseIsEqual-BUpM9Ple.js";import"./stableSerialize-DCEh1d6Y.js";import"./withOsdkMetrics-Ru8uoXDU.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};

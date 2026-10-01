import{f as p,j as e}from"./iframe-BBS1bhxz.js";import{O as i}from"./object-table-CM7ekgEE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbqFABQK.js";import"./Table-DEUb_dRE.js";import"./index-BwzBBeai.js";import"./Dialog-D2wutk-0.js";import"./cross-CNiIBNRR.js";import"./svgIconContainer-DkabfjQp.js";import"./useBaseUiId-CYB9Dsir.js";import"./InternalBackdrop-CCOzVtc1.js";import"./composite-6tiSR5Xk.js";import"./index-8i8Pb6X4.js";import"./index-KEup_jqV.js";import"./index-CnkYP-F4.js";import"./useEventCallback-B33OkFzu.js";import"./SkeletonBar-BUB4_ue2.js";import"./LoadingCell-ClWqsny_.js";import"./ColumnConfigDialog-DajqHBHt.js";import"./DraggableList-Dzhfo3BO.js";import"./search-DcQmB7Y_.js";import"./Input-xVXK2Roi.js";import"./useControlled-0gW62wDn.js";import"./Button-BB3rVnV9.js";import"./small-cross-Ch3xmnh1.js";import"./ActionButton-DGhxQdJx.js";import"./Checkbox-G67U5DCG.js";import"./useValueChanged-DRgrYEiY.js";import"./CollapsiblePanel-CLoilge1.js";import"./MultiColumnSortDialog-YQlGJpTo.js";import"./MenuTrigger-CSqVk1g8.js";import"./CompositeItem-BGGFMuw6.js";import"./ToolbarRootContext-COBR2HeU.js";import"./getDisabledMountTransitionStyles-C8xFS_dz.js";import"./getPseudoElementBounds-C9THLdDk.js";import"./chevron-down-CHLXsa5V.js";import"./index-DRQ9Ijyk.js";import"./error-D-l7GhZN.js";import"./BaseCbacBanner-D2vA0T6x.js";import"./makeExternalStore-CzAndpId.js";import"./Tooltip-IRK0CKSi.js";import"./PopoverPopup-DRjPHcEC.js";import"./debounce-EWPwneHB.js";import"./useOsdkClient-JNX9ytGe.js";import"./tick-WrvbSOaH.js";import"./DropdownField-Br5LnCsz.js";import"./isEqual-BCXdRNL7.js";import"./withOsdkMetrics-BcsPvRcs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

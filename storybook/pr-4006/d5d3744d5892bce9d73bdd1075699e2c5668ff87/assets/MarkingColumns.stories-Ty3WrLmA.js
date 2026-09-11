import{f as p,j as e}from"./iframe-uvdRxhm4.js";import{O as i}from"./object-table-YhtUStHb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByxB1amM.js";import"./Table-vm8xu-PB.js";import"./index-Co_pmQht.js";import"./Dialog-XwGMrHpI.js";import"./cross-CVk2zvc8.js";import"./svgIconContainer-BrEtjUlS.js";import"./useBaseUiId-BxI9rYKQ.js";import"./InternalBackdrop-C6QFY2GA.js";import"./composite-BG1x_r8M.js";import"./index-lOYDDVZK.js";import"./index-3i2S2NsZ.js";import"./index-DTOiGnqw.js";import"./useEventCallback-DXlTwTX-.js";import"./SkeletonBar-BeFEtzbz.js";import"./LoadingCell-By-abxKM.js";import"./ColumnConfigDialog-D5s3A6Au.js";import"./DraggableList-BGMk2AQC.js";import"./search-C_3VgOnT.js";import"./Input-DsPKjuvY.js";import"./useControlled-BumCnOkf.js";import"./Button-Bo9SA5iL.js";import"./small-cross-Ducb2njs.js";import"./ActionButton-C-rT9f5F.js";import"./Checkbox-CE4hiEyB.js";import"./useValueChanged-VS0IrIAr.js";import"./CollapsiblePanel-BnrWUQOr.js";import"./MultiColumnSortDialog-DofKpjRN.js";import"./MenuTrigger-e--GdtbV.js";import"./CompositeItem-B-Ruk_4Z.js";import"./ToolbarRootContext-BdEFWnMH.js";import"./getDisabledMountTransitionStyles-CICtbxTC.js";import"./getPseudoElementBounds-CN21HRRj.js";import"./chevron-down-S5HS9Wt5.js";import"./index-BZDxYY65.js";import"./error-coR5DdC1.js";import"./BaseCbacBanner-DpGzGhEj.js";import"./makeExternalStore-BamzP3ZM.js";import"./Tooltip-BS__xmI7.js";import"./PopoverPopup-CYPwIDjx.js";import"./debounce-CnVQWIJt.js";import"./useOsdkClient-Bnqq9tvc.js";import"./tick-Bt4QaKZ2.js";import"./DropdownField-B9p3-g28.js";import"./isEqual-CfnJRls-.js";import"./withOsdkMetrics-BYNBs9jS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

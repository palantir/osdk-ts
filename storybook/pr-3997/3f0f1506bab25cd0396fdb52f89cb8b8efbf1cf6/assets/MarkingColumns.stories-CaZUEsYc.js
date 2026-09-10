import{f as p,j as e}from"./iframe-C-ZowQax.js";import{O as i}from"./object-table-BoFDvNT8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwoiUuS0.js";import"./Table-pAtwTM9K.js";import"./index-Be4hOd1B.js";import"./Dialog-DtLoQywW.js";import"./cross-Eu5MsQSw.js";import"./svgIconContainer-DOvH0cqq.js";import"./useBaseUiId-z3JC-8KB.js";import"./InternalBackdrop-Bq6YL1k4.js";import"./composite-DecXstOI.js";import"./index-Ds7XpPFE.js";import"./index-CLAxlO_0.js";import"./index-CIH23t0R.js";import"./useEventCallback-rnlsmwi1.js";import"./SkeletonBar-Bzw4W5us.js";import"./LoadingCell-BWWklX_C.js";import"./ColumnConfigDialog-CkG71Sl6.js";import"./DraggableList-DJpjIFcN.js";import"./search-IKabI-9R.js";import"./Input-DBndaIW5.js";import"./useControlled-BMJFbw6E.js";import"./Button-BvplgYnA.js";import"./small-cross-Bk6KAhb2.js";import"./ActionButton-Dgf6XiQc.js";import"./Checkbox-BG2a4QAU.js";import"./useValueChanged-Dwc1SDE4.js";import"./CollapsiblePanel-CgIdvyXZ.js";import"./MultiColumnSortDialog-CQWhwk_m.js";import"./MenuTrigger-pnLY5jLU.js";import"./CompositeItem-Boyopm8a.js";import"./ToolbarRootContext-qpt4Azan.js";import"./getDisabledMountTransitionStyles-DBO-O-Ga.js";import"./getPseudoElementBounds-DmT2yiee.js";import"./chevron-down-BB7K5vpo.js";import"./index-BDVpzpby.js";import"./error-DLiiLlwM.js";import"./BaseCbacBanner-DTZ9UsMw.js";import"./makeExternalStore-D6lqxyG2.js";import"./Tooltip-BWTRoX0F.js";import"./PopoverPopup-CG9CYd0u.js";import"./debounce-BAsjd_Of.js";import"./useOsdkClient-Cm53VtWi.js";import"./tick-JKwuhKLh.js";import"./DropdownField-BFfdkSQG.js";import"./isEqual-Dl3K-ctg.js";import"./withOsdkMetrics-nJkmP2WD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

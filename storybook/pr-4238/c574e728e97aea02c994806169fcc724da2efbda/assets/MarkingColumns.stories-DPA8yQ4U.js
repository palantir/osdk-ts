import{f as p,j as e}from"./iframe-D0tV0cI9.js";import{O as i}from"./object-table-B6LV5wHR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMejyDSI.js";import"./Table-CLQOrv6i.js";import"./index--X-dIIbK.js";import"./Dialog-DrC7eQ2U.js";import"./cross-D1A4Ur2n.js";import"./svgIconContainer-D4vQ8nMV.js";import"./useBaseUiId-DOX0bj2Y.js";import"./InternalBackdrop-8s1L6ptE.js";import"./composite-eLTYJf7x.js";import"./index-PxTuLgQ7.js";import"./index--qRovy9Z.js";import"./index-B0E7m3m7.js";import"./useEventCallback-BU2eLzaP.js";import"./SkeletonBar-BXKY95YJ.js";import"./LoadingCell-PpCOvpZj.js";import"./ColumnConfigDialog-Bp6BVMyr.js";import"./DraggableList-DapAqrTt.js";import"./search-Cnl0jIoS.js";import"./Input-COsc6IX5.js";import"./useControlled-LJkicshM.js";import"./Button-DgOszdIa.js";import"./small-cross-hHO5mdkn.js";import"./ActionButton-nMCNHSER.js";import"./Checkbox-BCMLhMxa.js";import"./useValueChanged-DUSHD8U9.js";import"./CollapsiblePanel-C_dUzpsn.js";import"./MultiColumnSortDialog-CHuLKSPT.js";import"./MenuTrigger-DlWFCK8y.js";import"./CompositeItem-Ch1OySWF.js";import"./ToolbarRootContext-BrObQQEc.js";import"./getDisabledMountTransitionStyles-CU_JeY5i.js";import"./getPseudoElementBounds-B-8LJsE_.js";import"./chevron-down-BYHSUQw3.js";import"./index-DUZjOP9_.js";import"./error-BLp0q_TC.js";import"./BaseCbacBanner-p71Vaotj.js";import"./makeExternalStore-CczQoVJf.js";import"./Tooltip-su0Z3mzC.js";import"./PopoverPopup-CgzNWAqf.js";import"./debounce-CQ8ktfpw.js";import"./useOsdkClient-BHqJSoPG.js";import"./tick-O8NB6F9G.js";import"./DropdownField-C2c-svQN.js";import"./isEqual-CSkfXPCA.js";import"./withOsdkMetrics-C1pmSZXh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

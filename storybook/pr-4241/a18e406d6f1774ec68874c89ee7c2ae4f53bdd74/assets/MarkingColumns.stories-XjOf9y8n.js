import{f as p,j as e}from"./iframe-BZfq9wpL.js";import{O as i}from"./object-table-DoWPZlVv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AwKDT_jv.js";import"./Table-td4H65UV.js";import"./index-D9gasGy7.js";import"./Dialog-BOiQVGkU.js";import"./cross-D_01sNtm.js";import"./svgIconContainer-DnXANREi.js";import"./useBaseUiId-CAA3ipMR.js";import"./InternalBackdrop-C2xaKMNu.js";import"./composite-bZwVCSrk.js";import"./index-DsxnygA5.js";import"./index-Bh2MExip.js";import"./index-C8SZO2gW.js";import"./useEventCallback--L1JDqNv.js";import"./SkeletonBar-CG-4yXUZ.js";import"./LoadingCell-DKI8FSP7.js";import"./ColumnConfigDialog-CalvApPI.js";import"./DraggableList-Cmkt9XM4.js";import"./search-CGtWdQTA.js";import"./Input-CYqif1zS.js";import"./useControlled-mhuNXue2.js";import"./Button-RoczPdix.js";import"./small-cross-DtYxU9Mt.js";import"./ActionButton-BfVU8-_V.js";import"./Checkbox-DLVq20_m.js";import"./useValueChanged-DXG9ZF3t.js";import"./CollapsiblePanel-X8A3X9xp.js";import"./MultiColumnSortDialog-FWsXtXEV.js";import"./MenuTrigger-CmaqcMU6.js";import"./CompositeItem-DdBNHL7r.js";import"./ToolbarRootContext-BAhtauIS.js";import"./getDisabledMountTransitionStyles-CXARh1iQ.js";import"./getPseudoElementBounds-Nz_xFNM1.js";import"./chevron-down-BnbfleEH.js";import"./index-CYqzX_VE.js";import"./error-Dm15EuC9.js";import"./BaseCbacBanner-CWsnq_cD.js";import"./makeExternalStore-BV40BoeT.js";import"./Tooltip-DkzPkwJ6.js";import"./PopoverPopup-CQlRUOAW.js";import"./debounce-CRuMKiUh.js";import"./useOsdkClient-De89dM9U.js";import"./tick-BFLAooRA.js";import"./DropdownField-B-E6juK1.js";import"./isEqual-BK7_lR_a.js";import"./withOsdkMetrics-BHMRNcoi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-B-bk2LeB.js";import{O as i}from"./object-table-CKI5_fiJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5FV7gVn.js";import"./Table-ChXILAnh.js";import"./index-DM05yPFc.js";import"./Dialog-Cyseorwu.js";import"./cross-Dz9kcW5U.js";import"./svgIconContainer-DtjTERAf.js";import"./useBaseUiId-BqQwfV5F.js";import"./InternalBackdrop-Bqcr7z6s.js";import"./composite-KF47FU0W.js";import"./index-CFVQhoyp.js";import"./index-BAxgKpjF.js";import"./index-CN8fTgwp.js";import"./useEventCallback-CMyVFkb9.js";import"./SkeletonBar-Dx6EvkAG.js";import"./LoadingCell-CtdIIGJx.js";import"./ColumnConfigDialog-CkSK-e0b.js";import"./DraggableList-Cpy66XQF.js";import"./search-DOZ8pXMB.js";import"./Input-ICkfGpEo.js";import"./useControlled-B1_v0SLc.js";import"./isEqual-BLlMpy2R.js";import"./isObject-C-YWAbu1.js";import"./Button-9uVrFS16.js";import"./ActionButton-aB2eaoFb.js";import"./Checkbox-DfojlPWp.js";import"./useValueChanged-C1MDQvYd.js";import"./CollapsiblePanel-BxtuR-CO.js";import"./MultiColumnSortDialog-BWpOEGQt.js";import"./MenuTrigger-2PDNdEOq.js";import"./CompositeItem-Bdc6unAH.js";import"./ToolbarRootContext-CAqP7Cj2.js";import"./getDisabledMountTransitionStyles-C0ZICQNR.js";import"./getPseudoElementBounds-CMdxa0l-.js";import"./chevron-down-BXFs_ff_.js";import"./index-BBA5_LrS.js";import"./error-ufSJKQSy.js";import"./BaseCbacBanner-DUXJNRl6.js";import"./makeExternalStore-y8FAd1tx.js";import"./Tooltip-DnN5uGkl.js";import"./PopoverPopup-CwszAPLS.js";import"./toNumber-CiUeINfn.js";import"./useOsdkClient-D8s7jZW_.js";import"./tick-BYXgge_f.js";import"./DropdownField-Bwp0SNdz.js";import"./withOsdkMetrics-D6eXjUPL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

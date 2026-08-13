import{f as p,j as e}from"./iframe-CQFnHxTO.js";import{O as i}from"./object-table-ChqEHKh4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rK1dY1Ui.js";import"./Table-BeFq-Dil.js";import"./index-D-SWpkps.js";import"./Dialog-BnfVV6cj.js";import"./cross-BwcQfy8o.js";import"./svgIconContainer-DGlcHToS.js";import"./useBaseUiId-DhEYJ7Lv.js";import"./InternalBackdrop-Wme1Pd-g.js";import"./composite-DDTIjh9a.js";import"./index-BwQs_oNu.js";import"./index-B7EcVcO3.js";import"./index-CmG1YU-z.js";import"./useEventCallback-BM2PZBH6.js";import"./SkeletonBar-BDQSdXSb.js";import"./LoadingCell-Bq6YrahC.js";import"./ColumnConfigDialog-CiuXcpeZ.js";import"./DraggableList-k44Faf2B.js";import"./search-DLWP4Sau.js";import"./Input-DVjUYO6G.js";import"./useControlled-DQq657mZ.js";import"./isEqual-pZu_mXsq.js";import"./isObject-D9rv0iqM.js";import"./Button-Vd6i0l0Q.js";import"./ActionButton-CiKP957w.js";import"./Checkbox-LzD7Gmps.js";import"./useValueChanged-BOD5Ipb1.js";import"./CollapsiblePanel-ByD8C8BM.js";import"./MultiColumnSortDialog-BMBXPIgU.js";import"./MenuTrigger-C_MB1mN0.js";import"./CompositeItem-B9-jPotu.js";import"./ToolbarRootContext-DJ0l6Br3.js";import"./getDisabledMountTransitionStyles-BeozZc0x.js";import"./getPseudoElementBounds-CcNhJNm5.js";import"./chevron-down-CXwEWINw.js";import"./index-BTqp2ZX9.js";import"./error-qjyqUuKF.js";import"./BaseCbacBanner-Cfyu_NmC.js";import"./makeExternalStore-DkFvLNvv.js";import"./Tooltip-B4JCaEcf.js";import"./PopoverPopup-Bxfhqbd6.js";import"./toNumber-jxE6Z19Y.js";import"./useOsdkClient-Byc0C7aB.js";import"./chevron-right-CjQseNaT.js";import"./tick-C-hv7xxG.js";import"./DropdownField-BmQfSDBK.js";import"./withOsdkMetrics-BzKJ-zlS.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

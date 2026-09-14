import{f as p,j as e}from"./iframe-CSN8hPBK.js";import{O as i}from"./object-table-DbL69lyR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgkWS9T4.js";import"./Table-DClyCIpE.js";import"./index-LA6eGdrx.js";import"./Dialog-FtEKHH1N.js";import"./cross-CLh64p0F.js";import"./svgIconContainer-COOyKoHH.js";import"./useBaseUiId-CST19_eI.js";import"./InternalBackdrop-CTXp7ef6.js";import"./composite-DSnE_YQk.js";import"./index-P9xxddcK.js";import"./index-DeMBNUsz.js";import"./index-BIKPmtBh.js";import"./useEventCallback-B81jpozq.js";import"./SkeletonBar-BGTpH663.js";import"./LoadingCell-A6O8gUu9.js";import"./ColumnConfigDialog-Cp-LNAQK.js";import"./DraggableList-BYRdoRfp.js";import"./search-By7vWzyC.js";import"./Input-BG0-cI5h.js";import"./useControlled-BD5V0Ccm.js";import"./Button-CTdUnl-9.js";import"./small-cross-DqRZZTHz.js";import"./ActionButton-iRrLnlXb.js";import"./Checkbox-B02p3FBc.js";import"./useValueChanged-DROKVxxL.js";import"./CollapsiblePanel-BxP2J2Dt.js";import"./MultiColumnSortDialog-mWaAjcZB.js";import"./MenuTrigger-5cpEf70X.js";import"./CompositeItem-BScttQtR.js";import"./ToolbarRootContext-CDg3nyHK.js";import"./getDisabledMountTransitionStyles-DhTy_FKz.js";import"./getPseudoElementBounds-CVxG5WR2.js";import"./chevron-down-BhdvQ1g6.js";import"./index-BuNpqgsl.js";import"./error-BtGej3op.js";import"./BaseCbacBanner-CJ7LF4Ac.js";import"./makeExternalStore-DS_EZCHg.js";import"./Tooltip-Bv17cXKg.js";import"./PopoverPopup-CQJhkZED.js";import"./debounce-ccFfTLWb.js";import"./useOsdkClient-B6qKL_vp.js";import"./tick-l3MhEpoD.js";import"./DropdownField-DUXRBZrT.js";import"./isEqual-CtNna9zA.js";import"./withOsdkMetrics-jlPvbe-f.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

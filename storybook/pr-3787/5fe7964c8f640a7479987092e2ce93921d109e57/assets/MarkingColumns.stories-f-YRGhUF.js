import{f as p,j as e}from"./iframe-B2WEvdAW.js";import{O as i}from"./object-table-D56pvC1L.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhU0XYWM.js";import"./Table-EuDoghZt.js";import"./index-CPTV9ACa.js";import"./Dialog-Bs9shMGW.js";import"./cross-Dp_5_chm.js";import"./svgIconContainer-2zRkClSo.js";import"./useBaseUiId-DCdD9_76.js";import"./InternalBackdrop-CFws66aH.js";import"./composite-BREofBqz.js";import"./index-BdLXJsG_.js";import"./index-CbAjSkqf.js";import"./index-BLoo5gPv.js";import"./useEventCallback-C_gsVITF.js";import"./SkeletonBar-5dGv93nQ.js";import"./LoadingCell-ChbduxuV.js";import"./ColumnConfigDialog-Bj3PLmMs.js";import"./DraggableList-CfxOorci.js";import"./search--8DzG11U.js";import"./Input-Df2u9clw.js";import"./useControlled-C-Bb8qdR.js";import"./isEqual-D5fyckHN.js";import"./isObject-ScWPTohZ.js";import"./Button-CfOMVE39.js";import"./ActionButton-BNwYJDXK.js";import"./Checkbox-hQgO7BXg.js";import"./useValueChanged-DcSkF3ku.js";import"./CollapsiblePanel-DKsUEBPA.js";import"./MultiColumnSortDialog-CtzHHpxn.js";import"./MenuTrigger-CQi3yp30.js";import"./CompositeItem-DV2f_o_-.js";import"./ToolbarRootContext-Cl65jw6L.js";import"./getDisabledMountTransitionStyles-DVeUHiRy.js";import"./getPseudoElementBounds-_iSTNHhH.js";import"./chevron-down-CDva5__V.js";import"./index-Bt45A8jP.js";import"./error-DA0fUKLV.js";import"./BaseCbacBanner-CYNzCrjS.js";import"./makeExternalStore-PS0hgXnz.js";import"./Tooltip-C1X-0Hb3.js";import"./PopoverPopup-BjirBSSn.js";import"./toNumber-x-yUogQr.js";import"./useOsdkClient-DVo9clTL.js";import"./tick-CL3asYDB.js";import"./DropdownField-s2aUsSbs.js";import"./withOsdkMetrics-BQALV_bt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

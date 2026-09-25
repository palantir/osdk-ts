import{f as p,j as e}from"./iframe-CdF0Fq9c.js";import{O as i}from"./object-table-DCTB_jFv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ct1oZRJx.js";import"./Table-47tQQ2gN.js";import"./index-C157L91v.js";import"./Dialog-C2Um4hjO.js";import"./cross-DSYmSTiz.js";import"./svgIconContainer-B4dKEY9f.js";import"./useBaseUiId-ONWuAW-H.js";import"./InternalBackdrop-BmiLCT5S.js";import"./composite-CLj3gTzn.js";import"./index-1mFMxabl.js";import"./index-C1-F-JKF.js";import"./index-DoBn_sDd.js";import"./useEventCallback-CdebAKnn.js";import"./SkeletonBar-Txh1lAT2.js";import"./LoadingCell-DVLyiZTo.js";import"./ColumnConfigDialog-DV3GZ88c.js";import"./DraggableList-Cslini3j.js";import"./search-DhvEixTQ.js";import"./Input-DtrPcu15.js";import"./useControlled-B9w800yx.js";import"./Button-BBUQ2vzx.js";import"./small-cross-Bkhxrwyf.js";import"./ActionButton-B0D-C4ck.js";import"./Checkbox-9tfyC6al.js";import"./useValueChanged-Ddn72qJ7.js";import"./CollapsiblePanel-CkXKbl9a.js";import"./MultiColumnSortDialog-BMJy-M2V.js";import"./MenuTrigger-CzIoZhik.js";import"./CompositeItem-D7LuxCQJ.js";import"./ToolbarRootContext-B-5g_cXd.js";import"./getDisabledMountTransitionStyles-TKnsNZOB.js";import"./getPseudoElementBounds-DjlHjzw2.js";import"./chevron-down-duFxKh1l.js";import"./index-DcWJRYHo.js";import"./error-1hy_7Gr5.js";import"./BaseCbacBanner-BoHDJ-9K.js";import"./makeExternalStore-DXEmCGwz.js";import"./Tooltip-IWrVwCEs.js";import"./PopoverPopup-D5M-MmVN.js";import"./debounce-DPATjUqM.js";import"./useOsdkClient-B8BKhdw9.js";import"./tick-BqfEES5I.js";import"./DropdownField-DHwNGiCR.js";import"./isEqual-kk6H38Ns.js";import"./withOsdkMetrics-6s0IiMkQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

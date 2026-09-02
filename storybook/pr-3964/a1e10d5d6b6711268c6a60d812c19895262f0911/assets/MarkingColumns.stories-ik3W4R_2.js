import{f as p,j as e}from"./iframe-BtTN4BQB.js";import{O as i}from"./object-table-Bvx4yqVd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2hFUd6N.js";import"./Table-CoZReMex.js";import"./index-pxWT2dwl.js";import"./Dialog--QRamm7H.js";import"./cross-q76qzbb-.js";import"./svgIconContainer-Ck-gVtGn.js";import"./useBaseUiId-lIY47ohq.js";import"./InternalBackdrop-dYX83tvG.js";import"./composite-CdDRlQtM.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./index-DOgMvsUP.js";import"./useEventCallback-BtkhBx2l.js";import"./SkeletonBar-BEHzB_kl.js";import"./LoadingCell-CAz1hfsM.js";import"./ColumnConfigDialog-BoZUi2Vu.js";import"./DraggableList-BNYdNfbR.js";import"./search-B3tYggTx.js";import"./Input-BP96gLBp.js";import"./useControlled-BY2aVBy7.js";import"./Button-BLq1-le0.js";import"./small-cross-C5ga7063.js";import"./ActionButton-CM0ktcvu.js";import"./Checkbox-B1ajB8tt.js";import"./useValueChanged-fmp-pLJF.js";import"./CollapsiblePanel-hvpVpf_T.js";import"./MultiColumnSortDialog-DQ99MgP8.js";import"./MenuTrigger-Diwu4kws.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./getDisabledMountTransitionStyles-CN6FaNLi.js";import"./getPseudoElementBounds-8uy80WiE.js";import"./chevron-down-BcmFYUSl.js";import"./index-9u2i6wOA.js";import"./error-eGAnK2yX.js";import"./BaseCbacBanner-eiRHuLLT.js";import"./makeExternalStore-Djs-AWxx.js";import"./Tooltip-H3WuRadb.js";import"./PopoverPopup-DWl2W-_4.js";import"./debounce-BHOQ-Rki.js";import"./useOsdkClient-DEjT27KS.js";import"./tick-DcJBbOnL.js";import"./DropdownField-BLdkGkAU.js";import"./isEqual-CIlWL9cG.js";import"./withOsdkMetrics-DMwNEK1o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

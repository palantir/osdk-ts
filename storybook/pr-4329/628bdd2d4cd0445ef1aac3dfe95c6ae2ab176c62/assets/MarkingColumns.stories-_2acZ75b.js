import{f as p,j as e}from"./iframe-D7QeARop.js";import{O as i}from"./object-table-CbL4Paz-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByO2gGG-.js";import"./Table-ykXJUGrp.js";import"./index-vZOnCZIt.js";import"./Dialog-DLwSvsKV.js";import"./cross-CCN51Rj8.js";import"./svgIconContainer-CpkzxylD.js";import"./useBaseUiId-Dh_4-Vt2.js";import"./InternalBackdrop-D0JalReK.js";import"./composite-CP3yMwV3.js";import"./index-CJ9QavcY.js";import"./index-DjN3vWUU.js";import"./index-DUe4tRvm.js";import"./useEventCallback-jsvHNSiR.js";import"./SkeletonBar-CUEddLCH.js";import"./LoadingCell-Ci-32_Yp.js";import"./ColumnConfigDialog-DtteUUZa.js";import"./DraggableList-C41GIu2i.js";import"./search-9NK7v0NO.js";import"./Input-CLM1j4JP.js";import"./useControlled-BpgKR5hH.js";import"./Button-BlwuwcGr.js";import"./small-cross-BWFtiz88.js";import"./ActionButton-CXthtHCW.js";import"./Checkbox-BwDeFKcu.js";import"./useValueChanged-DkC8RVuc.js";import"./CollapsiblePanel-DSHh3xiM.js";import"./MultiColumnSortDialog-Da6ZQak_.js";import"./MenuTrigger-Dk0mAldt.js";import"./CompositeItem-BgFz1mHQ.js";import"./ToolbarRootContext-3MdV9Srh.js";import"./getDisabledMountTransitionStyles-C7FpNIAD.js";import"./getPseudoElementBounds-Bl3pBLkv.js";import"./chevron-down-YhKS7YTd.js";import"./index-CoGsxT9Q.js";import"./error-CL_q_Pjq.js";import"./BaseCbacBanner-CVpxU0Zp.js";import"./makeExternalStore-BcgbNS0d.js";import"./Tooltip-CgVcfXoX.js";import"./isObject-BqaZPqbQ.js";import"./debounce-DVpewphV.js";import"./useOsdkClient-BkAvKGv3.js";import"./tick-BaJXP7zX.js";import"./DropdownField-BWDbWE-R.js";import"./isEqual-OojC1ssb.js";import"./_baseIsEqual-BU44Afdd.js";import"./withOsdkMetrics-CaR_BdPF.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

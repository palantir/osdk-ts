import{f as p,j as e}from"./iframe-Cs0vjh1D.js";import{O as i}from"./object-table-B9QD2XwX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BW6fmHbo.js";import"./Table-hdthW46X.js";import"./index-BRpQkU0f.js";import"./Dialog-svDsLJqH.js";import"./cross-BbGBkiuK.js";import"./svgIconContainer-UGeX2bOE.js";import"./useBaseUiId-CBGw6rf9.js";import"./InternalBackdrop-BZL4K5sB.js";import"./composite-BA2SFYHq.js";import"./index-Bsi3aTLo.js";import"./index-DszKNb2L.js";import"./index-I2-ks3cR.js";import"./useEventCallback-BEBfKyFP.js";import"./SkeletonBar-DRoTtTh8.js";import"./LoadingCell-CgHajKqn.js";import"./ColumnConfigDialog-BiXx2RD3.js";import"./DraggableList-Clfm8Udl.js";import"./search-gUhAvHQd.js";import"./Input-DS8FrlZU.js";import"./useControlled-D0eBDm4j.js";import"./isEqual-D0NYUuEo.js";import"./isObject-Cn8y_MRd.js";import"./Button-qASnNh7s.js";import"./ActionButton-DKr4sj1v.js";import"./Checkbox-CVh5Mw2R.js";import"./useValueChanged-BgOLFuV7.js";import"./CollapsiblePanel-C6QrXgfo.js";import"./MultiColumnSortDialog-Bs8NsRCP.js";import"./MenuTrigger-koUejPxM.js";import"./CompositeItem-B2PoMDzg.js";import"./ToolbarRootContext-C8XwSccZ.js";import"./getDisabledMountTransitionStyles-pUKZhWTR.js";import"./getPseudoElementBounds-D8W5OxLB.js";import"./chevron-down-C4fu_1o3.js";import"./index-43dZyclU.js";import"./error-DNXbMYR2.js";import"./BaseCbacBanner-D_aViP9a.js";import"./makeExternalStore-vOF9t-Ek.js";import"./Tooltip-C_VkPlpK.js";import"./PopoverPopup-k_iLhgPi.js";import"./toNumber-CCht9N4r.js";import"./useOsdkClient-Bj9T7Nsv.js";import"./tick-D3XFGJ8c.js";import"./DropdownField-BC_oma1F.js";import"./withOsdkMetrics-CN8GOW3l.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

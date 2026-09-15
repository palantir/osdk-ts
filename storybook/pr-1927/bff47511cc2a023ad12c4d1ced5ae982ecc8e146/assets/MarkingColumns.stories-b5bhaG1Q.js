import{f as p,j as e}from"./iframe-B441qIYR.js";import{O as i}from"./object-table-xMl1DPma.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQxy24fI.js";import"./Table-DvXQCezG.js";import"./index-CqjhHzve.js";import"./Dialog-BSPszA5B.js";import"./cross-BNrt0aH1.js";import"./svgIconContainer-BSmiGxdz.js";import"./useBaseUiId-CAzOpzCv.js";import"./InternalBackdrop-DmeCQFx1.js";import"./composite-CzbYCu9o.js";import"./index-TqQ_ZGFy.js";import"./index-B-mP9lvr.js";import"./index-CGHV9asT.js";import"./useEventCallback-Dkln44I2.js";import"./SkeletonBar-Cf_A4GXZ.js";import"./LoadingCell-CUD2XvbK.js";import"./ColumnConfigDialog-CdaMXRL_.js";import"./DraggableList-Ckk1H0fj.js";import"./search-DUz8ofCX.js";import"./Input-QLiOOLjz.js";import"./useControlled-CWP741nv.js";import"./Button-DzRMTkim.js";import"./small-cross-DlCMMKuZ.js";import"./ActionButton-C-ago1dj.js";import"./Checkbox-BHSZgzni.js";import"./useValueChanged-CifPK3o3.js";import"./CollapsiblePanel-BFH9uHwC.js";import"./MultiColumnSortDialog-DjBGUDQv.js";import"./MenuTrigger-CWKd6dht.js";import"./CompositeItem-C8CTVhA-.js";import"./ToolbarRootContext-CYvhcckZ.js";import"./getDisabledMountTransitionStyles-BjyDpkoM.js";import"./getPseudoElementBounds-C-3tqagg.js";import"./chevron-down-DNBdHWh5.js";import"./index-UGmLGzC-.js";import"./error-bNXgEpmP.js";import"./BaseCbacBanner-zaU3j8Ri.js";import"./makeExternalStore-D5BQihPb.js";import"./Tooltip-DAmduYRB.js";import"./PopoverPopup-D6B75mLS.js";import"./debounce-D_X6R-CZ.js";import"./useOsdkClient-BsFxQUuE.js";import"./tick-ClXuYj6h.js";import"./DropdownField-DPKco6cz.js";import"./isEqual-BPN4A_it.js";import"./withOsdkMetrics-BIArtGAT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-50Cg_Ain.js";import{O as i}from"./object-table-BMqdBJge.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DMtB3Ytn.js";import"./Table-C5HnzxvU.js";import"./index-jwJr-CWL.js";import"./Dialog-Ct-gNA2Q.js";import"./cross-COS10AaY.js";import"./svgIconContainer-CcJ3Jv7r.js";import"./useBaseUiId-KVfK4IPD.js";import"./InternalBackdrop-BuJcJtL5.js";import"./composite-Dp3rlZDO.js";import"./index-pDWKxWtb.js";import"./index-Bnqsnheo.js";import"./index-beR5Qk5I.js";import"./useEventCallback--j9Bwo9R.js";import"./SkeletonBar-vCg5I0cB.js";import"./LoadingCell-DESO8adh.js";import"./ColumnConfigDialog-DWzi7-44.js";import"./DraggableList-BM6r3rgP.js";import"./search-BrkmnBZA.js";import"./Input-MpATsBua.js";import"./useControlled-BYCjMK_X.js";import"./Button-D1Gjjj1e.js";import"./small-cross-zbNUvU_s.js";import"./ActionButton-BOVhqgS3.js";import"./Checkbox-C7M83zVO.js";import"./useValueChanged-4L6Dzkoi.js";import"./CollapsiblePanel-DLDG4Y-F.js";import"./MultiColumnSortDialog-TRuvFkkZ.js";import"./MenuTrigger-BJe-69N1.js";import"./CompositeItem-PSBD5_9a.js";import"./ToolbarRootContext-wGzcHK2n.js";import"./getDisabledMountTransitionStyles-CcshyzIS.js";import"./getPseudoElementBounds-Cy_X7Dzd.js";import"./chevron-down-XrKrb8VS.js";import"./index-CKYD_SOl.js";import"./error-COSlANXI.js";import"./BaseCbacBanner-BbrXhr06.js";import"./makeExternalStore-mw5x5KPf.js";import"./Tooltip-CY7BNFvk.js";import"./isObject-DzKLNJWj.js";import"./debounce-ClHlqela.js";import"./useOsdkClient-CSxkcmdq.js";import"./tick-BHY7Momf.js";import"./DropdownField-Bu7usqGG.js";import"./isEqual-CO8gKk2r.js";import"./_baseIsEqual-CE8CWXW1.js";import"./withOsdkMetrics-DCjsjr3q.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

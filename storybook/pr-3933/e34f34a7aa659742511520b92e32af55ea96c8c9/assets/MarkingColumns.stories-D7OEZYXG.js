import{f as p,j as e}from"./iframe-Cd_V4KpW.js";import{O as i}from"./object-table-C4lb6IjE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvId2qNX.js";import"./Table-DTcTPhVX.js";import"./index-CKbN7xoE.js";import"./Dialog-Cnzzznkv.js";import"./cross-8_7TK-gx.js";import"./svgIconContainer-OdpcSH6M.js";import"./useBaseUiId-Cg6vBntQ.js";import"./InternalBackdrop-B-QnZGQH.js";import"./composite-BRFYp8ys.js";import"./index-B7pcEyRI.js";import"./index-fbmKYReH.js";import"./index-CRzlT-la.js";import"./useEventCallback-CY_99pR_.js";import"./SkeletonBar-D2_Y9R07.js";import"./LoadingCell-DF-kunBe.js";import"./ColumnConfigDialog-DTOgZZhJ.js";import"./DraggableList-uvVZOkam.js";import"./search-kv1GPHwR.js";import"./Input-BnvXsjz5.js";import"./useControlled-CHek0QKa.js";import"./Button-B2mzAnjv.js";import"./small-cross-D66utcYW.js";import"./ActionButton-eat6g3bK.js";import"./Checkbox-DC42b3iB.js";import"./useValueChanged-CPJhnvXb.js";import"./CollapsiblePanel-CvaPBsH3.js";import"./MultiColumnSortDialog-D3BD3vVQ.js";import"./MenuTrigger-CqdD1k-X.js";import"./CompositeItem-DZc7qyRg.js";import"./ToolbarRootContext-BLj_5vvK.js";import"./getDisabledMountTransitionStyles-BEVZ6IMz.js";import"./getPseudoElementBounds-CBW_NZlb.js";import"./chevron-down-DksiwaSO.js";import"./index-Paj9WnhS.js";import"./error-DeuwQWwL.js";import"./BaseCbacBanner-j4qkw37Y.js";import"./makeExternalStore-iWOM0D5L.js";import"./Tooltip-5gkTsU1u.js";import"./PopoverPopup-BnHPOSxW.js";import"./debounce-DCv4P7fq.js";import"./useOsdkClient-BUMyGwPD.js";import"./tick-eJRABlUb.js";import"./DropdownField-MmnLozo5.js";import"./isEqual-B-I72i7y.js";import"./withOsdkMetrics-i_JOH502.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

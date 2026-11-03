import{f as p,j as e}from"./iframe-DvvsknHZ.js";import{O as i}from"./object-table-B7Fjhpk3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7RcIo-x.js";import"./Table-CDrZK7oT.js";import"./index-BXq-npjw.js";import"./Dialog-DN7kteIN.js";import"./cross-CVayjJ6n.js";import"./svgIconContainer-B68gmxzG.js";import"./useBaseUiId-pUFvyVHu.js";import"./InternalBackdrop-8CXRVLpP.js";import"./composite-B7vL0viI.js";import"./index-BvLG983R.js";import"./index-B-EIevQb.js";import"./index-CjvFBH5-.js";import"./useEventCallback-CnE_RJva.js";import"./SkeletonBar-Bi99HG7c.js";import"./LoadingCell-BADy_T3j.js";import"./ColumnConfigDialog-dMBAE_Bg.js";import"./DraggableList-CB5et2oc.js";import"./search-DO24WHTI.js";import"./Input-BoS4yQSc.js";import"./useControlled-DdoeZPFa.js";import"./Button-D89LqMeP.js";import"./small-cross-CjoP5etI.js";import"./ActionButton-DPMqraix.js";import"./Checkbox-CRkJSNAJ.js";import"./useValueChanged-C8_UfD93.js";import"./CollapsiblePanel-Chc1gEI_.js";import"./MultiColumnSortDialog-CYLBLJyV.js";import"./MenuTrigger-Dhoyxi7v.js";import"./CompositeItem-CPdzs_zJ.js";import"./ToolbarRootContext-wkwm_H2V.js";import"./getDisabledMountTransitionStyles-Ndk95izG.js";import"./getPseudoElementBounds-CZDJgWkH.js";import"./chevron-down-C_1zArjr.js";import"./index-5sndl28g.js";import"./error-b08krvJC.js";import"./BaseCbacBanner-CFgS8zqR.js";import"./makeExternalStore-tEc9bJ3H.js";import"./Tooltip-BFA62Jc4.js";import"./PopoverPopup-CUfcT_az.js";import"./debounce-7jKtScuE.js";import"./useOsdkClient-COXkAQJS.js";import"./tick-DLmYlJNm.js";import"./DropdownField-keYRULb0.js";import"./isEqual-D7-eQiR0.js";import"./withOsdkMetrics-DvI-Ja_4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

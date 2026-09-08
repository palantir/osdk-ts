import{f as p,j as e}from"./iframe-BOYcc0dJ.js";import{O as i}from"./object-table-DNOgP_yp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnWf8j3v.js";import"./Table-BPr2wWW7.js";import"./index-Yg2EcgVZ.js";import"./Dialog-uqbm0xGp.js";import"./cross-M1Qm_DTM.js";import"./svgIconContainer-dI8qqoMC.js";import"./useBaseUiId-DX9ZiXGI.js";import"./InternalBackdrop-BY0lRnfR.js";import"./composite-D8na-rSh.js";import"./index-BkqK32VC.js";import"./index-CCBfJ9eW.js";import"./index-C7Thu-2O.js";import"./useEventCallback-BVAeoTDg.js";import"./SkeletonBar-DqbjZsF-.js";import"./LoadingCell-DTpk0hTa.js";import"./ColumnConfigDialog-BVTIv4zw.js";import"./DraggableList-C30YVydB.js";import"./search-BW9zSgLT.js";import"./Input-BJWiKc9C.js";import"./useControlled-D-ZDbicW.js";import"./Button-hF353HMT.js";import"./small-cross-CF-XSTuz.js";import"./ActionButton-BfTy6GeE.js";import"./Checkbox-CGB2f6cn.js";import"./useValueChanged-h230bsbd.js";import"./CollapsiblePanel-Sxqk5N-n.js";import"./MultiColumnSortDialog-BEP6YjUS.js";import"./MenuTrigger-BpWk4Win.js";import"./CompositeItem-Bx5eT0s8.js";import"./ToolbarRootContext-Do3BrLln.js";import"./getDisabledMountTransitionStyles-BbJt8_w5.js";import"./getPseudoElementBounds-DV4HYuIT.js";import"./chevron-down-DcL5hgyv.js";import"./index-BDkH7Rg4.js";import"./error-JJ7_ntNs.js";import"./BaseCbacBanner-DDh3O6m0.js";import"./makeExternalStore-Cl0TwftQ.js";import"./Tooltip-ERPEKtIR.js";import"./PopoverPopup-PDZ-29T5.js";import"./debounce-BmvCkScQ.js";import"./useOsdkClient-ByhMOOB7.js";import"./tick-DMFuzZwx.js";import"./DropdownField-BBsngSoK.js";import"./isEqual-ChJ06NMp.js";import"./withOsdkMetrics-BIq6FQjv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

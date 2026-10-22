import{f as p,j as e}from"./iframe-CImoBJWj.js";import{O as i}from"./object-table-DL5c9H-I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-IQX6vey9.js";import"./Table-CQfoTNXr.js";import"./index-Cup5tXcg.js";import"./Dialog-gzf1dTtp.js";import"./cross-BqnYY50C.js";import"./svgIconContainer-CDIM8d0X.js";import"./useBaseUiId-DK9CjSol.js";import"./InternalBackdrop-1dyRFkhN.js";import"./composite-wTqD7xb9.js";import"./index-Bp-sZfW0.js";import"./index-BO30NG2p.js";import"./index-B-OKDmMN.js";import"./useEventCallback-8HkFD2y4.js";import"./SkeletonBar-lAqm2yHw.js";import"./LoadingCell-CpuycdTi.js";import"./ColumnConfigDialog-BFF9Iipx.js";import"./DraggableList-C6WGiMx5.js";import"./search-C3EkrB74.js";import"./Input-Soc66haA.js";import"./useControlled-5ShBBeuE.js";import"./Button-DBcwhCWE.js";import"./small-cross-DUFIOJxP.js";import"./ActionButton-BVwRTNVr.js";import"./Checkbox-BeFewm7l.js";import"./useValueChanged-DU8FQ44D.js";import"./CollapsiblePanel-C80L8NQi.js";import"./MultiColumnSortDialog-BppAEswF.js";import"./MenuTrigger-Z2wUq8Et.js";import"./CompositeItem-wd-v0oiM.js";import"./ToolbarRootContext-UrwTEYWQ.js";import"./getDisabledMountTransitionStyles-CETjyBx5.js";import"./getPseudoElementBounds-BLg8_Dqh.js";import"./chevron-down-By6KsCFI.js";import"./index-CvP_uE7p.js";import"./error-BhWP_ezt.js";import"./BaseCbacBanner-CJB9uIFr.js";import"./makeExternalStore-DWGtL2cW.js";import"./Tooltip-C-UE3W8B.js";import"./PopoverPopup-B6cucSon.js";import"./debounce-CkFI5VMc.js";import"./useOsdkClient-DqZgonFV.js";import"./tick-B2SLTcTU.js";import"./DropdownField-BPXOmhtU.js";import"./isEqual-CLpA2JNp.js";import"./withOsdkMetrics-BzR5lmI7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

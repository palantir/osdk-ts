import{f as p,j as e}from"./iframe-BJzSfC9S.js";import{O as i}from"./object-table-BMCTAiyf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5ZXn0m1.js";import"./Table-BIkC33Zx.js";import"./index-RBTsKrCd.js";import"./Dialog-O7xuo_XA.js";import"./cross-C1sOYIrW.js";import"./svgIconContainer-CuAg_aag.js";import"./useBaseUiId-xJC8-ZJA.js";import"./InternalBackdrop-jeH2RH2w.js";import"./composite-CJkKobo9.js";import"./index-XpV3If0y.js";import"./index-BJ-crEmJ.js";import"./index-huqfVkjH.js";import"./useEventCallback-w7WB5s1Y.js";import"./SkeletonBar-7o_3NyMD.js";import"./LoadingCell-CgxR8vsD.js";import"./ColumnConfigDialog-B6PrK4cc.js";import"./DraggableList-DjcDEt3p.js";import"./search-BtII_V1C.js";import"./Input-DtZovt6p.js";import"./useControlled-CHkHsIux.js";import"./Button-VqVSA-sW.js";import"./small-cross-CuZoKliA.js";import"./ActionButton-LG9rRmUw.js";import"./Checkbox-9l2II2-R.js";import"./useValueChanged-3Zyk1ZQA.js";import"./CollapsiblePanel-B8KUeZV_.js";import"./MultiColumnSortDialog-B3CRa72v.js";import"./MenuTrigger-DMuAXtcy.js";import"./CompositeItem-Dy9HP9ud.js";import"./ToolbarRootContext-BYj16EhM.js";import"./getDisabledMountTransitionStyles-C9ZXU9C3.js";import"./getPseudoElementBounds-DGHyT3Ys.js";import"./chevron-down-i7BRJyaV.js";import"./index-C7z7F6oT.js";import"./error-B8K_QQqb.js";import"./BaseCbacBanner-D5GYp1r1.js";import"./makeExternalStore-BYmjIu_q.js";import"./Tooltip-Bgn1Cxp6.js";import"./PopoverPopup-X5gFNrqC.js";import"./debounce-DNvbPKFV.js";import"./useOsdkClient-CQVwNPHy.js";import"./tick-C6e3lIMM.js";import"./DropdownField-BKTfgTvj.js";import"./isEqual-BEG_D5ZZ.js";import"./withOsdkMetrics-Dv0OE5bl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

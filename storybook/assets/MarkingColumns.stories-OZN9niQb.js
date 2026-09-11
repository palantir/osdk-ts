import{f as p,j as e}from"./iframe-C5F37WDS.js";import{O as i}from"./object-table-BEbUX7TV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CfGkAxhR.js";import"./index-DPmfEXn1.js";import"./Dialog-BtED4amM.js";import"./cross-CPshxXyQ.js";import"./svgIconContainer-D5Hoa2ds.js";import"./useBaseUiId-BGreBnEl.js";import"./InternalBackdrop-B09mEpfb.js";import"./composite-CGgdtCoR.js";import"./index-_URA0IQM.js";import"./index-DUd2_GTy.js";import"./index-kMdysijy.js";import"./useEventCallback-CnBtcH3P.js";import"./SkeletonBar-COnO3nFT.js";import"./LoadingCell-DK_o9OZw.js";import"./ColumnConfigDialog-CQnK5DVU.js";import"./DraggableList-BAlDHBgE.js";import"./search-KDPiG0C3.js";import"./Input-CoBEe8YJ.js";import"./useControlled-BmU56l0K.js";import"./Button-eBDyeEgi.js";import"./small-cross-DpbbqTEW.js";import"./ActionButton-B_JHD4Kz.js";import"./Checkbox-BQWkwBpa.js";import"./useValueChanged-Dyau8co3.js";import"./CollapsiblePanel-CZBHX6_H.js";import"./MultiColumnSortDialog-WUpno4wH.js";import"./MenuTrigger-BMhQEcnk.js";import"./CompositeItem-CkXf7jgb.js";import"./ToolbarRootContext-DTMhtNND.js";import"./getDisabledMountTransitionStyles-DT_lvr6t.js";import"./getPseudoElementBounds-DbutmOr_.js";import"./chevron-down--665Ugn9.js";import"./index-EP0qYko_.js";import"./error-BZcVMBoG.js";import"./BaseCbacBanner-S5UlBrJi.js";import"./makeExternalStore-BJFp2_WD.js";import"./Tooltip-Qr9uHTcA.js";import"./PopoverPopup-B2-_t_Ne.js";import"./debounce-CpEt3hrx.js";import"./useOsdkClient-CmCMz8RV.js";import"./tick-B0_SpxmY.js";import"./DropdownField-BAopx9eZ.js";import"./isEqual-CGhyDF2H.js";import"./withOsdkMetrics-BPZHiAPa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

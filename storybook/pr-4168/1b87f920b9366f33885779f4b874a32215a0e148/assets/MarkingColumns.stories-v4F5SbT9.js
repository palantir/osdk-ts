import{f as p,j as e}from"./iframe-BfqPDKql.js";import{O as i}from"./object-table-DjxNL_6f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjR-GsqS.js";import"./Table-DY99F2ck.js";import"./index-3BLY6arO.js";import"./Dialog-DefyZ3S9.js";import"./cross-C4uG_0m-.js";import"./svgIconContainer-Bvpn0iJ8.js";import"./useBaseUiId-C-9mkB40.js";import"./InternalBackdrop-DUtosfX7.js";import"./composite-C5EU-6hJ.js";import"./index-CCUvb36V.js";import"./index-CdNizhnG.js";import"./index-BH2TTPUz.js";import"./useEventCallback-G3g3fg30.js";import"./SkeletonBar-B4bFxsHY.js";import"./LoadingCell-CnzaETsA.js";import"./ColumnConfigDialog-RB_j43Yp.js";import"./DraggableList-B3A3MYkb.js";import"./search-DVeWM__c.js";import"./Input-BwQuq_Q1.js";import"./useControlled-1Az1d9DS.js";import"./Button-jRfE62iM.js";import"./small-cross-DljuEPYZ.js";import"./ActionButton-C_6ndFXd.js";import"./Checkbox-CB13yCdv.js";import"./useValueChanged-BQjqUDLK.js";import"./CollapsiblePanel-B2Uq3N6C.js";import"./MultiColumnSortDialog-CAMtj-Rk.js";import"./MenuTrigger-D31LluJF.js";import"./CompositeItem-DBfMuqlH.js";import"./ToolbarRootContext-DxevvPzB.js";import"./getDisabledMountTransitionStyles-CValGxLT.js";import"./getPseudoElementBounds-CVMAeFzS.js";import"./chevron-down-CONoZixg.js";import"./index-Cg3apMKp.js";import"./error-BqCEo41c.js";import"./BaseCbacBanner-CO2Q_1Sj.js";import"./makeExternalStore-D6RKhZ7b.js";import"./Tooltip-D9E02NM2.js";import"./PopoverPopup-DJ-rXVm_.js";import"./debounce-CI_OgJjm.js";import"./useOsdkClient-5BRGAn8B.js";import"./tick-C-umiLKj.js";import"./DropdownField--_A00rJM.js";import"./isEqual-Da2lfOp4.js";import"./withOsdkMetrics-B6N8SPwA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

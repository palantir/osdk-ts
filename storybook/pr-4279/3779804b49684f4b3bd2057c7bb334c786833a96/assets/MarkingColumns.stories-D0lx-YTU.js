import{f as p,j as e}from"./iframe-Cs9u2FNJ.js";import{O as i}from"./object-table-DdFu_d1m.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEnCUJIu.js";import"./Table-xgR2ZNdx.js";import"./index-DWrTTHxb.js";import"./Dialog-DiYfLKt0.js";import"./cross-Jki0Zf7X.js";import"./svgIconContainer-bmBt8PNs.js";import"./useBaseUiId-B04InLuC.js";import"./InternalBackdrop-C4zV0J9w.js";import"./composite-DoMN_SNj.js";import"./index-B9LdyWis.js";import"./index-DSEOcFQR.js";import"./index-BckuHIFJ.js";import"./useEventCallback-BlrYGKuQ.js";import"./SkeletonBar-BfpfarXm.js";import"./LoadingCell-Bpgn57DX.js";import"./ColumnConfigDialog-CVAJC_Y2.js";import"./DraggableList-DOhOUNdv.js";import"./search-QgkUbhew.js";import"./Input-BxHTTwfQ.js";import"./useControlled-DWa2oiP8.js";import"./Button-_OIC0QgO.js";import"./small-cross-w_QEugk7.js";import"./ActionButton-DJ3NK00Y.js";import"./Checkbox-MEGJAx5w.js";import"./useValueChanged-CG7ACMRq.js";import"./CollapsiblePanel-DHVkTAOJ.js";import"./MultiColumnSortDialog-B1PY5m02.js";import"./MenuTrigger-Bh7W1M7b.js";import"./CompositeItem-D6sZhCIa.js";import"./ToolbarRootContext-BXn8yWld.js";import"./getDisabledMountTransitionStyles-CdijohRN.js";import"./getPseudoElementBounds-Bbihz1Zu.js";import"./chevron-down-D0MyTtqt.js";import"./index-C2_rmR-A.js";import"./error-92AiuNPh.js";import"./BaseCbacBanner-DZ_8gS-t.js";import"./makeExternalStore-CtNpDvOI.js";import"./Tooltip-DnZtYN8u.js";import"./PopoverPopup-CQEmEDo7.js";import"./debounce-BPwk5KM9.js";import"./useOsdkClient-FerZNXE5.js";import"./tick-B-5PpNSR.js";import"./DropdownField-BnI_unVW.js";import"./isEqual-Bj-z7ObL.js";import"./withOsdkMetrics-BHorCkdK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-rd5WAA9r.js";import{O as i}from"./object-table-Bow1VKQA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-lrQOG99y.js";import"./Table-DOzirBhm.js";import"./index-gTgVe7bx.js";import"./Dialog-BnUjYFDl.js";import"./cross-D4_Lw_xT.js";import"./svgIconContainer-CP_qsPw-.js";import"./useBaseUiId-CEPsQLHg.js";import"./InternalBackdrop-B3L5JllW.js";import"./composite-DkMWUUkG.js";import"./index-DSVS7Qxc.js";import"./index-DUdz8bct.js";import"./index-DmdH8ftz.js";import"./useEventCallback-BZZpTgJM.js";import"./SkeletonBar-m_pUDdbL.js";import"./LoadingCell-BWxNRdoV.js";import"./ColumnConfigDialog-BQZGYE0s.js";import"./DraggableList-Bo75mTut.js";import"./search-C5LSfE4t.js";import"./Input-DFVDug_7.js";import"./useControlled-C60801w-.js";import"./Button-C07SmwTz.js";import"./small-cross-CD337zW0.js";import"./ActionButton-BJYoXnNg.js";import"./Checkbox-DCYSSIxe.js";import"./useValueChanged-Ed2hN9-0.js";import"./CollapsiblePanel-C9Mo0Rxt.js";import"./MultiColumnSortDialog-P5ZGkivr.js";import"./MenuTrigger-DPkzKct5.js";import"./CompositeItem-LJvlu5vM.js";import"./ToolbarRootContext-SIV8jQMI.js";import"./getDisabledMountTransitionStyles-BfSqpHOL.js";import"./getPseudoElementBounds-CPoBq_PV.js";import"./chevron-down-Bd0HHDZf.js";import"./index-DdtePcPk.js";import"./error-YfyqzF-q.js";import"./BaseCbacBanner-DgglHqpD.js";import"./makeExternalStore-DLTAhcmE.js";import"./Tooltip-BRPtYRya.js";import"./PopoverPopup-BmvVKpJX.js";import"./debounce-to-gPRqa.js";import"./useOsdkClient-D69eR1Yy.js";import"./tick-BC2qBGHW.js";import"./DropdownField-CHVnKgEN.js";import"./isEqual-BjUgct-F.js";import"./withOsdkMetrics-DzBl_MBp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

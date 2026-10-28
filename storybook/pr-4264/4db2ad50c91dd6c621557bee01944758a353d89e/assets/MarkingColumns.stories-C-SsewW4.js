import{f as p,j as e}from"./iframe-JML89ya1.js";import{O as i}from"./object-table-CB8maTQ9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CM_flLUX.js";import"./Table-qeTnIn3M.js";import"./index-Dc7pQO3f.js";import"./Dialog-Dv4Dy1qa.js";import"./cross-CdcqVyzX.js";import"./svgIconContainer-Cy1tbGmj.js";import"./useBaseUiId-ClxBcpvR.js";import"./InternalBackdrop-21DC1z9N.js";import"./composite-lR6NpWTP.js";import"./index-DlPnlhaK.js";import"./index-BPJRAXu1.js";import"./index-BslB55NL.js";import"./useEventCallback-3tK8gcTN.js";import"./SkeletonBar-DaW4uBaB.js";import"./LoadingCell-sPjm8bHN.js";import"./ColumnConfigDialog-C-mfnaNB.js";import"./DraggableList-quiv3NLh.js";import"./search-BoZa_HcP.js";import"./Input-BPVftMna.js";import"./useControlled-Dmeb-XiS.js";import"./Button-B2QAh7AV.js";import"./small-cross-CmBmU6Im.js";import"./ActionButton-nJprY3R-.js";import"./Checkbox-B7RLfOUI.js";import"./useValueChanged--jLvROzt.js";import"./CollapsiblePanel-Dd_2bttq.js";import"./MultiColumnSortDialog-BC0gIDZO.js";import"./MenuTrigger-CeIqBMEF.js";import"./CompositeItem-DNfCdbW9.js";import"./ToolbarRootContext-CcT7wUi-.js";import"./getDisabledMountTransitionStyles-BiUI-Q9G.js";import"./getPseudoElementBounds-Idti6r53.js";import"./chevron-down-CvzFuZ8A.js";import"./index-liHaAzJ1.js";import"./error-yEc2n_E2.js";import"./BaseCbacBanner-CjRDdOMd.js";import"./makeExternalStore-C3BRy9aQ.js";import"./Tooltip-DuubpmlS.js";import"./PopoverPopup-DmwxW2Ka.js";import"./debounce-BR8LXPlV.js";import"./useOsdkClient-_gvl4Rg0.js";import"./tick-KkkII5Mi.js";import"./DropdownField-C9yxcGzD.js";import"./isEqual-Sm80VB3L.js";import"./withOsdkMetrics-DBKIKizN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BceyKPSs.js";import{O as i}from"./object-table-DwP0jjRX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yl7T0Sh3.js";import"./Table-CaxlUyV_.js";import"./index-CWhFTZFr.js";import"./Dialog-BgVnsqSX.js";import"./cross-hF_e54Dm.js";import"./svgIconContainer-DHBvckaf.js";import"./useBaseUiId-DuopilVp.js";import"./InternalBackdrop-ByNuEfNh.js";import"./composite-G6x_R6vo.js";import"./index-BWoCeqh_.js";import"./index-DKSJHSMW.js";import"./index-DDe6bujp.js";import"./useEventCallback-CRSexT8I.js";import"./SkeletonBar--BrMhexG.js";import"./LoadingCell-BlOfqsm4.js";import"./ColumnConfigDialog-DTC6gr-T.js";import"./DraggableList-liBL9omR.js";import"./search-DxqUxhlP.js";import"./Input-qZlbTLRL.js";import"./useControlled-B18pPgNn.js";import"./Button-mBgKjA3l.js";import"./small-cross-8sK4dG9o.js";import"./ActionButton-BjqsUD18.js";import"./Checkbox-B6a4UAcv.js";import"./useValueChanged-C4QJqrzM.js";import"./CollapsiblePanel-CSXtlR60.js";import"./MultiColumnSortDialog-yqCZ1Co2.js";import"./MenuTrigger-18tbTMz8.js";import"./CompositeItem-Birb3K4T.js";import"./ToolbarRootContext-C0EbIhmv.js";import"./getDisabledMountTransitionStyles-MmSx2tzL.js";import"./getPseudoElementBounds-WloO4hnG.js";import"./chevron-down-DvCtF5Hi.js";import"./index-CkN3vfzY.js";import"./error-86GovzKd.js";import"./BaseCbacBanner-C0a3vjbd.js";import"./makeExternalStore-DbwWgrB9.js";import"./Tooltip-LBFkq7-6.js";import"./PopoverPopup-cfS-G607.js";import"./debounce-DvZQ3nsC.js";import"./useOsdkClient-MTCW5dT-.js";import"./tick-8XyD1qba.js";import"./DropdownField-GN9Pyic1.js";import"./isEqual-koITs_Dm.js";import"./withOsdkMetrics-DHwnoxLF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

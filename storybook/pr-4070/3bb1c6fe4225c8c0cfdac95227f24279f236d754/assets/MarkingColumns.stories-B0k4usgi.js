import{f as p,j as e}from"./iframe-NgqvngwL.js";import{O as i}from"./object-table-zSHAdfRU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7qDpPhw.js";import"./Table-C9WrHZ03.js";import"./index-qNBEcOe2.js";import"./Dialog-BZx82TGU.js";import"./cross-B13Y_yM6.js";import"./svgIconContainer-Dg9noX_E.js";import"./useBaseUiId-usyGi_EF.js";import"./InternalBackdrop-irI5Oo7V.js";import"./composite-D8ywKD-R.js";import"./index-PMXb-wuA.js";import"./index-DpzlvyBx.js";import"./index-DUSkmaua.js";import"./useEventCallback-DrH7Jh0v.js";import"./SkeletonBar-BEIw4nVm.js";import"./LoadingCell-T6PSs_OS.js";import"./ColumnConfigDialog-pT1NqsXO.js";import"./DraggableList-5foGUvEP.js";import"./search-Dwv2h1CQ.js";import"./Input-CVgaaiBC.js";import"./useControlled-eXO0aHwT.js";import"./Button-oU3-hekz.js";import"./small-cross-DVdjFEnO.js";import"./ActionButton-B466E0uY.js";import"./Checkbox-BylebwwO.js";import"./useValueChanged-DiEkonDj.js";import"./CollapsiblePanel-BGz8oV02.js";import"./MultiColumnSortDialog-CFcjieBc.js";import"./MenuTrigger-DReTHaj0.js";import"./CompositeItem-C3cyTcS-.js";import"./ToolbarRootContext-CPIM7tk6.js";import"./getDisabledMountTransitionStyles-Dx4TXj1A.js";import"./getPseudoElementBounds-D1HMYsHr.js";import"./chevron-down-Bn4ZfVbM.js";import"./index-DktHhzQs.js";import"./error-BXs3tL6Z.js";import"./BaseCbacBanner-DnEMMlwl.js";import"./makeExternalStore-BhuLMaNX.js";import"./Tooltip-C4PI_X-z.js";import"./PopoverPopup-U9kUO_es.js";import"./debounce-CuGvF61s.js";import"./useOsdkClient-CbLO7ws_.js";import"./tick-BX_Ynmx5.js";import"./DropdownField-fe_Mf-M6.js";import"./isEqual-CoLabZFb.js";import"./withOsdkMetrics-pTfsj7aC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

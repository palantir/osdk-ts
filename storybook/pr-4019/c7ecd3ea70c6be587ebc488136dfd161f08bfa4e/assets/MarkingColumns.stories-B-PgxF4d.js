import{f as p,j as e}from"./iframe-1Dw8hxFb.js";import{O as i}from"./object-table-BQSrfIgk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CV62D7uV.js";import"./Table-cECXhRXy.js";import"./index-BA__U3Gv.js";import"./Dialog-B_I-e6H5.js";import"./cross-D8760vWj.js";import"./svgIconContainer-D7jaIK1U.js";import"./useBaseUiId-D9Uc1gUI.js";import"./InternalBackdrop-DfOcQBOz.js";import"./composite-DMMpwO4Y.js";import"./index-Bk6hiZ0z.js";import"./index-FZsLUXa_.js";import"./index-CZwrVmPB.js";import"./useEventCallback-Ba_Pm_qQ.js";import"./SkeletonBar-JCt3RZbD.js";import"./LoadingCell-Ch8y5zgH.js";import"./ColumnConfigDialog-BCWRXHCN.js";import"./DraggableList-CqD_Wsql.js";import"./search-D_WMSsbB.js";import"./Input-DAIYzExG.js";import"./useControlled-BPQdQUzw.js";import"./Button-Dz_i3O8s.js";import"./small-cross-BTH7BlRY.js";import"./ActionButton-JzwOBgff.js";import"./Checkbox-DIYjSDeg.js";import"./useValueChanged-CY-MG59r.js";import"./CollapsiblePanel-BdgCVUfb.js";import"./MultiColumnSortDialog-DC_lUuFq.js";import"./MenuTrigger-CSrRdHFi.js";import"./CompositeItem-wJjKayF5.js";import"./ToolbarRootContext-DY2ntbcg.js";import"./getDisabledMountTransitionStyles-LDeu4Eg7.js";import"./getPseudoElementBounds-BR8haHch.js";import"./chevron-down-CctmHm9l.js";import"./index-C6j9YUgP.js";import"./error-CQRvTwte.js";import"./BaseCbacBanner-D1C4qKBB.js";import"./makeExternalStore-BxvWPf6c.js";import"./Tooltip-Cuzk6KX0.js";import"./PopoverPopup-UQJaLJOh.js";import"./debounce-aPhAAe4A.js";import"./useOsdkClient-B0vBm4Kq.js";import"./tick-DkycAfLr.js";import"./DropdownField-BQ7eO3O0.js";import"./isEqual-Cpx1W7t4.js";import"./withOsdkMetrics-DttttaWM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

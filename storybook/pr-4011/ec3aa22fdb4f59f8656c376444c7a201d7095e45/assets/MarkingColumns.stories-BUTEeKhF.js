import{f as p,j as e}from"./iframe-DdU1btI5.js";import{O as i}from"./object-table-D44as4zk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJIdcoC_.js";import"./Table-B5RIyH7v.js";import"./index-Bjdg2prT.js";import"./Dialog-BehTEpFP.js";import"./cross-DezMrsVo.js";import"./svgIconContainer-CevOR6cS.js";import"./useBaseUiId-BlXBlP0f.js";import"./InternalBackdrop-Btm-Z_2t.js";import"./composite-DKrCSbZ1.js";import"./index-CyCoQlJK.js";import"./index-CzZ9sR41.js";import"./index-BG8iFfop.js";import"./useEventCallback-CG7YyhyL.js";import"./SkeletonBar-BcdtXClT.js";import"./LoadingCell-D0aLZKOH.js";import"./ColumnConfigDialog-DWdFLUlW.js";import"./DraggableList-C0JVloPf.js";import"./search-DFTmIh4d.js";import"./Input-DBMe1jVC.js";import"./useControlled-BwHcuxO_.js";import"./Button-DOSUJ3M5.js";import"./small-cross-Qx7h4_xT.js";import"./ActionButton-WG4ypQCg.js";import"./Checkbox-BsmxXmhs.js";import"./useValueChanged-CZIiffVu.js";import"./CollapsiblePanel-DJJzQ09o.js";import"./MultiColumnSortDialog-mzJ0a9dw.js";import"./MenuTrigger-D6zsRA52.js";import"./CompositeItem-Dd62h_6-.js";import"./ToolbarRootContext--cZJ7PMX.js";import"./getDisabledMountTransitionStyles-BV0-CpFZ.js";import"./getPseudoElementBounds-DvL2rk6a.js";import"./chevron-down-BBg4HQxv.js";import"./index-I-zAiBXy.js";import"./error-NWRP_Q29.js";import"./BaseCbacBanner-B54bFTJG.js";import"./makeExternalStore-BXvxNDLv.js";import"./Tooltip-DNChs3yX.js";import"./PopoverPopup-DiH0uZZ4.js";import"./debounce-DZDPioJF.js";import"./useOsdkClient-DAa6LI-X.js";import"./tick-DBSn5IWS.js";import"./DropdownField-Fpq8W5FQ.js";import"./isEqual-Cy9j0AGB.js";import"./withOsdkMetrics--yltK86k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

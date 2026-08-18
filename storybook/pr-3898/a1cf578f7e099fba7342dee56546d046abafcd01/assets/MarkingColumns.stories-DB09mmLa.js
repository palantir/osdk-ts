import{f as p,j as e}from"./iframe-DdQFRxp3.js";import{O as i}from"./object-table-CgU8zier.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DRTLQAg9.js";import"./Table-BewXHTi-.js";import"./index-TaYeYo9P.js";import"./Dialog-CzfsQsmI.js";import"./cross-sSLLNBfX.js";import"./svgIconContainer-uAn5cIaB.js";import"./useBaseUiId-vUIL2zRu.js";import"./InternalBackdrop-Bgn-yQPf.js";import"./composite-CE_Dj80Q.js";import"./index-CWWT09XN.js";import"./index-sOpdPN6D.js";import"./index-DGUr0vQ-.js";import"./useEventCallback-C4t0hT56.js";import"./SkeletonBar-BH6A2cWm.js";import"./LoadingCell-T8jVQDBg.js";import"./ColumnConfigDialog-CrTRCubR.js";import"./DraggableList-BYhvoQND.js";import"./search-nJivgl6W.js";import"./Input-Dylmv0nm.js";import"./useControlled-Cq-T_M7n.js";import"./Button-BdP51mHG.js";import"./small-cross-DH6TZDYg.js";import"./ActionButton-BdbE3v1s.js";import"./Checkbox-B87kemOG.js";import"./useValueChanged-C4HM5Mz3.js";import"./CollapsiblePanel-C7y-Kvqx.js";import"./MultiColumnSortDialog-DDxvjfEB.js";import"./MenuTrigger-BSqX7Abh.js";import"./CompositeItem-8f3x543_.js";import"./ToolbarRootContext-DCNtGQN6.js";import"./getDisabledMountTransitionStyles-J12WueKr.js";import"./getPseudoElementBounds-BLRtQhLY.js";import"./chevron-down-BosSoN29.js";import"./index-mv95Zkl0.js";import"./error-CvWe5-Ao.js";import"./BaseCbacBanner-DfdGEvuA.js";import"./makeExternalStore-peJQO0Rf.js";import"./Tooltip-aHmx8fwV.js";import"./PopoverPopup-DNY153Hn.js";import"./debounce-CJMKILxf.js";import"./useOsdkClient-zD-chn6z.js";import"./tick-dWysx9EM.js";import"./DropdownField-DncUGCO2.js";import"./isEqual-C1cjFRCW.js";import"./withOsdkMetrics-Bp0vBcfz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

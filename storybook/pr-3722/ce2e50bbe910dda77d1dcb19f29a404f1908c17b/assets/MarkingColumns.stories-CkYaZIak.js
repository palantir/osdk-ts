import{f as p,j as e}from"./iframe-BKo2uFPD.js";import{O as i}from"./object-table--uvopYI4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bp44i-n6.js";import"./Table-DLy9dLth.js";import"./index-CVRtTsuh.js";import"./Dialog-3yLgbqDf.js";import"./cross-B7OXBUo9.js";import"./svgIconContainer-BGezaTTE.js";import"./useBaseUiId-CyDgzil7.js";import"./InternalBackdrop-CfKaRIjC.js";import"./composite-ohdRGAbz.js";import"./index-176BX6Gy.js";import"./index-CAT4j1UC.js";import"./index-DvhohFWf.js";import"./useEventCallback-8ELyeGQL.js";import"./SkeletonBar-CAm-5KM5.js";import"./LoadingCell-BYCKtADG.js";import"./ColumnConfigDialog-BywMoXrT.js";import"./DraggableList-ClhOvPyk.js";import"./search-DoqkvAor.js";import"./Input-D_-Ck7Be.js";import"./useControlled-B1uvXyTX.js";import"./isEqual-ChoRrggN.js";import"./isObject-CHJs29jC.js";import"./Button-DKTycR-o.js";import"./ActionButton-B8eBx3Sp.js";import"./Checkbox-CkxtCoz_.js";import"./useValueChanged-bDL04ho1.js";import"./CollapsiblePanel-CDZAOX5Q.js";import"./MultiColumnSortDialog-BaZVpRPw.js";import"./MenuTrigger-DlM1lBBm.js";import"./CompositeItem-BcVlMzq9.js";import"./ToolbarRootContext-TkHSZSpS.js";import"./getDisabledMountTransitionStyles-CCfkFHIn.js";import"./getPseudoElementBounds-GgjX_pOf.js";import"./chevron-down-CqPslCtx.js";import"./index-W5UCG72k.js";import"./error-BRu96KcQ.js";import"./BaseCbacBanner-CufzgaK8.js";import"./makeExternalStore-Q-JusHk-.js";import"./Tooltip-_T3k_9b7.js";import"./PopoverPopup-5BU63t1e.js";import"./toNumber-IXfGjFvS.js";import"./useOsdkClient-Dnb_DEz7.js";import"./tick-BeEvT60g.js";import"./DropdownField-ByzPjfZ2.js";import"./withOsdkMetrics-DBwDZ3nQ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

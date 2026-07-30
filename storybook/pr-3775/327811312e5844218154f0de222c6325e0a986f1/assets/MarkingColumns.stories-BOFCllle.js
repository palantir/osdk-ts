import{f as p,j as e}from"./iframe-Dt0Ahp7v.js";import{O as i}from"./object-table-C7lON5md.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Csxsg529.js";import"./Table-CEI-Num5.js";import"./index-DKNyxDiu.js";import"./Dialog-Dtjx5p-C.js";import"./cross-DRzxKD9P.js";import"./svgIconContainer-CB7_PxJy.js";import"./useBaseUiId-CdwE49_c.js";import"./InternalBackdrop-DXzVZsqm.js";import"./composite-RqLHFCRB.js";import"./index-DgQ3UFA5.js";import"./index-BrDzKhkc.js";import"./index-raFJTOQN.js";import"./useEventCallback-wrrEUMLU.js";import"./SkeletonBar-l9KRBROl.js";import"./LoadingCell-CO5NOT5a.js";import"./ColumnConfigDialog-BGZCh411.js";import"./DraggableList-Bz08LFBa.js";import"./search-CMt_GG0Z.js";import"./Input-BG_Aon1B.js";import"./useControlled-LVr7DFLg.js";import"./isEqual-BxFB4iwO.js";import"./isObject-CDU1KAZx.js";import"./Button-Du4-mwXs.js";import"./ActionButton-Cv8Q47bY.js";import"./Checkbox-Ssgs7t0h.js";import"./useValueChanged-B0uXxmiT.js";import"./CollapsiblePanel-DBgJLNcW.js";import"./MultiColumnSortDialog-CDU5j975.js";import"./MenuTrigger-CmkyV0y8.js";import"./CompositeItem-pKV5GE2B.js";import"./ToolbarRootContext-BdRkmkbo.js";import"./getDisabledMountTransitionStyles-CPh35wbM.js";import"./getPseudoElementBounds-BorjMQgh.js";import"./chevron-down-DNCAQpBE.js";import"./index-wINFjYfg.js";import"./error-DG09RTcC.js";import"./BaseCbacBanner-BbbOdFTy.js";import"./makeExternalStore-BYkIgxdy.js";import"./Tooltip-D9Gho6OQ.js";import"./PopoverPopup-qJvh0xU8.js";import"./toNumber-ju4VPkOz.js";import"./useOsdkClient-BB1GGDEB.js";import"./tick-2io-CBPy.js";import"./DropdownField-wOiC2tMo.js";import"./withOsdkMetrics-8vUC6id2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

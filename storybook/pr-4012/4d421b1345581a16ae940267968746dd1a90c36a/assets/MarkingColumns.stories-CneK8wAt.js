import{f as p,j as e}from"./iframe-DMskF-Tm.js";import{O as i}from"./object-table-WoGqcip2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zdHiINLH.js";import"./Table-Bkp_2Snu.js";import"./index-DLe4u5Oe.js";import"./Dialog-DHH8wSIe.js";import"./cross-CwAqVkgp.js";import"./svgIconContainer-CNoR15u0.js";import"./useBaseUiId-IzXs79SE.js";import"./InternalBackdrop-BbQxkn3u.js";import"./composite-bCuvd1w6.js";import"./index-BQNk_jze.js";import"./index-1EVlbohU.js";import"./index-BS55zaCl.js";import"./useEventCallback-DVDdrM3Z.js";import"./SkeletonBar-BdaE-4d-.js";import"./LoadingCell-TanHUCuh.js";import"./ColumnConfigDialog-BmK0FFPZ.js";import"./DraggableList-DdJdey2g.js";import"./search-CZUSf-yV.js";import"./Input-D-LAYNYb.js";import"./useControlled-CLoeMU3z.js";import"./Button-BNzcwfr4.js";import"./small-cross-BYWrk9uQ.js";import"./ActionButton-WEyIvEvK.js";import"./Checkbox-msJ9Xjhm.js";import"./useValueChanged-BLXHgZ07.js";import"./CollapsiblePanel-DQIxvF0N.js";import"./MultiColumnSortDialog-t1cg3wy1.js";import"./MenuTrigger-BochQ1EN.js";import"./CompositeItem-BdlugdAy.js";import"./ToolbarRootContext-Br2QKeOd.js";import"./getDisabledMountTransitionStyles-CoA3FrXT.js";import"./getPseudoElementBounds-cZixjbuq.js";import"./chevron-down-D2q20rMp.js";import"./index-BKGUEF_C.js";import"./error-pEWPvW42.js";import"./BaseCbacBanner-DRtxjRMH.js";import"./makeExternalStore-TRQMkypD.js";import"./Tooltip-kEiuDs1k.js";import"./PopoverPopup-BtNKZ5QB.js";import"./debounce-Dl0Z3g8R.js";import"./useOsdkClient-C_CyCy1E.js";import"./tick-CEX6N7wE.js";import"./DropdownField-DAhq5OSj.js";import"./isEqual-C098p3mp.js";import"./withOsdkMetrics-Dwd24s1O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

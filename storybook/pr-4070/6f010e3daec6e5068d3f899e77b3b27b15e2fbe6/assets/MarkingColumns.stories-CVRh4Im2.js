import{f as p,j as e}from"./iframe-cnARutXL.js";import{O as i}from"./object-table-KIs2Y_92.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmFSLRtI.js";import"./Table-BZDr9MPT.js";import"./index-DFLlU5DH.js";import"./Dialog-DxJLRM1k.js";import"./cross-PEBZaCxU.js";import"./svgIconContainer-BYzMgWJS.js";import"./useBaseUiId-D3qiS2j7.js";import"./InternalBackdrop-DicU1YCw.js";import"./composite-B8QB1mMF.js";import"./index-BH1BAqhj.js";import"./index-WfGsRQkJ.js";import"./index-DqmPoYcz.js";import"./useEventCallback-aBWFD298.js";import"./SkeletonBar-BQ6YS2N6.js";import"./LoadingCell-pS64WJpB.js";import"./ColumnConfigDialog-BHjWdYyi.js";import"./DraggableList-DGr317oE.js";import"./search-C7s-xGFv.js";import"./Input-DDwYvpo2.js";import"./useControlled-C2e7ttGZ.js";import"./Button-6fdr9V7a.js";import"./small-cross-zWY6BCii.js";import"./ActionButton-BDfWPIo4.js";import"./Checkbox-Cug8zVJm.js";import"./useValueChanged-CrFeGRAw.js";import"./CollapsiblePanel-CGfN3i0K.js";import"./MultiColumnSortDialog-YoqkDwqG.js";import"./MenuTrigger-CTBkW1T4.js";import"./CompositeItem-BZ25FDYT.js";import"./ToolbarRootContext-Cpm7XsDL.js";import"./getDisabledMountTransitionStyles-BkvoD3fE.js";import"./getPseudoElementBounds-BOblesbJ.js";import"./chevron-down-B7Voti3u.js";import"./index-W_p-C1mB.js";import"./error-D4N7FIX9.js";import"./BaseCbacBanner-C52atT9s.js";import"./makeExternalStore-CokpyCaz.js";import"./Tooltip-DAflEiX-.js";import"./PopoverPopup-C0e4SK-g.js";import"./debounce-CAhzqkJ2.js";import"./useOsdkClient-bAUKHK9v.js";import"./tick-UclQVZct.js";import"./DropdownField-CsNVs2BB.js";import"./isEqual-Cnxkpuk4.js";import"./withOsdkMetrics-Cob5tlpP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

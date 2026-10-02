import{f as p,j as e}from"./iframe-Btqvg51n.js";import{O as i}from"./object-table-Kr1LIz9k.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-syhdZDkE.js";import"./Table-C-PPsSqH.js";import"./index-BD28I-pc.js";import"./Dialog-Bb1DWAWa.js";import"./cross-4sLVfr-a.js";import"./svgIconContainer-DO6E7UDs.js";import"./useBaseUiId-BkjQeUzK.js";import"./InternalBackdrop-XTodM-Lf.js";import"./composite-DISAoOje.js";import"./index-C-bm7M0d.js";import"./index-DI6u9RXJ.js";import"./index-C1ab4uqR.js";import"./useEventCallback-Birv-DIv.js";import"./SkeletonBar-g4Zrl_9a.js";import"./LoadingCell-BKaFduDq.js";import"./ColumnConfigDialog-BUzzW8EJ.js";import"./DraggableList-CZHyxGin.js";import"./search-CS3jZQxq.js";import"./Input-DshYp2Vv.js";import"./useControlled-sKyg4XQp.js";import"./Button-Cjefz3Ec.js";import"./small-cross-DDu4FjQa.js";import"./ActionButton-DPOxkhPL.js";import"./Checkbox-B2j86Kyh.js";import"./useValueChanged-CGpXR8sb.js";import"./CollapsiblePanel-P1TD94b_.js";import"./MultiColumnSortDialog-C6PMzrn_.js";import"./MenuTrigger-D40aaK9L.js";import"./CompositeItem-QpGH5PhM.js";import"./ToolbarRootContext-AyD5CGSz.js";import"./getDisabledMountTransitionStyles-Dj_QuE4i.js";import"./getPseudoElementBounds-DXcg_kO_.js";import"./chevron-down-HGlEUxE6.js";import"./index-DFfg-m3O.js";import"./error-BHl0yOWM.js";import"./BaseCbacBanner-DvqMmJ1G.js";import"./makeExternalStore-D879CjGU.js";import"./Tooltip-C9dIavbW.js";import"./PopoverPopup-Dknz7An3.js";import"./debounce-BAYS4VQz.js";import"./useOsdkClient-CDUGXlsx.js";import"./tick-BmuiIbFi.js";import"./DropdownField-DQbsKt9D.js";import"./isEqual-tsaj_REN.js";import"./withOsdkMetrics-D8UgdzXc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

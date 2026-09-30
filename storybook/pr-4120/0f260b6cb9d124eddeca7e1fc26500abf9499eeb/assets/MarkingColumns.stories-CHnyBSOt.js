import{f as p,j as e}from"./iframe-D_LKzUXQ.js";import{O as i}from"./object-table-BchkJ-Em.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2fv74GlU.js";import"./Table-F3rcyGFs.js";import"./index-BPEb3ehC.js";import"./Dialog-WWjQgLVx.js";import"./cross-CCKxEsOh.js";import"./svgIconContainer-DG_1Q-tY.js";import"./useBaseUiId-BXLolyby.js";import"./InternalBackdrop-asWjbBnz.js";import"./composite-5BerH0eb.js";import"./index-DNSIml9_.js";import"./index-mwOrEPHi.js";import"./index-B3oHgBYy.js";import"./useEventCallback-D0iVUQFt.js";import"./SkeletonBar-BbsrKIs5.js";import"./LoadingCell-DEdSw60Z.js";import"./ColumnConfigDialog-C2H2qnB0.js";import"./DraggableList-DAeeociK.js";import"./search-C0zqzJLG.js";import"./Input-CHcldx9v.js";import"./useControlled-Dzikzr9a.js";import"./Button-o_hXJy7p.js";import"./small-cross-BDTx6akH.js";import"./ActionButton-ebUdVosY.js";import"./Checkbox-5X1ZQ4KX.js";import"./useValueChanged-BP5iuKzH.js";import"./CollapsiblePanel-C4EqNm8Y.js";import"./MultiColumnSortDialog-CQZVlwfk.js";import"./MenuTrigger-BpqOgltM.js";import"./CompositeItem-BWjfeaLs.js";import"./ToolbarRootContext-CaB66j5D.js";import"./getDisabledMountTransitionStyles-BjArrEX_.js";import"./getPseudoElementBounds-LjVBvCza.js";import"./chevron-down-Cbs_q2nL.js";import"./index-Ovo3sWxh.js";import"./error-CNMY2Oh1.js";import"./BaseCbacBanner-BbS5LMra.js";import"./makeExternalStore-WNQzhlnt.js";import"./Tooltip-D1QNS5SS.js";import"./PopoverPopup-DogzSAr-.js";import"./debounce-B6oiERcW.js";import"./useOsdkClient-CLGEaWRs.js";import"./tick-B_dnXVgZ.js";import"./DropdownField-NQ1Fw51O.js";import"./isEqual-CgRG_MjP.js";import"./withOsdkMetrics-CJQ6Lm1u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

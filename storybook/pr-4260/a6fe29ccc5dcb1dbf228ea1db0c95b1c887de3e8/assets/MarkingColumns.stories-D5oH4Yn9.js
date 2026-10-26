import{f as p,j as e}from"./iframe-CoFJxwHv.js";import{O as i}from"./object-table-BqrQ0y8E.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-SgnzBV.js";import"./Table-BYQbvbey.js";import"./index--Ea47wZq.js";import"./Dialog-WY18wqP5.js";import"./cross-OzyUyhBS.js";import"./svgIconContainer-DEFqmnfP.js";import"./useBaseUiId-2pTyOHN-.js";import"./InternalBackdrop-CW-JCB6u.js";import"./composite-D_cfAskA.js";import"./index-Cisz4sZL.js";import"./index-DB_u2R0T.js";import"./index-Bm20SrpM.js";import"./useEventCallback-S_u0-aCp.js";import"./SkeletonBar-qgco6YeA.js";import"./LoadingCell-CsadYx2G.js";import"./ColumnConfigDialog-Cul_FFgo.js";import"./DraggableList-BW_0kdA5.js";import"./search-XDurstN3.js";import"./Input-DKwzPwJ8.js";import"./useControlled-BYI1O7tr.js";import"./Button-2n8pstyv.js";import"./small-cross-CkY1R3ge.js";import"./ActionButton-NKKyQGHP.js";import"./Checkbox-Dt5HZSzU.js";import"./useValueChanged-Bzeit28k.js";import"./CollapsiblePanel-0TCT3zQ_.js";import"./MultiColumnSortDialog-B8a_YiXG.js";import"./MenuTrigger-CGyqBT_S.js";import"./CompositeItem-Ca1TKgPn.js";import"./ToolbarRootContext-wMltP8Ko.js";import"./getDisabledMountTransitionStyles-5g03uBQa.js";import"./getPseudoElementBounds-C6R4Oz02.js";import"./chevron-down-BlDOgSlD.js";import"./index-DqO9YIyX.js";import"./error-D5A6w5ju.js";import"./BaseCbacBanner-Dxfw8WWQ.js";import"./makeExternalStore-w2_wLIak.js";import"./Tooltip-U-nAk7Io.js";import"./PopoverPopup-B30sWIBx.js";import"./debounce-OWWmpWc0.js";import"./useOsdkClient-u5ILwDJn.js";import"./tick-BeCAXAuB.js";import"./DropdownField-CBHpKdZq.js";import"./isEqual-DVlAt4ne.js";import"./withOsdkMetrics-CWJx0Uh8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

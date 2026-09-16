import{f as p,j as e}from"./iframe-CRcSxZM8.js";import{O as i}from"./object-table-uBn8zBa_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZugcXPGT.js";import"./Table-CeizOyHS.js";import"./index-g1O5dw2n.js";import"./Dialog-DVOZgr_y.js";import"./cross-C5cQzVwl.js";import"./svgIconContainer-BqvfQ7m-.js";import"./useBaseUiId-CR1J1kR-.js";import"./InternalBackdrop-fCyetKcK.js";import"./composite-BjyHBRpa.js";import"./index-Xkx1Z8NF.js";import"./index-DYDBkDSv.js";import"./index-bGeYwVt0.js";import"./useEventCallback-b4efgYNg.js";import"./SkeletonBar-DF8L9OI9.js";import"./LoadingCell-DSxJ4lXT.js";import"./ColumnConfigDialog-BK0vGz9A.js";import"./DraggableList-DyMfJ-4v.js";import"./search-D6xupaDO.js";import"./Input-CNRyhWNO.js";import"./useControlled-DQ_eI8kZ.js";import"./Button-BJQF3YiE.js";import"./small-cross-DOBXkRH7.js";import"./ActionButton-Bd8xK1wy.js";import"./Checkbox-CSgH1SYO.js";import"./useValueChanged-1Q-vBWTO.js";import"./CollapsiblePanel-CJg7yaup.js";import"./MultiColumnSortDialog-oQ4vf-Ce.js";import"./MenuTrigger-D8y_stY7.js";import"./CompositeItem-Bm_HuJxQ.js";import"./ToolbarRootContext-Ca7X_ytn.js";import"./getDisabledMountTransitionStyles-_vmGqUmn.js";import"./getPseudoElementBounds-C1tiKeFn.js";import"./chevron-down-D5oDo9t-.js";import"./index-DLIQOwa5.js";import"./error-Dn8wlh4f.js";import"./BaseCbacBanner-CPk0CIOw.js";import"./makeExternalStore-C137KZPA.js";import"./Tooltip-CEnfBt0P.js";import"./PopoverPopup-BFEF8WU9.js";import"./debounce-CipQE0Vz.js";import"./useOsdkClient-BMdzqGfU.js";import"./tick-B26TJQOE.js";import"./DropdownField-Cr1UeBNB.js";import"./isEqual-BUgFxM2N.js";import"./withOsdkMetrics-D8xbJlmg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-CCxrc5uu.js";import{O as i}from"./object-table-DI19Dn93.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9q9R3OD.js";import"./Table-DuVW994G.js";import"./index-qDidCFPc.js";import"./Dialog-C1rBLM2C.js";import"./cross-BmJWQ0-J.js";import"./svgIconContainer-CkLZQvG4.js";import"./useBaseUiId-BGcK0dYJ.js";import"./InternalBackdrop-BUKfKa7j.js";import"./composite-BPcLlFHy.js";import"./index-XpQZglWM.js";import"./index-DgxjKFwf.js";import"./index-uaSS-Si1.js";import"./useEventCallback-Ca7G1v-t.js";import"./SkeletonBar-CkGNgeFP.js";import"./LoadingCell-BW3EJQ88.js";import"./ColumnConfigDialog-BKcwryLe.js";import"./DraggableList-2wkOenVS.js";import"./search-jlcS54Ws.js";import"./Input-D9VrK1lm.js";import"./useControlled-zCfwXGMX.js";import"./Button-BxUO2cyH.js";import"./small-cross-DApQCxhT.js";import"./ActionButton-uMqfk8wS.js";import"./Checkbox-sIgy0-j4.js";import"./useValueChanged-Ba8hJIzP.js";import"./CollapsiblePanel-DTBD66wd.js";import"./MultiColumnSortDialog-B5Q9y3_f.js";import"./MenuTrigger-XXFcNZty.js";import"./CompositeItem-D76iKrer.js";import"./ToolbarRootContext-BnL2264j.js";import"./getDisabledMountTransitionStyles-Cmze2BdL.js";import"./getPseudoElementBounds-CvKBTt7E.js";import"./chevron-down-uBVJdRCo.js";import"./index-C_rJszoR.js";import"./error-ecSZs2U2.js";import"./BaseCbacBanner-CLEl47kq.js";import"./makeExternalStore-B_4U4xcV.js";import"./Tooltip-GkxQYuKb.js";import"./PopoverPopup-anKkxbKl.js";import"./debounce-Q7kSSS8k.js";import"./useOsdkClient-CdQYDJKp.js";import"./tick-DZ9D5jnu.js";import"./DropdownField-ei5pUXuj.js";import"./isEqual-KlKetUCi.js";import"./withOsdkMetrics-jldHoxNz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

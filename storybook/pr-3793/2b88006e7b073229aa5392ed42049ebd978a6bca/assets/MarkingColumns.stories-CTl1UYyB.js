import{f as p,j as e}from"./iframe-6hQ2fc3n.js";import{O as i}from"./object-table-BXVuEG0G.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bQV8UHWE.js";import"./Table-DClTy0WR.js";import"./index-B1djcyHP.js";import"./Dialog-CknjkbMC.js";import"./cross-ccjJBWTc.js";import"./svgIconContainer-Clfe7Lwj.js";import"./useBaseUiId-C9747yUz.js";import"./InternalBackdrop-CpYIKNpL.js";import"./composite-CFvNHCkP.js";import"./index-jX9mz87a.js";import"./index-K-Op5Vv5.js";import"./index-bkfQr57D.js";import"./useEventCallback-gCPFH5QV.js";import"./SkeletonBar-DnyiV29j.js";import"./LoadingCell-MA9hl1i0.js";import"./ColumnConfigDialog-BkL5BPXj.js";import"./DraggableList-DETFlm4X.js";import"./search-BuQM9KwU.js";import"./Input-BNMmRwH0.js";import"./useControlled-u3EMkLFh.js";import"./isEqual-DdWPSUaU.js";import"./isObject-CirLIJW7.js";import"./Button-VUEdQ68Q.js";import"./ActionButton-azoptpfb.js";import"./Checkbox-Ca3PYpeb.js";import"./useValueChanged-BBF2PhG7.js";import"./CollapsiblePanel-CT90hPsj.js";import"./MultiColumnSortDialog-BUqO-KoJ.js";import"./MenuTrigger-BJJvjvwi.js";import"./CompositeItem-B8ehrMS9.js";import"./ToolbarRootContext-DIDb7FlQ.js";import"./getDisabledMountTransitionStyles-Da9PJqiY.js";import"./getPseudoElementBounds-B10_-yXQ.js";import"./chevron-down-CJa2nLIB.js";import"./index-BP_HdQ9P.js";import"./error-2bwv59jW.js";import"./BaseCbacBanner-ibkm49XL.js";import"./makeExternalStore-DyCpkktA.js";import"./Tooltip-d54S_j8-.js";import"./PopoverPopup-DUz9RoFe.js";import"./toNumber-BAElQw_D.js";import"./useOsdkClient-D-d--rTZ.js";import"./tick-BJM8MNhK.js";import"./DropdownField-DANYs0wh.js";import"./withOsdkMetrics-BkqPVDva.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

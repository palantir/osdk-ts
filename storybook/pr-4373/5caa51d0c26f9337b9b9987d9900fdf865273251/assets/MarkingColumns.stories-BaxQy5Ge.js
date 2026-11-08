import{f as p,j as e}from"./iframe-DLzx97EJ.js";import{O as i}from"./object-table-Bls2cpf5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CmYTg0Pf.js";import"./Table-BPSf2wSw.js";import"./index-BEQknSG7.js";import"./Dialog-CPtbtyx7.js";import"./cross-DRLacgjp.js";import"./svgIconContainer-C-g24xF0.js";import"./useBaseUiId-CAg2kwlj.js";import"./InternalBackdrop-mcEx2LQV.js";import"./composite-TVTsKD6c.js";import"./index-CgT906ZM.js";import"./index-Cte0d9nS.js";import"./index-AfoCt9lG.js";import"./useEventCallback-DbTNteze.js";import"./SkeletonBar-Dkadgbgq.js";import"./LoadingCell-B5BixPe9.js";import"./ColumnConfigDialog-BhUEQFpf.js";import"./DraggableList-DRkFdlpE.js";import"./search-C5FqELUQ.js";import"./Input-qCKZZo4z.js";import"./useControlled-BbqDqbUq.js";import"./Button-CdJ05kOF.js";import"./small-cross-CYyVIp2I.js";import"./ActionButton-BW3xtD-H.js";import"./Checkbox-Bzjtoy4g.js";import"./useValueChanged-C73KFNzj.js";import"./CollapsiblePanel-CBgwT-zE.js";import"./MultiColumnSortDialog-BSXuZQtD.js";import"./MenuTrigger-4LTYbf6O.js";import"./CompositeItem-zOuWTjc0.js";import"./ToolbarRootContext-N07wipSz.js";import"./getDisabledMountTransitionStyles-WIr647eh.js";import"./getPseudoElementBounds-D5V_JJVH.js";import"./chevron-down-C33gMPot.js";import"./index-D_0Hlfon.js";import"./error-DMQmvEXe.js";import"./BaseCbacBanner-CQ9lL0tM.js";import"./makeExternalStore-BTZjjXmJ.js";import"./Tooltip-CyfA5k5X.js";import"./isObject-CVaKVVla.js";import"./debounce-De8aR-i4.js";import"./useOsdkClient-CSee95DU.js";import"./tick-OXHUkGbE.js";import"./DropdownField-K5yYb8ch.js";import"./isEqual-WJJYsQBD.js";import"./_baseIsEqual-B87nTnwS.js";import"./withOsdkMetrics-iNTrmMm4.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

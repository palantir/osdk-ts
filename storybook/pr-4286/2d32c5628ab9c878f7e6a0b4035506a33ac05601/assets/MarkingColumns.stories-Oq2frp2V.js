import{f as p,j as e}from"./iframe-KThmj19P.js";import{O as i}from"./object-table-jytBJMWC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw3n3hSQ.js";import"./Table-D8GgoVcl.js";import"./index-8dp596C-.js";import"./Dialog-Dzi6uxVP.js";import"./cross-DgJrOo32.js";import"./svgIconContainer-BadPSwg5.js";import"./useBaseUiId-CO0UXqZj.js";import"./InternalBackdrop-ChJvd0mJ.js";import"./composite-DhtQTRu3.js";import"./index-x3jhKnXC.js";import"./index-DlUZDviY.js";import"./index-BDhUGLnw.js";import"./useEventCallback-BfVLO6-q.js";import"./SkeletonBar-B9s5jXE0.js";import"./LoadingCell-B3jp8Y5c.js";import"./ColumnConfigDialog-Oge2l_eU.js";import"./DraggableList-vCl6DQV2.js";import"./search-WKJE02Vc.js";import"./Input-DjgUB-Rn.js";import"./useControlled-Cit5AGWi.js";import"./Button-C5g5AH7h.js";import"./small-cross-BaTPq9PI.js";import"./ActionButton-D6GsiQH8.js";import"./Checkbox-5PSmCHau.js";import"./useValueChanged-BTUlUlPU.js";import"./CollapsiblePanel-BCle4Obe.js";import"./MultiColumnSortDialog-xMkOKsWL.js";import"./MenuTrigger-BVEdcOp-.js";import"./CompositeItem-B-b-pN3u.js";import"./ToolbarRootContext-BtS_uykU.js";import"./getDisabledMountTransitionStyles-B3VVxFZG.js";import"./getPseudoElementBounds-BrM6yGow.js";import"./chevron-down-C1Y2Cd7i.js";import"./index-BzpGTle2.js";import"./error-BU9XZpJG.js";import"./BaseCbacBanner-kwcHIsZg.js";import"./makeExternalStore-BCV4KITu.js";import"./Tooltip-DQdCr4CI.js";import"./PopoverPopup-C7b8KTlQ.js";import"./debounce-CRIHmV_F.js";import"./useOsdkClient-CNuNhGD2.js";import"./tick-B1qLCmei.js";import"./DropdownField-eYleBuTJ.js";import"./isEqual-DoyI84Cq.js";import"./withOsdkMetrics-hz19pnqZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

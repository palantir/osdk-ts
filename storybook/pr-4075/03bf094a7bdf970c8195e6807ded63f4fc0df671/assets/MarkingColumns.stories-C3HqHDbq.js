import{f as p,j as e}from"./iframe-DkDai4TH.js";import{O as i}from"./object-table-CKGq-Yt0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JjUJzXXj.js";import"./Table-CBsiQDO9.js";import"./index-DY9rgq0e.js";import"./Dialog-x7L3Jod8.js";import"./cross-CAMMsTtN.js";import"./svgIconContainer-Cn4a8-GP.js";import"./useBaseUiId-BSkkBPAh.js";import"./InternalBackdrop-BgXmZwAB.js";import"./composite-CiXUPQeJ.js";import"./index-BmkcSWO6.js";import"./index-Lc08usjZ.js";import"./index-BwIhbgz8.js";import"./useEventCallback-BdoVLZK3.js";import"./SkeletonBar-d-dHv_j1.js";import"./LoadingCell-D2qX3LGd.js";import"./ColumnConfigDialog-CJl5tyvK.js";import"./DraggableList-CAN0mdih.js";import"./search-BHsfUlEN.js";import"./Input-Gi5Qq_w9.js";import"./useControlled-IY8Qa8dX.js";import"./Button-DKQFkDWL.js";import"./small-cross-DufbcP5m.js";import"./ActionButton-BfkacCWq.js";import"./Checkbox-B_asvOXP.js";import"./useValueChanged-BTwI4cyE.js";import"./CollapsiblePanel-EPxbZj4y.js";import"./MultiColumnSortDialog-CQaLv06I.js";import"./MenuTrigger-ClPp8RLZ.js";import"./CompositeItem-CMeIJ5rV.js";import"./ToolbarRootContext-BkXkRhp8.js";import"./getDisabledMountTransitionStyles-BtJBdJGG.js";import"./getPseudoElementBounds-C0JH-KZ8.js";import"./chevron-down-Do0LaDJ6.js";import"./index-CTVvDnPL.js";import"./error-CLEog6-B.js";import"./BaseCbacBanner-I9lKXzUo.js";import"./makeExternalStore-DYuRaPVt.js";import"./Tooltip-n8ZLzRPP.js";import"./PopoverPopup-D8lgugCY.js";import"./debounce-q25jq-DY.js";import"./useOsdkClient-CDwu3CFW.js";import"./tick-BTFlyx2h.js";import"./DropdownField-tN5gNLvn.js";import"./isEqual-Dc02W0EF.js";import"./withOsdkMetrics-CNRukvHq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

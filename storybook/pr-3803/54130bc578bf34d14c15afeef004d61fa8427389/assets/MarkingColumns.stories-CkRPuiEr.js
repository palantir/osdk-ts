import{f as p,j as e}from"./iframe-S-vStvKN.js";import{O as i}from"./object-table-Bc2gw699.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJgwrY7C.js";import"./Table-DpsOR7BT.js";import"./index-CbjwQjV5.js";import"./Dialog-BbuSvdGx.js";import"./cross-BYqG8NZ_.js";import"./svgIconContainer-BJmrTafn.js";import"./useBaseUiId-C0o_RGcW.js";import"./InternalBackdrop-CI81YycS.js";import"./composite-wryo-yVl.js";import"./index-BSoJFv-J.js";import"./index-BAYRy6lS.js";import"./index-B6dHyZSn.js";import"./useEventCallback-C_bR-xWa.js";import"./SkeletonBar-Cs7INo5x.js";import"./LoadingCell-j08RKrR3.js";import"./ColumnConfigDialog-CHXdiGh3.js";import"./DraggableList-CgAY9KZb.js";import"./search-C-pD2cWO.js";import"./Input-BSmAlFZc.js";import"./useControlled-C5Iajxos.js";import"./isEqual-yH-WgjXi.js";import"./isObject-x2M0ZODa.js";import"./Button-DDxw7Nns.js";import"./ActionButton-4oAoiF6k.js";import"./Checkbox-7UO3cE15.js";import"./useValueChanged-C55evCWa.js";import"./CollapsiblePanel-BbO6zUyk.js";import"./MultiColumnSortDialog-dXBnI24o.js";import"./MenuTrigger-IznJiQW7.js";import"./CompositeItem-DeNKjXbZ.js";import"./ToolbarRootContext-CfVJoQTt.js";import"./getDisabledMountTransitionStyles-v2KuCVJ-.js";import"./getPseudoElementBounds-DQxivtBW.js";import"./chevron-down-BMmYWNJW.js";import"./index-CPqJNuLS.js";import"./error-RAN2hlFn.js";import"./BaseCbacBanner-B8gv-HHs.js";import"./makeExternalStore-BfGL_RoB.js";import"./Tooltip-BSG9lXLM.js";import"./PopoverPopup-i_1rED1q.js";import"./toNumber-ByAmdGnI.js";import"./useOsdkClient-Df5LZUPp.js";import"./tick-DyJbbs-Q.js";import"./DropdownField-CQNS3HSI.js";import"./withOsdkMetrics-CLaWF8BQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

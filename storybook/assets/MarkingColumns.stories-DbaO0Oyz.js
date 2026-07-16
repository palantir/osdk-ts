import{f as p,j as e}from"./iframe-BQPlFWHf.js";import{O as i}from"./object-table-lZkyV_-X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DNedVn-Y.js";import"./index-q205pHOG.js";import"./Dialog-c5XKbVF6.js";import"./cross-CzVegF0f.js";import"./svgIconContainer-C8-_okQk.js";import"./useBaseUiId-B6CsCbrP.js";import"./InternalBackdrop-BgBZxQnV.js";import"./composite-Bh217ciX.js";import"./index-BJiQNw2h.js";import"./index-Bf3E0QSU.js";import"./index-B06KdYpP.js";import"./useEventCallback-CMrEVMEF.js";import"./SkeletonBar-8BY3_iO7.js";import"./LoadingCell-eAurrrzR.js";import"./ColumnConfigDialog-DQoWlXLI.js";import"./DraggableList-B8kZkZ2X.js";import"./search-CmCSH6Ky.js";import"./Input-BYYNMGrr.js";import"./useControlled-Toaf_epN.js";import"./Button-CahJ-_1S.js";import"./small-cross-kob9zygc.js";import"./ActionButton-w5y5CIXF.js";import"./Checkbox-CsxAtNPf.js";import"./useValueChanged-CTnIFsRg.js";import"./CollapsiblePanel-DgZPRH29.js";import"./MultiColumnSortDialog-ClSPMFl5.js";import"./MenuTrigger-CY0LCiFy.js";import"./CompositeItem-B2CdhW51.js";import"./ToolbarRootContext-8zXqIDZv.js";import"./getDisabledMountTransitionStyles-51JWq0iJ.js";import"./getPseudoElementBounds-BirlCRzq.js";import"./chevron-down-DWmbLMj4.js";import"./index-D2UDFObS.js";import"./error-x00FgWmb.js";import"./BaseCbacBanner-B0r6yv7-.js";import"./makeExternalStore-B5zsuPMy.js";import"./Tooltip-CdsYZoaD.js";import"./PopoverPopup-RR_vBbeW.js";import"./toNumber-DNK9cMtG.js";import"./useOsdkClient-71lZU9pF.js";import"./tick-D1lbzAWB.js";import"./DropdownField-BZZTfyWb.js";import"./withOsdkMetrics-Dm-G2q20.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};

import{f as p,j as e}from"./iframe-q8TqaLH3.js";import{O as i}from"./object-table-Du6BlrzP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DW1Ev6LV.js";import"./Table-BYuHhB_Z.js";import"./index-BYCDoymk.js";import"./Dialog-7PnlGPiI.js";import"./cross-CC6OhIc-.js";import"./svgIconContainer-Dw59Q1hS.js";import"./useBaseUiId-CEQxwZKC.js";import"./InternalBackdrop--UCUdWww.js";import"./composite-DwvjAbMd.js";import"./index-CzfA3f8l.js";import"./index-BA8MKOgZ.js";import"./index-gnsaR6Uu.js";import"./useEventCallback-B4W_Onhb.js";import"./SkeletonBar-DqiAtf8L.js";import"./LoadingCell-DUy1iEUv.js";import"./ColumnConfigDialog-D4d7vU4L.js";import"./DraggableList-C-mgkqp0.js";import"./search-4HwTJMyt.js";import"./Input-DydicY3I.js";import"./useControlled-B4XgETbD.js";import"./Button-Cf0RXVA2.js";import"./small-cross-DvbT-Lty.js";import"./ActionButton-LZnsky5E.js";import"./Checkbox-b7LEJiYE.js";import"./useValueChanged-d_s2F3nd.js";import"./CollapsiblePanel-BS7S2lzj.js";import"./MultiColumnSortDialog-DJ1Kn_Ji.js";import"./MenuTrigger-BGwKkoMp.js";import"./CompositeItem-BoyD2Qd7.js";import"./ToolbarRootContext-BVkFyPPc.js";import"./getDisabledMountTransitionStyles-5oGVyyuS.js";import"./getPseudoElementBounds-BCT9ycAq.js";import"./chevron-down-DObWy-ia.js";import"./index-BiU-aGVE.js";import"./error-ClxxhlMY.js";import"./BaseCbacBanner-DTBo9MQF.js";import"./makeExternalStore-DCFTRovx.js";import"./Tooltip-AsdusrkJ.js";import"./PopoverPopup-B86RQsKi.js";import"./debounce-CCkbSKz6.js";import"./useOsdkClient-Ci_ciLOY.js";import"./tick-Dip5FQjE.js";import"./DropdownField-BJ7jRxa-.js";import"./isEqual-DK8wF8M6.js";import"./withOsdkMetrics-CEeAFO7b.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

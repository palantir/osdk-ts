import{f as p,j as e}from"./iframe-BcjmHG5Y.js";import{O as i}from"./object-table-C4pgDWQ3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CevB4zUw.js";import"./Table-DERF2Y3g.js";import"./index-WgcqtCT6.js";import"./Dialog-DzlZ0ulb.js";import"./cross-DoMlZBaZ.js";import"./svgIconContainer-CoM5Z7Ve.js";import"./useBaseUiId-CYrtGdJE.js";import"./InternalBackdrop-Dy54GwQQ.js";import"./composite-D6B2PGWO.js";import"./index-CsMXJwKN.js";import"./index-DpV3ZQ0J.js";import"./index-DSYJPx0N.js";import"./useEventCallback-Du9FLIz2.js";import"./SkeletonBar-Casjd6QM.js";import"./LoadingCell-pP6K6nBy.js";import"./ColumnConfigDialog-5r56BsKv.js";import"./DraggableList-DZrWEZ51.js";import"./search-jO8my80A.js";import"./Input-e_01wq9D.js";import"./useControlled-6NYxLXP3.js";import"./Button-DJfJDABU.js";import"./small-cross-BpYV_lGq.js";import"./ActionButton-U9wgeBuw.js";import"./Checkbox-TgEXnci4.js";import"./useValueChanged-66Q9-4Wr.js";import"./CollapsiblePanel-UzBakrGh.js";import"./MultiColumnSortDialog-Dynlb7gM.js";import"./MenuTrigger-BvOL2z14.js";import"./CompositeItem-DLw_ttOE.js";import"./ToolbarRootContext-DAX0lKDl.js";import"./getDisabledMountTransitionStyles-DOxn78aT.js";import"./getPseudoElementBounds-B6Q-orcE.js";import"./chevron-down-yt_M0O0c.js";import"./index-BuLxCPA9.js";import"./error-CYyfg8wo.js";import"./BaseCbacBanner-scUD9TTF.js";import"./makeExternalStore-qC0Amdtu.js";import"./Tooltip-BL83qiDs.js";import"./PopoverPopup-D9ZDT7jF.js";import"./debounce-B2HXz_6i.js";import"./useOsdkClient-9RXKzpNA.js";import"./tick-CSVnmAXo.js";import"./DropdownField-Depe1xc5.js";import"./isEqual-I_c9bwSC.js";import"./withOsdkMetrics-C3Z8dnVY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

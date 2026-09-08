import{f as p,j as e}from"./iframe-BrczSXWd.js";import{O as i}from"./object-table-D2NYr_bA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9BY0Y3l.js";import"./Table-BA80nWKR.js";import"./index-DudA86qY.js";import"./Dialog-Bih-9NwC.js";import"./cross-Ru6xXr8E.js";import"./svgIconContainer-CE-3RmSd.js";import"./useBaseUiId-BAdjTZxi.js";import"./InternalBackdrop-985pZM4u.js";import"./composite-Bm0YB8hl.js";import"./index-BNKav9tw.js";import"./index-DjqiYrmI.js";import"./index-O3AskpOE.js";import"./useEventCallback-BQlx-yAT.js";import"./SkeletonBar-BrWUMOMm.js";import"./LoadingCell-DbJ-o34E.js";import"./ColumnConfigDialog-DGgd9sJY.js";import"./DraggableList-CTf3QPXN.js";import"./search-BIr2ECst.js";import"./Input-B6lE5n2S.js";import"./useControlled-rjkFsMU4.js";import"./Button-DCegplHy.js";import"./small-cross-joSiLnnY.js";import"./ActionButton-BArH-a0x.js";import"./Checkbox-D0Mkme1h.js";import"./useValueChanged-BQ2NGAKU.js";import"./CollapsiblePanel-CsAiwkqy.js";import"./MultiColumnSortDialog-eJQvbRjM.js";import"./MenuTrigger-CL4ez-GT.js";import"./CompositeItem-BJcTRkcm.js";import"./ToolbarRootContext-BTk5x8Vt.js";import"./getDisabledMountTransitionStyles-BeD1AelW.js";import"./getPseudoElementBounds-PdvQmR0i.js";import"./chevron-down-Bqbgyapn.js";import"./index-HlCA-cEl.js";import"./error-CUc0NJXd.js";import"./BaseCbacBanner-Bh9Y43TL.js";import"./makeExternalStore-C7i3F044.js";import"./Tooltip-YOTilwd1.js";import"./PopoverPopup-rbPcompC.js";import"./debounce-DXJT-xl2.js";import"./useOsdkClient-CVk0RIIh.js";import"./tick-DqGJ_cyI.js";import"./DropdownField-D1lbpORr.js";import"./isEqual-CusS7w8u.js";import"./withOsdkMetrics-DGpmb3Iv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

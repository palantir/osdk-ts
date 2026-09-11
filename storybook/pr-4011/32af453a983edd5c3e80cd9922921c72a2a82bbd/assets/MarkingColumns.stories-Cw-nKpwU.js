import{f as p,j as e}from"./iframe-D0YyS42l.js";import{O as i}from"./object-table-CsPo5lHe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCB_Qe4i.js";import"./Table-DmK1C8ks.js";import"./index-Bsavn4W3.js";import"./Dialog-EjsJw5-J.js";import"./cross-dsq08tGB.js";import"./svgIconContainer-ppOpPTiK.js";import"./useBaseUiId-D4SQ7WJt.js";import"./InternalBackdrop-D9upuHND.js";import"./composite-z8nqybue.js";import"./index-O1djYu27.js";import"./index-C1kCmh68.js";import"./index-Dc1DVeAQ.js";import"./useEventCallback-ME00EgX0.js";import"./SkeletonBar-CbGoPUD7.js";import"./LoadingCell-CVFITrWD.js";import"./ColumnConfigDialog-CEQhrFLN.js";import"./DraggableList-ZNBH6tKf.js";import"./search-BXsTnHq3.js";import"./Input-souD-H1n.js";import"./useControlled-BGd4K6A9.js";import"./Button-tmtP2Iw5.js";import"./small-cross-DJSbcK9x.js";import"./ActionButton-XaTJJChP.js";import"./Checkbox-CLwwfXbn.js";import"./useValueChanged-ekySp4OE.js";import"./CollapsiblePanel-Bw7Zr0mb.js";import"./MultiColumnSortDialog-CAYbTieg.js";import"./MenuTrigger-uB1AY9kr.js";import"./CompositeItem-CUm9EsTA.js";import"./ToolbarRootContext-Dm0HFQW0.js";import"./getDisabledMountTransitionStyles-K03_8xe9.js";import"./getPseudoElementBounds-b9qWfldr.js";import"./chevron-down-B2Awu_XJ.js";import"./index-B-0gmAXF.js";import"./error-CbeKU1Tz.js";import"./BaseCbacBanner-S7dKB68J.js";import"./makeExternalStore-Bdcno4ct.js";import"./Tooltip-BQWGFJIA.js";import"./PopoverPopup-VnWmhErJ.js";import"./debounce-La9qLeq9.js";import"./useOsdkClient-B0pex126.js";import"./tick-SAyJyQPf.js";import"./DropdownField-CTN60ABC.js";import"./isEqual-dUJT8L9I.js";import"./withOsdkMetrics-D7tqwlWZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

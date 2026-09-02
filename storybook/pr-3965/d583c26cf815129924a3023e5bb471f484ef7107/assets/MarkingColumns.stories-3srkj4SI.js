import{f as p,j as e}from"./iframe-CO-y4TdN.js";import{O as i}from"./object-table-CUW8bU6f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjyFmI8K.js";import"./Table-rN1rPeLW.js";import"./index-BvlbGIzZ.js";import"./Dialog-CBdKrEH-.js";import"./cross-C5dLLhyh.js";import"./svgIconContainer-CndQfIvO.js";import"./useBaseUiId-JbgqorN2.js";import"./InternalBackdrop-B_JDnFUv.js";import"./composite-CpRI4cG_.js";import"./index-Bpe4fXs9.js";import"./index-CokB0b6k.js";import"./index-BYwfC7H9.js";import"./useEventCallback-CnPqTEiA.js";import"./SkeletonBar-BNBMw-sd.js";import"./LoadingCell-C6wndQb-.js";import"./ColumnConfigDialog-Cm8SAy61.js";import"./DraggableList-BW39ee41.js";import"./search-Bc1itZDf.js";import"./Input-hfVPciHP.js";import"./useControlled-C5lB0Y_-.js";import"./Button-B8DTN9QH.js";import"./small-cross-CvGBi9-r.js";import"./ActionButton-BmIkStKV.js";import"./Checkbox-DhUWlYpn.js";import"./useValueChanged-DAwmS2z_.js";import"./CollapsiblePanel-D-FGJL1V.js";import"./MultiColumnSortDialog-CwKViLBZ.js";import"./MenuTrigger-DcMTnf6L.js";import"./CompositeItem-C9K9ap8i.js";import"./ToolbarRootContext-DhfbkfjQ.js";import"./getDisabledMountTransitionStyles-24Mq1L47.js";import"./getPseudoElementBounds-CwTC3_6Z.js";import"./chevron-down-DcENhPxj.js";import"./index-D0Bl1hu0.js";import"./error-CwAmKxgu.js";import"./BaseCbacBanner-CIXhelO6.js";import"./makeExternalStore-DjtvJt2I.js";import"./Tooltip-BmXHzlNq.js";import"./PopoverPopup-CnG3HuBu.js";import"./debounce-NLjoYl0e.js";import"./useOsdkClient-e3M3fG2D.js";import"./tick-D0RcBagt.js";import"./DropdownField-tV31hf4I.js";import"./isEqual-CRfTLq5O.js";import"./withOsdkMetrics-BplgaXU_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

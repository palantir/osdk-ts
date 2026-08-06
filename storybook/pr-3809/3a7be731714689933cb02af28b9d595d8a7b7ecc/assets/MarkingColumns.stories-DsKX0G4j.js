import{f as p,j as e}from"./iframe-CpHLFs-j.js";import{O as i}from"./object-table-BG29GeR4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cx-Hj9ji.js";import"./Table-DHh5DJrx.js";import"./index-CW31sxVo.js";import"./Dialog-CjH99TMo.js";import"./cross-BMDhbGFA.js";import"./svgIconContainer-DJggAQ_8.js";import"./useBaseUiId-BBJe7HZ5.js";import"./InternalBackdrop-CHxyyeuy.js";import"./composite-Bb9xsxZ2.js";import"./index-BwGfwj9E.js";import"./index-D9rBAzJN.js";import"./index-B5E7rOF0.js";import"./useEventCallback-VriGb282.js";import"./SkeletonBar-w38sk0nV.js";import"./LoadingCell-B0zpyYf5.js";import"./ColumnConfigDialog-CaXzHV4W.js";import"./DraggableList-CdkW8wkH.js";import"./search-Dk5Mmea1.js";import"./Input-NmfJ6xcB.js";import"./useControlled-CU11-enl.js";import"./isEqual-CutVO7k5.js";import"./isObject-D2XlcjpL.js";import"./Button-DIETzomk.js";import"./ActionButton-ul0M5wXt.js";import"./Checkbox-BKaZSLRi.js";import"./useValueChanged-CFaYTh5g.js";import"./CollapsiblePanel-CJpYUV1y.js";import"./MultiColumnSortDialog-D_eBdYA3.js";import"./MenuTrigger-Bh2VvTmF.js";import"./CompositeItem-BCOuwNbL.js";import"./ToolbarRootContext-DLyGA8_p.js";import"./getDisabledMountTransitionStyles-DTudamhk.js";import"./getPseudoElementBounds-Rlm7eOUv.js";import"./chevron-down-BHWF8sCh.js";import"./index-DrQ_7o0H.js";import"./error-CJHQsKq8.js";import"./BaseCbacBanner-BIspY_8u.js";import"./makeExternalStore-qrCwPWzZ.js";import"./Tooltip-BrPhE4PX.js";import"./PopoverPopup-DDxX24TR.js";import"./toNumber-DvEoKfvv.js";import"./useOsdkClient-BbD9fywh.js";import"./tick-DbZpgMGy.js";import"./DropdownField-CjbCjEN6.js";import"./withOsdkMetrics-dGfsU2Pa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

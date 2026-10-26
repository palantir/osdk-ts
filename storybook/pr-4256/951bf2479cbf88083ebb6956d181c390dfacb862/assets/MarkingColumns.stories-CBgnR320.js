import{f as p,j as e}from"./iframe-BBSo5ZCd.js";import{O as i}from"./object-table-Br8U4lum.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dzi5mX41.js";import"./Table-7KyAWf7L.js";import"./index-B8ZS8eSl.js";import"./Dialog-B9q0YpDn.js";import"./cross-CS1ZE-4d.js";import"./svgIconContainer-BoEF3o2r.js";import"./useBaseUiId-OTe5-im2.js";import"./InternalBackdrop-BPj_TBK1.js";import"./composite-B78RY0fg.js";import"./index-B2iIKgXF.js";import"./index-BBPJ8Eu5.js";import"./index-BUB8f-4u.js";import"./useEventCallback-CoqlHeZD.js";import"./SkeletonBar-BGWBNq_c.js";import"./LoadingCell-C7hny8Vq.js";import"./ColumnConfigDialog-BkYWJ2uE.js";import"./DraggableList-C0Zv9f2L.js";import"./search-D9IvXS9T.js";import"./Input-CdlLpAfh.js";import"./useControlled-B7b0Wh0w.js";import"./Button-Dlb0le5d.js";import"./small-cross-BIkOoKCV.js";import"./ActionButton-CLNjgvvR.js";import"./Checkbox-B7wtTxsv.js";import"./useValueChanged-DcBO1Vf5.js";import"./CollapsiblePanel-CTr3LnIy.js";import"./MultiColumnSortDialog-ChiIWlqj.js";import"./MenuTrigger-DppHTV_i.js";import"./CompositeItem-Bl0A6RCo.js";import"./ToolbarRootContext-CROAvwzr.js";import"./getDisabledMountTransitionStyles-CLcMIQgP.js";import"./getPseudoElementBounds-CFV9xEQW.js";import"./chevron-down-CTZm-1e2.js";import"./index-DKyvBMeQ.js";import"./error-DlnosDW0.js";import"./BaseCbacBanner-BxoBY9ee.js";import"./makeExternalStore-CncG39Al.js";import"./Tooltip-B33Nx4ET.js";import"./PopoverPopup-DGYqwH-3.js";import"./debounce-BT0ZhofM.js";import"./useOsdkClient-BFKwqTbg.js";import"./tick-D66Od4kk.js";import"./DropdownField-BiBKyvt-.js";import"./isEqual-DpXT7La4.js";import"./withOsdkMetrics-_cs1V2V6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

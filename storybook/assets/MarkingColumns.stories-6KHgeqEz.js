import{f as p,j as e}from"./iframe-DTnMR0KG.js";import{O as i}from"./object-table-Dojizanr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CH6pH4zG.js";import"./index-Zau0Jz6Y.js";import"./Dialog-dAT1gs52.js";import"./cross-DMx8fbm0.js";import"./svgIconContainer-Dax4Obiz.js";import"./useBaseUiId-BmGZESq6.js";import"./InternalBackdrop-BIV-x21n.js";import"./composite-CHsrvqtn.js";import"./index-B1hrThmL.js";import"./index-BhpGgSwE.js";import"./index-QRxEtHvN.js";import"./useEventCallback-BFwQjvEd.js";import"./SkeletonBar-DT-REwch.js";import"./LoadingCell-t-D5rcrQ.js";import"./ColumnConfigDialog-BhGP4yqh.js";import"./DraggableList-CDDcyTKh.js";import"./search-D15ONi4r.js";import"./Input-Cz7lC9dl.js";import"./useControlled-CA00kb2t.js";import"./Button-CiLEYhU4.js";import"./small-cross-Nd_mbPyF.js";import"./ActionButton-xXKBDS-d.js";import"./Checkbox-BUOe58vg.js";import"./useValueChanged-BpSLdBnW.js";import"./CollapsiblePanel-CnWjjEN1.js";import"./MultiColumnSortDialog-BisE-FBR.js";import"./MenuTrigger-BSvYjEqY.js";import"./CompositeItem-Bv-USTDP.js";import"./ToolbarRootContext-CVieYv4R.js";import"./getDisabledMountTransitionStyles-gB2pWUeL.js";import"./getPseudoElementBounds-x5cxEdZq.js";import"./chevron-down-CGKhWSQM.js";import"./index-Dp8wnHZj.js";import"./error-CKmqMHYj.js";import"./BaseCbacBanner-9-YD5ayU.js";import"./makeExternalStore-DeAXmBwe.js";import"./Tooltip-DMXCxB-I.js";import"./PopoverPopup-D5G1tfGx.js";import"./debounce-DTHXiRTi.js";import"./useOsdkClient-DfHmfWgr.js";import"./tick-B6L2Bte4.js";import"./DropdownField-DgLlFLvX.js";import"./isEqual-DJ52-f9P.js";import"./withOsdkMetrics-CSsnJEPw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

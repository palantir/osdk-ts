import{f as p,j as e}from"./iframe-BRo99t7B.js";import{O as i}from"./object-table-C-kuDLjo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CigqD04b.js";import"./Table-DJA1uEml.js";import"./index-R8YjK2xc.js";import"./Dialog-CqcUi2Md.js";import"./cross-CDIMFWJV.js";import"./svgIconContainer-BQOaCuBG.js";import"./useBaseUiId-BSnWm0Ty.js";import"./InternalBackdrop-DHK8SVPy.js";import"./composite-DVnIZAH7.js";import"./index-CGghKiPn.js";import"./index-Duc0FtTv.js";import"./index-D21X6LUF.js";import"./useEventCallback-nAJ20U8L.js";import"./SkeletonBar-mNO0fj1P.js";import"./LoadingCell-CP8VUqpi.js";import"./ColumnConfigDialog-DFxLQGNF.js";import"./DraggableList-KlJTARjY.js";import"./search-GQ4U1QoP.js";import"./Input-DcSDPPuu.js";import"./useControlled-nWezCynf.js";import"./Button-BkY4eupJ.js";import"./small-cross-CAb1IP_3.js";import"./ActionButton-7DJSbSEH.js";import"./Checkbox-BVhc7lET.js";import"./useValueChanged-qoR0fUld.js";import"./CollapsiblePanel-C9cjRkgh.js";import"./MultiColumnSortDialog-D7G0ajgK.js";import"./MenuTrigger-rzq5Pqiz.js";import"./CompositeItem-D0ZY96tK.js";import"./ToolbarRootContext-CXGtLwjz.js";import"./getDisabledMountTransitionStyles-Cebom1b-.js";import"./getPseudoElementBounds-B3ez0_sP.js";import"./chevron-down-_xL6OTaR.js";import"./index-CB_jfM4i.js";import"./error-DCHg5wYe.js";import"./BaseCbacBanner-CeRJcetP.js";import"./makeExternalStore-BmrHbVoq.js";import"./Tooltip-2SRPn51X.js";import"./PopoverPopup-B4Rm8UaV.js";import"./debounce-BV4tZJKC.js";import"./useOsdkClient-C_oVdPtU.js";import"./tick-CSvfDoia.js";import"./DropdownField-B3HIUGjf.js";import"./isEqual-D0-FiT0l.js";import"./withOsdkMetrics-CbR5n7Rt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-Dcbb45TM.js";import{O as i}from"./object-table-uIGz-EJp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D8JM7gnw.js";import"./Table-BodGg9CV.js";import"./index-BP3mGvIi.js";import"./Dialog-D1W6oFiH.js";import"./cross-CFg2OY8m.js";import"./svgIconContainer-C653aYE0.js";import"./useBaseUiId-KvLNO8W4.js";import"./InternalBackdrop-b2U-fCTd.js";import"./composite-BIYviI6v.js";import"./index-LAjudTQg.js";import"./index-DPou_tLy.js";import"./index-DmcmRKU2.js";import"./useEventCallback-BI6RwFXd.js";import"./SkeletonBar-CBr_GrBQ.js";import"./LoadingCell-GOMssFxh.js";import"./ColumnConfigDialog-CztQHvcW.js";import"./DraggableList-CHMQl458.js";import"./search-8-lHNRta.js";import"./Input-DKG4JtdJ.js";import"./useControlled-Da1fb4mu.js";import"./Button-Bfb_bO0G.js";import"./small-cross-D2acqba7.js";import"./ActionButton-CriApq5G.js";import"./Checkbox-BXPSe9vd.js";import"./useValueChanged-Bf4o6EbE.js";import"./CollapsiblePanel-C7bD2Jvr.js";import"./MultiColumnSortDialog-DMQi2CRy.js";import"./MenuTrigger-BObXRj7Q.js";import"./CompositeItem-1Mp7uRya.js";import"./ToolbarRootContext-CgWzIiHM.js";import"./getDisabledMountTransitionStyles-XJIzxiBK.js";import"./getPseudoElementBounds-BbdSIzYb.js";import"./chevron-down-B67Z7lxm.js";import"./index-Dqy8Ou-s.js";import"./error-DGuxoAox.js";import"./BaseCbacBanner-CEHVUoYy.js";import"./makeExternalStore-Dm_3NQPJ.js";import"./Tooltip-CJk8wEl0.js";import"./PopoverPopup-0u1lAVs6.js";import"./debounce-CF6oR7xT.js";import"./useOsdkClient-vBOR5iVQ.js";import"./tick-DrS_4neF.js";import"./DropdownField-DH_fpvNY.js";import"./isEqual-DB8ime84.js";import"./withOsdkMetrics-BnTsjsNt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

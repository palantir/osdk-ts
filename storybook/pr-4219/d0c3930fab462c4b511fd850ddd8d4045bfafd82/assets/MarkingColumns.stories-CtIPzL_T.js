import{f as p,j as e}from"./iframe-DCKvSy3g.js";import{O as i}from"./object-table-BOBMMITQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9_QzmoW.js";import"./Table-BnqpJ3kb.js";import"./index-CjqUtRqG.js";import"./Dialog-CO2HiAWS.js";import"./cross-Bgi1b_0b.js";import"./svgIconContainer-DUPiMOGt.js";import"./useBaseUiId-hGdClsAp.js";import"./InternalBackdrop-31WohGhl.js";import"./composite-Bftlp7o-.js";import"./index-CF-VmLVs.js";import"./index-Dqoie1xV.js";import"./index-VT2qwhQZ.js";import"./useEventCallback-B7A3-78b.js";import"./SkeletonBar-DwIduN_L.js";import"./LoadingCell-GcW2-KWT.js";import"./ColumnConfigDialog-Cifl3j_D.js";import"./DraggableList-CB0fnFNu.js";import"./search-DnxSmR02.js";import"./Input-DAFKBr8O.js";import"./useControlled-23Be6Ua4.js";import"./Button-B8kaenDu.js";import"./small-cross-Cwle5e15.js";import"./ActionButton-Df-iyCXJ.js";import"./Checkbox-CUNIx5wV.js";import"./useValueChanged-Dw4sBVYO.js";import"./CollapsiblePanel-b_i0qiWN.js";import"./MultiColumnSortDialog-BXy1g6m6.js";import"./MenuTrigger-DxP1cL8Z.js";import"./CompositeItem-BaLy62YM.js";import"./ToolbarRootContext-Dfcq71Kx.js";import"./getDisabledMountTransitionStyles-wfE8zBrh.js";import"./getPseudoElementBounds-DdimKXjW.js";import"./chevron-down-CQzxndpd.js";import"./index-BZTMgR5k.js";import"./error-DC-QmFfK.js";import"./BaseCbacBanner-DqXXezVg.js";import"./makeExternalStore-DhsTa73k.js";import"./Tooltip-B14J5KK5.js";import"./PopoverPopup-BnMpvGpN.js";import"./debounce-BpOqmw8g.js";import"./useOsdkClient-BY9Wn_Dg.js";import"./tick-BvA7Cxf1.js";import"./DropdownField-C6HEFrFd.js";import"./isEqual-B9WX-sis.js";import"./withOsdkMetrics-C6hFOzPu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

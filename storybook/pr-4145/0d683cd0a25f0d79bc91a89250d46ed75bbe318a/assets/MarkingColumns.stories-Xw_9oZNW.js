import{f as p,j as e}from"./iframe-D4DE_xCy.js";import{O as i}from"./object-table-g6VGtRMd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B6-3aPT9.js";import"./Table-EWARVZic.js";import"./index-D326T4JO.js";import"./Dialog-BF6fe3fI.js";import"./cross-DXk5c3Hx.js";import"./svgIconContainer-jzN4JDBP.js";import"./useBaseUiId-BXESL0ei.js";import"./InternalBackdrop-LoBq40Ym.js";import"./composite-Dnv2BJfH.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./index-BGyff1g6.js";import"./useEventCallback-Z4zWj0DE.js";import"./SkeletonBar-DOfR0REZ.js";import"./LoadingCell-Cp8Oh-gF.js";import"./ColumnConfigDialog-DmmOy8gz.js";import"./DraggableList-BT3g7YEB.js";import"./search-DMWfSMTs.js";import"./Input-BdkDXHFP.js";import"./useControlled-C35ONjfY.js";import"./Button-ByxF5usp.js";import"./small-cross-CNDGm87l.js";import"./ActionButton-D5oyS5dM.js";import"./Checkbox-BwYysanO.js";import"./useValueChanged-f4hwQLIJ.js";import"./CollapsiblePanel-A6BmXTdr.js";import"./MultiColumnSortDialog-kRefOv0N.js";import"./MenuTrigger-CNPytmAJ.js";import"./CompositeItem-Dl-hENiN.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./getDisabledMountTransitionStyles-BKMXDL5b.js";import"./getPseudoElementBounds-mvlACyB9.js";import"./chevron-down-9HoUrmLz.js";import"./index-CVC749TS.js";import"./error-BbjQgfT9.js";import"./BaseCbacBanner-DrmZ6hu-.js";import"./makeExternalStore-BrutYjE5.js";import"./Tooltip-BR6r3LZL.js";import"./PopoverPopup-s43YRtvQ.js";import"./debounce-zunEXKGq.js";import"./useOsdkClient-Dq4Nep3C.js";import"./tick-BC_4-l9I.js";import"./DropdownField-CN5yaMV7.js";import"./isEqual-Bh_n2tIz.js";import"./withOsdkMetrics-DNRznGfV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

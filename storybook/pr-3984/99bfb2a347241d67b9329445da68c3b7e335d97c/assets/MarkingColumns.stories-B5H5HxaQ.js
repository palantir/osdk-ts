import{f as p,j as e}from"./iframe-DOTdPJBy.js";import{O as i}from"./object-table-Cvktbl7a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CORjxHe2.js";import"./Table-DRpmr99j.js";import"./index-7LsoLiQC.js";import"./Dialog-CV1LYgzP.js";import"./cross-m4Jtx501.js";import"./svgIconContainer-6XMQleNK.js";import"./useBaseUiId-CSa0UWdd.js";import"./InternalBackdrop-DNHBzMyX.js";import"./composite-DBLj_rqs.js";import"./index-DrAqVeQj.js";import"./index-DoVR9M-q.js";import"./index-DVc1s_km.js";import"./useEventCallback-DMJOBNH7.js";import"./SkeletonBar-C0cOwVEs.js";import"./LoadingCell-BOm33Zz_.js";import"./ColumnConfigDialog-CNXMHO4a.js";import"./DraggableList-GVkWro8x.js";import"./search-CQ447Er6.js";import"./Input-Bzm_LY5N.js";import"./useControlled-CEuBm35N.js";import"./Button-HfXhKbNv.js";import"./small-cross-ByN_OFW-.js";import"./ActionButton-Dl69JNtr.js";import"./Checkbox-CNBACtYZ.js";import"./useValueChanged-FqMJibv1.js";import"./CollapsiblePanel-BYNhB3x2.js";import"./MultiColumnSortDialog-D8qTQ-HE.js";import"./MenuTrigger-DjxBECOg.js";import"./CompositeItem-fENznLjR.js";import"./ToolbarRootContext-BMXrmtsD.js";import"./getDisabledMountTransitionStyles-BG-emIK6.js";import"./getPseudoElementBounds-Dx1WL7QY.js";import"./chevron-down-D9Jqe_yM.js";import"./index-YCEALnwo.js";import"./error-1dsahiX9.js";import"./BaseCbacBanner-C_qv5zih.js";import"./makeExternalStore-DXS9zRtb.js";import"./Tooltip-C72PQQIW.js";import"./PopoverPopup-DH-ybkjn.js";import"./debounce-CioZWleO.js";import"./useOsdkClient-C681iYsL.js";import"./tick-BFLKO0JY.js";import"./DropdownField-CCEf2ECL.js";import"./isEqual-C5BEqgHK.js";import"./withOsdkMetrics-w09EOhg9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

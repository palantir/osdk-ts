import{f as p,j as e}from"./iframe-BHoRCdfJ.js";import{O as i}from"./object-table-BT4epL3E.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PcfL1ZgJ.js";import"./Table-BogWTrQo.js";import"./index-CRbMuko2.js";import"./Dialog-CtEDH1Qe.js";import"./cross-o6c578IU.js";import"./svgIconContainer-Ddyj85do.js";import"./useBaseUiId-B3Ti1xga.js";import"./InternalBackdrop-C3Nd8T8u.js";import"./composite-DA-yFNZT.js";import"./index-KzV2K_a8.js";import"./index-BqxqbHVw.js";import"./index-1ksykTop.js";import"./useEventCallback-DvYBJvtj.js";import"./SkeletonBar-2AkWt2iD.js";import"./LoadingCell-BAYgpWEj.js";import"./ColumnConfigDialog-tSFHX2X-.js";import"./DraggableList-dOoeduXW.js";import"./search-CzBp321S.js";import"./Input-RRy85S6o.js";import"./useControlled-CXIbMiD_.js";import"./Button-GIqq_QaR.js";import"./small-cross-CbXKVrFp.js";import"./ActionButton-DaKwbCzu.js";import"./Checkbox-zBVDZpOJ.js";import"./useValueChanged-DU5TUzSb.js";import"./CollapsiblePanel-DeE2lA1F.js";import"./MultiColumnSortDialog-DxH9yAog.js";import"./MenuTrigger-Df17ZxAj.js";import"./CompositeItem-C8lI6v5m.js";import"./ToolbarRootContext-VQGHIcMO.js";import"./getDisabledMountTransitionStyles-BazN2qJZ.js";import"./getPseudoElementBounds-BKvO9qL5.js";import"./chevron-down-DCJDhdZ9.js";import"./index-CQXq0Q8i.js";import"./error-D1WxR2nX.js";import"./BaseCbacBanner-CmoBi3TT.js";import"./makeExternalStore-_J7Y5wzS.js";import"./Tooltip-4dHsdJ7I.js";import"./PopoverPopup-Cu_vPmGM.js";import"./debounce-Bv9XGbP2.js";import"./useOsdkClient-CKwE1qLu.js";import"./tick-C9oldqOI.js";import"./DropdownField-C17krznx.js";import"./isEqual-ld1BIUQT.js";import"./withOsdkMetrics-DiUqqX9-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

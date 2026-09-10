import{f as p,j as e}from"./iframe-0hzt8uI9.js";import{O as i}from"./object-table-4nECycnq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYpcx0vb.js";import"./Table-BaCI3wua.js";import"./index-B8ey7LBN.js";import"./Dialog-lTrFSQZA.js";import"./cross-DjAvUIeX.js";import"./svgIconContainer-DbVM6MQd.js";import"./useBaseUiId-Dq5-ot3p.js";import"./InternalBackdrop-BcHu6G-7.js";import"./composite-DM9rU2PJ.js";import"./index-Dz32LMbM.js";import"./index-B5xQNHde.js";import"./index-D6V2RAHr.js";import"./useEventCallback-BlRZj7C1.js";import"./SkeletonBar-gCCYUalJ.js";import"./LoadingCell-B0xJXtg-.js";import"./ColumnConfigDialog-BVJu8IbZ.js";import"./DraggableList-Bp8aKqyi.js";import"./search-DT_KCJGf.js";import"./Input-B6yL1HnH.js";import"./useControlled-CR71uT_f.js";import"./Button-xLAmrvCU.js";import"./small-cross-zefBxPtr.js";import"./ActionButton-B2lno6-g.js";import"./Checkbox-DD6kA_cd.js";import"./useValueChanged-CYfVIZzo.js";import"./CollapsiblePanel-BJYiJbwQ.js";import"./MultiColumnSortDialog-DCN_ZNGX.js";import"./MenuTrigger-SA4IIJ2u.js";import"./CompositeItem-B4wf29Ba.js";import"./ToolbarRootContext-DMiVgANq.js";import"./getDisabledMountTransitionStyles-CbRqGhyd.js";import"./getPseudoElementBounds-ChpkT6mB.js";import"./chevron-down-EB3ta9K0.js";import"./index-JO_mHdMF.js";import"./error-CvvhWrfu.js";import"./BaseCbacBanner-D4kcC1sq.js";import"./makeExternalStore-DblTGXsz.js";import"./Tooltip-dz2N5tg8.js";import"./PopoverPopup-Qod0bVLX.js";import"./debounce-yaorJZAj.js";import"./useOsdkClient-EQHkO782.js";import"./tick-BoDudvKH.js";import"./DropdownField-Cy9YIgDd.js";import"./isEqual-D5T89AZL.js";import"./withOsdkMetrics-udXbveSG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

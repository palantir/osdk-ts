import{f as p,j as e}from"./iframe-BvtrFrDq.js";import{O as i}from"./object-table-WI4x_sPI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hiWkjTbI.js";import"./Table-ji2Mcr5u.js";import"./index-BJkhm3Ia.js";import"./Dialog-DBAH8-Tq.js";import"./cross-Dm_M5ayo.js";import"./svgIconContainer-CxzpI-nz.js";import"./useBaseUiId-D1zJXq-x.js";import"./InternalBackdrop-Bhnkys6D.js";import"./composite-D9wCA3L7.js";import"./index-B2QxPovI.js";import"./index-BmdzJuTV.js";import"./index-jQnhxv3F.js";import"./useEventCallback-heFPgHFU.js";import"./SkeletonBar-5j0-fDGa.js";import"./LoadingCell-CTU55bjC.js";import"./ColumnConfigDialog-t2KtF3py.js";import"./DraggableList-CLCYhfcj.js";import"./search-y87IcSNA.js";import"./Input-D3h_1eKW.js";import"./useControlled-C5pmq0AY.js";import"./Button-BJy_LHxZ.js";import"./small-cross-B9NMxasu.js";import"./ActionButton-Ye6rlMnt.js";import"./Checkbox-DeGVUvpG.js";import"./useValueChanged-CrlzAUPK.js";import"./CollapsiblePanel-CvNLT_W0.js";import"./MultiColumnSortDialog-BJOCPejF.js";import"./MenuTrigger-B7fnUekI.js";import"./CompositeItem-Rfg3qzju.js";import"./ToolbarRootContext-BrQK-hek.js";import"./getDisabledMountTransitionStyles-Bafsb8MV.js";import"./getPseudoElementBounds-B7QZiwEe.js";import"./chevron-down-BxwFps0j.js";import"./index-B5-tsrVL.js";import"./error-BbBH-DMp.js";import"./BaseCbacBanner-CHzQUt6Z.js";import"./makeExternalStore-CT6g87Zk.js";import"./Tooltip-B-M7Glcs.js";import"./PopoverPopup-B2L2ZFoJ.js";import"./debounce-D48NSO_6.js";import"./useOsdkClient-BU66DrOT.js";import"./tick-D1kmaKOg.js";import"./DropdownField-D-hNk4Y1.js";import"./isEqual-aLexuwQw.js";import"./withOsdkMetrics-Cf9QOWiU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-2MyeaUzD.js";import{O as i}from"./object-table-LkCsGfkb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUn0LkVX.js";import"./Table-DjOWDljB.js";import"./index-NZSVMLpP.js";import"./Dialog-CWDCbvJz.js";import"./cross-CXnhgyvc.js";import"./svgIconContainer-4EX1EfK4.js";import"./useBaseUiId-C0j-SKXM.js";import"./InternalBackdrop-COkt2S-3.js";import"./composite-BVz7tfSY.js";import"./index-Bm-PBo3A.js";import"./index-Ce4PKvPC.js";import"./index-DkVuFE1I.js";import"./useEventCallback-Dm3fVohy.js";import"./SkeletonBar-DIegnhq_.js";import"./LoadingCell-pnT9nXLW.js";import"./ColumnConfigDialog-CxlYZzEl.js";import"./DraggableList-D1634nan.js";import"./search-CpIfmgVn.js";import"./Input-DXMdlMds.js";import"./useControlled-DCne3Llm.js";import"./Button-3arTFTpt.js";import"./small-cross-Blk5AoHi.js";import"./ActionButton-CMwQlm1r.js";import"./Checkbox-B0hGpm5s.js";import"./useValueChanged-B2kp3VOe.js";import"./CollapsiblePanel-_qMM1pI0.js";import"./MultiColumnSortDialog-BbfjJS_D.js";import"./MenuTrigger-3uPegHGQ.js";import"./CompositeItem-D8KecaIg.js";import"./ToolbarRootContext-zLrFE9v8.js";import"./getDisabledMountTransitionStyles-DxjEMg4T.js";import"./getPseudoElementBounds-DpBykgdb.js";import"./chevron-down-4RG-YjeV.js";import"./index-jXeA9SgF.js";import"./error-CSdXVQDA.js";import"./BaseCbacBanner-QsJ11sde.js";import"./makeExternalStore-VoU3rgtf.js";import"./Tooltip-BfB-ALwV.js";import"./PopoverPopup-DOf8tSzj.js";import"./debounce-Y3DExDk1.js";import"./useOsdkClient-CYYcDDNv.js";import"./tick-ftcla-3R.js";import"./DropdownField-DOIFNVft.js";import"./isEqual-C8MbmCUf.js";import"./withOsdkMetrics-CFGA0PEe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-D7UqPUqg.js";import{O as i}from"./object-table-Ccj2Z9JG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cn4dnxMR.js";import"./Table-D5_Y2AlI.js";import"./index-B1myIupO.js";import"./Dialog-Bzp9Dmji.js";import"./cross-Bj6j_CtG.js";import"./svgIconContainer-CDkwNXGT.js";import"./useBaseUiId-cZ22buUA.js";import"./InternalBackdrop-BU5zmbya.js";import"./composite-CksaxzsE.js";import"./index-zv9FWzoH.js";import"./index-CvRiwgND.js";import"./index-DCkE7DLE.js";import"./useEventCallback-DpQrdmgu.js";import"./SkeletonBar-rSY0Z5ln.js";import"./LoadingCell-CoRNkiv5.js";import"./ColumnConfigDialog-Dx0cIFlH.js";import"./DraggableList-DFWysaF6.js";import"./search-Da0O3BMF.js";import"./Input-DUMT1c48.js";import"./useControlled-BvzqTfft.js";import"./Button-zkNcwcgB.js";import"./small-cross-DrNCWiY1.js";import"./ActionButton-TjtigKOe.js";import"./Checkbox-B2WomC0w.js";import"./useValueChanged-D2bDRlLV.js";import"./CollapsiblePanel-BpT5d_FH.js";import"./MultiColumnSortDialog-BfdqZFkJ.js";import"./MenuTrigger-YTDJD5O0.js";import"./CompositeItem-DTU093CG.js";import"./ToolbarRootContext-CLsWTMgH.js";import"./getDisabledMountTransitionStyles-Sn4rIzKN.js";import"./getPseudoElementBounds-D3vL17pM.js";import"./chevron-down-DzpLubs1.js";import"./index-BLUZuP7j.js";import"./error-n93hCEyg.js";import"./BaseCbacBanner-Qr9lUCXK.js";import"./makeExternalStore-hhxh63bW.js";import"./Tooltip-DRRdorsF.js";import"./PopoverPopup-CCdaFP9f.js";import"./debounce-DIX7Ivt7.js";import"./useOsdkClient-DnJBDK7E.js";import"./tick-ZzmVR9ck.js";import"./DropdownField-BUbtVZGf.js";import"./isEqual-BHekBUsP.js";import"./withOsdkMetrics-CutvgG7T.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

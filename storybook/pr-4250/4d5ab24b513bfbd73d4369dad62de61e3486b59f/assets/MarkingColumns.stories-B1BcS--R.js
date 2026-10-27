import{f as p,j as e}from"./iframe-COVETwhx.js";import{O as i}from"./object-table-COuU105Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-xfSmD6.js";import"./Table-pwM_a1S-.js";import"./index-bOxlMW9W.js";import"./Dialog-DUCt0N-S.js";import"./cross-CCyLZ_a3.js";import"./svgIconContainer-gsbuNadi.js";import"./useBaseUiId-2z9ajXTy.js";import"./InternalBackdrop-BaZjvCUN.js";import"./composite-kZubSwMs.js";import"./index-SM4cV6TD.js";import"./index-BadFZGVY.js";import"./index-Dtx0mzcz.js";import"./useEventCallback-XIafyipZ.js";import"./SkeletonBar-CdNxN4hg.js";import"./LoadingCell-CyraqzVp.js";import"./ColumnConfigDialog-C42ZPsPz.js";import"./DraggableList-B2TOzbeH.js";import"./search-2wDgAEqi.js";import"./Input-DDxMXv2L.js";import"./useControlled-eVeEVm0U.js";import"./Button-D7hgHtqc.js";import"./small-cross-BfZtJMTE.js";import"./ActionButton-CWVjt9h4.js";import"./Checkbox-rFGnVT6O.js";import"./useValueChanged-D9aAEcAT.js";import"./CollapsiblePanel-DqoXoaOR.js";import"./MultiColumnSortDialog-CCxOq-4J.js";import"./MenuTrigger-D-v-XyV6.js";import"./CompositeItem-Dg_iEtAz.js";import"./ToolbarRootContext-ra_8dAxJ.js";import"./getDisabledMountTransitionStyles-Czfivuu1.js";import"./getPseudoElementBounds-DSG6kIql.js";import"./chevron-down-Kndiv9KN.js";import"./index-Qpmu02z_.js";import"./error-Dso-ncgj.js";import"./BaseCbacBanner-BdmB5LbT.js";import"./makeExternalStore-BjWwL6YG.js";import"./Tooltip-BPacsOBo.js";import"./PopoverPopup-DUufvOMw.js";import"./debounce-Dc_lQPIE.js";import"./useOsdkClient-DUa_DGnQ.js";import"./tick-C-EouHxY.js";import"./DropdownField-CgcUEzHA.js";import"./isEqual-dfhg-x8x.js";import"./withOsdkMetrics-DVwyRo2Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

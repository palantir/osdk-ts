import{f as p,j as e}from"./iframe-ChtCM8dE.js";import{O as i}from"./object-table-lEWKrBl-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cmiw_6tL.js";import"./Table-Fo14aNVc.js";import"./index-uT5HIxUp.js";import"./Dialog-WNRQFbDj.js";import"./cross-Cx7UUYd1.js";import"./svgIconContainer-B0Hb1RBl.js";import"./useBaseUiId-BlvSRiC6.js";import"./InternalBackdrop-B9QtOURg.js";import"./composite-B9COiNPT.js";import"./index-Pe_luz3n.js";import"./index-B31cE8Rp.js";import"./index-BxGNaB71.js";import"./useEventCallback-BwYTBeHy.js";import"./SkeletonBar-BNPeEFnR.js";import"./LoadingCell-BYM8Oqmt.js";import"./ColumnConfigDialog-BfWqmt5e.js";import"./DraggableList-C6aYaLko.js";import"./search-NDA-MaEJ.js";import"./Input-CiDCxeu9.js";import"./useControlled-hlF0PwpK.js";import"./Button-CY6Mleoh.js";import"./small-cross-9UuSLKex.js";import"./ActionButton-DCP5cEeb.js";import"./Checkbox-IMcR4fv8.js";import"./useValueChanged-CTkt07aq.js";import"./CollapsiblePanel-DEfmw082.js";import"./MultiColumnSortDialog-B6ximbEt.js";import"./MenuTrigger-C09kElrQ.js";import"./CompositeItem-DamdrYTg.js";import"./ToolbarRootContext-D57ExyiR.js";import"./getDisabledMountTransitionStyles-B73YPMyD.js";import"./getPseudoElementBounds-bHysKEfO.js";import"./chevron-down-9ZFNeU84.js";import"./index-BcIK4VrX.js";import"./error-C3rrhmyZ.js";import"./BaseCbacBanner-CgvRJ2b5.js";import"./makeExternalStore-CrEYLMCO.js";import"./Tooltip-DfOSlZk9.js";import"./PopoverPopup-BYkXE_FS.js";import"./debounce-BwEiO4_c.js";import"./useOsdkClient-B5IwJgMz.js";import"./tick-BBG2XDQr.js";import"./DropdownField-C9V2hn37.js";import"./isEqual-COlW-oiV.js";import"./withOsdkMetrics-DVdIQmET.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

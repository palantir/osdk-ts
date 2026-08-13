import{f as p,j as e}from"./iframe-D4PY-PnJ.js";import{O as i}from"./object-table-DpmToVs7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-01voB3Td.js";import"./Table-B3vWMM1P.js";import"./index-C3ze-A25.js";import"./Dialog-Zgls7Bxd.js";import"./cross-BCNCJ4zW.js";import"./svgIconContainer-BBFbqrO9.js";import"./useBaseUiId-CT5Nuzm7.js";import"./InternalBackdrop-1vKt8Vay.js";import"./composite-BW0oHWLe.js";import"./index-BmSitOna.js";import"./index-OJ7CE0nE.js";import"./index-WAJmZC5y.js";import"./useEventCallback-FrdIwkmw.js";import"./SkeletonBar-DdkRgmzO.js";import"./LoadingCell-DdSLSeFs.js";import"./ColumnConfigDialog-BBmjh2p4.js";import"./DraggableList-D8Qf2YDv.js";import"./search-DhGWTixT.js";import"./Input-DpVdAlwI.js";import"./useControlled-B0YZSF-a.js";import"./isEqual-xzqRc28g.js";import"./isObject-CWtFi4BZ.js";import"./Button-CRplF3wT.js";import"./ActionButton-BeCuIR_r.js";import"./Checkbox-C_rAo4wk.js";import"./useValueChanged-Csp7SvyO.js";import"./CollapsiblePanel-B5lJeWgz.js";import"./MultiColumnSortDialog-DQiVtXjC.js";import"./MenuTrigger-DW0TOV8C.js";import"./CompositeItem-C6S-nciI.js";import"./ToolbarRootContext-Dopp7FRe.js";import"./getDisabledMountTransitionStyles-v9LzkhPA.js";import"./getPseudoElementBounds-Cwc8lUx9.js";import"./chevron-down-D22F0u6Z.js";import"./index-1VGocKKR.js";import"./error-CsEWfIK9.js";import"./BaseCbacBanner-C4bkZKIf.js";import"./makeExternalStore-D4y_vvzd.js";import"./Tooltip-CkDFs6wN.js";import"./PopoverPopup-D3jFDXDL.js";import"./toNumber-1gZb9On-.js";import"./useOsdkClient-D1yJRK_G.js";import"./chevron-right-Cvh61v0W.js";import"./tick-BshIKwLK.js";import"./DropdownField-4Ot8i-6P.js";import"./withOsdkMetrics-CAIkKNTM.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

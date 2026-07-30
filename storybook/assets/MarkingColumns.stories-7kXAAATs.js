import{f as p,j as e}from"./iframe-DPgxuER0.js";import{O as i}from"./object-table-D3sB9QpA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DAyr6J_f.js";import"./index-CzdpyvEq.js";import"./Dialog-C1KlA-1s.js";import"./cross-BwNaZ3E7.js";import"./svgIconContainer-DIzi4zOb.js";import"./useBaseUiId-Cm7I4H2e.js";import"./InternalBackdrop-C72lhBZT.js";import"./composite-Clt5qWfu.js";import"./index-utaNrd3G.js";import"./index-d7FyALzm.js";import"./index-Dts6GXIP.js";import"./useEventCallback-D98isyqV.js";import"./SkeletonBar-B2m1EgLv.js";import"./LoadingCell-CnWxfi5A.js";import"./ColumnConfigDialog-BAZsmC_M.js";import"./DraggableList-C_lBLUKl.js";import"./search-W4SNOJCm.js";import"./Input-Fe8hZ5NZ.js";import"./useControlled-s_RTodc2.js";import"./isEqual-DoQQjuOl.js";import"./isObject-Dq8xI3s2.js";import"./Button-DEiS8xLS.js";import"./ActionButton-COP86DSV.js";import"./Checkbox-D-KHLlw8.js";import"./useValueChanged-C_uOfymM.js";import"./CollapsiblePanel-Clh-Wdun.js";import"./MultiColumnSortDialog-C23dTAi7.js";import"./MenuTrigger-BHeEl1rC.js";import"./CompositeItem-BfVRyH-B.js";import"./ToolbarRootContext-oAgSrQkI.js";import"./getDisabledMountTransitionStyles-CWoMtXqz.js";import"./getPseudoElementBounds-CbsUepuL.js";import"./chevron-down-4z7FVQbP.js";import"./index-SQJSmql8.js";import"./error-rSfsp2Ux.js";import"./BaseCbacBanner-B2HUdfWo.js";import"./makeExternalStore-DacpQJm5.js";import"./Tooltip-Bq5nKCAb.js";import"./PopoverPopup-BAZGmEaM.js";import"./toNumber-BF7RP0YD.js";import"./useOsdkClient-B39lSgeE.js";import"./tick-DQOEJ2sU.js";import"./DropdownField-DKkpZC4E.js";import"./withOsdkMetrics-C_HRjZ2a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

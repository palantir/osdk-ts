import{f as p,j as e}from"./iframe-Dj3y_FXz.js";import{O as i}from"./object-table-ChC7y-am.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D41TUqQK.js";import"./Table-Ch4GzdGc.js";import"./index-DD6p90gq.js";import"./Dialog-CpIUcxp0.js";import"./cross-CVdfkFqF.js";import"./svgIconContainer-D_6_keQ1.js";import"./useBaseUiId-D8RgwyAn.js";import"./InternalBackdrop-5z-sgEQM.js";import"./composite-DnSqe8X8.js";import"./index-CxKUFA2E.js";import"./index-18fnm7EA.js";import"./index-Q6m8Uz6B.js";import"./useEventCallback-D-hkdMR7.js";import"./SkeletonBar-QvTedd7J.js";import"./LoadingCell-CqaEpvLp.js";import"./ColumnConfigDialog-BtPXF6DA.js";import"./DraggableList-DiO9-yFi.js";import"./search-DqELWH10.js";import"./Input-C00XXgL_.js";import"./useControlled-CogZz_Fp.js";import"./isEqual-CgnQk9cA.js";import"./isObject-DltkD9gV.js";import"./Button-Dz0Fa_jz.js";import"./ActionButton-gTd9NfDq.js";import"./Checkbox-DXtG2TSz.js";import"./useValueChanged-3KFnokUh.js";import"./CollapsiblePanel-dWVFulUf.js";import"./MultiColumnSortDialog-CKLVs871.js";import"./MenuTrigger-DrqvZa_k.js";import"./CompositeItem-DERML8IO.js";import"./ToolbarRootContext-BWQ69sPa.js";import"./getDisabledMountTransitionStyles-CD2MoVvb.js";import"./getPseudoElementBounds-DYGqIPmF.js";import"./chevron-down-vDvBpfK_.js";import"./index-hy5cmm3j.js";import"./error-a0jqZXnu.js";import"./BaseCbacBanner-CFb6v-Yr.js";import"./makeExternalStore-CoHw-zti.js";import"./Tooltip-CVzFy9Xe.js";import"./PopoverPopup-CWhtGTWR.js";import"./toNumber-B_tOvU6S.js";import"./useOsdkClient-K6JAw32y.js";import"./tick-CIMNouXh.js";import"./DropdownField-B4klekJb.js";import"./withOsdkMetrics-FM_wpNGl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

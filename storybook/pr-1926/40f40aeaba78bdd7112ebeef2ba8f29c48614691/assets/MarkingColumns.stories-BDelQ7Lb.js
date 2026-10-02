import{f as p,j as e}from"./iframe-CKrQ01Tw.js";import{O as i}from"./object-table-BrklFnTe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChvNP4Pl.js";import"./Table-CTe43hEg.js";import"./index-BIdRQM2S.js";import"./Dialog-CkUz6oIc.js";import"./cross-Bj1Rnssl.js";import"./svgIconContainer-BWrjI0N2.js";import"./useBaseUiId-B2KTelTM.js";import"./InternalBackdrop-DZCFtxK4.js";import"./composite-CgNTf1JJ.js";import"./index-xXO27wOh.js";import"./index-OkCRkK7-.js";import"./index-CIIKdpni.js";import"./useEventCallback-CgTz_qfp.js";import"./SkeletonBar-BoUHhX8q.js";import"./LoadingCell-CH7OlUFO.js";import"./ColumnConfigDialog-DmW2Vozj.js";import"./DraggableList-BU-lHS4a.js";import"./search-G6EfpRFi.js";import"./Input-Cq0Ol3YB.js";import"./useControlled-BlU5vlUe.js";import"./Button-Cq8nZ_ey.js";import"./small-cross-CZEI8mhu.js";import"./ActionButton-BCIDvNWh.js";import"./Checkbox-DOfZvhoo.js";import"./useValueChanged-I3JyBt64.js";import"./CollapsiblePanel-Chcrgg3J.js";import"./MultiColumnSortDialog-IfxNGyXy.js";import"./MenuTrigger-Dc4-fsw5.js";import"./CompositeItem-Bisu6D-H.js";import"./ToolbarRootContext-DNlCsrGQ.js";import"./getDisabledMountTransitionStyles-Cj27Wpwi.js";import"./getPseudoElementBounds-Bcz462pH.js";import"./chevron-down-BWfpQhPj.js";import"./index-BgdQNo10.js";import"./error-BeLhzW1q.js";import"./BaseCbacBanner-D-n0oCTz.js";import"./makeExternalStore-DmTWPGlO.js";import"./Tooltip-DNNmdmtX.js";import"./PopoverPopup-BoVZQgTK.js";import"./debounce-BBFO8SUe.js";import"./useOsdkClient-Cx-PCDzm.js";import"./tick-sRemk3LV.js";import"./DropdownField-CstOe1Ir.js";import"./isEqual-BEtTnJ8J.js";import"./withOsdkMetrics-5P2QGy1j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

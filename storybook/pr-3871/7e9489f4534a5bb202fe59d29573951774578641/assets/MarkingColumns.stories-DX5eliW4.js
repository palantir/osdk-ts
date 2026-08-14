import{f as p,j as e}from"./iframe-CvIhuXi9.js";import{O as i}from"./object-table-SThaR-xf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ngrsZYi_.js";import"./Table-DqwHSnX7.js";import"./index-BWTVCJU3.js";import"./Dialog-oy8WyC4u.js";import"./cross-B5_Z7JKl.js";import"./svgIconContainer-CGfWhKh9.js";import"./useBaseUiId-DCKRG5Ce.js";import"./InternalBackdrop-CKKtHveH.js";import"./composite-CHb5-0xp.js";import"./index-00-WrU0n.js";import"./index-BBNVMWE6.js";import"./index-DxI2ZkoH.js";import"./useEventCallback-B9O9xLj2.js";import"./SkeletonBar-Dy3mLPU8.js";import"./LoadingCell-jcJC2Lrs.js";import"./ColumnConfigDialog-Cp0PlOtE.js";import"./DraggableList-C5fL1CCi.js";import"./search-CQcV4AtZ.js";import"./Input-OiIQcnvy.js";import"./useControlled-ChdRNV66.js";import"./Button-C6xashMw.js";import"./small-cross-qe6--zI-.js";import"./ActionButton-peYw1N6y.js";import"./Checkbox-CH6dtBYl.js";import"./useValueChanged-Dni45tCH.js";import"./CollapsiblePanel-e1vtouBN.js";import"./MultiColumnSortDialog-CCZLTeEY.js";import"./MenuTrigger-D-4sw_gb.js";import"./CompositeItem-gjyxrrR_.js";import"./ToolbarRootContext-ekWaHIpi.js";import"./getDisabledMountTransitionStyles-CZZecfwa.js";import"./getPseudoElementBounds-C0bxkF24.js";import"./chevron-down-Dj__g3dO.js";import"./index-MB-mmNCq.js";import"./error-CtnHAJul.js";import"./BaseCbacBanner-C-Gfu7nC.js";import"./makeExternalStore-vUi9AgyS.js";import"./Tooltip-BFAg5wCX.js";import"./PopoverPopup-DrlPZtKw.js";import"./debounce-BYyNOPxz.js";import"./useOsdkClient-Cn15GE-w.js";import"./tick-KWgeVH1V.js";import"./DropdownField-D6HVs40m.js";import"./isEqual-BJ-hxf23.js";import"./withOsdkMetrics-BC7K3rr_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

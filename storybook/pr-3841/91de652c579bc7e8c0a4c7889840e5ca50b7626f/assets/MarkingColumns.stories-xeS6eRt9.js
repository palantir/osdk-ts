import{f as p,j as e}from"./iframe-CaEl2eka.js";import{O as i}from"./object-table-DKAkJsj7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKJhYclM.js";import"./Table-DdN_Fh96.js";import"./index-Dao3z4xN.js";import"./Dialog-CFabIcPb.js";import"./cross-w8xD3Kul.js";import"./svgIconContainer-BZS1llvH.js";import"./useBaseUiId-C6NCgBGS.js";import"./InternalBackdrop-y5HdDMK5.js";import"./composite-CDJBgnca.js";import"./index-B-jhfDuh.js";import"./index-BWzb8A31.js";import"./index-DpjF6j4z.js";import"./useEventCallback-DVl-nCUK.js";import"./SkeletonBar-Dqjmo54-.js";import"./LoadingCell-DeviUxoR.js";import"./ColumnConfigDialog-CWGHF6UC.js";import"./DraggableList-Cybt2ylu.js";import"./search-00eTLW-R.js";import"./Input-Dxv9-Vzq.js";import"./useControlled-DCzWHf0h.js";import"./Button-Bv8tSuuM.js";import"./small-cross-BccHwN_d.js";import"./ActionButton-DRREP_I-.js";import"./Checkbox-BkeEhxkZ.js";import"./useValueChanged-DVOjBH36.js";import"./CollapsiblePanel-bnEHpgLY.js";import"./MultiColumnSortDialog-aAuNMXh8.js";import"./MenuTrigger-CjdtjAZl.js";import"./CompositeItem-_nl0E7_8.js";import"./ToolbarRootContext--ihq9xQk.js";import"./getDisabledMountTransitionStyles-DV07XhqX.js";import"./getPseudoElementBounds-qU76zSTh.js";import"./chevron-down-CoZ1s0t9.js";import"./index-DaKhz2zi.js";import"./error-Zn5rVwYN.js";import"./BaseCbacBanner-DUtgprEg.js";import"./makeExternalStore-CmUF4kPq.js";import"./Tooltip-D6YR40Tf.js";import"./PopoverPopup-5RMFkOP8.js";import"./debounce-DgOaRStr.js";import"./useOsdkClient-aeU6oKDe.js";import"./tick-91iRYN-3.js";import"./DropdownField-C01HlXsj.js";import"./isEqual-RjQDL3k6.js";import"./withOsdkMetrics-B62KTojI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

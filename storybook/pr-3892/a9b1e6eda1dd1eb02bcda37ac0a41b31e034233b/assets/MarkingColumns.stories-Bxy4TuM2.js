import{f as p,j as e}from"./iframe-Bm9OwjZM.js";import{O as i}from"./object-table-BdOtMKtj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bxv9zFay.js";import"./Table-C5d9fcW1.js";import"./index-CObn2eDC.js";import"./Dialog-YqtByMUq.js";import"./cross-Bo0UY3wT.js";import"./svgIconContainer-CGp9KnXA.js";import"./useBaseUiId-D5G-UFce.js";import"./InternalBackdrop-CSTuoliM.js";import"./composite-CV2pmKck.js";import"./index-CYRBkEMI.js";import"./index-CZ4br5bx.js";import"./index-D3K1YH6u.js";import"./useEventCallback-C1sCbiB1.js";import"./SkeletonBar-C4tbzHrf.js";import"./LoadingCell-Bob79hrl.js";import"./ColumnConfigDialog-BEpELY0Q.js";import"./DraggableList-aiQUDllv.js";import"./search-CMsxyB6o.js";import"./Input-BBarF8jI.js";import"./useControlled-DagSlxnt.js";import"./Button-DH8D07bO.js";import"./small-cross-CpEGyO2C.js";import"./ActionButton-b5H9Wsoo.js";import"./Checkbox-C42BhasO.js";import"./useValueChanged-BziSxweC.js";import"./CollapsiblePanel-CSPGJmMi.js";import"./MultiColumnSortDialog-DcTDhB5S.js";import"./MenuTrigger-N4nRkaQI.js";import"./CompositeItem-Dks46NaI.js";import"./ToolbarRootContext-BzeWV0Ij.js";import"./getDisabledMountTransitionStyles-DW6BIlyq.js";import"./getPseudoElementBounds-Dw9iwve0.js";import"./chevron-down-Ykcn_Zyn.js";import"./index-DzghPfIw.js";import"./error-CCuJWU5M.js";import"./BaseCbacBanner-CCrrjuO8.js";import"./makeExternalStore-B2bSqcMJ.js";import"./Tooltip-Ca0v0yFB.js";import"./PopoverPopup-LXlLsWEU.js";import"./debounce-Cg2J-NCz.js";import"./useOsdkClient-CN1s-vKt.js";import"./tick-C0wxgn1E.js";import"./DropdownField-tU79IoE9.js";import"./isEqual-lfYKGgFL.js";import"./withOsdkMetrics-OOsnIMnD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BnFW5qcd.js";import{O as i}from"./object-table-DpZKEsGF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNP4KH2h.js";import"./Table-B5A2-075.js";import"./index-cKOHoRyg.js";import"./Dialog-BcixpPY9.js";import"./cross-DNbpGFX0.js";import"./svgIconContainer-Bodb3rrt.js";import"./useBaseUiId-D6lJdHIa.js";import"./InternalBackdrop-CmeR-qjL.js";import"./composite-CvySWJ8Z.js";import"./index-BL84tjwg.js";import"./index-C1VvjJNC.js";import"./index-CBGW4lEy.js";import"./useEventCallback-C-0rxgFy.js";import"./SkeletonBar-CcA6jzxL.js";import"./LoadingCell-Bxn1SRvU.js";import"./ColumnConfigDialog-KESGpiaY.js";import"./DraggableList-DPRVDCNI.js";import"./search-D9IFs7N_.js";import"./Input-CE1LAlWc.js";import"./useControlled-_BjM0h58.js";import"./Button-BWyY3kpw.js";import"./small-cross-Cr5VBWUI.js";import"./ActionButton-C7QNn70Z.js";import"./Checkbox-BuO9H-YM.js";import"./useValueChanged-CJb1heYG.js";import"./CollapsiblePanel-BVe58I7Q.js";import"./MultiColumnSortDialog--H_xB0vm.js";import"./MenuTrigger-DHzBcdzW.js";import"./CompositeItem-Cs7ZSGuB.js";import"./ToolbarRootContext-C1j3JbNp.js";import"./getDisabledMountTransitionStyles-BPLTyrx0.js";import"./getPseudoElementBounds-BMRMQ8Bv.js";import"./chevron-down-DKM-O5Y0.js";import"./index-BPVr2RDp.js";import"./error-TzDePL8Z.js";import"./BaseCbacBanner-BcBr0dVU.js";import"./makeExternalStore-Bf_CkFqj.js";import"./Tooltip-CW7yW1bf.js";import"./PopoverPopup-N71IRvI2.js";import"./debounce-C3zlIzLL.js";import"./useOsdkClient-C1FnG1xl.js";import"./tick-DTrJYZYq.js";import"./DropdownField-nlLolSiv.js";import"./isEqual-CFM-mB7S.js";import"./withOsdkMetrics-BThk06i8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

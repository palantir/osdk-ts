import{f as p,j as e}from"./iframe-FxsuD6Sr.js";import{O as i}from"./object-table-Czd6rYyC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVSGLcJZ.js";import"./Table-CYjkMDAP.js";import"./index-CKR2N3kB.js";import"./Dialog-SBMnKOA2.js";import"./cross-CFzSQqt5.js";import"./svgIconContainer-Ovu2Y5td.js";import"./useBaseUiId-DJR8JcjY.js";import"./InternalBackdrop-B7ogmcK3.js";import"./composite-CppEAQgz.js";import"./index-DBQ4iNHf.js";import"./index-UE862hPr.js";import"./index-C6bcPpxh.js";import"./useEventCallback-DPdmnkc0.js";import"./SkeletonBar-tBE3hkl8.js";import"./LoadingCell-C7ntBBZT.js";import"./ColumnConfigDialog-eHk8uJaT.js";import"./DraggableList-cM0pfulI.js";import"./search-Dh51YkIy.js";import"./Input-BWd3MC0K.js";import"./useControlled-qOHUhmL1.js";import"./isEqual-Zi77fqdH.js";import"./isObject-C3KuFjuf.js";import"./Button-MK3sxMcf.js";import"./ActionButton-Yrb-6YW_.js";import"./Checkbox-CU3SgbFN.js";import"./useValueChanged-BlHRkhLK.js";import"./CollapsiblePanel-CD9SfWhJ.js";import"./MultiColumnSortDialog-2zBddbcg.js";import"./MenuTrigger-DPzW4wso.js";import"./CompositeItem-BFpc-BWg.js";import"./ToolbarRootContext-D_ykqJKV.js";import"./getDisabledMountTransitionStyles-B2kc_gXD.js";import"./getPseudoElementBounds-DuVTX0AV.js";import"./chevron-down-BnyAtcHn.js";import"./index-CkIi5UJm.js";import"./error-SXuJsSsZ.js";import"./BaseCbacBanner-DEyTqKzR.js";import"./makeExternalStore-Cpylu92A.js";import"./Tooltip-p13eGlAJ.js";import"./PopoverPopup-DXWZcYCW.js";import"./toNumber-Cd2zn4Mw.js";import"./useOsdkClient-D1GGIwCw.js";import"./tick-JTOVam0H.js";import"./DropdownField-CKvlRllQ.js";import"./withOsdkMetrics-uh8j5bxN.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

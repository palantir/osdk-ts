import{f as p,j as e}from"./iframe-B1HXhuEn.js";import{O as i}from"./object-table-SyMeuho1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BS8U_QDO.js";import"./Table-BooO-Bry.js";import"./index-CXhpMXAp.js";import"./Dialog-BxEw-kg6.js";import"./cross-BttX5lBy.js";import"./svgIconContainer-DzUf9ieK.js";import"./useBaseUiId-hdD3ov8Q.js";import"./InternalBackdrop-DKFVVvCs.js";import"./composite-DedIsNbG.js";import"./index-DPC2Y4e5.js";import"./index-3H2Ar6XW.js";import"./index-HdEyMueC.js";import"./useEventCallback-t3hd_q7S.js";import"./SkeletonBar-mpMkjWBx.js";import"./LoadingCell-Bl_SPWgw.js";import"./ColumnConfigDialog-mfVgca5M.js";import"./DraggableList-DgzP1v62.js";import"./search-oaLO-0GK.js";import"./Input-v3aPKgft.js";import"./useControlled-BhBQWUYI.js";import"./Button-C9BX79xl.js";import"./small-cross-CvU0Mbeq.js";import"./ActionButton-DWc1Bu8W.js";import"./Checkbox-BAtzCLv1.js";import"./useValueChanged-xoX0cu1s.js";import"./CollapsiblePanel-Dob9z54l.js";import"./MultiColumnSortDialog-CG9PHst2.js";import"./MenuTrigger-DOQRg6UQ.js";import"./CompositeItem-BMKkQOtg.js";import"./ToolbarRootContext-37rMdX1G.js";import"./getDisabledMountTransitionStyles-eJMFQEJH.js";import"./getPseudoElementBounds-S_dxWTa-.js";import"./chevron-down-D8b4kkiL.js";import"./index-BpBIzBNY.js";import"./error-CgwFWGpg.js";import"./BaseCbacBanner-Cav76U6Z.js";import"./makeExternalStore-eAcHCFEV.js";import"./Tooltip-jSRDry3w.js";import"./PopoverPopup-Bf-4BBva.js";import"./debounce-CfR5LM8L.js";import"./useOsdkClient-BzBnYvs_.js";import"./tick-CNzVeS2N.js";import"./DropdownField-DL5ULeUx.js";import"./isEqual-BUr1T77u.js";import"./withOsdkMetrics-BDRjMbuS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

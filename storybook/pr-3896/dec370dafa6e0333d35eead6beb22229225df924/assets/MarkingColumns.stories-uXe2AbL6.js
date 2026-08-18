import{f as p,j as e}from"./iframe--UbMdiy2.js";import{O as i}from"./object-table-BPleZlfI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CA7u7TiX.js";import"./Table-S5ZSLI0s.js";import"./index-C1u9riy0.js";import"./Dialog-CRlo1yaY.js";import"./cross-CsZwFA4x.js";import"./svgIconContainer-CK_06w6f.js";import"./useBaseUiId-CjAg3d2x.js";import"./InternalBackdrop-Cnqy7rAB.js";import"./composite-BtFR9AyU.js";import"./index-BGAR2WV5.js";import"./index-CAvTI1eZ.js";import"./index-CWeBKphS.js";import"./useEventCallback-mC5Yga5M.js";import"./SkeletonBar-DonoHcvy.js";import"./LoadingCell-BVdfkn4-.js";import"./ColumnConfigDialog-DeyfrV4T.js";import"./DraggableList-DZMy2f4Z.js";import"./search-DbUWdvo4.js";import"./Input-BN19GaFA.js";import"./useControlled-Cd5fwv74.js";import"./Button-B02mKxKl.js";import"./small-cross-CN6IgOj7.js";import"./ActionButton-BReFMhE9.js";import"./Checkbox-DbaUG-nH.js";import"./useValueChanged-CcB1RW0l.js";import"./CollapsiblePanel-BcGhusnI.js";import"./MultiColumnSortDialog-DpP6ynZO.js";import"./MenuTrigger-DV-GTusP.js";import"./CompositeItem-D1M30SFN.js";import"./ToolbarRootContext-D_n3oDJh.js";import"./getDisabledMountTransitionStyles-B6BG9y4W.js";import"./getPseudoElementBounds-DF7y15mT.js";import"./chevron-down-C0FvWU53.js";import"./index-CpJmD0Ia.js";import"./error-DmofQ1mT.js";import"./BaseCbacBanner-zXKcjduf.js";import"./makeExternalStore-CU3_vIk-.js";import"./Tooltip-BnRt9YuZ.js";import"./PopoverPopup-JMbPHmmA.js";import"./debounce-YqKHkVhy.js";import"./useOsdkClient-xnyzvADb.js";import"./tick-EMCSZq0W.js";import"./DropdownField-Cxihov6u.js";import"./isEqual-BJfitUL_.js";import"./withOsdkMetrics-C20Si_tx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

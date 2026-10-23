import{f as p,j as e}from"./iframe-vvAR62dd.js";import{O as i}from"./object-table-CXopfYqE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CCln4nV6.js";import"./Table-BBK0GTET.js";import"./index-GmZDd95a.js";import"./Dialog-dFzbXwqF.js";import"./cross-CpEJT7cV.js";import"./svgIconContainer-Dzj9GXt6.js";import"./useBaseUiId-Z7KW9EIT.js";import"./InternalBackdrop-CoJutqVn.js";import"./composite-zVuCDcDS.js";import"./index-OCJal9Dk.js";import"./index-CV2OXpxY.js";import"./index-Bx2-AWTp.js";import"./useEventCallback-Ccpyp-m0.js";import"./SkeletonBar-BZQXUDqP.js";import"./LoadingCell-DPFh4pU5.js";import"./ColumnConfigDialog-Dprrjpsr.js";import"./DraggableList-B6yuk7TC.js";import"./search-nGnjAR9u.js";import"./Input-CMHuklSy.js";import"./useControlled-C-mBGUI2.js";import"./Button-DYluNYeK.js";import"./small-cross-BcEFUww0.js";import"./ActionButton-Bd_k4C4B.js";import"./Checkbox-BhUjCSkM.js";import"./useValueChanged-D84M7v5T.js";import"./CollapsiblePanel-DUeD2G1u.js";import"./MultiColumnSortDialog-Bf2J9Gib.js";import"./MenuTrigger-BtntZbVw.js";import"./CompositeItem-DcxtPwna.js";import"./ToolbarRootContext-rrmxt5FX.js";import"./getDisabledMountTransitionStyles-jloJ4yp1.js";import"./getPseudoElementBounds-DjD6SzS5.js";import"./chevron-down-Bekr5naF.js";import"./index-Se0bF5VG.js";import"./error-DlRppvjG.js";import"./BaseCbacBanner-C5FR1aR-.js";import"./makeExternalStore-5NWNtgTu.js";import"./Tooltip-Bu_ANg_v.js";import"./PopoverPopup-BxKEhfdz.js";import"./debounce-CyLBxhxo.js";import"./useOsdkClient-B1Xs9__W.js";import"./tick-BYwIl2x5.js";import"./DropdownField-DdI4C3BC.js";import"./isEqual-CgfAyVTP.js";import"./withOsdkMetrics-D2qelpzb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

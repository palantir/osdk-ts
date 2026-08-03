import{f as p,j as e}from"./iframe-BZPmmk4P.js";import{O as i}from"./object-table-TdvugDe8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dlz-lYXd.js";import"./index-YprcwoL3.js";import"./Dialog-B-HDchYi.js";import"./cross-DFdy-FQA.js";import"./svgIconContainer-B4NoFBSG.js";import"./useBaseUiId-DlX5x9RU.js";import"./InternalBackdrop-DBxVJh0e.js";import"./composite-CLHhRxo7.js";import"./index-CIOjucrA.js";import"./index-DA0MCU0C.js";import"./index-iAc0qUa2.js";import"./useEventCallback-B_i3wrsy.js";import"./SkeletonBar-Ca9EXSp2.js";import"./LoadingCell-CE3149pJ.js";import"./ColumnConfigDialog-Da-oiPyV.js";import"./DraggableList--HGkMY1D.js";import"./search-Dsvd_0gV.js";import"./Input-dytyLcfC.js";import"./useControlled-wsohqWtM.js";import"./isEqual-B1I8Xh1t.js";import"./isObject-BkcmaaZf.js";import"./Button-DcV7IA-r.js";import"./ActionButton-89hK2jNF.js";import"./Checkbox-rE0u2mBX.js";import"./useValueChanged-RxRuEOcD.js";import"./CollapsiblePanel-BMamQnmf.js";import"./MultiColumnSortDialog-DdGdsEer.js";import"./MenuTrigger-B0NrLQW4.js";import"./CompositeItem-Bc6vhKBa.js";import"./ToolbarRootContext-D0N7lU5l.js";import"./getDisabledMountTransitionStyles-B8l5wKWi.js";import"./getPseudoElementBounds-CiUtrG9T.js";import"./chevron-down-D5amVYwn.js";import"./index-BzfQ8r3a.js";import"./error-Ctnqq7qU.js";import"./BaseCbacBanner-HZGmZG_b.js";import"./makeExternalStore-CZiN_ybo.js";import"./Tooltip-BLqeS2PA.js";import"./PopoverPopup-DMVAzrmB.js";import"./toNumber-W8uVLdvZ.js";import"./useOsdkClient-CC2-r7xP.js";import"./tick-Zue1YGCM.js";import"./DropdownField-BDXw0V-e.js";import"./withOsdkMetrics-B48JLbxj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

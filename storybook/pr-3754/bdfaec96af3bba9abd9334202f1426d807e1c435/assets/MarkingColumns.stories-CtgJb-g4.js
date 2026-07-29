import{f as p,j as e}from"./iframe-Cpo2Lb7Q.js";import{O as i}from"./object-table-5Jh_3dqt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BTyBDeYw.js";import"./Table-DYI1bu7c.js";import"./index-DAIxb8lO.js";import"./Dialog-BcvgDMAE.js";import"./cross-CZFyZqXF.js";import"./svgIconContainer-CNBgUvgp.js";import"./useBaseUiId-C71UhqfB.js";import"./InternalBackdrop-BbBNeTmM.js";import"./composite-lg9O8pjM.js";import"./index-P8ZVWR7P.js";import"./index-BzSe1Ywi.js";import"./index-BbCiixnW.js";import"./useEventCallback-CXI_gnIi.js";import"./SkeletonBar-V58QqV18.js";import"./LoadingCell-CNLIcZ1_.js";import"./ColumnConfigDialog-CpBrKYB4.js";import"./DraggableList-D-hNhtrV.js";import"./search-81KRYPyx.js";import"./Input-Cq3cg5h0.js";import"./useControlled-Du4CUvuR.js";import"./isEqual-C-XNtB89.js";import"./isObject-DQzLRM1_.js";import"./Button-DvY2Q1-Z.js";import"./ActionButton-CEbVE-_9.js";import"./Checkbox-CmhKE0_L.js";import"./useValueChanged-wmiaDnHO.js";import"./CollapsiblePanel-DX31vVrS.js";import"./MultiColumnSortDialog-D0MoyL6S.js";import"./MenuTrigger-DjPrBlqb.js";import"./CompositeItem-Can9NOH7.js";import"./ToolbarRootContext-4YzqWCdW.js";import"./getDisabledMountTransitionStyles-CVyvKvVG.js";import"./getPseudoElementBounds-B1IEE38k.js";import"./chevron-down-BSTwpJrf.js";import"./index-DxrxQtdn.js";import"./error-C4NjMbrc.js";import"./BaseCbacBanner-BKoq64Pz.js";import"./makeExternalStore-Bmx7Tt0X.js";import"./Tooltip-BQBIdErB.js";import"./PopoverPopup-D5V5N6Lq.js";import"./toNumber-BK28PHzs.js";import"./useOsdkClient-DmZx15_x.js";import"./tick-CLQ_tC5j.js";import"./DropdownField-BH_EsL1V.js";import"./withOsdkMetrics-j77wZ3nI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

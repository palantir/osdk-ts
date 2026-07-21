import{f as p,j as e}from"./iframe-DytbHhki.js";import{O as i}from"./object-table-DdBnOKuC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DCN63zph.js";import"./index-D_gO6T8d.js";import"./Dialog-BAmBuHn1.js";import"./cross-i6RcU6jV.js";import"./svgIconContainer-CuByUzhw.js";import"./useBaseUiId-BXp8gPAV.js";import"./InternalBackdrop-B6eJCl6q.js";import"./composite-CALz1dJo.js";import"./index-BJ7QtMHN.js";import"./index-CqMxAMOx.js";import"./index-CoFFe6VB.js";import"./useEventCallback-PK4_z6wD.js";import"./SkeletonBar-DaIXOfR8.js";import"./LoadingCell-CGRNgvvQ.js";import"./ColumnConfigDialog-CUYe8Ko2.js";import"./DraggableList-CcaYC74B.js";import"./search-B3ds4xzI.js";import"./Input-Cje8oXaD.js";import"./useControlled-DqobAIw0.js";import"./isEqual-DnkbdZwD.js";import"./isObject-B6BLOvR3.js";import"./Button-B2vIayxf.js";import"./ActionButton-CsHW80S4.js";import"./Checkbox-BRLch1Ef.js";import"./useValueChanged-DKTxXba2.js";import"./CollapsiblePanel-BD-MxPFJ.js";import"./MultiColumnSortDialog-BQHpOMea.js";import"./MenuTrigger-DU_nwvYE.js";import"./CompositeItem-BplIbDpd.js";import"./ToolbarRootContext-DzqS5waG.js";import"./getDisabledMountTransitionStyles-WgZN3Hl0.js";import"./getPseudoElementBounds-C9soiFUF.js";import"./chevron-down-CYf23tnh.js";import"./index-DnqlLGeC.js";import"./error-BXAWhyme.js";import"./BaseCbacBanner-BdWnMIEn.js";import"./makeExternalStore-CRhUhF3-.js";import"./Tooltip-BcTr22mU.js";import"./PopoverPopup-CTk2UiJ6.js";import"./toNumber-Bfhtb8_5.js";import"./useOsdkClient-S7xilFcy.js";import"./tick-CvSMvDv3.js";import"./DropdownField-BDn0wr5x.js";import"./withOsdkMetrics-BUpd5crj.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

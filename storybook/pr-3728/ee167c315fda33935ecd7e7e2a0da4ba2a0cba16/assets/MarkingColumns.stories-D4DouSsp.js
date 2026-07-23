import{f as p,j as e}from"./iframe-CGHuNhZa.js";import{O as i}from"./object-table-DrWZT2Nm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFimkkay.js";import"./Table-CQrNn90p.js";import"./index-Cd9iBkhG.js";import"./Dialog-CRbbYyfg.js";import"./cross-DR5PTAdZ.js";import"./svgIconContainer-DSjk454u.js";import"./useBaseUiId-0kJLkjQb.js";import"./InternalBackdrop-CtaGFvnP.js";import"./composite-Owh1o6gR.js";import"./index-BKyQcedJ.js";import"./index-pZgEXI2B.js";import"./index-CcNoRayP.js";import"./useEventCallback-Dt1Kay_H.js";import"./SkeletonBar-BZ7g9rLJ.js";import"./LoadingCell-CqM3GqzJ.js";import"./ColumnConfigDialog-BzBUjZ_3.js";import"./DraggableList-FYws1vMl.js";import"./search-YesNjiEL.js";import"./Input-CAqJgJ9F.js";import"./useControlled-B1Q3SMM2.js";import"./isEqual-BVjchha_.js";import"./isObject-B9FMVunx.js";import"./Button-DTBh-eoN.js";import"./ActionButton-QH7XoIMy.js";import"./Checkbox-DjHi65G5.js";import"./useValueChanged-JPzgRQO1.js";import"./CollapsiblePanel-B8TEopPW.js";import"./MultiColumnSortDialog-Cd_eJ93S.js";import"./MenuTrigger-BdQ8Whf2.js";import"./CompositeItem-I7gIakhP.js";import"./ToolbarRootContext-ElOMa9PH.js";import"./getDisabledMountTransitionStyles-D5Y1Udrx.js";import"./getPseudoElementBounds-M6j3rYit.js";import"./chevron-down-BGSt3VIA.js";import"./index-BbrkUmtY.js";import"./error-Bz23TTWr.js";import"./BaseCbacBanner-CW42AOZO.js";import"./makeExternalStore-4ZWsXdY2.js";import"./Tooltip-D6Wrvry4.js";import"./PopoverPopup-CJ8yFEwO.js";import"./toNumber-Clr2KpgI.js";import"./useOsdkClient-0_lRx-wS.js";import"./tick-BxbnCpgl.js";import"./DropdownField-DmTYccjA.js";import"./withOsdkMetrics-CZFxDcvi.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

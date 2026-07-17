import{f as p,j as e}from"./iframe-BCBw9img.js";import{O as i}from"./object-table-CwsD7YpU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2ZIifEO.js";import"./Table-B06wcwmN.js";import"./index-Bion3d63.js";import"./Dialog-CxLcVvzy.js";import"./cross-BxEz3SL2.js";import"./svgIconContainer-CGRDyAb9.js";import"./useBaseUiId-CXGNHbZw.js";import"./InternalBackdrop-D171rznS.js";import"./composite-p-A9hppt.js";import"./index-1A5bhDlP.js";import"./index-BrKznVkU.js";import"./index-6637k_kr.js";import"./useEventCallback-B9Cjm1BG.js";import"./SkeletonBar-QuFdxAu_.js";import"./LoadingCell-4bD-vC9B.js";import"./ColumnConfigDialog-2FBvGfJZ.js";import"./DraggableList-CRgNZHRN.js";import"./search-YMKpWnTK.js";import"./Input-CFQuLrIn.js";import"./useControlled-C717FIDH.js";import"./isEqual-0daqIXgG.js";import"./isObject-ZR9kPvcx.js";import"./Button-CshbfEO8.js";import"./ActionButton-CK2ggz7d.js";import"./Checkbox-Bu5k1166.js";import"./useValueChanged-CyPDNZqb.js";import"./CollapsiblePanel-AMFP2Gpw.js";import"./MultiColumnSortDialog-Bo5kXY3W.js";import"./MenuTrigger-C3wyZFQ4.js";import"./CompositeItem-BAHesqPE.js";import"./ToolbarRootContext-ChkyB5aj.js";import"./getDisabledMountTransitionStyles-Qp3FXJi5.js";import"./getPseudoElementBounds-4Dk2h8t7.js";import"./chevron-down-DBuG-0Fx.js";import"./index-09KyzolL.js";import"./error-CIswznoQ.js";import"./BaseCbacBanner-D7TPm0LE.js";import"./makeExternalStore-SGpgOIaZ.js";import"./Tooltip-CW2VGMPc.js";import"./PopoverPopup-8yqff4yL.js";import"./toNumber-B0b5zbhJ.js";import"./useOsdkClient-DkoXzrn8.js";import"./tick-CMZJhdkn.js";import"./DropdownField-DhD7a3e2.js";import"./withOsdkMetrics-D61WyUel.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-fAfbdLhf.js";import{O as i}from"./object-table-CaYd998O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWDN4VMu.js";import"./Table-C3JmlKo7.js";import"./index-CBwRWuPv.js";import"./Dialog-DCz7cHV2.js";import"./cross-ByzYitNg.js";import"./svgIconContainer-BBjFJa49.js";import"./useBaseUiId-DE9gu32f.js";import"./InternalBackdrop-BS8Cja_X.js";import"./composite-CtiB8fcn.js";import"./index-UPhMUfRS.js";import"./index-DpDZejss.js";import"./index-Dy9UXDXz.js";import"./useEventCallback-r0z5W8b6.js";import"./SkeletonBar-McMludcc.js";import"./LoadingCell-fGiZV1sq.js";import"./ColumnConfigDialog-C7OjEVZo.js";import"./DraggableList-CWadax09.js";import"./search-eStI4uI5.js";import"./Input-xMPnLU6F.js";import"./useControlled-BUpGFmgH.js";import"./isEqual-C83scye-.js";import"./isObject-BRg54IAs.js";import"./Button-D_3jmW16.js";import"./ActionButton-DGnJ6gFM.js";import"./Checkbox-DtOU4wvJ.js";import"./useValueChanged-BN058uvs.js";import"./CollapsiblePanel-BezM9uDM.js";import"./MultiColumnSortDialog-CutVSKHs.js";import"./MenuTrigger-BAXI7yhJ.js";import"./CompositeItem-AttJnCul.js";import"./ToolbarRootContext-CAvhaC10.js";import"./getDisabledMountTransitionStyles-CBMJ1zoA.js";import"./getPseudoElementBounds-6yubEjwS.js";import"./chevron-down-D5pYynjB.js";import"./index-9zEFE1EL.js";import"./error-1ACuOiBT.js";import"./BaseCbacBanner-BYgUg6SG.js";import"./makeExternalStore-CPFS4LBF.js";import"./Tooltip-CJvP9DJK.js";import"./PopoverPopup-GwDVfPwB.js";import"./toNumber-R8DRtlO1.js";import"./useOsdkClient-CwPXDR0m.js";import"./tick-Cef6tuE-.js";import"./DropdownField-DtiVj4Pt.js";import"./withOsdkMetrics-gL21sZFb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-T6FPxE0K.js";import{O as i}from"./object-table-DoWkaRDG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVJUo5vD.js";import"./Table-PhLQZJ2g.js";import"./index-BlC5guul.js";import"./Dialog-DcsePeGU.js";import"./cross-DSG_kDqr.js";import"./svgIconContainer-Bb-zIN4G.js";import"./useBaseUiId-BnaU60oa.js";import"./InternalBackdrop-DMRhLb0U.js";import"./composite-Dy6c4U6m.js";import"./index-fTG3ugIN.js";import"./index-dwgTPRac.js";import"./index-CM9q0GbK.js";import"./useEventCallback-D4aHG2Gl.js";import"./SkeletonBar-BdnKYCa-.js";import"./LoadingCell-EsmkJQNZ.js";import"./ColumnConfigDialog-0wmhGdgw.js";import"./DraggableList-pGf7KXk8.js";import"./search-W_OdXqz5.js";import"./Input-m9jOnIO0.js";import"./useControlled-CfGuWGhW.js";import"./isEqual-Cb1ESWgr.js";import"./isObject-DAvDW2Ee.js";import"./Button-Bua1XQqN.js";import"./ActionButton-CcFHXRiG.js";import"./Checkbox-Dcp2Ev8Q.js";import"./useValueChanged-BJuV-qUz.js";import"./CollapsiblePanel-C43Lk74o.js";import"./MultiColumnSortDialog-COkaKDnn.js";import"./MenuTrigger-BTHjzfhH.js";import"./CompositeItem-D7f9jIF4.js";import"./ToolbarRootContext-onK0JDsx.js";import"./getDisabledMountTransitionStyles-BiWzVjrF.js";import"./getPseudoElementBounds-DN7SJHZD.js";import"./chevron-down-Dgx5LT3G.js";import"./index-BCnsaZdT.js";import"./error-BA6G8DtX.js";import"./BaseCbacBanner-46Q-ACPj.js";import"./makeExternalStore-B24wNyzO.js";import"./Tooltip-BNFTTwf_.js";import"./PopoverPopup-dWRIkFoV.js";import"./toNumber-Brf4U0BB.js";import"./useOsdkClient-d8uhPAZU.js";import"./tick-BZruvd73.js";import"./DropdownField-pHJblG4v.js";import"./withOsdkMetrics-DGIMaowm.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

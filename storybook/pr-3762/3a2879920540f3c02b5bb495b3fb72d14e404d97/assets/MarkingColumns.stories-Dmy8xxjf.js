import{f as p,j as e}from"./iframe-C3sKw2cL.js";import{O as i}from"./object-table-1ngyaRdS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D7ozKbCq.js";import"./Table-DXkTtuoa.js";import"./index-wGL4M1dj.js";import"./Dialog-DNd7m5Gs.js";import"./cross-Bu18Q5FU.js";import"./svgIconContainer-C1lOjXyd.js";import"./useBaseUiId-DkTIqUVt.js";import"./InternalBackdrop-CREw7QLK.js";import"./composite-DODBKXpG.js";import"./index-BDLfxrJj.js";import"./index-s1MtgtJR.js";import"./index-BJGZijRP.js";import"./useEventCallback-NfZykPAO.js";import"./SkeletonBar-B8WHnp7i.js";import"./LoadingCell-BMKXKnNB.js";import"./ColumnConfigDialog-DNFVelbj.js";import"./DraggableList-Drc8YOGN.js";import"./search-BdUx-yB5.js";import"./Input-KoETOEYa.js";import"./useControlled-E83E5YYd.js";import"./Button-65aITwDG.js";import"./small-cross-C14IIHQX.js";import"./ActionButton-C6yfBQXX.js";import"./Checkbox-C7B1_vll.js";import"./useValueChanged-Dw0zLy25.js";import"./CollapsiblePanel-Pz8vokeW.js";import"./MultiColumnSortDialog-DntNNQJF.js";import"./MenuTrigger-CCVvE7kO.js";import"./CompositeItem-Bl2bPt1U.js";import"./ToolbarRootContext-jQ-Q_Ur2.js";import"./getDisabledMountTransitionStyles-D4BUlwZ6.js";import"./getPseudoElementBounds-CbXQ2lOM.js";import"./chevron-down-DFO6kUAt.js";import"./index-CS3EOsxC.js";import"./error-B2CSn4Mi.js";import"./BaseCbacBanner-DXG1qZE3.js";import"./makeExternalStore-CjpzJSnl.js";import"./Tooltip-CEzb1PKx.js";import"./PopoverPopup-Y5DzECwv.js";import"./debounce-DgY9oPON.js";import"./useOsdkClient-CzcQ1v9M.js";import"./tick-BGf1Cc8_.js";import"./DropdownField-BF3n0ykt.js";import"./isEqual-COrmyPn8.js";import"./withOsdkMetrics-BIO2bqJF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

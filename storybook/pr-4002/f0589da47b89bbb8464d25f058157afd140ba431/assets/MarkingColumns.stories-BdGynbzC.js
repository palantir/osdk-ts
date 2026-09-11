import{f as p,j as e}from"./iframe-CM-gF3vE.js";import{O as i}from"./object-table-C32GMorJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6RfIl02U.js";import"./Table-QO4nURij.js";import"./index-DP8egC0k.js";import"./Dialog-DGgbpeLl.js";import"./cross-YK-JeFcC.js";import"./svgIconContainer-PHQsggTT.js";import"./useBaseUiId-CaS2-N7q.js";import"./InternalBackdrop-BWQN2r6E.js";import"./composite-Cf4jE4TY.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./index-JlgGEqsp.js";import"./useEventCallback-DWaD4meR.js";import"./SkeletonBar-BEl30Own.js";import"./LoadingCell-DJ4wUhY2.js";import"./ColumnConfigDialog-CSs7gAfE.js";import"./DraggableList-DzEByvv8.js";import"./search-BtBkQ6yC.js";import"./Input-DqavlJne.js";import"./useControlled-BG8DwFhU.js";import"./Button-BzK-RFmN.js";import"./small-cross-BR7O7PTe.js";import"./ActionButton-ESMROX5N.js";import"./Checkbox-pu8Dy_Nr.js";import"./useValueChanged-CM10G8md.js";import"./CollapsiblePanel-CMWBQRO_.js";import"./MultiColumnSortDialog-D7Rvpo7x.js";import"./MenuTrigger-B0ayLht6.js";import"./CompositeItem-D8NXSqvh.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./getDisabledMountTransitionStyles-CA_1r-E1.js";import"./getPseudoElementBounds-du8OB8QR.js";import"./chevron-down-w3gTlyQy.js";import"./index-C3eh3scJ.js";import"./error-2hF2x4c1.js";import"./BaseCbacBanner-ByAGatso.js";import"./makeExternalStore-BT0R62z7.js";import"./Tooltip-Bwp1W_ff.js";import"./PopoverPopup-Bq82sjKK.js";import"./debounce-BZ1j8w7d.js";import"./useOsdkClient-BXUVBGsy.js";import"./tick-Cz70wbcO.js";import"./DropdownField-DO17CDFv.js";import"./isEqual-tjQhxROU.js";import"./withOsdkMetrics-CARAYaYa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

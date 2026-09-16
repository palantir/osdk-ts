import{f as p,j as e}from"./iframe-CVz_WeOC.js";import{O as i}from"./object-table-Ch1VePdD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0q6PXbw.js";import"./Table-DXgezDNO.js";import"./index-BDflHgEd.js";import"./Dialog-BKUzTIkl.js";import"./cross-C8noeNqn.js";import"./svgIconContainer-D2LVORHL.js";import"./useBaseUiId-tRRlvhxI.js";import"./InternalBackdrop-hiDKfjs3.js";import"./composite-Dj-vL0W9.js";import"./index-DIHi61Zo.js";import"./index-Cd-fS6dr.js";import"./index-BW7Ibqv5.js";import"./useEventCallback-BowLlq6N.js";import"./SkeletonBar-D4YfVhlj.js";import"./LoadingCell-CKoVF5V4.js";import"./ColumnConfigDialog-DAql2Ux-.js";import"./DraggableList-CIcSt22Q.js";import"./search-DCAwdpsl.js";import"./Input-BT5FMPCr.js";import"./useControlled-D3k60qqO.js";import"./Button-DhCGu5I6.js";import"./small-cross-Bl3UDKAT.js";import"./ActionButton-By1jCsLC.js";import"./Checkbox-Bycu1fn1.js";import"./useValueChanged-CH5NOABR.js";import"./CollapsiblePanel-wiPKjvqv.js";import"./MultiColumnSortDialog-CrQt-CJ-.js";import"./MenuTrigger-B5gMglGI.js";import"./CompositeItem-D5028N7a.js";import"./ToolbarRootContext-BUfksNXb.js";import"./getDisabledMountTransitionStyles-CM3FK5cI.js";import"./getPseudoElementBounds-BQgoGGXw.js";import"./chevron-down-D7PojQw9.js";import"./index-BZxaJOaP.js";import"./error-DIsBLczr.js";import"./BaseCbacBanner-gkWm0dQw.js";import"./makeExternalStore-CChDsTbl.js";import"./Tooltip-Bvg92253.js";import"./PopoverPopup-CMdx60IF.js";import"./debounce-l5vaE6ps.js";import"./useOsdkClient-DylnfcpV.js";import"./tick-DKNFoxMi.js";import"./DropdownField-BcK9lDxz.js";import"./isEqual-CrVurfmr.js";import"./withOsdkMetrics-h90fRcpC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-HIMvOqvp.js";import{O as i}from"./object-table-D-WNchmf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CEnOtJNC.js";import"./Table-DedP8waU.js";import"./index-BR1U-F-z.js";import"./Dialog-hMfZrTLx.js";import"./cross-CP4Lwknm.js";import"./svgIconContainer-D1UbEXN0.js";import"./useBaseUiId-CktUDHnZ.js";import"./InternalBackdrop-Dp8-zUCW.js";import"./composite-B18nZLbz.js";import"./index-q5lLjySj.js";import"./index-u6B6c4lm.js";import"./index-EPrc8SCg.js";import"./useEventCallback-DUOVZOFF.js";import"./SkeletonBar-BuEvimm7.js";import"./LoadingCell-CyCzRKtl.js";import"./ColumnConfigDialog-DgDt7beG.js";import"./DraggableList-BgEOUXK-.js";import"./search-BMnX-ou2.js";import"./Input-8GhwsC7r.js";import"./useControlled-BEIkGatI.js";import"./isEqual-DDn24rvx.js";import"./isObject-CWP39A5-.js";import"./Button-B-j85khL.js";import"./ActionButton-tMOref2G.js";import"./Checkbox-B_2ZiK-d.js";import"./useValueChanged-B-SGOTcO.js";import"./CollapsiblePanel-DFw3qCxp.js";import"./MultiColumnSortDialog-BnW2raxD.js";import"./MenuTrigger-Bbr9eKQr.js";import"./CompositeItem-_EU9HVH1.js";import"./ToolbarRootContext-CV8VtjXF.js";import"./getDisabledMountTransitionStyles-CxpC5Tat.js";import"./getPseudoElementBounds-DMIne3Mm.js";import"./chevron-down-BSoyp3dk.js";import"./index-VIT7olFA.js";import"./error-D_5Pa8ED.js";import"./BaseCbacBanner-DOuZWpnY.js";import"./makeExternalStore-BNFQB0ek.js";import"./Tooltip-BzrgJjB9.js";import"./PopoverPopup-CRg247ib.js";import"./toNumber-COT5YTsh.js";import"./useOsdkClient-CxXIQTjd.js";import"./tick-_LERK7Z8.js";import"./DropdownField-CyTwiJSz.js";import"./withOsdkMetrics-BHF9odaV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

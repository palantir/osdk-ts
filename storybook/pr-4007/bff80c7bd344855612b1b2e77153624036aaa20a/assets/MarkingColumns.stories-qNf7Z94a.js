import{f as p,j as e}from"./iframe-XZT6dXfR.js";import{O as i}from"./object-table-BQSE7qsB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bq4RjIN3.js";import"./Table-BS9XaZPa.js";import"./index-DBmC_ZXQ.js";import"./Dialog-B2xCcXCg.js";import"./cross-DhoAWiHd.js";import"./svgIconContainer-CU7rRNTz.js";import"./useBaseUiId-B8UoJpnF.js";import"./InternalBackdrop-CIqXcp3k.js";import"./composite-8to6_dHI.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./index-CwmKjwjW.js";import"./useEventCallback-CrcHZf2i.js";import"./SkeletonBar-QCqk1NFT.js";import"./LoadingCell-B5xITLxa.js";import"./ColumnConfigDialog-D5p_98S6.js";import"./DraggableList-B9SHbjAV.js";import"./search-JQ5a7a7P.js";import"./Input-ieeoajuX.js";import"./useControlled-eor914uw.js";import"./Button-CFmpzwcx.js";import"./small-cross-Bs01bh1t.js";import"./ActionButton-tWe0lZ3U.js";import"./Checkbox-CAfM_O_2.js";import"./useValueChanged-BiHw7QxN.js";import"./CollapsiblePanel-B1faMpX3.js";import"./MultiColumnSortDialog-BsF5urer.js";import"./MenuTrigger-BxQzviuH.js";import"./CompositeItem-CFpArZRZ.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./getDisabledMountTransitionStyles-DOuJdwmK.js";import"./getPseudoElementBounds-yKX43mtP.js";import"./chevron-down-7slW-jes.js";import"./index-CAFrt6ka.js";import"./error-CE5bRqvK.js";import"./BaseCbacBanner-Ca9YHGdr.js";import"./makeExternalStore-DkP425EE.js";import"./Tooltip-COCJMSAT.js";import"./PopoverPopup-BDOMby4V.js";import"./debounce-DSg_tuNC.js";import"./useOsdkClient-JmfcqbuF.js";import"./tick-wmOq-VtM.js";import"./DropdownField-r6GmTP-a.js";import"./isEqual-DhcMgsNP.js";import"./withOsdkMetrics-waGd8POl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

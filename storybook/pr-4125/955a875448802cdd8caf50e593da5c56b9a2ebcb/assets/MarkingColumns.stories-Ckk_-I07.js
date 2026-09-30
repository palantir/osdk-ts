import{f as p,j as e}from"./iframe-CJUVjq4K.js";import{O as i}from"./object-table-9j7hJKGq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DSClUnrb.js";import"./Table-BHtfhcbt.js";import"./index-GE7urbEt.js";import"./Dialog-BuLoeA1I.js";import"./cross-B9ZydxGz.js";import"./svgIconContainer-CvZRP5Wc.js";import"./useBaseUiId-CYXUYH1v.js";import"./InternalBackdrop-C3RvedXC.js";import"./composite-DKgrSWPF.js";import"./index-Cy6fVwoK.js";import"./index-Bf3fiI44.js";import"./index-DebWIRa-.js";import"./useEventCallback-BIZx9_-2.js";import"./SkeletonBar-B9k800l5.js";import"./LoadingCell-BMMxeSXI.js";import"./ColumnConfigDialog-D97QBTu9.js";import"./DraggableList-BVcfWvj2.js";import"./search-DE0VchUk.js";import"./Input-CRzIer8e.js";import"./useControlled-CmmcI5hz.js";import"./Button-3MSado4D.js";import"./small-cross-CVDb-HU5.js";import"./ActionButton-DVQysWwt.js";import"./Checkbox-CZkvMdfq.js";import"./useValueChanged-XTKnjh2G.js";import"./CollapsiblePanel-8s1IX430.js";import"./MultiColumnSortDialog-DVQqUNoO.js";import"./MenuTrigger-DuK6ZS-3.js";import"./CompositeItem-Dt49eISw.js";import"./ToolbarRootContext-BC2o7QKp.js";import"./getDisabledMountTransitionStyles-CJ0sEwK5.js";import"./getPseudoElementBounds-5mjFlJzS.js";import"./chevron-down-CQOxC3pu.js";import"./index-CnwddG-W.js";import"./error-Qoo-TgP1.js";import"./BaseCbacBanner-ClYJmr6A.js";import"./makeExternalStore-X814geH6.js";import"./Tooltip-DWTM9fE9.js";import"./PopoverPopup-BSqbMmuQ.js";import"./debounce-Ckmd3QDC.js";import"./useOsdkClient-Bn_kWgls.js";import"./tick-Dnvepkck.js";import"./DropdownField-2TmnJYIn.js";import"./isEqual-CaNBV33-.js";import"./withOsdkMetrics-_5PcUp3d.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

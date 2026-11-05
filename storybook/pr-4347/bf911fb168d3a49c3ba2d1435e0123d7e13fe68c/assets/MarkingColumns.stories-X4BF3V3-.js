import{f as p,j as e}from"./iframe-Deuk3WWS.js";import{O as i}from"./object-table-sRmdC6uV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BBagj194.js";import"./Table-ZZV9SBNc.js";import"./index-6Crz7A4k.js";import"./Dialog-BrM9AM2P.js";import"./cross-BVTbes25.js";import"./svgIconContainer-B5ALG4eV.js";import"./useBaseUiId-C0TzrPg5.js";import"./InternalBackdrop-BSAjnJ8q.js";import"./composite-CHecoTnn.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./index-DdVo18Pi.js";import"./useEventCallback-Cb6Txe3l.js";import"./SkeletonBar-DSTTd06h.js";import"./LoadingCell-C4glawo5.js";import"./ColumnConfigDialog-DWZYx-xr.js";import"./DraggableList-8AUjWbzX.js";import"./search-CbQ17IfG.js";import"./Input-DB3pzys-.js";import"./useControlled-Ck5NZ_4o.js";import"./Button-NLGJUEdX.js";import"./small-cross-B4XcSwLB.js";import"./ActionButton-DFvwDNjB.js";import"./Checkbox-DDVVlV2I.js";import"./useValueChanged-BgV54nDS.js";import"./CollapsiblePanel-4fPAfwdp.js";import"./MultiColumnSortDialog-DaRilF2v.js";import"./MenuTrigger-Cmuj0DWR.js";import"./CompositeItem-D95IUf9G.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./getDisabledMountTransitionStyles-jk1RFGGJ.js";import"./getPseudoElementBounds-BDKVNpp1.js";import"./chevron-down-CzdIHmMJ.js";import"./index-BOxz8-qW.js";import"./error-kMW-uU3e.js";import"./BaseCbacBanner-6dmNgK7x.js";import"./makeExternalStore-C0hhujMA.js";import"./Tooltip-BV34caG_.js";import"./PopoverPopup-Bqj9UCPW.js";import"./debounce-BRZYJGiS.js";import"./useOsdkClient-CXg2SlsO.js";import"./tick-DMuR0LZC.js";import"./DropdownField-BUzKXDS6.js";import"./isEqual-DR-npGts.js";import"./withOsdkMetrics-ZZvmUZ78.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-Chczgz1L.js";import{O as i}from"./object-table-Bxdzz0hQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dse16TU5.js";import"./index-B9rruesR.js";import"./Dialog-BbtwTc0C.js";import"./cross-BNk5cXgp.js";import"./svgIconContainer-1jnQ2eo6.js";import"./useBaseUiId-BKJ7O9Ur.js";import"./InternalBackdrop-B43ScOJk.js";import"./composite-B4QMOHJZ.js";import"./index-Bt7ugu0N.js";import"./index-Dre7KrbC.js";import"./index-C3YdOJBa.js";import"./useEventCallback-iA9Hkw4u.js";import"./SkeletonBar-ygOk5JN2.js";import"./LoadingCell-DQtzbn-T.js";import"./ColumnConfigDialog-CMVJNphW.js";import"./DraggableList-DYyl4oJS.js";import"./search-wmopA8Vh.js";import"./Input-D4C3JvNi.js";import"./useControlled-BC2wgxgm.js";import"./Button-DeWrzdot.js";import"./small-cross-C5CmaSnd.js";import"./ActionButton-CZnKDqRc.js";import"./Checkbox-DgnWFNdK.js";import"./useValueChanged-BPFB-1jm.js";import"./CollapsiblePanel-MP_8oHdu.js";import"./MultiColumnSortDialog-Ca2t4niR.js";import"./MenuTrigger-DgS4uFoV.js";import"./CompositeItem-DywVVkGM.js";import"./ToolbarRootContext-BtrjEFZW.js";import"./getDisabledMountTransitionStyles-DNM4KQ8Z.js";import"./getPseudoElementBounds-kaI3yQ6b.js";import"./chevron-down-Btx-Kyg4.js";import"./index-DUC7giJN.js";import"./error-ChH6XIqA.js";import"./BaseCbacBanner-BhtkZFkf.js";import"./makeExternalStore-BDwYNInw.js";import"./Tooltip-BdxHwWMz.js";import"./PopoverPopup-C55rHfzo.js";import"./debounce-CXpZecUZ.js";import"./useOsdkClient-D5LFzarX.js";import"./tick-CT8h7pmf.js";import"./DropdownField-BuaHdJat.js";import"./isEqual-D5otW-My.js";import"./withOsdkMetrics-C9LJ-x24.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

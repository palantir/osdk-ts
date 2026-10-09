import{f as p,j as e}from"./iframe-DIQwlBGw.js";import{O as i}from"./object-table-B0kYPHpZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCZh2qZU.js";import"./Table-BPo3rkv8.js";import"./index-BMg1YwPI.js";import"./Dialog-CLjd9I5R.js";import"./cross-D0qgRA8s.js";import"./svgIconContainer-nWXxjIgM.js";import"./useBaseUiId-mRekfqkE.js";import"./InternalBackdrop-C6DbQw29.js";import"./composite-B2M76Ume.js";import"./index-DtMGyB9I.js";import"./index-BuSKlV2e.js";import"./index-UQtK-RIQ.js";import"./useEventCallback-DxY1G1xy.js";import"./SkeletonBar-DVtZv4Je.js";import"./LoadingCell-Dqa7QJ7Z.js";import"./ColumnConfigDialog-BiMopCab.js";import"./DraggableList-9SOspmbc.js";import"./search-Tzmhdcy6.js";import"./Input-BemJFGwg.js";import"./useControlled-CIA12Xby.js";import"./Button-VL7ULnuX.js";import"./small-cross-D_-B7wlF.js";import"./ActionButton-xUfD7fn9.js";import"./Checkbox-BI1kwAKI.js";import"./useValueChanged-CKkyYd23.js";import"./CollapsiblePanel-BXhFX321.js";import"./MultiColumnSortDialog-ByVpX3ed.js";import"./MenuTrigger-B3Zw-U0E.js";import"./CompositeItem-D6nOF9ZG.js";import"./ToolbarRootContext-D5pzp3U-.js";import"./getDisabledMountTransitionStyles-CVqdgNzh.js";import"./getPseudoElementBounds-BT2tDun_.js";import"./chevron-down-Be7rb41D.js";import"./index-DjZsV1fi.js";import"./error-Bhb1P9AB.js";import"./BaseCbacBanner-D7HQfyCk.js";import"./makeExternalStore-C-tnPbL7.js";import"./Tooltip-DwcbeITg.js";import"./PopoverPopup-BXkqjOaY.js";import"./debounce-jcF6p9SO.js";import"./useOsdkClient-DggWHq9a.js";import"./tick-sIrdoQr_.js";import"./DropdownField-33Sq78Ta.js";import"./isEqual-CTj4d5Eb.js";import"./withOsdkMetrics-CrDHFYla.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

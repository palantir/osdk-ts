import{f as p,j as e}from"./iframe-BcMMFnf6.js";import{O as i}from"./object-table-CxXVxX03.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bdi1tYmS.js";import"./Table-CVhdvPJG.js";import"./index-BMHtYDol.js";import"./Dialog-Bbv7wRiS.js";import"./cross-6YkLE3rk.js";import"./svgIconContainer-C05amAGf.js";import"./useBaseUiId-Dh5_vj5x.js";import"./InternalBackdrop-CFb38Fo8.js";import"./composite-B2X0dip5.js";import"./index-BnYXDYMU.js";import"./index-CPLAyU55.js";import"./index-CXDE3lu9.js";import"./useEventCallback-B-CAuCE6.js";import"./SkeletonBar-CwdmwRXI.js";import"./LoadingCell-Cyb6lws2.js";import"./ColumnConfigDialog-DPyT_nAD.js";import"./DraggableList-BUUnKG2Z.js";import"./search-2DDBXVlF.js";import"./Input-BrlK9Tqs.js";import"./useControlled-DFUxWacU.js";import"./Button-DEYF-M81.js";import"./small-cross-enohh6ER.js";import"./ActionButton-9uXzTSfY.js";import"./Checkbox-DTojGO_u.js";import"./useValueChanged-CFpnpCX0.js";import"./CollapsiblePanel-OHw4Wyuf.js";import"./MultiColumnSortDialog-DDvUa2YG.js";import"./MenuTrigger-DiZnaGKK.js";import"./CompositeItem-t1YG6a8m.js";import"./ToolbarRootContext-BPQo0iii.js";import"./getDisabledMountTransitionStyles-BDC06-FA.js";import"./getPseudoElementBounds-DxN6LO-t.js";import"./chevron-down-Co1TC95K.js";import"./index-BjuvBbw0.js";import"./error-DAhNXKes.js";import"./BaseCbacBanner-C2pCyY83.js";import"./makeExternalStore-DdbizQyP.js";import"./Tooltip-DTTbLAmt.js";import"./PopoverPopup-CokHJSIa.js";import"./debounce-BMh6x8y-.js";import"./useOsdkClient-CfZDOufs.js";import"./tick-D5j9FNYd.js";import"./DropdownField-CM1t1x7G.js";import"./isEqual-Cn-TZ48h.js";import"./withOsdkMetrics-BH4rg4j0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

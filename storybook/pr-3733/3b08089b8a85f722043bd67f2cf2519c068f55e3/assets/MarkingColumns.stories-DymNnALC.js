import{f as p,j as e}from"./iframe-NQaBDcT-.js";import{O as i}from"./object-table-Z5doSwbg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4FqHzWe.js";import"./Table-COXuqNBh.js";import"./index-CLkxnMKD.js";import"./Dialog-BjhlK-2w.js";import"./cross-DcxhLvUw.js";import"./svgIconContainer-DQO0w72t.js";import"./useBaseUiId-CWfAhtPJ.js";import"./InternalBackdrop-BAhTmnaR.js";import"./composite-CoANlsJZ.js";import"./index-Bi0qSrUM.js";import"./index-B3idfxCC.js";import"./index-A2uxy8p8.js";import"./useEventCallback-tk2lndgh.js";import"./SkeletonBar-CzzaEuIi.js";import"./LoadingCell-DBDm4hZD.js";import"./ColumnConfigDialog-CYMzmocP.js";import"./DraggableList-B4bDwMrD.js";import"./search--uA81GPQ.js";import"./Input-B3gMQo3k.js";import"./useControlled-B0nGvhOb.js";import"./isEqual-RgKOcXbb.js";import"./isObject-C9NXGwv9.js";import"./Button-DR9fgxtU.js";import"./ActionButton-DLrP6ZI2.js";import"./Checkbox-C_mH_BYn.js";import"./useValueChanged-D-tK78Xr.js";import"./CollapsiblePanel-DPi0jPt7.js";import"./MultiColumnSortDialog-ThZjXe_9.js";import"./MenuTrigger-jO4hp_Ng.js";import"./CompositeItem-Heg_SISl.js";import"./ToolbarRootContext-KFSz4O2O.js";import"./getDisabledMountTransitionStyles-CQZ7k50D.js";import"./getPseudoElementBounds-loX8GLnh.js";import"./chevron-down-Bpm8zG3w.js";import"./index-BV-zBTfb.js";import"./error-MJdHYbKs.js";import"./BaseCbacBanner-LoqLe0FT.js";import"./makeExternalStore-BaZgJLoC.js";import"./Tooltip-xbgbHOR2.js";import"./PopoverPopup-JanM2U3_.js";import"./toNumber-CdSANx5n.js";import"./useOsdkClient-BHzNSi7b.js";import"./tick-CRkn8y_B.js";import"./DropdownField-DfQZb3dt.js";import"./withOsdkMetrics-CPJMr57z.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

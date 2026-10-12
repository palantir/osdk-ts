import{f as p,j as e}from"./iframe-CgKUzItX.js";import{O as i}from"./object-table--UhP6wBB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C8NMj1_t.js";import"./Table-Dd1TltZl.js";import"./index-BGyRLoto.js";import"./Dialog-25Mkgz6y.js";import"./cross-BCuSuLMn.js";import"./svgIconContainer-3Z9BBN_f.js";import"./useBaseUiId-9QwtdzIz.js";import"./InternalBackdrop-Bg0vXpRx.js";import"./composite-C8pbzlSR.js";import"./index-DH7xuiv5.js";import"./index-DPbjuSTY.js";import"./index-BGmAK-zp.js";import"./useEventCallback-C9jSHP4H.js";import"./SkeletonBar-CBQXt1TI.js";import"./LoadingCell-D0L-fZQO.js";import"./ColumnConfigDialog-zvTp2IU4.js";import"./DraggableList-BmHxYwR-.js";import"./search-d4lpn-YX.js";import"./Input-YdwMEp0H.js";import"./useControlled-ywgC3TRl.js";import"./Button-vrPbejrg.js";import"./small-cross-B30TyiPZ.js";import"./ActionButton-BcgXFlaR.js";import"./Checkbox-acHCpw7a.js";import"./useValueChanged-DRRio9Te.js";import"./CollapsiblePanel-DVt2UmWD.js";import"./MultiColumnSortDialog-kMPo0868.js";import"./MenuTrigger-a4Fa52-F.js";import"./CompositeItem-BImsaWuE.js";import"./ToolbarRootContext-Cn9ARR1m.js";import"./getDisabledMountTransitionStyles-CMVjInPg.js";import"./getPseudoElementBounds-DrvvxQqn.js";import"./chevron-down-CUAqfL81.js";import"./index-8XKQJxIW.js";import"./error-CPGG1yPH.js";import"./BaseCbacBanner-Re9lp9Kj.js";import"./makeExternalStore-CkIkERDP.js";import"./Tooltip-C8G96OiC.js";import"./PopoverPopup-CPzBvckh.js";import"./debounce-BzubZrnK.js";import"./useOsdkClient-D6NF6aDi.js";import"./tick-D2qeh1kK.js";import"./DropdownField-T4Xd-ty_.js";import"./isEqual-CZoe1OIr.js";import"./withOsdkMetrics-BCBab3ni.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

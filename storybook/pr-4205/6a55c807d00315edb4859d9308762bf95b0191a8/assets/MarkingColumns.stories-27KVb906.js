import{f as p,j as e}from"./iframe-5xumy2lC.js";import{O as i}from"./object-table-BoICPgng.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dnp5J3ho.js";import"./Table-B-ZJ6RyM.js";import"./index-OGeocGA5.js";import"./Dialog-2O1iW9tl.js";import"./cross-Bww8SGey.js";import"./svgIconContainer-DKJstnRa.js";import"./useBaseUiId-CR8wF2TF.js";import"./InternalBackdrop-C2jSgbPR.js";import"./composite-Dn6Zzxac.js";import"./index-B83pdUrW.js";import"./index-11qWnEer.js";import"./index-HxIZUXDP.js";import"./useEventCallback-CxEaj7x3.js";import"./SkeletonBar-DBfsc1dV.js";import"./LoadingCell-BFn-JqZ5.js";import"./ColumnConfigDialog-C52LWu4a.js";import"./DraggableList-BnpaVKas.js";import"./search-CRyjUtCH.js";import"./Input-Cpl3LxFn.js";import"./useControlled-DMTvVf4P.js";import"./Button-DIwfO1Nk.js";import"./small-cross-CsEkOEx1.js";import"./ActionButton-DZ1xi4Ao.js";import"./Checkbox--1EfxJcT.js";import"./useValueChanged-CQXaTK7m.js";import"./CollapsiblePanel-B1WD2ZBX.js";import"./MultiColumnSortDialog-JTsYSu8n.js";import"./MenuTrigger-CSz-O7Ps.js";import"./CompositeItem-FF3KNmJW.js";import"./ToolbarRootContext-D1AghJYR.js";import"./getDisabledMountTransitionStyles-SCV6Vods.js";import"./getPseudoElementBounds-CPzGORpb.js";import"./chevron-down-De5_JPFZ.js";import"./index-BqDaJCNF.js";import"./error-Dp5nV5lf.js";import"./BaseCbacBanner-U1_86rYd.js";import"./makeExternalStore-BV9yhKos.js";import"./Tooltip-BH0oVEvo.js";import"./PopoverPopup-lyWlzaf2.js";import"./debounce-DZdiCLET.js";import"./useOsdkClient-BvYrFbaa.js";import"./tick-DnbT_4uE.js";import"./DropdownField-XtSPv3vQ.js";import"./isEqual-DAf5nCSq.js";import"./withOsdkMetrics-CN3Oviww.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

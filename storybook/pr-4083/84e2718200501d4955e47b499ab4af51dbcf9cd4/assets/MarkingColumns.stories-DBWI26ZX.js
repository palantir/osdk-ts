import{f as p,j as e}from"./iframe-DW6PMPsi.js";import{O as i}from"./object-table-CuzsmF62.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlWs9PqI.js";import"./Table-BByxpaH0.js";import"./index-D66c38lk.js";import"./Dialog-Me0GuI6a.js";import"./cross-DYQhBJHJ.js";import"./svgIconContainer-DIp-XZwm.js";import"./useBaseUiId-Ddck3Zgv.js";import"./InternalBackdrop-X_yjMxAR.js";import"./composite-n7_MOsSq.js";import"./index-FqdShp73.js";import"./index-DqyvE86A.js";import"./index-CNbWk23J.js";import"./useEventCallback-BUhR7Jsv.js";import"./SkeletonBar-Crz7mTXk.js";import"./LoadingCell-CgDvg7J2.js";import"./ColumnConfigDialog-CXFK6dt3.js";import"./DraggableList-BxMk7E0p.js";import"./search-C1KQWKmH.js";import"./Input-CpyRhfdw.js";import"./useControlled-DHdXh0yp.js";import"./Button-B-NFgFRe.js";import"./small-cross-DYlbnTj3.js";import"./ActionButton-DAhZ0C2F.js";import"./Checkbox-DA8koocQ.js";import"./useValueChanged-Cw-uGmYM.js";import"./CollapsiblePanel-DhvG3pSs.js";import"./MultiColumnSortDialog-CjC7-HbZ.js";import"./MenuTrigger-BbUKjLJu.js";import"./CompositeItem-Cs1O47Aq.js";import"./ToolbarRootContext-097dpJrh.js";import"./getDisabledMountTransitionStyles-BvAhgIN_.js";import"./getPseudoElementBounds-CkD-GcmM.js";import"./chevron-down-DJEtRyIF.js";import"./index-cpYh8GYP.js";import"./error-DYDpYg5Z.js";import"./BaseCbacBanner-CVurcWY3.js";import"./makeExternalStore-D3FsvLmH.js";import"./Tooltip-D6WhT4El.js";import"./PopoverPopup-jZqoMExH.js";import"./debounce-DNGh4uNI.js";import"./useOsdkClient-DKTAeEoU.js";import"./tick-Dfo8VcHX.js";import"./DropdownField-BD6s7Nxw.js";import"./isEqual-rVE2ttD2.js";import"./withOsdkMetrics-M_tvK9si.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

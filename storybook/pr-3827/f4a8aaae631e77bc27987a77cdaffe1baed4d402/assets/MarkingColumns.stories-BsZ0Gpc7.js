import{f as p,j as e}from"./iframe-gEsDMi5m.js";import{O as i}from"./object-table-WOXcTE-C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAXfB12u.js";import"./Table-CEXYRF_J.js";import"./index-CYY6Rkvu.js";import"./Dialog-DAZ5iGgx.js";import"./cross-CApI6DkL.js";import"./svgIconContainer-me1vP-AK.js";import"./useBaseUiId-nOXd_pux.js";import"./InternalBackdrop-BU6W6YCn.js";import"./composite-CaWSGe7j.js";import"./index-CN74APF8.js";import"./index-CAdYCXPf.js";import"./index-n8Ri0MhW.js";import"./useEventCallback-BQHn974L.js";import"./SkeletonBar-BLp97GCo.js";import"./LoadingCell-D8gIru7I.js";import"./ColumnConfigDialog-BRkQ-tNM.js";import"./DraggableList-wBCEtgnC.js";import"./search-B644haYO.js";import"./Input-H1RJGFEs.js";import"./useControlled-G7jSLqSi.js";import"./isEqual-D9zzbew2.js";import"./isObject-BkpyQSqe.js";import"./Button-CAn4HIMi.js";import"./ActionButton-mczlm1qe.js";import"./Checkbox-CbOgMaWQ.js";import"./useValueChanged-BqgGQC4Z.js";import"./CollapsiblePanel-CqXCUz-t.js";import"./MultiColumnSortDialog-DGwhoAnv.js";import"./MenuTrigger-OdnTgWoD.js";import"./CompositeItem-D-qmf9CK.js";import"./ToolbarRootContext-k6OAp5FQ.js";import"./getDisabledMountTransitionStyles-CjAvwRuw.js";import"./getPseudoElementBounds-CqcGhrGg.js";import"./chevron-down-BmqaLTjs.js";import"./index-p-vwnn75.js";import"./error-CiVDGDzV.js";import"./BaseCbacBanner-BcjMpWny.js";import"./makeExternalStore-Dg55qf4I.js";import"./Tooltip-qZVOkPg3.js";import"./PopoverPopup-CMykBH5O.js";import"./toNumber-DLwRWhwE.js";import"./useOsdkClient-BZ8qdmVU.js";import"./tick-BQd7Ks22.js";import"./DropdownField-Bllgl6RO.js";import"./withOsdkMetrics-BRj5Yz7R.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-BCFKBwNO.js";import{O as i}from"./object-table-BI-fWRRG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Brv957vn.js";import"./Table-CNexlFJ3.js";import"./index-D-Y-JsBx.js";import"./Dialog-8zok0XhQ.js";import"./cross-COb2-6gb.js";import"./svgIconContainer-DJ-tdzCi.js";import"./useBaseUiId-DhWedzoZ.js";import"./InternalBackdrop-w16b7Fa9.js";import"./composite-r28fX4bz.js";import"./index-RhQjfChg.js";import"./index-CI-GDb84.js";import"./index-CIbK25r6.js";import"./useEventCallback---Y7uPgD.js";import"./SkeletonBar-Dp_x2eQF.js";import"./LoadingCell-MMJsapFs.js";import"./ColumnConfigDialog-BNjv0wKN.js";import"./DraggableList-BuNGHbii.js";import"./search-cuvXpLTw.js";import"./Input-DblIYKZB.js";import"./useControlled-BM_Yur5U.js";import"./Button-DgFFjm2U.js";import"./small-cross-DZvPn1Ph.js";import"./ActionButton-CCcHuk54.js";import"./Checkbox-DkcYVcVa.js";import"./useValueChanged-C162beI-.js";import"./CollapsiblePanel-CELc9lI_.js";import"./MultiColumnSortDialog-eGV3sokT.js";import"./MenuTrigger-yqfp-VgQ.js";import"./CompositeItem-DrKg3RCP.js";import"./ToolbarRootContext-BgwM3bO2.js";import"./getDisabledMountTransitionStyles-ZdKEJKh5.js";import"./getPseudoElementBounds-DlcoOkhp.js";import"./chevron-down-815YMHZK.js";import"./index-DJgWECAA.js";import"./error-DLaayWkN.js";import"./BaseCbacBanner-CSuRjZdF.js";import"./makeExternalStore-Bhr-T-us.js";import"./Tooltip-Boqdt2X8.js";import"./PopoverPopup-Dg2dGkJN.js";import"./debounce-PdhZTz_Q.js";import"./useOsdkClient-DzUFbc0D.js";import"./tick-BCzVfJh_.js";import"./DropdownField-BQn3rTLQ.js";import"./isEqual-CGdgVv1y.js";import"./withOsdkMetrics-DwU6v8eQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

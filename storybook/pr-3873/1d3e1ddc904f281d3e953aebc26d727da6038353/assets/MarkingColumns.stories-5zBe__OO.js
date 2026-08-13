import{f as p,j as e}from"./iframe-ClFIQ8KG.js";import{O as i}from"./object-table-CIZ5wxZ_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-QzYjnt.js";import"./Table-DF1MSg5O.js";import"./index-CIPksERX.js";import"./Dialog-yohvHLrw.js";import"./cross-CzpL54rX.js";import"./svgIconContainer-BSoQXT4y.js";import"./useBaseUiId-CGYdOYHy.js";import"./InternalBackdrop-BYN0uwLY.js";import"./composite-CYuFvp7L.js";import"./index-D6fn_S1P.js";import"./index-CcH0wkbM.js";import"./index-C0bHrIL5.js";import"./useEventCallback-2FGON6Li.js";import"./SkeletonBar-BAxUsBjZ.js";import"./LoadingCell-CEEtcSs1.js";import"./ColumnConfigDialog-CNRH47Jy.js";import"./DraggableList-DpIRvCOG.js";import"./search-D9qR5ESv.js";import"./Input-DZLAYudG.js";import"./useControlled-DqI9i7cj.js";import"./Button-BMUicVal.js";import"./small-cross-CHjwGZnC.js";import"./ActionButton-DgvUkhlE.js";import"./Checkbox-DBPzyNV6.js";import"./useValueChanged-BfGI94ie.js";import"./CollapsiblePanel-BTYlq_dL.js";import"./MultiColumnSortDialog-O0VEBzdK.js";import"./MenuTrigger-Biet3JvN.js";import"./CompositeItem-Gl89whZy.js";import"./ToolbarRootContext-BD2PZEZ6.js";import"./getDisabledMountTransitionStyles-BON87G2B.js";import"./getPseudoElementBounds-CQu9cawX.js";import"./chevron-down-DJiIS0J4.js";import"./index-CRZWfRoV.js";import"./error-CA8gNZpF.js";import"./BaseCbacBanner-BQ99i8Jn.js";import"./makeExternalStore-CxxiTsbi.js";import"./Tooltip-C64qdZ5m.js";import"./PopoverPopup-BRxfVKHt.js";import"./debounce-CMubfxww.js";import"./useOsdkClient-De0OgZae.js";import"./tick-CveYwUx1.js";import"./DropdownField-O8-KkkYD.js";import"./isEqual-DsEEZELG.js";import"./withOsdkMetrics-of3GBGS8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-Dmr99acc.js";import{O as i}from"./object-table-BdOcZAFL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3fvUQx7.js";import"./Table-QilWXT60.js";import"./index-BrNfcA8o.js";import"./Dialog-_tm9sxGV.js";import"./cross-DPRer7Lc.js";import"./svgIconContainer-i6wDQlBQ.js";import"./useBaseUiId-CZ5UhgWP.js";import"./InternalBackdrop-BZm03awu.js";import"./composite-CTX0S4gD.js";import"./index-hysLT7S5.js";import"./index-D0cDwrQE.js";import"./index-TY9AeqMQ.js";import"./useEventCallback-C7IUT-60.js";import"./SkeletonBar-SINPGVDW.js";import"./LoadingCell--W3bLZb6.js";import"./ColumnConfigDialog-ChX7-k3I.js";import"./DraggableList-BBA9abwK.js";import"./search-CM8W8GMN.js";import"./Input-D7SXFGM5.js";import"./useControlled-MBfgJYZe.js";import"./isEqual-C_SZptGm.js";import"./isObject-B5YNbtiP.js";import"./Button-DUHV64rf.js";import"./ActionButton-C9gLbKzn.js";import"./Checkbox-CCFocOFJ.js";import"./useValueChanged-4X9USCWk.js";import"./CollapsiblePanel-DnJ1tKg0.js";import"./MultiColumnSortDialog-NxwHSZO-.js";import"./MenuTrigger-Yp1PN_ku.js";import"./CompositeItem-CzBeefKz.js";import"./ToolbarRootContext-v-w7YnHp.js";import"./getDisabledMountTransitionStyles-5La8Kryu.js";import"./getPseudoElementBounds-ZhV2I7IE.js";import"./chevron-down-CGjekJXx.js";import"./index-C5lGNItV.js";import"./error-CUTSYbW5.js";import"./BaseCbacBanner-BcSbcgq-.js";import"./makeExternalStore-HyFiibfZ.js";import"./Tooltip-D8v5HrC1.js";import"./PopoverPopup-D-qRdYYc.js";import"./toNumber-DMOIbN6B.js";import"./useOsdkClient-Bxv9nwMb.js";import"./tick-BAMX-Ke2.js";import"./DropdownField-BDfCSa-4.js";import"./withOsdkMetrics-DSCZunsU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

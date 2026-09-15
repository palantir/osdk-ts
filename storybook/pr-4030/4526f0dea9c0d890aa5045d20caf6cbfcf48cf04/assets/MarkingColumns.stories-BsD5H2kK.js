import{f as p,j as e}from"./iframe-BDNIqcwM.js";import{O as i}from"./object-table-BRZikq7I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AKgPBeH6.js";import"./Table-CU6QB62K.js";import"./index-CxoqJ8Ca.js";import"./Dialog-Cu7AZGLK.js";import"./cross-DSoUlEls.js";import"./svgIconContainer-YSUGMhqY.js";import"./useBaseUiId-D6uxKhCZ.js";import"./InternalBackdrop-DHNCq7so.js";import"./composite-CjQ-M14e.js";import"./index-DYO33UQo.js";import"./index-Dy4KxyPS.js";import"./index-6Oer6Qui.js";import"./useEventCallback-C8nnE3Sq.js";import"./SkeletonBar-4B0Vdclq.js";import"./LoadingCell-BsOPEaH3.js";import"./ColumnConfigDialog-BfdZhTeV.js";import"./DraggableList-Bk2ik8FH.js";import"./search-B7vNZRvA.js";import"./Input-CGsPuuzg.js";import"./useControlled-jo7j2Y8W.js";import"./Button-DAHfEEi6.js";import"./small-cross-ZYK0SGzG.js";import"./ActionButton-hlvEU7PC.js";import"./Checkbox-Dn3WdtnT.js";import"./useValueChanged-C0sUDO03.js";import"./CollapsiblePanel-CmEgATYW.js";import"./MultiColumnSortDialog-kqTHFaI3.js";import"./MenuTrigger-7B5Xr4MV.js";import"./CompositeItem-9re6AgtS.js";import"./ToolbarRootContext-BkqYYhP3.js";import"./getDisabledMountTransitionStyles-DFR4pKCD.js";import"./getPseudoElementBounds-BLuItyL9.js";import"./chevron-down-B8PeAqOW.js";import"./index-DKSVa_Lx.js";import"./error-CizQVsJR.js";import"./BaseCbacBanner-C0CCbaP8.js";import"./makeExternalStore-qbxX8lsc.js";import"./Tooltip-CXp93mpB.js";import"./PopoverPopup-C_vvYsh3.js";import"./debounce-C30szGMw.js";import"./useOsdkClient-bCCWw78J.js";import"./tick-C99eCLyr.js";import"./DropdownField-BiIjaXyg.js";import"./isEqual-DuCh0bkd.js";import"./withOsdkMetrics-DbOReG2B.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

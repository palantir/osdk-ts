import{f as p,j as e}from"./iframe-C3ALe4XI.js";import{O as i}from"./object-table-C_Ab1FOE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9j09Kt9.js";import"./Table-CxSoLNtX.js";import"./index-BKEuSw5B.js";import"./Dialog-B7fd23Bi.js";import"./cross-BPeYQOFT.js";import"./svgIconContainer-BzK9nnYn.js";import"./useBaseUiId-BSt1DJMO.js";import"./InternalBackdrop-DCEdIU6y.js";import"./composite-DeQnDke6.js";import"./index-Cuwjur7y.js";import"./index-B38kr0Il.js";import"./index-CoSeAvXF.js";import"./useEventCallback-CILUB2Aq.js";import"./SkeletonBar-Bk24RqTc.js";import"./LoadingCell-10XQF0aj.js";import"./ColumnConfigDialog-DTFR4N0U.js";import"./DraggableList-DcQAIy-V.js";import"./search-OQfzWaBH.js";import"./Input-CYYeu1Fk.js";import"./useControlled-0I4c4VXm.js";import"./isEqual-aXG4qbDt.js";import"./isObject--DEKLidT.js";import"./Button-BxW1qJC_.js";import"./ActionButton-pEfpp1Mh.js";import"./Checkbox-CpNsX3OD.js";import"./useValueChanged-58xNPIIE.js";import"./CollapsiblePanel-De73VvcD.js";import"./MultiColumnSortDialog-PG0dvY2a.js";import"./MenuTrigger-DwrdvI3S.js";import"./CompositeItem-BM9OL0D5.js";import"./ToolbarRootContext-DNoY9ks9.js";import"./getDisabledMountTransitionStyles-DQQTWnqB.js";import"./getPseudoElementBounds-BdQGZpwK.js";import"./chevron-down-CUMOZsgH.js";import"./index-youBsOyB.js";import"./error-BWQuAm4M.js";import"./BaseCbacBanner-DRvKsPhI.js";import"./makeExternalStore-B52bRWSj.js";import"./Tooltip-CdZu92z3.js";import"./PopoverPopup-DfrQ0vsq.js";import"./toNumber-B3SACL5g.js";import"./useOsdkClient-BGS1qVQC.js";import"./tick-B8Wzv8nh.js";import"./DropdownField-D3QOLOMD.js";import"./withOsdkMetrics-BH6CmtMf.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

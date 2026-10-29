import{f as p,j as e}from"./iframe-BVAvsfQX.js";import{O as i}from"./object-table-Dcp3caS0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BwI1TZkb.js";import"./Table-B8xS_JYn.js";import"./index-NhX7SFCA.js";import"./Dialog-BpMcAwvr.js";import"./cross-Blq0AAlZ.js";import"./svgIconContainer-DA2Ye4kw.js";import"./useBaseUiId-DNCMaGc4.js";import"./InternalBackdrop-g-81w1St.js";import"./composite-BKwa0sk2.js";import"./index-Pg5rWMVo.js";import"./index-CZLwJ3bI.js";import"./index-BJ2oEUUj.js";import"./useEventCallback-C4ornPn2.js";import"./SkeletonBar-DYwulvoN.js";import"./LoadingCell-4MxdDazL.js";import"./ColumnConfigDialog-Bg8vrAAB.js";import"./DraggableList-Bs_aQGMP.js";import"./search-YL3_raLw.js";import"./Input-BfbcPKto.js";import"./useControlled-DefMg-iO.js";import"./Button-D9hGt4n3.js";import"./small-cross-BrjbfiK5.js";import"./ActionButton-CMgl13ip.js";import"./Checkbox-AIFcaKS1.js";import"./useValueChanged-zCOkAJVd.js";import"./CollapsiblePanel-DwqNttW-.js";import"./MultiColumnSortDialog-CDHvLDDl.js";import"./MenuTrigger-BhaD-vDL.js";import"./CompositeItem-D1GzGip_.js";import"./ToolbarRootContext-mIzgtd8o.js";import"./getDisabledMountTransitionStyles-CdUsfYUG.js";import"./getPseudoElementBounds-Ck3Ae6Ob.js";import"./chevron-down-D9zeVubV.js";import"./index-CsgPrkQT.js";import"./error-CpL1Ts52.js";import"./BaseCbacBanner-DoSfNXki.js";import"./makeExternalStore-DKjKjidO.js";import"./Tooltip-BbaWMbEy.js";import"./PopoverPopup-Dz7DrwBi.js";import"./debounce-BC3Q5dHj.js";import"./useOsdkClient-DWFkG0k-.js";import"./tick-BntO4w-h.js";import"./DropdownField-C1-i9ZLz.js";import"./isEqual-4IX44eeH.js";import"./withOsdkMetrics-DEQFwLuz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

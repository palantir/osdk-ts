import{f as p,j as e}from"./iframe-BEuky4nW.js";import{O as i}from"./object-table-C2soDB4g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DXZnQA0g.js";import"./Table-CJ0EqFZn.js";import"./index-DYYn-JJY.js";import"./Dialog-DD7QK3S4.js";import"./cross-Ti9XTUaD.js";import"./svgIconContainer-CnHhfA4g.js";import"./useBaseUiId-BQ-nlD4A.js";import"./InternalBackdrop-oGDKeqmq.js";import"./composite-DtclNBVm.js";import"./index-BT6wKmSC.js";import"./index-BM4hMUPD.js";import"./index-BcoFNaVU.js";import"./useEventCallback-CNTzT_sN.js";import"./SkeletonBar-CRaH-j-0.js";import"./LoadingCell-BfTtXoIB.js";import"./ColumnConfigDialog-DGLv9Lk9.js";import"./DraggableList-B8aF8W_-.js";import"./search-CUefFBvc.js";import"./Input-Bkp6Y8Kw.js";import"./useControlled-Ds39J2BB.js";import"./Button-BH8hgTyM.js";import"./small-cross-DKWq78XL.js";import"./ActionButton-DFTc9912.js";import"./Checkbox-BhIdaYL8.js";import"./useValueChanged-Dtjs-Tbs.js";import"./CollapsiblePanel-CbnUeaQj.js";import"./MultiColumnSortDialog-B8n3viKs.js";import"./MenuTrigger-D6-gBe2z.js";import"./CompositeItem-G9820lSK.js";import"./ToolbarRootContext-CUmbCPFZ.js";import"./getDisabledMountTransitionStyles-Draku-JZ.js";import"./getPseudoElementBounds-nyQ3hVZk.js";import"./chevron-down-D_q9Dus0.js";import"./index-B543OGGW.js";import"./error-J-Iw-CxZ.js";import"./BaseCbacBanner-Qb9Ngi8c.js";import"./makeExternalStore-BNzKZyz4.js";import"./Tooltip-DjGQvkmM.js";import"./PopoverPopup-bBDKUc20.js";import"./debounce-D5QhLxiq.js";import"./useOsdkClient-C8yO6X9s.js";import"./tick-C7A_Ekps.js";import"./DropdownField-DpUOV1YL.js";import"./isEqual-CN96Y6VV.js";import"./withOsdkMetrics-DVNHib_Z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

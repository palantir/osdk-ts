import{f as p,j as e}from"./iframe-CHEKlg6X.js";import{O as i}from"./object-table-BP_zntdA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bk_EBvkM.js";import"./Table-BuyJuU36.js";import"./index-BlVg7-ny.js";import"./Dialog-vP86KpqH.js";import"./cross-CLXDm_xy.js";import"./svgIconContainer-CkU_wGfW.js";import"./useBaseUiId-Dm5MMLjS.js";import"./InternalBackdrop-C-VD7cf_.js";import"./composite-CfCX0gh6.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./index-D-2F9sJ3.js";import"./useEventCallback-OPC9ZPah.js";import"./SkeletonBar-BRlkv3E0.js";import"./LoadingCell-CJCiWLh3.js";import"./ColumnConfigDialog-CriuUgSm.js";import"./DraggableList-C_pi7nFv.js";import"./search-C2zDUTqA.js";import"./Input-BQ285Nrh.js";import"./useControlled-YILXX2lb.js";import"./Button-BeqL8QWK.js";import"./small-cross-D0U4JMZD.js";import"./ActionButton-BEr53hKB.js";import"./Checkbox-CLYIDo-5.js";import"./useValueChanged-DpZywDla.js";import"./CollapsiblePanel-BhAp95bX.js";import"./MultiColumnSortDialog-Cu7uDp8D.js";import"./MenuTrigger-Bs3ieiYQ.js";import"./CompositeItem-BM163bD9.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./getDisabledMountTransitionStyles-HaZ0LwJT.js";import"./getPseudoElementBounds-eH10EFit.js";import"./chevron-down-2mN8R6m0.js";import"./index-CaLR8Vgq.js";import"./error-DR3tFMqe.js";import"./BaseCbacBanner-BZvPs1fF.js";import"./makeExternalStore--de5UDab.js";import"./Tooltip-B-MZurAO.js";import"./PopoverPopup-lRNkVQdy.js";import"./debounce-L-eLPBO3.js";import"./useOsdkClient-D_1rD8l7.js";import"./tick-BxZLRw17.js";import"./DropdownField-DMVGeKqk.js";import"./isEqual-CfJ7iHOo.js";import"./withOsdkMetrics-CBYIB_jK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

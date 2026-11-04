import{f as p,j as e}from"./iframe-DiEwqi1M.js";import{O as i}from"./object-table-B_D_jyR9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClSjrKqp.js";import"./Table-Dt7fi-sz.js";import"./index-C5HZMqqF.js";import"./Dialog-Om0xpTNO.js";import"./cross-CTKZHD3L.js";import"./svgIconContainer-DEpavXsM.js";import"./useBaseUiId-BzjC-o1k.js";import"./InternalBackdrop-DxnLPPQZ.js";import"./composite-DPWnr1eN.js";import"./index-Cz06B6jq.js";import"./index-lRW4o_Vc.js";import"./index-CSzmMYde.js";import"./useEventCallback-B63epV8V.js";import"./SkeletonBar-7gs1ucKw.js";import"./LoadingCell-B9gNVpt4.js";import"./ColumnConfigDialog-K-WD4deq.js";import"./DraggableList-BxLmL8UF.js";import"./search-rt5xI3z4.js";import"./Input-DNKlbqfx.js";import"./useControlled-BF2DtUKW.js";import"./Button-C4dfwxaK.js";import"./small-cross-BDLukEIX.js";import"./ActionButton-CcZqKb4G.js";import"./Checkbox-DBiOsgWD.js";import"./useValueChanged-CNrcq4Bg.js";import"./CollapsiblePanel-6U2IaLzh.js";import"./MultiColumnSortDialog-95Z_ah8k.js";import"./MenuTrigger-DLZZizgQ.js";import"./CompositeItem-DTryuWNv.js";import"./ToolbarRootContext-D-rTQkYB.js";import"./getDisabledMountTransitionStyles-BCI44SNh.js";import"./getPseudoElementBounds-Jk7AP9A0.js";import"./chevron-down-D04sNIFr.js";import"./index-3NYfUjbF.js";import"./error-CTX_J0NI.js";import"./BaseCbacBanner-7ReEBEn7.js";import"./makeExternalStore-QP4ecZbg.js";import"./Tooltip-UrBb9NBS.js";import"./PopoverPopup-ByyKD9PW.js";import"./debounce-7cRIuX0l.js";import"./useOsdkClient-BaTJ5QdO.js";import"./tick-DyH69Fpo.js";import"./DropdownField-AFS21FgE.js";import"./isEqual-2EaPlMu5.js";import"./withOsdkMetrics-CwH_Tict.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

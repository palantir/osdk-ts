import{f as p,j as e}from"./iframe-Djf7Pdxr.js";import{O as i}from"./object-table-DFZPT3wI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bqmPmNVM.js";import"./Table-CUYanXua.js";import"./index-q-X2FPlx.js";import"./Dialog-CqoD48et.js";import"./cross-DFIWw1bP.js";import"./svgIconContainer-BOlRpQyp.js";import"./useBaseUiId-CFhAQZOZ.js";import"./InternalBackdrop-CkSj7F1A.js";import"./composite-IAQwOYh1.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./index-LG6ddP-y.js";import"./useEventCallback-B4USqeZP.js";import"./SkeletonBar-Di0gRprg.js";import"./LoadingCell-nhC1WRnp.js";import"./ColumnConfigDialog-qIiF7Qmm.js";import"./DraggableList-B59aQ1_o.js";import"./search-Ddeiu8tt.js";import"./Input-BOeBxQZ8.js";import"./useControlled-DBGPJ9YV.js";import"./Button-DSU1CbLm.js";import"./small-cross-DLOt1VKh.js";import"./ActionButton-Deev-KTG.js";import"./Checkbox-CwEaVyEP.js";import"./useValueChanged-BePRkA2B.js";import"./CollapsiblePanel-CfVuO8FY.js";import"./MultiColumnSortDialog-DwWScOiH.js";import"./MenuTrigger-CRUWzkdL.js";import"./CompositeItem-CA-IJTMc.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./getDisabledMountTransitionStyles-DC6748tP.js";import"./getPseudoElementBounds-CrTEc-vZ.js";import"./chevron-down-CuR5Ei1Z.js";import"./index-3wqM3UEs.js";import"./error-D2_XhANl.js";import"./BaseCbacBanner-5-cpvsaG.js";import"./makeExternalStore-D2eKyzGX.js";import"./Tooltip-B7UeItRk.js";import"./PopoverPopup-aCIXJynx.js";import"./debounce-Dwy6RrjG.js";import"./useOsdkClient-Crp_QmkC.js";import"./tick-CwOgbQYe.js";import"./DropdownField-BbRr8BI8.js";import"./isEqual-BXTqGgF_.js";import"./withOsdkMetrics-Bs-xSy0E.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

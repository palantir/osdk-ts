import{f as p,j as e}from"./iframe-CHFOhFuc.js";import{O as i}from"./object-table-BEAVPppC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B-1rSRgY.js";import"./Table-BHXrFrp1.js";import"./index-BpX6hENj.js";import"./Dialog-DavrQYlA.js";import"./cross-CLtam5MT.js";import"./svgIconContainer-zzwTq_t7.js";import"./useBaseUiId-CpuSZ-O9.js";import"./InternalBackdrop-D25Nk_lQ.js";import"./composite-C909Fk53.js";import"./index-DQOrZvkv.js";import"./index-BvRLFMPY.js";import"./index-DjQ198rg.js";import"./useEventCallback-7PhX1npr.js";import"./SkeletonBar-Ptzyivem.js";import"./LoadingCell-vyjlReTb.js";import"./ColumnConfigDialog-Dtl1NBcg.js";import"./DraggableList-CpD9hN98.js";import"./search-Ct1jR5-1.js";import"./Input-D8YBib2L.js";import"./useControlled-Cnl8z_DZ.js";import"./Button-DHQU-3rC.js";import"./small-cross-Bo2NjBLu.js";import"./ActionButton-DCWXOHbb.js";import"./Checkbox-5_fa2xH5.js";import"./useValueChanged-B0fjg5Tm.js";import"./CollapsiblePanel-qGGyMRYk.js";import"./MultiColumnSortDialog-0LmFuPWU.js";import"./MenuTrigger-C96UvIX6.js";import"./CompositeItem-V52V_N8R.js";import"./ToolbarRootContext-D3CnJ-Kn.js";import"./getDisabledMountTransitionStyles-cR1rxtQJ.js";import"./getPseudoElementBounds-FCd8iOYs.js";import"./chevron-down-DDx-Wnyx.js";import"./index-ClhHXn3z.js";import"./error-2828ta47.js";import"./BaseCbacBanner-AWNQAETM.js";import"./makeExternalStore-CXAxXc_Y.js";import"./Tooltip-tSbifett.js";import"./PopoverPopup-DHn0uRpX.js";import"./debounce-BuVF__lb.js";import"./useOsdkClient-Ct6LLa9L.js";import"./tick-CVF34xif.js";import"./DropdownField-CwxAz57O.js";import"./isEqual-JWCoBpvi.js";import"./withOsdkMetrics-BHwUIoHR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-JE3hAilc.js";import{O as i}from"./object-table-hrGa_0ak.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D3m3uLck.js";import"./Table-CeS9vyxB.js";import"./index-BpOIoYeP.js";import"./Dialog-CexGaiKl.js";import"./cross-B3dok42m.js";import"./svgIconContainer-DxcHQg7k.js";import"./useBaseUiId-CU6aYJhX.js";import"./InternalBackdrop-CjLu4iri.js";import"./composite-OBLfyo_g.js";import"./index-NMATibBb.js";import"./index-D1wHMkU8.js";import"./index-luf3eNCk.js";import"./useEventCallback-F9ZlU1zk.js";import"./SkeletonBar-CjvHDxcU.js";import"./LoadingCell-BgVWpxmw.js";import"./ColumnConfigDialog-CIW1cRLO.js";import"./DraggableList-BNEusFP_.js";import"./search-CVE6ZsP3.js";import"./Input-BBWCNVeu.js";import"./useControlled-i7oJhE2J.js";import"./Button-C-mwssM2.js";import"./small-cross-CS_pcyMB.js";import"./ActionButton-BwTmZVPf.js";import"./Checkbox-axlnltUu.js";import"./useValueChanged-DBeldtQT.js";import"./CollapsiblePanel-CAxKVeuj.js";import"./MultiColumnSortDialog-BTO_FIqh.js";import"./MenuTrigger-Xjt9rGph.js";import"./CompositeItem-CBdxcvZ2.js";import"./ToolbarRootContext-BAaYeDZ8.js";import"./getDisabledMountTransitionStyles-Bt2v_bU6.js";import"./getPseudoElementBounds-BkfHxAL-.js";import"./chevron-down-CzaF57dY.js";import"./index-B4_-u_rP.js";import"./error-7AaWXBYs.js";import"./BaseCbacBanner-5xL76NQJ.js";import"./makeExternalStore-C3Po_h2x.js";import"./Tooltip-DWc2JDJZ.js";import"./PopoverPopup-BddRZ8jP.js";import"./debounce-DbnyHCyz.js";import"./useOsdkClient-CKMIbVIl.js";import"./tick-Bxa_ZUol.js";import"./DropdownField-BLfbhE54.js";import"./isEqual-Yt5EqnyY.js";import"./withOsdkMetrics-Dv_mGpze.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

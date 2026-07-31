import{f as p,j as e}from"./iframe-CVSzcR9w.js";import{O as i}from"./object-table-BL1OrLFB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmmGuI8h.js";import"./Table-CWnSfT3m.js";import"./index-CoAdBXlo.js";import"./Dialog-BzNiLNgs.js";import"./cross-V8sJpGew.js";import"./svgIconContainer-KW-Ldlhm.js";import"./useBaseUiId-pwNrWxdW.js";import"./InternalBackdrop-DNoxDdhd.js";import"./composite-C1Itxjsp.js";import"./index-7SZNtxet.js";import"./index-qmxryskj.js";import"./index-C9y3lIUT.js";import"./useEventCallback-DpMXC2Hy.js";import"./SkeletonBar-B9Ea506E.js";import"./LoadingCell-DDjnYE73.js";import"./ColumnConfigDialog-C4dV68Pi.js";import"./DraggableList-WoTEeIb9.js";import"./search-BnG6tzYG.js";import"./Input-BoTWr8hd.js";import"./useControlled-D5f5j6Pp.js";import"./isEqual-ClJk3lFA.js";import"./isObject-Vb025kqi.js";import"./Button-DeOcB25O.js";import"./ActionButton-BcK8fNN1.js";import"./Checkbox-BSkLo_n2.js";import"./useValueChanged-CJNDKAIt.js";import"./CollapsiblePanel-XxbiJK0o.js";import"./MultiColumnSortDialog-DJCm2HJK.js";import"./MenuTrigger-B4kKkHBw.js";import"./CompositeItem-Bp7fB8eh.js";import"./ToolbarRootContext-DvS1wowG.js";import"./getDisabledMountTransitionStyles-JXZ7CF5Q.js";import"./getPseudoElementBounds-1PgxGw36.js";import"./chevron-down-DgBBMt89.js";import"./index-__u3if6D.js";import"./error-CyOfkgHN.js";import"./BaseCbacBanner-G11Duftm.js";import"./makeExternalStore-B7Vg_OOg.js";import"./Tooltip-BGpjdADX.js";import"./PopoverPopup-BeNdVAq4.js";import"./toNumber-cJlww_NR.js";import"./useOsdkClient-zxzV_-Ks.js";import"./tick-DGpYKPfs.js";import"./DropdownField-DD8sp4es.js";import"./withOsdkMetrics-yQOKEog8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

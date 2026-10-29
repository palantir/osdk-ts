import{f as p,j as e}from"./iframe-CAIgECfm.js";import{O as i}from"./object-table-Bpg6Rjwr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOugih2v.js";import"./index-B3MYTMei.js";import"./Dialog-Dl5pUjsz.js";import"./cross-BQNRDOaU.js";import"./svgIconContainer-C3DKY__f.js";import"./useBaseUiId-D9Drx6D-.js";import"./InternalBackdrop-CszvMWda.js";import"./composite-JJXOCwqO.js";import"./index-oq0LOBzb.js";import"./index-Ufz-XkYv.js";import"./index-Bo8EBVtj.js";import"./useEventCallback-DEW-Jvqw.js";import"./SkeletonBar-BTrZKUFD.js";import"./LoadingCell-C4neaCCK.js";import"./ColumnConfigDialog-DRhbRBNs.js";import"./DraggableList-BeHdPllY.js";import"./search-DtjskLKm.js";import"./Input-DiYmIIHx.js";import"./useControlled-Dfbx34Uf.js";import"./Button-B8Prvm33.js";import"./small-cross-Dd4LJYDa.js";import"./ActionButton-Dm82L77i.js";import"./Checkbox-COVciVNz.js";import"./useValueChanged-5KOAJGnG.js";import"./CollapsiblePanel-DdLN5yGK.js";import"./MultiColumnSortDialog-CS7Povdk.js";import"./MenuTrigger-DN-7j7Vc.js";import"./CompositeItem-ByF2vx3e.js";import"./ToolbarRootContext-wvUb7vtw.js";import"./getDisabledMountTransitionStyles-Dte8P-y1.js";import"./getPseudoElementBounds-DK95qc36.js";import"./chevron-down-DmkBexVO.js";import"./index-euZ8olZi.js";import"./error-DOslEiGD.js";import"./BaseCbacBanner-DKHk2W2w.js";import"./makeExternalStore-1s6PxRaa.js";import"./Tooltip-BLisYypf.js";import"./PopoverPopup-BQG7iL0H.js";import"./debounce-B0a0YjK6.js";import"./useOsdkClient-C0sKTx_B.js";import"./tick-DJkFbBfA.js";import"./DropdownField-Cvt8oMSZ.js";import"./isEqual-l7qirsQ1.js";import"./withOsdkMetrics-BxbwCQgj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

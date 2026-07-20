import{f as p,j as e}from"./iframe-DH5YCN2j.js";import{O as i}from"./object-table-CSMY63rl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoLZtznl.js";import"./Table-BP8dzo3s.js";import"./index-_qf75Onr.js";import"./Dialog-BJZRp9sR.js";import"./cross-sheK920l.js";import"./svgIconContainer-DCm06bfe.js";import"./useBaseUiId-BbdPl4JJ.js";import"./InternalBackdrop-BUowTIPC.js";import"./composite-DlaEkCZH.js";import"./index-C4rwa2_n.js";import"./index-DTdwmsEM.js";import"./index-5uHL8ogI.js";import"./useEventCallback-Y1zbh2EC.js";import"./SkeletonBar-X8pEShvj.js";import"./LoadingCell-DKqnXTAv.js";import"./ColumnConfigDialog-BnamNzoV.js";import"./DraggableList-DnuVGn_n.js";import"./search-nrDeCzJk.js";import"./Input-C7lIrWzz.js";import"./useControlled-DR13xq1i.js";import"./isEqual-C7KvJXXt.js";import"./isObject-EnOnoi_N.js";import"./Button-BWYkYhEl.js";import"./ActionButton-DJZMVqmN.js";import"./Checkbox-D4Yae8oc.js";import"./useValueChanged-DowjCehF.js";import"./CollapsiblePanel-B5KwBzdC.js";import"./MultiColumnSortDialog-C3B9X-EY.js";import"./MenuTrigger-CpOFVQud.js";import"./CompositeItem-CEroXGJN.js";import"./ToolbarRootContext-7yy9e54A.js";import"./getDisabledMountTransitionStyles-CPIV7r6Z.js";import"./getPseudoElementBounds-fGIJ-GSz.js";import"./chevron-down-BioSFIuk.js";import"./index-BPKS3fVr.js";import"./error-wfC3mCU4.js";import"./BaseCbacBanner-CyjHXM2X.js";import"./makeExternalStore-C_s2klxa.js";import"./Tooltip-CQdBjzvk.js";import"./PopoverPopup-DQ0dzB20.js";import"./toNumber-4X5E2Tt3.js";import"./useOsdkClient-AMRs0oag.js";import"./tick-C-dag8Zh.js";import"./DropdownField-BAA_dvC4.js";import"./withOsdkMetrics-CG4b5vbn.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

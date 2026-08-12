import{f as p,j as e}from"./iframe-B4bpzrvR.js";import{O as i}from"./object-table-BVvsWR2G.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ygR31QqW.js";import"./Table-CjzDjeDQ.js";import"./index-BsbymTi9.js";import"./Dialog-ChKLN39C.js";import"./cross-n7An2nll.js";import"./svgIconContainer-_zfJv1vm.js";import"./useBaseUiId-DQnro2m8.js";import"./InternalBackdrop-kI4blW8q.js";import"./composite-CWXRwiuA.js";import"./index-sIpWfZRY.js";import"./index-BCiKLWSQ.js";import"./index-OGlUltzw.js";import"./useEventCallback-Qs8lz6jg.js";import"./SkeletonBar-96pcsO9R.js";import"./LoadingCell-B0dGcpUe.js";import"./ColumnConfigDialog-i8-Tjv7R.js";import"./DraggableList-BSdUre9g.js";import"./search-Cyz40xHr.js";import"./Input-ruAaTYrP.js";import"./useControlled-c3mF7Crf.js";import"./isEqual-FyxATBS-.js";import"./isObject-B3oaV668.js";import"./Button-CsATp9gq.js";import"./ActionButton-BZfgIiZS.js";import"./Checkbox-3BCsJkkb.js";import"./useValueChanged-B4Q2Bujm.js";import"./CollapsiblePanel-GhnpHLbS.js";import"./MultiColumnSortDialog-SWAflGub.js";import"./MenuTrigger-Db98uiN-.js";import"./CompositeItem-CBqdXCF4.js";import"./ToolbarRootContext-BdeRPzt2.js";import"./getDisabledMountTransitionStyles-BnPQ5JOv.js";import"./getPseudoElementBounds-BXLfPEf2.js";import"./chevron-down-BzusAapG.js";import"./index-CurRzgfb.js";import"./error-CD3Qxrj1.js";import"./BaseCbacBanner-B3ZHEXJ1.js";import"./makeExternalStore-qWLMmryU.js";import"./Tooltip-CFElPJb6.js";import"./PopoverPopup-C7HXd2s5.js";import"./toNumber-CmfNCgBV.js";import"./useOsdkClient-DshaS5p6.js";import"./tick-BPDBLuOM.js";import"./DropdownField-DLROjcIJ.js";import"./withOsdkMetrics-srCrwIqC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

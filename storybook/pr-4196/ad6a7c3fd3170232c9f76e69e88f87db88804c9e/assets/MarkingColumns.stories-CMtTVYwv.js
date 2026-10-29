import{f as p,j as e}from"./iframe-BwirHNbs.js";import{O as i}from"./object-table-4_pxRvzD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BcRMcE6w.js";import"./Table-D-tZqhLK.js";import"./index-BmAPsQSt.js";import"./Dialog-JO_QRXHP.js";import"./cross-BGeKWzpP.js";import"./svgIconContainer-2pSHGQCS.js";import"./useBaseUiId-DmDKW149.js";import"./InternalBackdrop-D3Ls8fzN.js";import"./composite-B5RDHpm7.js";import"./index-IvU-D_vM.js";import"./index-EqsE1RFo.js";import"./index-PGrTwV1L.js";import"./useEventCallback-BDGr3X5U.js";import"./SkeletonBar-DYSS3rlU.js";import"./LoadingCell-BXP93Ivh.js";import"./ColumnConfigDialog-BLCSCtFt.js";import"./DraggableList-97N8w9-K.js";import"./search-DVE4XQYl.js";import"./Input-wSOSKhCX.js";import"./useControlled-KmS5bOnr.js";import"./Button-CN4mp3wI.js";import"./small-cross-SjNWyWub.js";import"./ActionButton-BeARaHOn.js";import"./Checkbox-BcJUUkXF.js";import"./useValueChanged-zp2A_D5s.js";import"./CollapsiblePanel-QaN6VVgw.js";import"./MultiColumnSortDialog-BJShujIq.js";import"./MenuTrigger-BXAqOG19.js";import"./CompositeItem-DM1dTjJL.js";import"./ToolbarRootContext-DHUZ3-w7.js";import"./getDisabledMountTransitionStyles-C8faNntK.js";import"./getPseudoElementBounds-D1fPl6ec.js";import"./chevron-down-D3Weizce.js";import"./index-pKQiofWN.js";import"./error-CL70nlEB.js";import"./BaseCbacBanner-DKq7ebkn.js";import"./makeExternalStore-CdNCMpqS.js";import"./Tooltip-BBPuwAdO.js";import"./PopoverPopup-DefD54Az.js";import"./debounce-Dxsepluv.js";import"./useOsdkClient-BKRNMM3l.js";import"./tick-DYr2OYVY.js";import"./DropdownField-DkfCApz5.js";import"./isEqual-OzYXQWRG.js";import"./withOsdkMetrics-CP7X3COO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

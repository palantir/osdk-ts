import{f as p,j as e}from"./iframe-C1TIX5JI.js";import{O as i}from"./object-table-CMU-D2op.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtZpkMB0.js";import"./Table-C-Jt6DU2.js";import"./index-Gx0d5aEB.js";import"./Dialog-C3juZxFB.js";import"./cross-BhNrYvcF.js";import"./svgIconContainer-C8MADQYH.js";import"./useBaseUiId-DePiMeOB.js";import"./InternalBackdrop-3gKyBm5j.js";import"./composite-C4rxhLiP.js";import"./index-DJqIo3bD.js";import"./index-CIcyQnyh.js";import"./index-BzYFvMJd.js";import"./useEventCallback-CQj7Y2wd.js";import"./SkeletonBar-Byy-oVLe.js";import"./LoadingCell-CQuqCKwF.js";import"./ColumnConfigDialog-BPEUu41j.js";import"./DraggableList-CUP3XVuA.js";import"./search-LH-9seDT.js";import"./Input-bIhTrC5p.js";import"./useControlled-C6axbr2z.js";import"./Button-CpS9y80N.js";import"./small-cross-qJkEPBr6.js";import"./ActionButton-BHH4NDLY.js";import"./Checkbox-kmqqo5Xt.js";import"./useValueChanged-Bv8cfv1O.js";import"./CollapsiblePanel-mSd7yFQM.js";import"./MultiColumnSortDialog-C-hlH093.js";import"./MenuTrigger-CwAI2mp-.js";import"./CompositeItem-CBntDvdI.js";import"./ToolbarRootContext-B4mO9KPM.js";import"./getDisabledMountTransitionStyles-DAbJFScG.js";import"./getPseudoElementBounds-DEGLArUE.js";import"./chevron-down-CtHVru-S.js";import"./index-U8HSbgyt.js";import"./error-DkEU1DEd.js";import"./BaseCbacBanner-33-W2eHI.js";import"./makeExternalStore-DRXMdcub.js";import"./Tooltip-Cj81ITcV.js";import"./PopoverPopup-DiuwLzzF.js";import"./debounce-BJNuh3Yk.js";import"./useOsdkClient-D64jRzyq.js";import"./tick-Cf1cYmcP.js";import"./DropdownField-B8kwWA0Z.js";import"./isEqual-tnTJm-mS.js";import"./withOsdkMetrics-BYJpc4fR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

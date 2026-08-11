import{f as p,j as e}from"./iframe-CMTZ0fe1.js";import{O as i}from"./object-table-KzsxDKyC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CcoQ00to.js";import"./Table-Bnsc0v89.js";import"./index-Bh2d44Ht.js";import"./Dialog-CVh1DPcK.js";import"./cross-DM_x2Wwt.js";import"./svgIconContainer-e3zlhnbG.js";import"./useBaseUiId-DzzDh8hf.js";import"./InternalBackdrop-1jqktKWZ.js";import"./composite-DZ5IyePu.js";import"./index-DLlFFsdj.js";import"./index-BAeLlemU.js";import"./index-DjIpGPbX.js";import"./useEventCallback-C8Wd_EE4.js";import"./SkeletonBar-Dw7JaR66.js";import"./LoadingCell-aoEJ-q9D.js";import"./ColumnConfigDialog-7frJ1pW2.js";import"./DraggableList-2l1aoXTT.js";import"./search-IoccQV4w.js";import"./Input-BDDU57H1.js";import"./useControlled-aZtd6HrX.js";import"./isEqual-hPXDcjsC.js";import"./isObject-DzEwnOmo.js";import"./Button-DNRqIdKS.js";import"./ActionButton-DdMAnRGf.js";import"./Checkbox-ZIYx-bNZ.js";import"./useValueChanged-CpNBPQAy.js";import"./CollapsiblePanel-D9kmoKty.js";import"./MultiColumnSortDialog-Dc5URj1l.js";import"./MenuTrigger-BujG9I8j.js";import"./CompositeItem-BO_EAHEP.js";import"./ToolbarRootContext-G1neddYV.js";import"./getDisabledMountTransitionStyles-fmppOIBL.js";import"./getPseudoElementBounds-D5ZzF8r2.js";import"./chevron-down-l0Ac3Xd0.js";import"./index-CjcSY54Z.js";import"./error-Cau1AwlP.js";import"./BaseCbacBanner-CAfSZuIq.js";import"./makeExternalStore-f8SczYn0.js";import"./Tooltip-zQ5Y_0XM.js";import"./PopoverPopup-CZz1h-u7.js";import"./toNumber-BD-Yxo2a.js";import"./useOsdkClient-fyW5LEUN.js";import"./tick-DX859i1S.js";import"./DropdownField-x8BNRTfX.js";import"./withOsdkMetrics-tRuzaAIK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-D-NjJf8E.js";import{O as i}from"./object-table-CQvqHuFL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CTOkYOfH.js";import"./Table-BKmBWaKK.js";import"./index-BfNG9SBg.js";import"./Dialog-BNUju2pG.js";import"./cross-CeDP8iYL.js";import"./svgIconContainer-CGGP5dln.js";import"./useBaseUiId-fJObIM_9.js";import"./InternalBackdrop-Dr_1KZ7A.js";import"./composite-CYVlE3X-.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./index-CQZ7ITuQ.js";import"./useEventCallback-SSXm1pp5.js";import"./SkeletonBar-Bx9ZEMx9.js";import"./LoadingCell-DsONRhQM.js";import"./ColumnConfigDialog-Di4_rnJ1.js";import"./DraggableList-CeyqnhqE.js";import"./search-CjsZbzMa.js";import"./Input-Djaz_ktk.js";import"./useControlled-D1sspD4r.js";import"./Button-B1_GO9AJ.js";import"./small-cross-Bxoh9LLX.js";import"./ActionButton-Ci63hB-4.js";import"./Checkbox-Blg81idJ.js";import"./useValueChanged-BPlDHc58.js";import"./CollapsiblePanel-B43m-kWy.js";import"./MultiColumnSortDialog-CUHPZh-T.js";import"./MenuTrigger-DMumYPhU.js";import"./CompositeItem-CnMema5w.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./getDisabledMountTransitionStyles-9dZlZGXn.js";import"./getPseudoElementBounds-CjUxBsGr.js";import"./chevron-down-C-c1FjW5.js";import"./index-BgxA68V1.js";import"./error-BoBBM1re.js";import"./BaseCbacBanner-D8FF-_Kg.js";import"./makeExternalStore-BW52Pv17.js";import"./Tooltip-DvnHQmBq.js";import"./isObject-u4AYGR4g.js";import"./debounce-6S1krlRt.js";import"./useOsdkClient-UvBflAyV.js";import"./tick-C4vdjWJ1.js";import"./DropdownField-B0llccFH.js";import"./isEqual-DdLufpyz.js";import"./_baseIsEqual-CZ4xsHuR.js";import"./withOsdkMetrics-BLPi8trO.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

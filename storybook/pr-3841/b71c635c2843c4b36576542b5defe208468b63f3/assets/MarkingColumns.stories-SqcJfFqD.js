import{f as p,j as e}from"./iframe-B-YGlnkZ.js";import{O as i}from"./object-table-DxphktV8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtVpadX7.js";import"./Table-0NdccKwG.js";import"./index-BwbxpG9V.js";import"./Dialog-CJCDpIaI.js";import"./cross-Cxuf4ocZ.js";import"./svgIconContainer-ur9r5SLx.js";import"./useBaseUiId-H-3YJ5Rw.js";import"./InternalBackdrop-Ce_XWd_Q.js";import"./composite-Dqyj-RK-.js";import"./index-B6aw-_Dz.js";import"./index-BOs-qFJy.js";import"./index-YMqDUVbD.js";import"./useEventCallback-D17bhAXF.js";import"./SkeletonBar-CzDhRjqu.js";import"./LoadingCell-DtuuL7qi.js";import"./ColumnConfigDialog-BTqSDIGX.js";import"./DraggableList-lM9X_JRz.js";import"./search-DXsdMEbr.js";import"./Input-DaqHwlu0.js";import"./useControlled-DdFFxVnf.js";import"./Button-BxSaRA57.js";import"./small-cross-C4G_4bm0.js";import"./ActionButton-DPJ_lqmP.js";import"./Checkbox-CuYAlfwy.js";import"./useValueChanged-BrDu_oCw.js";import"./CollapsiblePanel-CvgPh7ET.js";import"./MultiColumnSortDialog-DZ0Aajud.js";import"./MenuTrigger-CfE9QubM.js";import"./CompositeItem-BE3XYcA2.js";import"./ToolbarRootContext-CnbQ5y9z.js";import"./getDisabledMountTransitionStyles-Dh82TnbN.js";import"./getPseudoElementBounds-B0PDl1uq.js";import"./chevron-down-G62k-E5h.js";import"./index-CQIVASoN.js";import"./error-CFJFAjZO.js";import"./BaseCbacBanner-BIrCXw3Z.js";import"./makeExternalStore-DLMtLoe9.js";import"./Tooltip-Tqm6OBEx.js";import"./PopoverPopup-ugp2aSv8.js";import"./debounce-BjzkkvaB.js";import"./useOsdkClient-gj8ttqqj.js";import"./tick-D0iG3kes.js";import"./DropdownField-ClrxV16v.js";import"./isEqual-DlaFj127.js";import"./withOsdkMetrics-Bw9hmnsv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

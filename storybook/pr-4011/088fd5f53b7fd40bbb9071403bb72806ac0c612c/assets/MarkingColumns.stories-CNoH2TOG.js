import{f as p,j as e}from"./iframe-Cjq1ziW_.js";import{O as i}from"./object-table-D6EdSbIy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bu64T0VB.js";import"./Table-DX-6NG8S.js";import"./index-DYLMtBRZ.js";import"./Dialog-CUVldmmV.js";import"./cross-5C9tDAb9.js";import"./svgIconContainer-eE0nci6v.js";import"./useBaseUiId-BOmEy4R4.js";import"./InternalBackdrop-DVWahY-J.js";import"./composite-DKerRgJC.js";import"./index-jdj57Z6r.js";import"./index-BNrT0csI.js";import"./index-B4fNfQ4Q.js";import"./useEventCallback-hAeTEmUL.js";import"./SkeletonBar-CxWNqWqz.js";import"./LoadingCell-CEZ_xtS5.js";import"./ColumnConfigDialog-JWUub0AX.js";import"./DraggableList-BTT7l4Iu.js";import"./search-CW8m2x0D.js";import"./Input-CltcJXck.js";import"./useControlled-B86_FVha.js";import"./Button-Sk9sqn-x.js";import"./small-cross-DpmUsxoH.js";import"./ActionButton-Bkt5pjan.js";import"./Checkbox-DwFQfO_0.js";import"./useValueChanged-Dp6WnvdX.js";import"./CollapsiblePanel-DZj9a81F.js";import"./MultiColumnSortDialog-BgeVtZYK.js";import"./MenuTrigger-vwiILOdw.js";import"./CompositeItem-BkoI9BcF.js";import"./ToolbarRootContext-D9vPb_4g.js";import"./getDisabledMountTransitionStyles-Dcwh1Csu.js";import"./getPseudoElementBounds-DZitm35h.js";import"./chevron-down-BLZAfqaw.js";import"./index-BlBIR37s.js";import"./error-BTbs61-N.js";import"./BaseCbacBanner-BKFpuCn3.js";import"./makeExternalStore-MDXzkZI-.js";import"./Tooltip-BbVYH3II.js";import"./PopoverPopup-DmxPEDNt.js";import"./debounce-CGyXk-2p.js";import"./useOsdkClient-D16wWo5-.js";import"./tick-B9mB2gxh.js";import"./DropdownField-Bw_qvOxg.js";import"./isEqual-2eOY9j-u.js";import"./withOsdkMetrics-DX_450NL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

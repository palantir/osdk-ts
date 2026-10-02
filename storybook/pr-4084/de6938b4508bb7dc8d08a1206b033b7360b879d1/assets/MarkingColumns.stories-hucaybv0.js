import{f as p,j as e}from"./iframe-B60uIzqu.js";import{O as i}from"./object-table-irViTQ2Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-jikZvyDa.js";import"./Table-rwMAeyYG.js";import"./index-BzSV7QsP.js";import"./Dialog-CYLFgbaJ.js";import"./cross-DOsmRzos.js";import"./svgIconContainer-guiuIeqp.js";import"./useBaseUiId-DIJoCSJF.js";import"./InternalBackdrop-CLXaH1Aa.js";import"./composite-FgUpy7wg.js";import"./index-DWJFVWYa.js";import"./index-DHpY-kFP.js";import"./index-5Hq3Nksu.js";import"./useEventCallback-B7QugTUD.js";import"./SkeletonBar-gvdt352_.js";import"./LoadingCell-DDpI3io-.js";import"./ColumnConfigDialog-JA6O3qC4.js";import"./DraggableList-BFsDMiKj.js";import"./search-W61rBGPZ.js";import"./Input-CI489aTx.js";import"./useControlled-DJ00XR1e.js";import"./Button-CwbHglSg.js";import"./small-cross-DmneRbUh.js";import"./ActionButton-BwfVyv5Y.js";import"./Checkbox-DhoHtNZ6.js";import"./useValueChanged-CGySjWpW.js";import"./CollapsiblePanel-CfyaXJrK.js";import"./MultiColumnSortDialog-BrNYeTMv.js";import"./MenuTrigger-C-aCPNIQ.js";import"./CompositeItem-DumPFzxx.js";import"./ToolbarRootContext-DNfnA9up.js";import"./getDisabledMountTransitionStyles-Dva2U48F.js";import"./getPseudoElementBounds-CLV_8asC.js";import"./chevron-down-C_KV3jKU.js";import"./index-CnSFNBSp.js";import"./error-CTvFY39O.js";import"./BaseCbacBanner-CurXy-zS.js";import"./makeExternalStore-D8fqJuwI.js";import"./Tooltip-CU9Zwhnt.js";import"./PopoverPopup-mMeInTnK.js";import"./debounce-Y14coaTK.js";import"./useOsdkClient-C8IrJvuk.js";import"./tick-CFIe4FmU.js";import"./DropdownField-DhWDS7MC.js";import"./isEqual-BaG62FCh.js";import"./withOsdkMetrics-Dg6VzMMR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

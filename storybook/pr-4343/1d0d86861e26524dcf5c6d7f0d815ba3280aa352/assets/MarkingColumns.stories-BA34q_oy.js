import{f as p,j as e}from"./iframe-DdqwQQfw.js";import{O as i}from"./object-table-DC2LuNpA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Do8DhNTP.js";import"./Table-DuFe3xsr.js";import"./index-BEo5fRZG.js";import"./Dialog-Cg65FL_X.js";import"./cross-D_2LRYUd.js";import"./svgIconContainer-z_HFHagN.js";import"./useBaseUiId-Bcpg3lGk.js";import"./InternalBackdrop-BI5ASDuz.js";import"./composite-BS7fyn0m.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./index-DGo2jayS.js";import"./useEventCallback-DRJH6OEM.js";import"./SkeletonBar-CxTwW2pN.js";import"./LoadingCell-T5dcwu1-.js";import"./ColumnConfigDialog-N9XdbNhr.js";import"./DraggableList-DpMAnnH0.js";import"./search-BAD3BF_p.js";import"./Input-Ddm5AThx.js";import"./useControlled-DlTcdMFR.js";import"./Button-D31p01oo.js";import"./small-cross-0mGWC0pa.js";import"./ActionButton-ixUyXV1s.js";import"./Checkbox-CJ9apblZ.js";import"./useValueChanged-DXSqqnXt.js";import"./CollapsiblePanel-DoAzLAFA.js";import"./MultiColumnSortDialog-DWe2imCo.js";import"./MenuTrigger-VDaXaEjF.js";import"./CompositeItem-rVjlE15s.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./getDisabledMountTransitionStyles-BPMv8sxJ.js";import"./getPseudoElementBounds-CxeR3TvN.js";import"./chevron-down-RBc_HqKE.js";import"./index-ByyVIpwn.js";import"./error-BE-sE7Te.js";import"./BaseCbacBanner-9dan2OAm.js";import"./makeExternalStore-C_arn_CF.js";import"./Tooltip-CBEbeLyL.js";import"./PopoverPopup-CnpcTZxS.js";import"./debounce-C-_Fx2Z2.js";import"./useOsdkClient-DRVnONzi.js";import"./tick-CVZaQjhe.js";import"./DropdownField-DSWv5JEX.js";import"./isEqual-KM0nLl8C.js";import"./withOsdkMetrics-VwlQjk8h.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

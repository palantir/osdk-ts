import{f as p,j as e}from"./iframe-ACqoCsP1.js";import{O as i}from"./object-table-DdvQEzYW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0NytkGS.js";import"./Table-B1oQKcqo.js";import"./index-CH3f4Y4v.js";import"./Dialog-dEbmcWd8.js";import"./cross-CuuQ7UQ8.js";import"./svgIconContainer-DQJmdZ4w.js";import"./useBaseUiId-YELf5DtT.js";import"./InternalBackdrop-CFf_S_SZ.js";import"./composite-ClfvqsWa.js";import"./index-1_maJEvl.js";import"./index-BC4L-KC_.js";import"./index-Dt03mN6M.js";import"./useEventCallback-DT0fpXdJ.js";import"./SkeletonBar-D6sGXdTt.js";import"./LoadingCell-Iu2hiB_z.js";import"./ColumnConfigDialog-DKHcAQDe.js";import"./DraggableList-DBc_xvqf.js";import"./search-CbRnBR_C.js";import"./Input-BoLPhHvH.js";import"./useControlled-Ei_xM4pt.js";import"./Button-D8yf6tNW.js";import"./small-cross-BZDZI6nZ.js";import"./ActionButton-D2spBXFL.js";import"./Checkbox-CLCuVmRM.js";import"./useValueChanged-Bk99V8J2.js";import"./CollapsiblePanel-D1183vDo.js";import"./MultiColumnSortDialog-CEZ5oLIK.js";import"./MenuTrigger-BYXipR9p.js";import"./CompositeItem-CHURugJM.js";import"./ToolbarRootContext-CBorp6LJ.js";import"./getDisabledMountTransitionStyles-BmsT5-21.js";import"./getPseudoElementBounds-DyYkfxLq.js";import"./chevron-down-DSctgGN2.js";import"./index-BI6hNs5F.js";import"./error-CNcF2Rns.js";import"./BaseCbacBanner-o43Y7e9X.js";import"./makeExternalStore-nQn9uS75.js";import"./Tooltip-CiBM08K9.js";import"./PopoverPopup-zwuBMy7m.js";import"./debounce-Brqa7gZb.js";import"./useOsdkClient-B14HLFEC.js";import"./tick-BAuBus17.js";import"./DropdownField-DadyUtow.js";import"./isEqual-CgrJ4P2S.js";import"./withOsdkMetrics-Du2c38Bn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-CdsRGRZD.js";import{O as i}from"./object-table-CeOE5Mdz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGHORiIs.js";import"./Table-C_N_Eckt.js";import"./index-Fk1WgWoL.js";import"./Dialog-DuuLYCJ_.js";import"./cross-DAi95Y0X.js";import"./svgIconContainer-Cxkf-wd_.js";import"./useBaseUiId-DiEHO-EU.js";import"./InternalBackdrop-c4kOEo_j.js";import"./composite-DyS-Ch2i.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./index-CfhQ_HhS.js";import"./useEventCallback-DbOnN22T.js";import"./SkeletonBar-Dldmu3tt.js";import"./LoadingCell-COUXzJd2.js";import"./ColumnConfigDialog-CBifeMKK.js";import"./DraggableList-DhJLvr1S.js";import"./search-B-mt-Fpc.js";import"./Input-BrPBFCOf.js";import"./useControlled-CXpC8eD9.js";import"./Button-CMyVgQSr.js";import"./small-cross-DD2bSDX4.js";import"./ActionButton-B-ECTkAX.js";import"./Checkbox-9ZfJtWE0.js";import"./useValueChanged-hFU-JeNn.js";import"./CollapsiblePanel-BCipB-WW.js";import"./MultiColumnSortDialog-CpORbkLb.js";import"./MenuTrigger-BFayFRUa.js";import"./CompositeItem-CNBfRrGp.js";import"./ToolbarRootContext-DYboyT6t.js";import"./getDisabledMountTransitionStyles-DXjYuHQ4.js";import"./getPseudoElementBounds-Cg-geDk4.js";import"./chevron-down-C7u5o2RL.js";import"./index-C2Mhw8zH.js";import"./error-D2kK2TGa.js";import"./BaseCbacBanner-PXIb0wXt.js";import"./makeExternalStore-8ZflOwQq.js";import"./Tooltip-CHHDt5TJ.js";import"./PopoverPopup-CExD3oNB.js";import"./debounce-C26q8tZz.js";import"./useOsdkClient-B3rsIMmP.js";import"./tick-slqArv83.js";import"./DropdownField-C2AO5vc6.js";import"./isEqual-B5I4IGDV.js";import"./withOsdkMetrics-DzKI7pdO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

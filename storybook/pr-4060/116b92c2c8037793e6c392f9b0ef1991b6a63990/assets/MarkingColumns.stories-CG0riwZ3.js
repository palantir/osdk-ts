import{f as p,j as e}from"./iframe-rrq8MZm7.js";import{O as i}from"./object-table-BmLGW4nF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-g_e3lUw3.js";import"./Table-ykH1l2J2.js";import"./index-DgF7SkuQ.js";import"./Dialog-DYdOiXPb.js";import"./cross-Dx39xAnI.js";import"./svgIconContainer-DzRNCFzx.js";import"./useBaseUiId-Ck0oWSaP.js";import"./InternalBackdrop-wSSvokvJ.js";import"./composite-Dz23lKV_.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./index-BHKoX9xi.js";import"./useEventCallback-BHSzBPQv.js";import"./SkeletonBar-DbqU4wRS.js";import"./LoadingCell-BaeHdVOg.js";import"./ColumnConfigDialog-Cul644FJ.js";import"./DraggableList-DltL4lih.js";import"./search-HS8jOdU9.js";import"./Input-DomtRdeE.js";import"./useControlled-CFE1onYy.js";import"./Button-CR0VLtCt.js";import"./small-cross-Db8ph2CD.js";import"./ActionButton-CGA8JUAJ.js";import"./Checkbox-DhFF_qGg.js";import"./useValueChanged-ClOYFuvx.js";import"./CollapsiblePanel-Rs1qW30d.js";import"./MultiColumnSortDialog-BsojGLd-.js";import"./MenuTrigger-DXzaVxIY.js";import"./CompositeItem-CfvMX9u5.js";import"./ToolbarRootContext-BX6aviUc.js";import"./getDisabledMountTransitionStyles-DeyZi_sY.js";import"./getPseudoElementBounds-Xt__cUKT.js";import"./chevron-down-wVslH90M.js";import"./index-Bf3ZsPEb.js";import"./error-Bcjq0Lff.js";import"./BaseCbacBanner-D6iTWpAb.js";import"./makeExternalStore-Ce8SSisl.js";import"./Tooltip-CWYgwcpt.js";import"./PopoverPopup-BjrmRx1j.js";import"./debounce-Dx1hyhVT.js";import"./useOsdkClient-vYsi5oFr.js";import"./tick-DUzn1Cvr.js";import"./DropdownField-Bn4EfPzq.js";import"./isEqual-rKX8viav.js";import"./withOsdkMetrics-CkwBt4Ou.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

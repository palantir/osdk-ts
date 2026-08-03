import{f as p,j as e}from"./iframe-ByDFxc6J.js";import{O as i}from"./object-table-Cuy2ZZiP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsAHu_tG.js";import"./Table-Dam2UJf8.js";import"./index-COrglkMl.js";import"./Dialog-B78Wpb89.js";import"./cross-w3hxXSvD.js";import"./svgIconContainer-Cdl4pzn_.js";import"./useBaseUiId-D3OL8vQs.js";import"./InternalBackdrop-Csd2HTI2.js";import"./composite-Cwm4Y6dc.js";import"./index-B9guDax2.js";import"./index-Bc4TUgst.js";import"./index-Cgx_EwSA.js";import"./useEventCallback-1qwqMCsR.js";import"./SkeletonBar-aM6Fy1o8.js";import"./LoadingCell-CrYPPVgs.js";import"./ColumnConfigDialog-CoBUhc6u.js";import"./DraggableList-BhHyN4LT.js";import"./search-DGeK7c1j.js";import"./Input-DDk9us9b.js";import"./useControlled-Ci-xyBbB.js";import"./isEqual-CEnEbtP1.js";import"./isObject-D2Dn4sIt.js";import"./Button-m3_edGWL.js";import"./ActionButton-D4kwrLk3.js";import"./Checkbox-DCKmoS6E.js";import"./useValueChanged-wikWbzp7.js";import"./CollapsiblePanel-BO8NnsX2.js";import"./MultiColumnSortDialog-CkcyfWVn.js";import"./MenuTrigger-CH6rfP9H.js";import"./CompositeItem-2RzmuieV.js";import"./ToolbarRootContext-BIWqFB3h.js";import"./getDisabledMountTransitionStyles-DaSobCt5.js";import"./getPseudoElementBounds-CsMIwoWo.js";import"./chevron-down-E23zrlQO.js";import"./index-BBAKdsvN.js";import"./error-C9F6tpCk.js";import"./BaseCbacBanner-bWH910W6.js";import"./makeExternalStore-E2xf1luR.js";import"./Tooltip-BMhKILjF.js";import"./PopoverPopup-BXbrjj3M.js";import"./toNumber-BrMdeazV.js";import"./useOsdkClient-JE9b6z1p.js";import"./tick-BvsSQam1.js";import"./DropdownField-B4APnnSf.js";import"./withOsdkMetrics-Du8BWQXf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-rp70fwwu.js";import{O as i}from"./object-table-JyO8eHyu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-EME5q9Jz.js";import"./Table-DREJSIaf.js";import"./index-B4gvWsM6.js";import"./Dialog-C8n9hMq-.js";import"./cross-DNFUYcP8.js";import"./svgIconContainer-CDe1DB3O.js";import"./useBaseUiId-DldllHCL.js";import"./InternalBackdrop-CB3wopGK.js";import"./composite-CuPJzJjA.js";import"./index-ChLpCK4q.js";import"./index-HM1ZzYao.js";import"./index-DcEXat2t.js";import"./useEventCallback-Z9CbEpN8.js";import"./SkeletonBar-DWB3vied.js";import"./LoadingCell-B1Kd8OIp.js";import"./ColumnConfigDialog-RzTfEw8Q.js";import"./DraggableList-CeOMgYa3.js";import"./search-BsQb9YNR.js";import"./Input-DVBMxCln.js";import"./useControlled-CHM7HnpL.js";import"./Button-iCfiBEgd.js";import"./small-cross-DQIE1Y4r.js";import"./ActionButton-rTM9eEX4.js";import"./Checkbox-AMJVntXX.js";import"./useValueChanged-B2lIX5Tz.js";import"./CollapsiblePanel-BdVNDfzn.js";import"./MultiColumnSortDialog-CIdGnCHv.js";import"./MenuTrigger-O6fRFI1R.js";import"./CompositeItem-Dn7oIdOY.js";import"./ToolbarRootContext-CoUfjY-d.js";import"./getDisabledMountTransitionStyles-DdvpbK1X.js";import"./getPseudoElementBounds-24IcT4YD.js";import"./chevron-down-Ba1aP0dz.js";import"./index-B9gm3rqX.js";import"./error-BMFKsVka.js";import"./BaseCbacBanner-Cwz1pVQs.js";import"./makeExternalStore-povODIJu.js";import"./Tooltip-CvmyFLlW.js";import"./PopoverPopup-BCC2iev1.js";import"./debounce-nCyeRLUU.js";import"./useOsdkClient-Cw47H3av.js";import"./tick-Cg7GSAs6.js";import"./DropdownField-BAITP7Mj.js";import"./isEqual-DlTS0HA0.js";import"./withOsdkMetrics-Dg07kNzb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

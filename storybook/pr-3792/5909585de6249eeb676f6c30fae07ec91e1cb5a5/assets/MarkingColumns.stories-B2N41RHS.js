import{f as p,j as e}from"./iframe-BW5KWTVf.js";import{O as i}from"./object-table-D_xScRXe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wTJCuLa0.js";import"./Table-DVjVy5zQ.js";import"./index-DZuHGaZR.js";import"./Dialog-Bcgs7q0X.js";import"./cross-B9jHlUmC.js";import"./svgIconContainer-CGH_b5cs.js";import"./useBaseUiId-djKvr1Zf.js";import"./InternalBackdrop-rE9UXK7e.js";import"./composite-DMJpidK5.js";import"./index-CBnuzy09.js";import"./index-C9GjXNGu.js";import"./index-B3_s8STg.js";import"./useEventCallback-D3_8TWDL.js";import"./SkeletonBar-Dv8azkVh.js";import"./LoadingCell-CFK-23fD.js";import"./ColumnConfigDialog-908I2WCI.js";import"./DraggableList-DdS97684.js";import"./search-BxTonfjS.js";import"./Input-Cuj41dtm.js";import"./useControlled-Bd2lsHY1.js";import"./isEqual-CBzrqXli.js";import"./isObject-UDZU_4OQ.js";import"./Button-CRYDVXLK.js";import"./ActionButton-Buo_yQHB.js";import"./Checkbox-qKxs5cs6.js";import"./useValueChanged-WJiyss_6.js";import"./CollapsiblePanel-BdO59VuU.js";import"./MultiColumnSortDialog-3Z8xlHBg.js";import"./MenuTrigger-CPeUYOFK.js";import"./CompositeItem-BgohVmvL.js";import"./ToolbarRootContext-CiyKClQw.js";import"./getDisabledMountTransitionStyles-Bs-ypZSG.js";import"./getPseudoElementBounds-CJwidu3r.js";import"./chevron-down-cYHAHA60.js";import"./index-BnK0TffT.js";import"./error-BnZI7SXP.js";import"./BaseCbacBanner-2cZzxKzO.js";import"./makeExternalStore-DRWx7nce.js";import"./Tooltip-Ds6XRiL3.js";import"./PopoverPopup-0wn3_1oJ.js";import"./toNumber-BHuF1cBP.js";import"./useOsdkClient-DbcEbBVO.js";import"./tick-G9xbPlsl.js";import"./DropdownField-D4osHb18.js";import"./withOsdkMetrics-BeUX7xJv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

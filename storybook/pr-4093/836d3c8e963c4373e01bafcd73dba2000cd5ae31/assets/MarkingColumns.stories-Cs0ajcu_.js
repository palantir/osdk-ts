import{f as p,j as e}from"./iframe-C0-x1FP0.js";import{O as i}from"./object-table-472WP8_C.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCX9k7ir.js";import"./Table-DJMsOaR-.js";import"./index-DV22TdK8.js";import"./Dialog-CbKuY7bP.js";import"./cross-yFQp_D_Z.js";import"./svgIconContainer-BSxvLIZD.js";import"./useBaseUiId-CA7uGIeg.js";import"./InternalBackdrop-brHMeUVe.js";import"./composite-Dy-B8Ijy.js";import"./index-DUQSD1NB.js";import"./index-C7QUHUmQ.js";import"./index-Bo-o19rY.js";import"./useEventCallback-CKs1ld83.js";import"./SkeletonBar-C2MOvv6_.js";import"./LoadingCell-Cb8ccBYd.js";import"./ColumnConfigDialog-Grq4fMuX.js";import"./DraggableList-Q22sHSvj.js";import"./search-Vl3MAPNS.js";import"./Input-BXkRChlq.js";import"./useControlled-Dp-jMyqd.js";import"./Button-CvK_tZY2.js";import"./small-cross-DvHjGkkh.js";import"./ActionButton-DT15JGE9.js";import"./Checkbox-BbkHkxig.js";import"./useValueChanged-ByiOoXtD.js";import"./CollapsiblePanel-0BooQOGv.js";import"./MultiColumnSortDialog-D3MwWUNe.js";import"./MenuTrigger-BL9KlAPW.js";import"./CompositeItem-D0Pwm5JG.js";import"./ToolbarRootContext-DthEPhMn.js";import"./getDisabledMountTransitionStyles-Btbbq1bs.js";import"./getPseudoElementBounds-DzHxX6wm.js";import"./chevron-down-Tbopdf5u.js";import"./index-ai2s7LZ-.js";import"./error-VkCpPEhJ.js";import"./BaseCbacBanner-CIb3UhEC.js";import"./makeExternalStore-C9rMI5OP.js";import"./Tooltip-CA4Uvv6q.js";import"./PopoverPopup-CbjVo92q.js";import"./debounce-BdQw7iZx.js";import"./useOsdkClient-B74sjWML.js";import"./tick-D7IllXvz.js";import"./DropdownField-CN-ggOq5.js";import"./isEqual-enoGD4YI.js";import"./withOsdkMetrics-Dw6CTACt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

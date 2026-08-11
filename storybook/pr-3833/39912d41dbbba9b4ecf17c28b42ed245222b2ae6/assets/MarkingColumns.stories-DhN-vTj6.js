import{f as p,j as e}from"./iframe-Yz96DrPS.js";import{O as i}from"./object-table-C9CZSVN3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DSFQiPJa.js";import"./Table-CGMnratr.js";import"./index-CA1nYKRZ.js";import"./Dialog-BsdhZ-e7.js";import"./cross-BL7_pA6T.js";import"./svgIconContainer-IHZKkt63.js";import"./useBaseUiId-Bc9L5zEM.js";import"./InternalBackdrop-CqHdaW_q.js";import"./composite-1RMje4bP.js";import"./index-DmVlcIuM.js";import"./index-D76oELgs.js";import"./index-9KFZRagp.js";import"./useEventCallback-C6xW0i3s.js";import"./SkeletonBar-DwqWqllh.js";import"./LoadingCell-KICmHti6.js";import"./ColumnConfigDialog-1mo1JJrV.js";import"./DraggableList-D2XGl1k6.js";import"./search-CxWHrvts.js";import"./Input-BRSvXeIv.js";import"./useControlled-khTqGeBT.js";import"./isEqual-SXKv2-Wb.js";import"./isObject-BC5vm0Dx.js";import"./Button-D4d_fs9b.js";import"./ActionButton-BOkv0UrP.js";import"./Checkbox-kbAY1eIe.js";import"./useValueChanged-CkRMjmpp.js";import"./CollapsiblePanel-B5BqE5nI.js";import"./MultiColumnSortDialog-05yqGdj8.js";import"./MenuTrigger-BxMx821b.js";import"./CompositeItem-CaVP6J8g.js";import"./ToolbarRootContext-k35ZWRp2.js";import"./getDisabledMountTransitionStyles-ygwefoAc.js";import"./getPseudoElementBounds-eFRwNGrO.js";import"./chevron-down-D2BRaLqM.js";import"./index-BobGwXvv.js";import"./error-D7GMvIdW.js";import"./BaseCbacBanner-CsYbWqLr.js";import"./makeExternalStore-BEyUkIfG.js";import"./Tooltip-CmLFGvq0.js";import"./PopoverPopup-ua-uP1ZY.js";import"./toNumber-Dw-8SHMn.js";import"./useOsdkClient-CZVm7tZv.js";import"./tick-DNnM64JX.js";import"./DropdownField-CWVsDrhE.js";import"./withOsdkMetrics-AzfXO0By.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

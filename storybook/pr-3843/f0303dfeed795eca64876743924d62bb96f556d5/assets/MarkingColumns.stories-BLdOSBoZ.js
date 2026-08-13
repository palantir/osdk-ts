import{f as p,j as e}from"./iframe-dW7ZySVo.js";import{O as i}from"./object-table-DpTS8D6-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ietlItcG.js";import"./Table-B9djy5zR.js";import"./index-CyX_mbZv.js";import"./Dialog-DoD6CH3Q.js";import"./cross-BV4X4rJT.js";import"./svgIconContainer-De3VosTd.js";import"./useBaseUiId-CltpoqoE.js";import"./InternalBackdrop-OnfUmyRP.js";import"./composite-yun7E3H0.js";import"./index-NFcKjdXW.js";import"./index-BUDv2oUY.js";import"./index-B9U1zr68.js";import"./useEventCallback-CTf3PETg.js";import"./SkeletonBar-C0qNZ57m.js";import"./LoadingCell-D2Nn0dkn.js";import"./ColumnConfigDialog-BOj2sQSf.js";import"./DraggableList-CjL1Zeyb.js";import"./search-BVLxwhoK.js";import"./Input-BEPGpKmX.js";import"./useControlled--a4EJP-K.js";import"./isEqual-B26u38ta.js";import"./isObject-Bq6JsHLJ.js";import"./Button-BjotpDzx.js";import"./ActionButton-DXVIhKZW.js";import"./Checkbox-BUcGvUET.js";import"./useValueChanged-BNUhKGYr.js";import"./CollapsiblePanel-7EbWsdAY.js";import"./MultiColumnSortDialog-DxbnrFRY.js";import"./MenuTrigger-DpEpaw3t.js";import"./CompositeItem-B9fLtNsk.js";import"./ToolbarRootContext-Cx1oPDzo.js";import"./getDisabledMountTransitionStyles-BJhCKUOQ.js";import"./getPseudoElementBounds-BE0VWDCU.js";import"./chevron-down-D0s0iZJp.js";import"./index-CiitfvmC.js";import"./error-CUjzZGeI.js";import"./BaseCbacBanner-BziABg8b.js";import"./makeExternalStore-p_MVbTGu.js";import"./Tooltip-BdcEiRfO.js";import"./PopoverPopup-B41CZPnS.js";import"./toNumber-boKe2Guz.js";import"./useOsdkClient-D9vq8O0M.js";import"./tick-DhgI4Zis.js";import"./DropdownField-C86F5zQw.js";import"./withOsdkMetrics-CzRWl-u7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

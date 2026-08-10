import{f as p,j as e}from"./iframe-CxyWClRv.js";import{O as i}from"./object-table-DjapWFAp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BD8IUSLW.js";import"./Table-LFRL-iJM.js";import"./index-CwkmsmKS.js";import"./Dialog-CDAWhPTY.js";import"./cross-sylIwqMp.js";import"./svgIconContainer-CfXklo5s.js";import"./useBaseUiId-jf4U9pqb.js";import"./InternalBackdrop-1JU8mXc7.js";import"./composite-BEt3pTCK.js";import"./index-B4nTVLHO.js";import"./index-CNEU6CxQ.js";import"./index-COeR_Zui.js";import"./useEventCallback-Cu9jQOIV.js";import"./SkeletonBar-jTUfV4y2.js";import"./LoadingCell-CNs-BVoo.js";import"./ColumnConfigDialog-DoMK0hYx.js";import"./DraggableList-DlXzCaYC.js";import"./search-BqpVCTT7.js";import"./Input-BOgrzWPu.js";import"./useControlled-BFAPGVYI.js";import"./isEqual-DzXVN9J1.js";import"./isObject-CjmG8_3M.js";import"./Button-DQ3MNO2y.js";import"./ActionButton-D42Xx6M4.js";import"./Checkbox-BI2toJ7y.js";import"./useValueChanged-Pbgao_0L.js";import"./CollapsiblePanel-DqJeQ-Ex.js";import"./MultiColumnSortDialog-Dzsz3GMa.js";import"./MenuTrigger-B6-3N9Zn.js";import"./CompositeItem-CgKzJJIm.js";import"./ToolbarRootContext-jpHryEcr.js";import"./getDisabledMountTransitionStyles-C6Bvh8ls.js";import"./getPseudoElementBounds-8WMM1t2O.js";import"./chevron-down-BiOQJ87i.js";import"./index-CVx7inSp.js";import"./error-CAKdt8h3.js";import"./BaseCbacBanner-65sbOJku.js";import"./makeExternalStore-Cy6TXmii.js";import"./Tooltip-BmNJMzwB.js";import"./PopoverPopup-Dn-gaywI.js";import"./toNumber-B8fujMJA.js";import"./useOsdkClient-B_sGV8aJ.js";import"./tick-Bznk9fi8.js";import"./DropdownField-C9ghg4-_.js";import"./withOsdkMetrics-DJH-BeK5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

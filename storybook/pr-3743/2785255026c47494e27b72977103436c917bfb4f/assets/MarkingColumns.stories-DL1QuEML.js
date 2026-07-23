import{f as p,j as e}from"./iframe-Ck_GGLOI.js";import{O as i}from"./object-table-C7tDmf_D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ct_SzjwP.js";import"./Table-Dq8cXEs5.js";import"./index-B89KqVgP.js";import"./Dialog-BETH_eCU.js";import"./cross-KWWBZC90.js";import"./svgIconContainer-r8zB-P6B.js";import"./useBaseUiId--oVgeq5T.js";import"./InternalBackdrop-CLsC1B9Y.js";import"./composite-C_8Q5Icy.js";import"./index-B_ig_9F1.js";import"./index-B25gAHKW.js";import"./index-Dx72QQXF.js";import"./useEventCallback-CdgHi6xx.js";import"./SkeletonBar-D8aEk5EA.js";import"./LoadingCell-DOH4Gt6_.js";import"./ColumnConfigDialog-Ca2xj7EI.js";import"./DraggableList-C1A26BSI.js";import"./search-BoCb61rS.js";import"./Input-Dc0pCVB2.js";import"./useControlled-DlHXi5tj.js";import"./isEqual-BpEk8K4b.js";import"./isObject-5B2Vzc2B.js";import"./Button-CbHH9XWB.js";import"./ActionButton-DYUehOvv.js";import"./Checkbox-DYQgTm4E.js";import"./useValueChanged-BtmCdoCW.js";import"./CollapsiblePanel-nuTsezv3.js";import"./MultiColumnSortDialog-D905AHLH.js";import"./MenuTrigger-DDFq-ctt.js";import"./CompositeItem-Cj_m-_Op.js";import"./ToolbarRootContext-D_d6MWRT.js";import"./getDisabledMountTransitionStyles-BXYuVhzR.js";import"./getPseudoElementBounds-CYW6Hr-n.js";import"./chevron-down-PHjoZosY.js";import"./index-C7igWU5b.js";import"./error-B_r0fBp9.js";import"./BaseCbacBanner-IXJ8JBnE.js";import"./makeExternalStore-95duhyix.js";import"./Tooltip-CXWZf8sP.js";import"./PopoverPopup-DT2q6fhx.js";import"./toNumber-BAJpYGnz.js";import"./useOsdkClient-BGBF5mdg.js";import"./tick-BLlHsMVG.js";import"./DropdownField-BxJHqCX2.js";import"./withOsdkMetrics-B4h9Dq5k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

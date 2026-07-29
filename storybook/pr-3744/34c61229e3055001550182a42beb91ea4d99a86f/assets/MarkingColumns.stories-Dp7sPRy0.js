import{f as p,j as e}from"./iframe-CC2lhQhY.js";import{O as i}from"./object-table-Bk8sJe75.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGEdKx02.js";import"./Table-Dyn7jCHO.js";import"./index-DxrvvjMw.js";import"./Dialog-CLh_XWkX.js";import"./cross-BobJNvWM.js";import"./svgIconContainer-CemqUq4J.js";import"./useBaseUiId-CxU7p3iL.js";import"./InternalBackdrop-CVxZg2o4.js";import"./composite-B5KpWypz.js";import"./index-B4bU-WIO.js";import"./index-G7k4NUeX.js";import"./index--6Hdbxki.js";import"./useEventCallback-B2k3oSuK.js";import"./SkeletonBar-BEjckKsG.js";import"./LoadingCell-A4598RHi.js";import"./ColumnConfigDialog-yMj5LoE_.js";import"./DraggableList-CjtZ2GfF.js";import"./search-D1VlmriO.js";import"./Input-BHBF2dwA.js";import"./useControlled-Sp81BiS-.js";import"./isEqual-i6EUZMbe.js";import"./isObject-BVuUAFQC.js";import"./Button-JlKjTSlm.js";import"./ActionButton-CQ0jgdFe.js";import"./Checkbox-Syfedny6.js";import"./useValueChanged-Cvc2Q3RS.js";import"./CollapsiblePanel-DQ1FJNF1.js";import"./MultiColumnSortDialog-DaExg-Du.js";import"./MenuTrigger-ClJV1NnD.js";import"./CompositeItem-CzQFGjti.js";import"./ToolbarRootContext-CvAXAcRN.js";import"./getDisabledMountTransitionStyles-BdLwLQ0g.js";import"./getPseudoElementBounds-xl3NSj_d.js";import"./chevron-down-CeE9KY4s.js";import"./index-BVqzMWPJ.js";import"./error-wpAeIqc3.js";import"./BaseCbacBanner-Cih_iG3k.js";import"./makeExternalStore-DBYDyAtT.js";import"./Tooltip-CVR67wXj.js";import"./PopoverPopup-DdPQi5RD.js";import"./toNumber-D5qJ0LSR.js";import"./useOsdkClient-BUCIn1CU.js";import"./tick-kTuzUJV2.js";import"./DropdownField-l2hEEO-i.js";import"./withOsdkMetrics-D7Ls77C5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

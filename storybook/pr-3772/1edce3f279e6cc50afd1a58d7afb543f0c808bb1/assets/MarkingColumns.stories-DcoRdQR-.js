import{f as p,j as e}from"./iframe-B4a1M7YQ.js";import{O as i}from"./object-table-2X9QP0q2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DKPqJros.js";import"./Table-D2A1KUQC.js";import"./index-CEnsUSRk.js";import"./Dialog-Bw23pK5d.js";import"./cross-DdxU_GSh.js";import"./svgIconContainer-dKO81zeU.js";import"./useBaseUiId-BdmpNM9R.js";import"./InternalBackdrop-BtAeuuiJ.js";import"./composite-DYFcQXK_.js";import"./index-BGoKHZOt.js";import"./index-Bzr9bqEh.js";import"./index-XdpKPQSA.js";import"./useEventCallback-DbS-KTli.js";import"./SkeletonBar-CoaC5jIf.js";import"./LoadingCell-BF6eywfe.js";import"./ColumnConfigDialog-CxsVoMF7.js";import"./DraggableList-CJ0FnAyO.js";import"./search-ByNZE4lU.js";import"./Input-CQ1CPhUS.js";import"./useControlled-BwTzIPm3.js";import"./Button-aRzyNEAE.js";import"./small-cross-CY8ArLck.js";import"./ActionButton-DV-INWIy.js";import"./Checkbox-CvNcg_qU.js";import"./useValueChanged-ZI0WYR1b.js";import"./CollapsiblePanel-CDlqlorI.js";import"./MultiColumnSortDialog-B2G2U5oE.js";import"./MenuTrigger-BvDNyLIe.js";import"./CompositeItem-DufHQAne.js";import"./ToolbarRootContext-BOcgfqza.js";import"./getDisabledMountTransitionStyles-DeBE4Hc-.js";import"./getPseudoElementBounds-Bbqo73FW.js";import"./chevron-down-DCl-dnpE.js";import"./index-C8n7J5dc.js";import"./error-B-p2MHss.js";import"./BaseCbacBanner-CNc9r1Cu.js";import"./makeExternalStore-bi4xmOXE.js";import"./Tooltip-D5NT58HG.js";import"./PopoverPopup-COmRgKxn.js";import"./debounce-CJ5ryzx7.js";import"./useOsdkClient-DD3NhrHw.js";import"./tick-B-sbOJgF.js";import"./DropdownField-DgXTbQeA.js";import"./isEqual-Bs27NS_2.js";import"./withOsdkMetrics-BXRIKmAl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-B_Qcr1FE.js";import{O as i}from"./object-table-DAA5lgbe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByylHqff.js";import"./Table-CFY175rH.js";import"./index-CuAfhbdX.js";import"./Dialog-B0AhWfDq.js";import"./cross-B_bL67RS.js";import"./svgIconContainer-HOxgQzaL.js";import"./useBaseUiId-BT7nsgc0.js";import"./InternalBackdrop-CkOigyzD.js";import"./composite-CK1N4h6C.js";import"./index-DDNYXikC.js";import"./index-D-jbiCY8.js";import"./index-DndWxBJo.js";import"./useEventCallback-9h2GBVBE.js";import"./SkeletonBar-DC7q-eBJ.js";import"./LoadingCell-DGSHxikO.js";import"./ColumnConfigDialog-eZ62lZti.js";import"./DraggableList-5VzGzIxf.js";import"./search-Cnc343lq.js";import"./Input-CnRDzw12.js";import"./useControlled-i58fxNEc.js";import"./isEqual-B-H1SIym.js";import"./isObject--dikM3Fl.js";import"./Button-Cn245j1w.js";import"./ActionButton-CS8C28oW.js";import"./Checkbox-BQt3oBJx.js";import"./useValueChanged-C6rWrf7-.js";import"./CollapsiblePanel-7PrGdLma.js";import"./MultiColumnSortDialog-I8lvNBXl.js";import"./MenuTrigger-T5mh7LLG.js";import"./CompositeItem-IwhuMT6y.js";import"./ToolbarRootContext-IZR9f2eY.js";import"./getDisabledMountTransitionStyles-CWpIDhsc.js";import"./getPseudoElementBounds-B_Pqjac0.js";import"./chevron-down-DmIABeew.js";import"./index-CtHaTe0V.js";import"./error-i48OCe6N.js";import"./BaseCbacBanner-Bl1vz49-.js";import"./makeExternalStore-CzaoHCck.js";import"./Tooltip-imI0x-7c.js";import"./PopoverPopup-C2ytPyDe.js";import"./toNumber-DSbbqKW3.js";import"./useOsdkClient-vEHou9o8.js";import"./tick-BTdonOzt.js";import"./DropdownField-MTaxgVGj.js";import"./withOsdkMetrics-8G_3-O2s.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

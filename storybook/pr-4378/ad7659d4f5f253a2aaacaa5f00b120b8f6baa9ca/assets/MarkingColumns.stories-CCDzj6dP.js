import{f as p,j as e}from"./iframe-BGt7IhdS.js";import{O as i}from"./object-table-M-Kg_adD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DUkvm5oM.js";import"./Table-D4qL2JfY.js";import"./index-gkzrPHGR.js";import"./Dialog-FEhrWvxq.js";import"./cross-Cb9gWeTe.js";import"./svgIconContainer-Bf5Aovc1.js";import"./useBaseUiId-Dcw5wc3b.js";import"./InternalBackdrop-S55VIO1-.js";import"./composite-CtTlfVza.js";import"./index-DUEp08qS.js";import"./index-W3km3k8_.js";import"./index-CNVam7GG.js";import"./useEventCallback-JNIdHdBh.js";import"./SkeletonBar-CgrFEgnf.js";import"./LoadingCell-_2ldlBj_.js";import"./ColumnConfigDialog-BFunB1CC.js";import"./DraggableList-DhrRiD7Y.js";import"./search-B8wvEhc-.js";import"./Input-BDhQTr7d.js";import"./useControlled-BgB3rMOH.js";import"./Button-Bf0GrAaJ.js";import"./small-cross-D5oEM4rj.js";import"./ActionButton-BLtk1IHL.js";import"./Checkbox-TkM9h5Go.js";import"./useValueChanged-CBLz-uPE.js";import"./CollapsiblePanel-C6psZrkp.js";import"./MultiColumnSortDialog-DAOqHewy.js";import"./MenuTrigger-Bm6hwNKU.js";import"./CompositeItem-VInoCAcU.js";import"./ToolbarRootContext-DcgyCrBd.js";import"./getDisabledMountTransitionStyles-B653rn17.js";import"./getPseudoElementBounds-C4Cn99UK.js";import"./chevron-down-DB4w1r6J.js";import"./index-C1TCtrZ_.js";import"./error-5t3qELAN.js";import"./BaseCbacBanner-BMXAVja9.js";import"./makeExternalStore-Crpu5ieT.js";import"./Tooltip-Bj8KxrzN.js";import"./isObject-Ce9k2qqC.js";import"./debounce-B-wJIF06.js";import"./useOsdkClient-BcDStKp7.js";import"./tick-BMa_7DrH.js";import"./DropdownField-DLrwqyVG.js";import"./isEqual-nup27oBZ.js";import"./_baseIsEqual-DupyGeRb.js";import"./withOsdkMetrics-BEwucJks.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};

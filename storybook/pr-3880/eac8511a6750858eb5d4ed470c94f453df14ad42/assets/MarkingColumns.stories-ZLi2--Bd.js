import{f as p,j as e}from"./iframe-CyC9Pk-h.js";import{O as i}from"./object-table-BsfP3FvY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ba_eiWvD.js";import"./Table-DkLCx0er.js";import"./index-Jw1W-Dcz.js";import"./Dialog-Df0xEOMi.js";import"./cross-D41ZPA6o.js";import"./svgIconContainer-CtuyHuEk.js";import"./useBaseUiId-DA5rbGS_.js";import"./InternalBackdrop-CXPZKbfm.js";import"./composite-DqgZShC5.js";import"./index-DtMSFM7u.js";import"./index-1iTTRwMn.js";import"./index-EHC3aZTC.js";import"./useEventCallback-DSou20rM.js";import"./SkeletonBar-BnfsFDq0.js";import"./LoadingCell-C03pp2fP.js";import"./ColumnConfigDialog-CrbgZEFJ.js";import"./DraggableList-DS0clgRO.js";import"./search-CPABJXMR.js";import"./Input-5xKjP-wg.js";import"./useControlled-C3ihEHs7.js";import"./Button-CqFoA8aV.js";import"./small-cross-BMkUFw8K.js";import"./ActionButton-BVgOXFs6.js";import"./Checkbox-UV88qlOB.js";import"./useValueChanged-03JAa1pz.js";import"./CollapsiblePanel-C1I0lBEL.js";import"./MultiColumnSortDialog-y-WAtbmM.js";import"./MenuTrigger-DGnAtvUa.js";import"./CompositeItem-hsjBXfuI.js";import"./ToolbarRootContext-DTThoWLk.js";import"./getDisabledMountTransitionStyles-wUnEu5YD.js";import"./getPseudoElementBounds-BRBBxDWx.js";import"./chevron-down-CKdV8T0F.js";import"./index-L4eHIYb3.js";import"./error-C7KSTTAG.js";import"./BaseCbacBanner-Bv8g0L1w.js";import"./makeExternalStore-C4_agDxn.js";import"./Tooltip-LWsmRuja.js";import"./PopoverPopup-CE44CbNH.js";import"./debounce-CW6jMS9F.js";import"./useOsdkClient-OoJHmRAM.js";import"./tick-BJNw3IpF.js";import"./DropdownField-DxYekBT1.js";import"./isEqual-CqmkzJ1o.js";import"./withOsdkMetrics-BZTfI1Of.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

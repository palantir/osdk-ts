import{f as p,j as e}from"./iframe-B0aax5t4.js";import{O as i}from"./object-table-CrSjyILN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_i0Odcu.js";import"./Table-C8ig-ejt.js";import"./index-CA_7V0ln.js";import"./Dialog-BP_aLww7.js";import"./cross-C3BbzJF1.js";import"./svgIconContainer-DSeQyMEd.js";import"./useBaseUiId-C9EFBUqt.js";import"./InternalBackdrop-YHaUWllu.js";import"./composite-Cu5vApVf.js";import"./index-FaCZN02u.js";import"./index-BOMUn4js.js";import"./index-Crxx3EiI.js";import"./useEventCallback-81QtWnOW.js";import"./SkeletonBar-DvtukVW0.js";import"./LoadingCell-CgaGKxH-.js";import"./ColumnConfigDialog-CIctkUBq.js";import"./DraggableList-CQExoIKz.js";import"./search-7EK0E19p.js";import"./Input-DuNf2WGN.js";import"./useControlled-Cjro_C_L.js";import"./Button-DcLOyqPK.js";import"./small-cross-BXeSo4Fh.js";import"./ActionButton-B3wz3E9S.js";import"./Checkbox-CopBKgc0.js";import"./useValueChanged-DrFFTdCP.js";import"./CollapsiblePanel-BouT-1X2.js";import"./MultiColumnSortDialog-D65JRXoT.js";import"./MenuTrigger-_QNNWd1o.js";import"./CompositeItem-DhB66LbS.js";import"./ToolbarRootContext-D_WwjLAe.js";import"./getDisabledMountTransitionStyles-DopRS8uM.js";import"./getPseudoElementBounds-CxIE0dVy.js";import"./chevron-down-59Pc7DyK.js";import"./index-DhaocRdq.js";import"./error-DSukmTRO.js";import"./BaseCbacBanner-B0R2rA0w.js";import"./makeExternalStore-C8fdPEkr.js";import"./Tooltip-D1IoO4LU.js";import"./PopoverPopup-Dawl7HJi.js";import"./debounce-DhQIUNPS.js";import"./useOsdkClient-Bk4AmunN.js";import"./tick-CGBQp0dn.js";import"./DropdownField-ELR4mU-J.js";import"./isEqual-BU7ie3df.js";import"./withOsdkMetrics-BMYYjUQJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

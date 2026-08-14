import{f as p,j as e}from"./iframe-CEoeK06g.js";import{O as i}from"./object-table-PCq9mE--.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0HY9C8v.js";import"./Table-CiBk8Kuj.js";import"./index-CbcAYo9G.js";import"./Dialog-Do5jMUdN.js";import"./cross-D1VoGJpt.js";import"./svgIconContainer-CtUSixF7.js";import"./useBaseUiId-DlA3_oGO.js";import"./InternalBackdrop-CVkNWXpf.js";import"./composite-DO_ZxZQ1.js";import"./index-CDp82B90.js";import"./index-BWMfSkVY.js";import"./index-ki59gnJf.js";import"./useEventCallback-DdW65cyv.js";import"./SkeletonBar-Dm0Xea2F.js";import"./LoadingCell-BE7MH8sz.js";import"./ColumnConfigDialog-D5MKgIYZ.js";import"./DraggableList-DShl7tzb.js";import"./search-Dv4SY-Fw.js";import"./Input-BNn8L34r.js";import"./useControlled-BAISDtcI.js";import"./Button-xvTdbQWs.js";import"./small-cross-a5SRE8gl.js";import"./ActionButton-CUfdyyWy.js";import"./Checkbox-DeqDc74u.js";import"./useValueChanged-BCvrXU65.js";import"./CollapsiblePanel-D5OwgvzE.js";import"./MultiColumnSortDialog-D7XhxwMe.js";import"./MenuTrigger-C8ZuGGuG.js";import"./CompositeItem-Hmlr3-VY.js";import"./ToolbarRootContext-DAZXfHsD.js";import"./getDisabledMountTransitionStyles-yz_wdS6E.js";import"./getPseudoElementBounds-OONeQKhP.js";import"./chevron-down-CM7IFICS.js";import"./index-D39DbJ__.js";import"./error-gl_nrOic.js";import"./BaseCbacBanner-BSA1h8ba.js";import"./makeExternalStore-B-qUAwEg.js";import"./Tooltip-BXxrMAtC.js";import"./PopoverPopup-Cwf1wOPM.js";import"./debounce-D18MSEXa.js";import"./useOsdkClient-BIAe_nCU.js";import"./tick-B8IBu5LL.js";import"./DropdownField-C-5y2i30.js";import"./isEqual-DcYqH4l4.js";import"./withOsdkMetrics-CNrGK-H6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

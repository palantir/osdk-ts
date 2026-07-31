import{f as p,j as e}from"./iframe-BCELjueD.js";import{O as i}from"./object-table-DMWVrhnd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhWtn3bd.js";import"./Table-h2VOON-p.js";import"./index-C2TWSJNn.js";import"./Dialog-Kr_5kPqy.js";import"./cross-DW9P7-kS.js";import"./svgIconContainer-D7r98AQf.js";import"./useBaseUiId-D2ilU-eW.js";import"./InternalBackdrop-DPTCUhCM.js";import"./composite-CFY-6VGT.js";import"./index-Co75qXW3.js";import"./index-BlGT_yiJ.js";import"./index-wUO7vjRD.js";import"./useEventCallback-BMAoa6Kg.js";import"./SkeletonBar-WkRd0IJo.js";import"./LoadingCell-CifpqLIM.js";import"./ColumnConfigDialog-DVHDV22f.js";import"./DraggableList-D1Gl-i5A.js";import"./search-Dw0OYTHR.js";import"./Input-B-GyiHFv.js";import"./useControlled-B6AglnsA.js";import"./isEqual-D6qOE7p_.js";import"./isObject-TZ77QRHx.js";import"./Button-DU1F4Snx.js";import"./ActionButton-Dqt-OOcW.js";import"./Checkbox-BYJtT0-D.js";import"./useValueChanged-D9Uj0vyL.js";import"./CollapsiblePanel-CAQsd2_r.js";import"./MultiColumnSortDialog-DXXa-HpH.js";import"./MenuTrigger-CGENzWRQ.js";import"./CompositeItem-qaPcSWJy.js";import"./ToolbarRootContext-C2W--ksY.js";import"./getDisabledMountTransitionStyles-nPzqkM6Q.js";import"./getPseudoElementBounds-CmuVA6fm.js";import"./chevron-down-QNpM5_Fh.js";import"./index-DrjK6CU8.js";import"./error-BslijzYM.js";import"./BaseCbacBanner-brOXDsBd.js";import"./makeExternalStore-BcTaJpz8.js";import"./Tooltip--BjEjPFB.js";import"./PopoverPopup-BFC5dokD.js";import"./toNumber-uWSCtnJ6.js";import"./useOsdkClient-CdRIrwcN.js";import"./tick-CAbm98cs.js";import"./DropdownField-ClPabGQC.js";import"./withOsdkMetrics-CLAhbfws.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

import{f as p,j as e}from"./iframe-EjCpIKMB.js";import{O as i}from"./object-table-5fWdPkX7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIUDHQF8.js";import"./Table-Cmb2wjQa.js";import"./index-B5U3ePJq.js";import"./Dialog-DssNMNSz.js";import"./cross-CnLBVn_q.js";import"./svgIconContainer-CP-Ry2TB.js";import"./useBaseUiId-CK7LAaP5.js";import"./InternalBackdrop-CLd2i4Az.js";import"./composite-BNMQjeVI.js";import"./index-BtHapzj-.js";import"./index-BoU3FokU.js";import"./index-CEQCP6Rz.js";import"./useEventCallback-CiuEYM0E.js";import"./SkeletonBar-xLEjW6F1.js";import"./LoadingCell-CmPbThS_.js";import"./ColumnConfigDialog-DkxNN9Yc.js";import"./DraggableList-B18NmC-W.js";import"./search-BuWn_4CG.js";import"./Input-B6qHKpOm.js";import"./useControlled-C1-AcGB5.js";import"./Button-i8gsI8dS.js";import"./small-cross-BO3dC5CT.js";import"./ActionButton-D9fM6-Ow.js";import"./Checkbox-rkPeMWtn.js";import"./useValueChanged-BrI5qHq7.js";import"./CollapsiblePanel-CT_Zqu4L.js";import"./MultiColumnSortDialog-CLWNn6M_.js";import"./MenuTrigger-7vF3udgH.js";import"./CompositeItem-DMMDITMV.js";import"./ToolbarRootContext-D7y3n011.js";import"./getDisabledMountTransitionStyles-DU_IFslq.js";import"./getPseudoElementBounds-CftZdi9Z.js";import"./chevron-down-BryEDF54.js";import"./index-C86moaIy.js";import"./error-COq5rtPP.js";import"./BaseCbacBanner-CTsIoRnR.js";import"./makeExternalStore-C3iPT6jS.js";import"./Tooltip-DvfNwL5O.js";import"./PopoverPopup-Bln9dMkk.js";import"./debounce-iiPmlamn.js";import"./useOsdkClient-BzX-SVEP.js";import"./tick-BsXgJ5Ai.js";import"./DropdownField-G8plP5wa.js";import"./isEqual-Dlpp4WAb.js";import"./withOsdkMetrics-BFKxMYaV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

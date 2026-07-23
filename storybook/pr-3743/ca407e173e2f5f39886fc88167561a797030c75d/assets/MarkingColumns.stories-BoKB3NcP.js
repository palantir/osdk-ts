import{f as p,j as e}from"./iframe-YKgGYsAZ.js";import{O as i}from"./object-table-BnMQXkv0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOUBWnCG.js";import"./Table-0BWYUg2X.js";import"./index-BSQIesNv.js";import"./Dialog-_bR5w0vP.js";import"./cross-Cy7yMOlh.js";import"./svgIconContainer-DjwSFEoB.js";import"./useBaseUiId-C9tw97PK.js";import"./InternalBackdrop-Beq4RY-j.js";import"./composite-9jEqfl-8.js";import"./index-Ckuqz5sJ.js";import"./index-Emhhftp8.js";import"./index-cwiYAG6F.js";import"./useEventCallback-epULuBlX.js";import"./SkeletonBar-D8RHKcwS.js";import"./LoadingCell-Jdekc-d0.js";import"./ColumnConfigDialog-BlLVglAQ.js";import"./DraggableList-SIkC03jl.js";import"./search-COrqTZFe.js";import"./Input-B20zbLtE.js";import"./useControlled-CMH4CusX.js";import"./isEqual-Brjs4Y_c.js";import"./isObject-DuvZSH3l.js";import"./Button-BYswp3H9.js";import"./ActionButton-Dl5vgnot.js";import"./Checkbox-BhgBtNGD.js";import"./useValueChanged-CBqj8w_B.js";import"./CollapsiblePanel-TiLuoxuM.js";import"./MultiColumnSortDialog-JK6Dm8Kk.js";import"./MenuTrigger-kRrWjUtP.js";import"./CompositeItem-D_aoMV-r.js";import"./ToolbarRootContext-C4AwY0JT.js";import"./getDisabledMountTransitionStyles-CxTm3pXi.js";import"./getPseudoElementBounds-wNQUm_MB.js";import"./chevron-down-e9aVtt1A.js";import"./index-DF281wZ_.js";import"./error-BF8Ij9Ca.js";import"./BaseCbacBanner-DPfQm9Xw.js";import"./makeExternalStore-B3R7PPWc.js";import"./Tooltip-CFc8dJ2d.js";import"./PopoverPopup-MHezIPJm.js";import"./toNumber-DFnR15ML.js";import"./useOsdkClient-Dvvaf_S-.js";import"./tick-C_9SKsFa.js";import"./DropdownField-CpZTqGJh.js";import"./withOsdkMetrics-4LWIzNT1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

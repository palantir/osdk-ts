import{f as p,j as e}from"./iframe-C03US_I6.js";import{O as i}from"./object-table-BZlG6oo3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_hpKMU_.js";import"./Table-pVuoTnHq.js";import"./index-C0TeYPg1.js";import"./Dialog-CzJGcRjs.js";import"./cross-B_4MYCZ_.js";import"./svgIconContainer-EwnPmkII.js";import"./useBaseUiId-D-uzqdoM.js";import"./InternalBackdrop-DPKQbzSG.js";import"./composite-UEsmsm-V.js";import"./index-YgCpM4My.js";import"./index-nwRvsWdy.js";import"./index-4tl9fbw5.js";import"./useEventCallback-BTvWob_8.js";import"./SkeletonBar-Cpm1ZtWz.js";import"./LoadingCell--4NBS1L8.js";import"./ColumnConfigDialog-Bmmkpv58.js";import"./DraggableList-Do8dQmK7.js";import"./search-tIkv7nJO.js";import"./Input-kXzLNjp1.js";import"./useControlled-Ce_eW3Tc.js";import"./isEqual-CkSrUxTo.js";import"./isObject-LLr9FPm1.js";import"./Button-Cia6mCYi.js";import"./ActionButton-CbbLCAxW.js";import"./Checkbox-DsQLhhy7.js";import"./useValueChanged-Ccsz7UbU.js";import"./CollapsiblePanel-DW8Rz6WZ.js";import"./MultiColumnSortDialog-BuGwf2kg.js";import"./MenuTrigger-BEuF51J5.js";import"./CompositeItem-5t-e12Jc.js";import"./ToolbarRootContext-BcfMYFrd.js";import"./getDisabledMountTransitionStyles-CGKROOJp.js";import"./getPseudoElementBounds-UOKVWr3N.js";import"./chevron-down-DSf6y05Z.js";import"./index-BcDzzwMS.js";import"./error-BY2GZ9CK.js";import"./BaseCbacBanner-B4Oqgm8C.js";import"./makeExternalStore-Cj2cBj8H.js";import"./Tooltip-Cwgqdokn.js";import"./PopoverPopup-DACaeaPi.js";import"./toNumber-CKVj-TJi.js";import"./useOsdkClient-BzWhRUai.js";import"./tick-ClJNL60R.js";import"./DropdownField-Ja7wn_To.js";import"./withOsdkMetrics-n1LItz_B.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

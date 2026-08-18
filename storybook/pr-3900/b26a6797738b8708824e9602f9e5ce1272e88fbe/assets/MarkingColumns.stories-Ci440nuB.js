import{f as p,j as e}from"./iframe-KOhODaDj.js";import{O as i}from"./object-table-DSWTbMDR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BODknkj-.js";import"./Table-CNDm6mjo.js";import"./index-B0nzDQgS.js";import"./Dialog-ahiGBcOB.js";import"./cross-Dgf421i8.js";import"./svgIconContainer-C65gZPep.js";import"./useBaseUiId-gSHm8V6S.js";import"./InternalBackdrop-DdOq3Puu.js";import"./composite-C_Vf-kWD.js";import"./index-DV1hfBzW.js";import"./index-D9daGdR1.js";import"./index-Cqyyg3ii.js";import"./useEventCallback-d1jn-iXH.js";import"./SkeletonBar-M71vaxj9.js";import"./LoadingCell-Crqd7-Dl.js";import"./ColumnConfigDialog-CdN84COY.js";import"./DraggableList-D--ERkhp.js";import"./search-BaFhwWB9.js";import"./Input-B02ROypI.js";import"./useControlled-DJm187qA.js";import"./Button-DhCL6Aji.js";import"./small-cross-D82pj7CN.js";import"./ActionButton-CxYw6q3v.js";import"./Checkbox-B5WPRVRc.js";import"./useValueChanged-CtNkJgXl.js";import"./CollapsiblePanel-_DkAa5xs.js";import"./MultiColumnSortDialog-CXqEow0k.js";import"./MenuTrigger-DtX4J4qI.js";import"./CompositeItem-KroluAr_.js";import"./ToolbarRootContext-CEqE4F8_.js";import"./getDisabledMountTransitionStyles-CvvFseQ6.js";import"./getPseudoElementBounds-DmQW0k5c.js";import"./chevron-down-CWcC4j17.js";import"./index-Cebj72FH.js";import"./error-BU6upqzF.js";import"./BaseCbacBanner-D-CAdumw.js";import"./makeExternalStore-mEv2XVah.js";import"./Tooltip-DOeCzjZQ.js";import"./PopoverPopup-lOn6mGJy.js";import"./debounce-DUXfBiTb.js";import"./useOsdkClient-j0dX3qXm.js";import"./tick-f2pTlKFj.js";import"./DropdownField-k4eRTytw.js";import"./isEqual-BqKBT1By.js";import"./withOsdkMetrics-D2FX6zR1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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

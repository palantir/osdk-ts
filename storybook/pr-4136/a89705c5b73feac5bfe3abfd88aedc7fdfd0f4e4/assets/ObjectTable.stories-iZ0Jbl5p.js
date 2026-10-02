import{j as i}from"./iframe-PECeEW3T.js";import{O as p}from"./object-table-LBakupUf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-brdJWUHv.js";import"./preload-helper-C6A5QCy5.js";import"./Table-BWD-PnJ7.js";import"./index-BjSahMIP.js";import"./Dialog-BqqkE3KK.js";import"./cross-jtAUAPzX.js";import"./svgIconContainer-B-v0aTHG.js";import"./useBaseUiId-D-8DZjqe.js";import"./InternalBackdrop-O0lOdESn.js";import"./composite-Ce7Nqskp.js";import"./index-ieJWeIAg.js";import"./index-C9QXfA_d.js";import"./index-DtGkyzrP.js";import"./useEventCallback-DyH-DdM5.js";import"./SkeletonBar-BMS3_wA0.js";import"./LoadingCell-6LypjGrw.js";import"./ColumnConfigDialog-DSzAIdyP.js";import"./DraggableList-Ci3g6B9Z.js";import"./search-CpCpMqWp.js";import"./Input-Dyun1iu7.js";import"./useControlled-rCZffMic.js";import"./Button-LcQP4ZCC.js";import"./small-cross-Dy6Y0Hcc.js";import"./ActionButton-B99REHhD.js";import"./Checkbox-CxAecBCs.js";import"./useValueChanged-ChvBCWAV.js";import"./CollapsiblePanel-BsfLZLWB.js";import"./MultiColumnSortDialog-BP9-8PQ8.js";import"./MenuTrigger-DQ_Gyd4O.js";import"./CompositeItem-CUJUUY83.js";import"./ToolbarRootContext-CpX9GNwO.js";import"./getDisabledMountTransitionStyles-CKuvmIJF.js";import"./getPseudoElementBounds-DuSZBJyL.js";import"./chevron-down-CxtRUuHx.js";import"./index-BKt47rIQ.js";import"./error-BJrA_-EN.js";import"./BaseCbacBanner-PxU5sa-M.js";import"./makeExternalStore-v3gjQsp8.js";import"./Tooltip-CNpkEvmJ.js";import"./PopoverPopup-B6HgbBU2.js";import"./debounce-DUaEl7gF.js";import"./useOsdkClient-DubZDY7d.js";import"./tick-zmXIdbTH.js";import"./DropdownField-D4M8Ec5T.js";import"./isEqual-D_x1Rpx1.js";import"./withOsdkMetrics-CQL6tA2X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};

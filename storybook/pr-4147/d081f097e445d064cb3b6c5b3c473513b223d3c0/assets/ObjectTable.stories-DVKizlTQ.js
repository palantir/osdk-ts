import{j as i}from"./iframe-DYAom9bR.js";import{O as p}from"./object-table-Dc6CFDmu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-_wRiEWzA.js";import"./preload-helper-wH_b8k-5.js";import"./Table-26gDJzq2.js";import"./index-BDzI0DMF.js";import"./Dialog-CipKDG2b.js";import"./cross-C34zCmWz.js";import"./svgIconContainer-DlXjEWqk.js";import"./useBaseUiId-CEx3sHln.js";import"./InternalBackdrop-oAf4IP9a.js";import"./composite-BeIl570u.js";import"./index-6FSLs8PI.js";import"./index-CrUWvWSh.js";import"./index-CZVh1_T-.js";import"./useEventCallback-BU8ZD1u4.js";import"./SkeletonBar-wGn5kuO-.js";import"./LoadingCell-B0xvYzrR.js";import"./ColumnConfigDialog-BKNhCeCG.js";import"./DraggableList-la_3EMaN.js";import"./search-V7G9cPkI.js";import"./Input-OPGRVn8-.js";import"./useControlled-BCisCwEt.js";import"./Button-B95fuG8U.js";import"./small-cross-04PkP_DP.js";import"./ActionButton-Bf-Y4ACZ.js";import"./Checkbox-Di9zOXok.js";import"./useValueChanged-xixZlyWk.js";import"./CollapsiblePanel-D42XvXp9.js";import"./MultiColumnSortDialog-C3q2uSOk.js";import"./MenuTrigger-USgYIamM.js";import"./CompositeItem-fVngu3j_.js";import"./ToolbarRootContext-a__5SMe8.js";import"./getDisabledMountTransitionStyles-BrF1CFns.js";import"./getPseudoElementBounds-DoxjXqlD.js";import"./chevron-down-QO6dVwDP.js";import"./index-PnC5M3uF.js";import"./error-CX6Detdp.js";import"./BaseCbacBanner-uJgtnHA4.js";import"./makeExternalStore-CS6veLxB.js";import"./Tooltip-CXruGX6E.js";import"./PopoverPopup-DKy48gOt.js";import"./debounce-BiwqmQhi.js";import"./useOsdkClient-7x4bV1DV.js";import"./tick-Be40iFM6.js";import"./DropdownField-C1ueVugc.js";import"./isEqual-xgW26ERh.js";import"./withOsdkMetrics-BPYPoSmq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

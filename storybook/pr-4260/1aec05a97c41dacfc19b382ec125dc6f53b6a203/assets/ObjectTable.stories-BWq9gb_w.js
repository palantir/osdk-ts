import{j as i}from"./iframe-DQPhK9GU.js";import{O as p}from"./object-table-u1t353el.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CrQwZE1R.js";import"./preload-helper-BexD08qU.js";import"./Table-D0VrqxVa.js";import"./index-D7bWxKkV.js";import"./Dialog-DYMU0A_Q.js";import"./cross-Bz5ncAg7.js";import"./svgIconContainer-C-2S33jf.js";import"./useBaseUiId-BcnbbCrD.js";import"./InternalBackdrop-3e5_1pLw.js";import"./composite-D8rz_NRd.js";import"./index-COKR49Jt.js";import"./index-nU_uKQML.js";import"./index-BPuMxoe3.js";import"./useEventCallback-Ak9Y6Sg_.js";import"./SkeletonBar-BQMpvI0c.js";import"./LoadingCell-Q2SMPZFJ.js";import"./ColumnConfigDialog-BTMr9kD8.js";import"./DraggableList-D7WIyWaj.js";import"./search-DEKkH3rw.js";import"./Input-C-_mqWVh.js";import"./useControlled-wY0jaWl-.js";import"./Button-BMvHZDY9.js";import"./small-cross-DF-5DtWu.js";import"./ActionButton-DIbN-5yx.js";import"./Checkbox-DZ0ffxz9.js";import"./useValueChanged-D8JCzrrE.js";import"./CollapsiblePanel-CP7h0CHU.js";import"./MultiColumnSortDialog-C76o3UFs.js";import"./MenuTrigger-BD_E06dV.js";import"./CompositeItem-D17QBVCs.js";import"./ToolbarRootContext-DUYvPpGK.js";import"./getDisabledMountTransitionStyles-CPz_8zQf.js";import"./getPseudoElementBounds-DNc_fjpY.js";import"./chevron-down-CEtDqD55.js";import"./index-ueYSc4xO.js";import"./error-CMvmkLKQ.js";import"./BaseCbacBanner-BC4eJkdb.js";import"./makeExternalStore-BK4AXna6.js";import"./Tooltip-DCFHObTT.js";import"./PopoverPopup-BMwOXxZm.js";import"./debounce-BzHe_40F.js";import"./useOsdkClient-Ddu_dn5L.js";import"./tick-Dknq3fKL.js";import"./DropdownField-CW3rWXJa.js";import"./isEqual-BK6H-Cg9.js";import"./withOsdkMetrics-BToX27Ix.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

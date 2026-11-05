import{j as i}from"./iframe-x4Y4VSHV.js";import{O as p}from"./object-table-1cZIpCil.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BOO3f7ab.js";import"./preload-helper-wFwf1Z_7.js";import"./Table-C-oXinJO.js";import"./index-BTkF7OpO.js";import"./Dialog-D0myaYAC.js";import"./cross-34rpmbRR.js";import"./svgIconContainer-BRq3fj7v.js";import"./useBaseUiId-O7ZsVKwo.js";import"./InternalBackdrop-Bv0h497n.js";import"./composite-HDXk98Mo.js";import"./index-BcBc9KVj.js";import"./index-B3Hd8yqN.js";import"./index-CfRBgTVy.js";import"./useEventCallback-SHHnyPaE.js";import"./SkeletonBar-IY8wlZ6P.js";import"./LoadingCell-CPBTYhln.js";import"./ColumnConfigDialog-BgjiELGT.js";import"./DraggableList-BMxd087o.js";import"./search-t_lGFyp_.js";import"./Input-RqZQ3gi6.js";import"./useControlled-B1vBMtLm.js";import"./Button-D6WWCBJV.js";import"./small-cross-B7mLfu2a.js";import"./ActionButton-Bufn2px0.js";import"./Checkbox-CXM0rLwb.js";import"./useValueChanged-B_Sqxe_h.js";import"./CollapsiblePanel-Dlts5kAq.js";import"./MultiColumnSortDialog-uXuJ_gss.js";import"./MenuTrigger-dApCLvRy.js";import"./CompositeItem-gQ_2jip-.js";import"./ToolbarRootContext-BTpSmFWY.js";import"./getDisabledMountTransitionStyles-cT_E1wd_.js";import"./getPseudoElementBounds-DrAxvQVr.js";import"./chevron-down-DIIH-694.js";import"./index-B9Z4kBgT.js";import"./error-1h6EWorL.js";import"./BaseCbacBanner-CYc6azI0.js";import"./makeExternalStore-CRHmXcik.js";import"./Tooltip-CIUrl65j.js";import"./PopoverPopup-CMpyIGzp.js";import"./debounce-FKkJspwT.js";import"./useOsdkClient-Bh27IzO_.js";import"./tick-DJgmKu8k.js";import"./DropdownField-2L4uAddC.js";import"./isEqual-CIrx9idy.js";import"./withOsdkMetrics-LnVAi8HB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

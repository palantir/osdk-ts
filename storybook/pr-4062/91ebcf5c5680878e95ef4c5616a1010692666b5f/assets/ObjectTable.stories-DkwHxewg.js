import{j as i}from"./iframe-BOj5ppke.js";import{O as p}from"./object-table-CMpHVwNW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BIuwEZXu.js";import"./preload-helper-CBHct16F.js";import"./Table-XbqFUHS7.js";import"./index-HKvlrTBa.js";import"./Dialog-9inVe_LB.js";import"./cross-DNHN82gf.js";import"./svgIconContainer-BuTDWv6N.js";import"./useBaseUiId-BNy53Xwg.js";import"./InternalBackdrop-2JUdJu3v.js";import"./composite-BIYhI5rN.js";import"./index-yY_I17Ls.js";import"./index-D09ehKI5.js";import"./index-60fYJKFG.js";import"./useEventCallback-6T1KNzx1.js";import"./SkeletonBar-B-IOK4wU.js";import"./LoadingCell-CGBveAsm.js";import"./ColumnConfigDialog-BOLFm22z.js";import"./DraggableList-CuWl0rg1.js";import"./search-Df27sRIb.js";import"./Input-D8jSSVKT.js";import"./useControlled-7cY7BcCI.js";import"./Button-KVqGzs9n.js";import"./small-cross-Bg4ILemt.js";import"./ActionButton-BOz9rn69.js";import"./Checkbox-CpJwtUU1.js";import"./useValueChanged-1Gqn7W9E.js";import"./CollapsiblePanel-C2WGctBy.js";import"./MultiColumnSortDialog-D-kndlzk.js";import"./MenuTrigger-B8jkOBbS.js";import"./CompositeItem-DOYu6l81.js";import"./ToolbarRootContext-BwQvbarU.js";import"./getDisabledMountTransitionStyles-BPfNVA-k.js";import"./getPseudoElementBounds-BnmQ9bfG.js";import"./chevron-down-CNYfkkhw.js";import"./index-CZ8HqYif.js";import"./error-DVmdWFmh.js";import"./BaseCbacBanner-DEawCAhX.js";import"./makeExternalStore-EqBWCSWE.js";import"./Tooltip-DoFeRf33.js";import"./PopoverPopup-DVsaBUbG.js";import"./debounce-DoyNhnA7.js";import"./useOsdkClient-n_KwCS3w.js";import"./tick-ZiYqSkEH.js";import"./DropdownField-D4MnIHgF.js";import"./isEqual-CLTE0z_7.js";import"./withOsdkMetrics-RevSluC0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-CZ4qo6TA.js";import{O as p}from"./object-table-Cl7osAGz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CPjhgXvA.js";import"./preload-helper-D40KpOHN.js";import"./Table-Du3ldVPy.js";import"./index-B1VXkh3r.js";import"./Dialog-C3B0-q6F.js";import"./cross-BdgbMHZq.js";import"./svgIconContainer-CMijeJNG.js";import"./useBaseUiId-DO15ulBB.js";import"./InternalBackdrop-DWj837um.js";import"./composite-CODWVvxq.js";import"./index-CZQei39W.js";import"./index-SZhdlURA.js";import"./index-CuFz-_kG.js";import"./useEventCallback-ExrAdjX-.js";import"./SkeletonBar-CJS4EpKQ.js";import"./LoadingCell-DjMywnOg.js";import"./ColumnConfigDialog-Bf6vPSqo.js";import"./DraggableList--GRLHIPj.js";import"./search-DMBvmHVz.js";import"./Input-RFD7u_HI.js";import"./useControlled-Cx3Ij5Mu.js";import"./Button-BtVUzCrS.js";import"./small-cross-QLvraUt0.js";import"./ActionButton-CsLidLTo.js";import"./Checkbox-BpqpeK9_.js";import"./useValueChanged-CVtnd4HJ.js";import"./CollapsiblePanel-DEkl0vLO.js";import"./MultiColumnSortDialog-Ch4aEIXg.js";import"./MenuTrigger-B9t6PfLv.js";import"./CompositeItem-deIgJifw.js";import"./ToolbarRootContext-Bml6QJba.js";import"./getDisabledMountTransitionStyles-DVK3xheu.js";import"./getPseudoElementBounds-BxmnbCl3.js";import"./chevron-down-BdE_cbUf.js";import"./index-Dn5MssWf.js";import"./error-CVxsYLyQ.js";import"./BaseCbacBanner-BO36fmcs.js";import"./makeExternalStore-ChVKEbDO.js";import"./Tooltip-DW57x_s5.js";import"./PopoverPopup-X1NXKjjR.js";import"./debounce-CgqyealR.js";import"./useOsdkClient-58hcDjFk.js";import"./tick-C-ZfBZ86.js";import"./DropdownField-C-3zm9pF.js";import"./isEqual-CLDOcZzH.js";import"./withOsdkMetrics-BKNh995o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

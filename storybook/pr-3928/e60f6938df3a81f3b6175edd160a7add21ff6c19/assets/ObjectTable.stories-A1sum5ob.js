import{j as i}from"./iframe-DWCUNAgH.js";import{O as p}from"./object-table-yHUfiZrX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-AzdmdrSB.js";import"./preload-helper-CllRkgj6.js";import"./Table-DehLudrN.js";import"./index-vPfXSe3i.js";import"./Dialog-C5rNgLZT.js";import"./cross-s4mYc0O3.js";import"./svgIconContainer-BHOQdzaM.js";import"./useBaseUiId-CYOEG7DI.js";import"./InternalBackdrop-CF8Jd0mr.js";import"./composite-DZBVWi3t.js";import"./index-Qe8PCUYJ.js";import"./index-cPCy3bFL.js";import"./index-BUhcus0w.js";import"./useEventCallback-D9midYVp.js";import"./SkeletonBar-DpVscZFf.js";import"./LoadingCell-CG6tkgGP.js";import"./ColumnConfigDialog-DBA6pxoY.js";import"./DraggableList-C-ti_Lyt.js";import"./search-D7gKGmcx.js";import"./Input-BMNb_hi9.js";import"./useControlled-Ba-PlL56.js";import"./Button-D7K0Sf4T.js";import"./small-cross-BlnHnuCl.js";import"./ActionButton-CV61KAz2.js";import"./Checkbox-qL_08NUu.js";import"./useValueChanged-C3GY74Cc.js";import"./CollapsiblePanel-Cz1uHs6i.js";import"./MultiColumnSortDialog-xUJHNI2I.js";import"./MenuTrigger-BcMsSN9G.js";import"./CompositeItem-CVjfjLok.js";import"./ToolbarRootContext-cpZFd1K3.js";import"./getDisabledMountTransitionStyles-CtOsq3X_.js";import"./getPseudoElementBounds-BdBOEd_H.js";import"./chevron-down-Bsil1jJ0.js";import"./index-D14ZBxmP.js";import"./error-_xKRYfae.js";import"./BaseCbacBanner-Y0_vxP-R.js";import"./makeExternalStore-C7M61MFA.js";import"./Tooltip-BBvR4voq.js";import"./PopoverPopup-BRoJH9FS.js";import"./debounce-CiX1XvrO.js";import"./useOsdkClient-CIZUCnSq.js";import"./tick-DpXneqLq.js";import"./DropdownField-Br1gAOJ2.js";import"./isEqual-Dp95ehwz.js";import"./withOsdkMetrics-DUDoeULv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

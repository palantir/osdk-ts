import{j as i}from"./iframe-ookINj4z.js";import{O as p}from"./object-table-5AJqsqmg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-3t0_yd.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DqoDrt8z.js";import"./index-B_G83cAE.js";import"./Dialog-BDjMTZx4.js";import"./cross-DBbP5D4h.js";import"./svgIconContainer-DyzYMl01.js";import"./useBaseUiId-ChW3iXZ-.js";import"./InternalBackdrop-Dbk1x9I9.js";import"./composite-BbXCVwQJ.js";import"./index-DKoQfkwR.js";import"./index-BnkKdipA.js";import"./index-D3pzoeiY.js";import"./useEventCallback-Ch3uqH9f.js";import"./SkeletonBar-DnUbvSjd.js";import"./LoadingCell-C-qgmHrp.js";import"./ColumnConfigDialog-Dj3srkfc.js";import"./DraggableList-DyG8Mo8T.js";import"./search-DTFSxkbH.js";import"./Input-NlWA1BDr.js";import"./useControlled-DmgaWuxn.js";import"./isEqual-Da-y1TCe.js";import"./isObject-Ba7UXz2t.js";import"./Button-C5Uo0dK-.js";import"./ActionButton-BVpermFe.js";import"./Checkbox-CVaNxm77.js";import"./useValueChanged-DfvVmxcA.js";import"./CollapsiblePanel-jqLyxjS9.js";import"./MultiColumnSortDialog-BNuvG1Jv.js";import"./MenuTrigger-C7D45Jns.js";import"./CompositeItem-OAduBL0E.js";import"./ToolbarRootContext-Bu_OObLI.js";import"./getDisabledMountTransitionStyles-DSLBAXz5.js";import"./getPseudoElementBounds-6w2bDLXh.js";import"./chevron-down-Hv5AOudc.js";import"./index-L_GsU3c8.js";import"./error-1dTAOxzn.js";import"./BaseCbacBanner-CUMyagmu.js";import"./makeExternalStore-DQCBlQ8C.js";import"./Tooltip-B3I6Rfj4.js";import"./PopoverPopup-BjNZ3wOK.js";import"./toNumber-CYf7JQBX.js";import"./useOsdkClient-BsdX-QC0.js";import"./tick-dpozkHc2.js";import"./DropdownField-CU0BwSPj.js";import"./withOsdkMetrics-CyPSaHwg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

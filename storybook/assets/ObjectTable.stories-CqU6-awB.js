import{j as i}from"./iframe-6GPNG9Xi.js";import{O as p}from"./object-table-DWgQyALO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CWUMpUDn.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CL7bvEdV.js";import"./index-BLLT78dd.js";import"./Dialog-XqrTNsLI.js";import"./cross-CDqWfoJU.js";import"./svgIconContainer-BdQnszdm.js";import"./useBaseUiId-N7eZ68O9.js";import"./InternalBackdrop-CFXrjmmF.js";import"./composite-BYxN19ZW.js";import"./index-DZlFhs1y.js";import"./index-BHQMMX4F.js";import"./index-DLivmPlx.js";import"./useEventCallback-Cpzpgr_n.js";import"./SkeletonBar-DghLNx4Z.js";import"./LoadingCell-H7l3Xd-N.js";import"./ColumnConfigDialog-CugdJqDq.js";import"./DraggableList-BBaW8GD-.js";import"./search-BbrW5BKI.js";import"./Input-DQenBszh.js";import"./useControlled-DGTBEOub.js";import"./Button-vhjBY76J.js";import"./small-cross-CPEpmVAr.js";import"./ActionButton-DaCDaB0L.js";import"./Checkbox-CM1vw9Zg.js";import"./useValueChanged-DZ0NFAW9.js";import"./CollapsiblePanel-BMTWBF66.js";import"./MultiColumnSortDialog-JxflHR-S.js";import"./MenuTrigger-DWk9Woo3.js";import"./CompositeItem-BOpE1HX7.js";import"./ToolbarRootContext-qHXZhovw.js";import"./getDisabledMountTransitionStyles-B5Kb1i5L.js";import"./getPseudoElementBounds-BxPGNRwH.js";import"./chevron-down-Dnhw5Ae_.js";import"./index-DXeIJDVP.js";import"./error-DBj4FgTN.js";import"./BaseCbacBanner-C5ddbdsN.js";import"./makeExternalStore-BTPDRRuj.js";import"./Tooltip-D9qeKbHO.js";import"./PopoverPopup-BrKaTwlD.js";import"./debounce-D7aOU_II.js";import"./useOsdkClient-CFj73qoH.js";import"./tick-DY1Ho6fU.js";import"./DropdownField-DLs5QjN0.js";import"./isEqual-DF4zAEzU.js";import"./withOsdkMetrics-DeEkmlIV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

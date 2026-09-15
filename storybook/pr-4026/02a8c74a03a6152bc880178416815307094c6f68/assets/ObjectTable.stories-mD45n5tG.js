import{j as i}from"./iframe-BWi1ACEM.js";import{O as p}from"./object-table-CLdxWa0n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0t2LQzT.js";import"./preload-helper-CMYTaGeR.js";import"./Table-B3Z4YM32.js";import"./index-D-2uEljO.js";import"./Dialog-Dbcy_K8j.js";import"./cross-CMcFjheT.js";import"./svgIconContainer-Cw0fxZBh.js";import"./useBaseUiId-YvjxUiEU.js";import"./InternalBackdrop-C8uaHnmS.js";import"./composite-4nRCZoba.js";import"./index-B_isAlQk.js";import"./index-DUFPmdn4.js";import"./index-DMoEONJx.js";import"./useEventCallback-Dvu0LVj3.js";import"./SkeletonBar-BHvw9YSk.js";import"./LoadingCell-CByB22ND.js";import"./ColumnConfigDialog-BUjwZfQ7.js";import"./DraggableList-B-4ddylM.js";import"./search-C-U4g2F4.js";import"./Input-rlMpFyex.js";import"./useControlled-CfVPwlXb.js";import"./Button-W_tcCiCZ.js";import"./small-cross-7-aG10PZ.js";import"./ActionButton-ClnNG4Uj.js";import"./Checkbox-C6dyiMCN.js";import"./useValueChanged-CBGJApuu.js";import"./CollapsiblePanel-cAHkXya3.js";import"./MultiColumnSortDialog-CABa_am7.js";import"./MenuTrigger-B_3p8oic.js";import"./CompositeItem-BGhZB90A.js";import"./ToolbarRootContext--XbyivlW.js";import"./getDisabledMountTransitionStyles-CGzwzFIs.js";import"./getPseudoElementBounds-DO2DurOI.js";import"./chevron-down-Dyruysbi.js";import"./index-DwdK-GcB.js";import"./error-Ru_WceS-.js";import"./BaseCbacBanner-DgCnPLXM.js";import"./makeExternalStore-DOcJRkhv.js";import"./Tooltip-C1JoGvq6.js";import"./PopoverPopup-Crv4q3Zt.js";import"./debounce-DVadtkz9.js";import"./useOsdkClient-BKedMyb4.js";import"./tick-Dgs22XJr.js";import"./DropdownField-BiyDva_F.js";import"./isEqual-CHmBQk58.js";import"./withOsdkMetrics-BqK1HlYa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-Dxf4Pfii.js";import{O as p}from"./object-table-teUVeBQF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMkq4rDE.js";import"./preload-helper-Ci8NMOYF.js";import"./Table-Dq5REfPe.js";import"./index-BPBHjHBt.js";import"./Dialog-mndqTSLP.js";import"./cross-COrhxFBC.js";import"./svgIconContainer-BdxGOMXV.js";import"./useBaseUiId-BBachgDn.js";import"./InternalBackdrop-CFrJwRy4.js";import"./composite-BAA7WPxj.js";import"./index-Dsk0oEX3.js";import"./index-DlHivqB_.js";import"./index-CA0xM10N.js";import"./useEventCallback-DZCNq0Gg.js";import"./SkeletonBar-DyvtAZ1q.js";import"./LoadingCell-C9sMEV6k.js";import"./ColumnConfigDialog-CCDthIHA.js";import"./DraggableList-CqWC8oEM.js";import"./search-BYBW1CEy.js";import"./Input-Dc5nJgGF.js";import"./useControlled-40F8gIyz.js";import"./Button-DiZtkqKs.js";import"./small-cross-CUKjKhkC.js";import"./ActionButton-ABdmTgM9.js";import"./Checkbox-xERkEuYE.js";import"./useValueChanged-CIVU-p1z.js";import"./CollapsiblePanel-B4bl4mBR.js";import"./MultiColumnSortDialog-U_EzV9Kr.js";import"./MenuTrigger-DZh473oa.js";import"./CompositeItem-6maKJylY.js";import"./ToolbarRootContext-CAbW4J_e.js";import"./getDisabledMountTransitionStyles-BKzkpdmr.js";import"./getPseudoElementBounds-BYX5JyBU.js";import"./chevron-down-DG4gq9Kw.js";import"./index-C6hYmHGr.js";import"./error-Cp32RNcr.js";import"./BaseCbacBanner-DXgTdQpZ.js";import"./makeExternalStore-DOGp9SoX.js";import"./Tooltip-DsvfSe4i.js";import"./PopoverPopup-DlIAjFIG.js";import"./debounce-CqpSqGTT.js";import"./useOsdkClient-5XyyZIRW.js";import"./tick--0CHJ2Jw.js";import"./DropdownField-4kbww5nN.js";import"./isEqual-O4AuTBeS.js";import"./withOsdkMetrics-DGJIUSZ9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

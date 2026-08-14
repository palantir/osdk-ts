import{j as i}from"./iframe-DlDyg67T.js";import{O as p}from"./object-table-BiEHahF8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-LD3hBViG.js";import"./preload-helper-CxSoH6eo.js";import"./Table-BaN30LxX.js";import"./index-CgLJcHiG.js";import"./Dialog-DY0jltpC.js";import"./cross-BowQxoCZ.js";import"./svgIconContainer-QwkR6eZt.js";import"./useBaseUiId-wAPBNlUt.js";import"./InternalBackdrop-DMSb8auM.js";import"./composite-BaaVWHgq.js";import"./index-8yeQhVbN.js";import"./index-CY8S8b-r.js";import"./index-pO-hmUBS.js";import"./useEventCallback-DyZWpzNl.js";import"./SkeletonBar-CPHW6w0u.js";import"./LoadingCell-BLMAuk93.js";import"./ColumnConfigDialog-CEBUllzq.js";import"./DraggableList-DR0jkjtw.js";import"./search-Cte5LTFX.js";import"./Input-BoCdBbZ_.js";import"./useControlled-04OxKEAS.js";import"./Button-DRPtGoVj.js";import"./small-cross-Bh0kfntJ.js";import"./ActionButton-yq3aXX8T.js";import"./Checkbox-Bijx3aoH.js";import"./useValueChanged-DN_BaKA4.js";import"./CollapsiblePanel-C9sNLz9v.js";import"./MultiColumnSortDialog-SmI9cSzI.js";import"./MenuTrigger-YADL3Fsi.js";import"./CompositeItem-DzH1OEs5.js";import"./ToolbarRootContext-BTmFkUps.js";import"./getDisabledMountTransitionStyles-D3UrETGN.js";import"./getPseudoElementBounds-CAye7PYw.js";import"./chevron-down-CroTI_KF.js";import"./index-B3dgiPES.js";import"./error-D50Cem1g.js";import"./BaseCbacBanner-BUwna6kj.js";import"./makeExternalStore-CODki1eK.js";import"./Tooltip-DOZmAuSo.js";import"./PopoverPopup-D2k_Z-9o.js";import"./debounce-x_9bMniJ.js";import"./useOsdkClient-CjqVDGxb.js";import"./tick-BALaRZX2.js";import"./DropdownField-DMJY3b8d.js";import"./isEqual-Cc_ePZfr.js";import"./withOsdkMetrics-BQw0dFsV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

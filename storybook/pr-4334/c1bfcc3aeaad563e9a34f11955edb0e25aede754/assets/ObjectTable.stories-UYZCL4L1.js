import{j as i}from"./iframe-CNX9e2vb.js";import{O as p}from"./object-table-BldKdaED.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CFfdyHbc.js";import"./preload-helper-ZMNA8h9P.js";import"./Table-DDRIQJWd.js";import"./index-BIHn_wHI.js";import"./Dialog-D3BNf1DY.js";import"./cross-CoOqaEol.js";import"./svgIconContainer-nouhoaqF.js";import"./useBaseUiId-DVajJCtq.js";import"./InternalBackdrop-g7diMjlH.js";import"./composite-DPfaHyL7.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./index-D4wtEvwv.js";import"./useEventCallback-BHcK-HWT.js";import"./SkeletonBar-C4hnXkU8.js";import"./LoadingCell-DljGb_fq.js";import"./ColumnConfigDialog-DUiy6zFv.js";import"./DraggableList-CuUpn6fc.js";import"./search-PqF1ps1R.js";import"./Input-DsowkJey.js";import"./useControlled-CAgAp9qH.js";import"./Button-DqD_xK8o.js";import"./small-cross-BJExYpuG.js";import"./ActionButton-wZGD9rTp.js";import"./Checkbox-C9aBsH-7.js";import"./useValueChanged-DYtO7VQ0.js";import"./CollapsiblePanel-C7abhmgq.js";import"./MultiColumnSortDialog-DjjVtXUH.js";import"./MenuTrigger-C-b4TkP-.js";import"./CompositeItem-WdRO-_hy.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./getDisabledMountTransitionStyles-2kFCtm_x.js";import"./getPseudoElementBounds-FCxgA3hM.js";import"./chevron-down-BjfbDPyK.js";import"./index-CAwx3j0M.js";import"./error-B93ABaLs.js";import"./BaseCbacBanner-CH3dXHtT.js";import"./makeExternalStore-DE_Ve778.js";import"./Tooltip-Dvuw96-K.js";import"./PopoverPopup-BcTNuNdl.js";import"./debounce-CgHfZ2yU.js";import"./useOsdkClient-ANeJgNR0.js";import"./tick-BqwzrLtf.js";import"./DropdownField-BFuGqXSY.js";import"./isEqual-DxCKwYiG.js";import"./withOsdkMetrics-DMNQhU4Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

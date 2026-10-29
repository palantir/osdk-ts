import{j as i}from"./iframe-DZdi5qVl.js";import{O as p}from"./object-table-Dr3v4Q9V.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8lVeUCn.js";import"./preload-helper-Uouo8HcN.js";import"./Table-CsSEBtiU.js";import"./index-Bg61eIIa.js";import"./Dialog-Dfj1ftg0.js";import"./cross-B9sTw1kj.js";import"./svgIconContainer-DxhMpPws.js";import"./useBaseUiId-Mz3L6_Ly.js";import"./InternalBackdrop-vWueL81t.js";import"./composite-D3C2nmMl.js";import"./index-CVgHOiGf.js";import"./index-DFxmPpXp.js";import"./index-CK_zKJ7H.js";import"./useEventCallback-CHzTdRmo.js";import"./SkeletonBar-D7h-d6LQ.js";import"./LoadingCell-BrgECPSf.js";import"./ColumnConfigDialog-DmwZm_qS.js";import"./DraggableList-DH_4vMJj.js";import"./search-1yJPrdVL.js";import"./Input-I_C95g_4.js";import"./useControlled-BxMGJ1iI.js";import"./Button-Bc-yRCfH.js";import"./small-cross-DP0jWCcr.js";import"./ActionButton-Dh4c5JV5.js";import"./Checkbox-zPHJVy23.js";import"./useValueChanged-4m8KuuR6.js";import"./CollapsiblePanel-CaTF9gHO.js";import"./MultiColumnSortDialog-CF5fTjri.js";import"./MenuTrigger-BYxKKEja.js";import"./CompositeItem-CidR49nz.js";import"./ToolbarRootContext-CRfH5r80.js";import"./getDisabledMountTransitionStyles-Bgmfz7Hi.js";import"./getPseudoElementBounds-CVv7wXsz.js";import"./chevron-down-DWbMZGTs.js";import"./index-BNarussk.js";import"./error-CzW1HZwX.js";import"./BaseCbacBanner-C7-OfbFz.js";import"./makeExternalStore-COQibzUC.js";import"./Tooltip-CUbiiQ57.js";import"./PopoverPopup-CSHu41HL.js";import"./debounce-BSOX5tNy.js";import"./useOsdkClient-D0sO6BtF.js";import"./tick-CSSMXgbf.js";import"./DropdownField-xv8_ACXP.js";import"./isEqual-B8EeTfoX.js";import"./withOsdkMetrics-CA01Qt6R.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

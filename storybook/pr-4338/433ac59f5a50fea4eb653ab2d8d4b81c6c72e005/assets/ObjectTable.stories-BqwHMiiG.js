import{j as i}from"./iframe-CeUrNeS8.js";import{O as p}from"./object-table-Bpteb8FA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BB8jKE8r.js";import"./preload-helper-kClf85ts.js";import"./Table-Dt77VVkm.js";import"./index-CNUBLdqm.js";import"./Dialog-d0Za69Wy.js";import"./cross-DWoJVskS.js";import"./svgIconContainer-Zj5VM8lV.js";import"./useBaseUiId-B6MLv2cX.js";import"./InternalBackdrop-UqnCaGVN.js";import"./composite-JSaF2J1s.js";import"./index-CIe6uhG7.js";import"./index-UtGuVeZo.js";import"./index-BzC6OjRU.js";import"./useEventCallback-Q2vk9PCY.js";import"./SkeletonBar-CgVsJVv3.js";import"./LoadingCell-A8k2lNO5.js";import"./ColumnConfigDialog-Ct6f0_e0.js";import"./DraggableList-BlJ4l4bX.js";import"./search-D1UF5EaJ.js";import"./Input-C4TGes2g.js";import"./useControlled-BdXF-8vf.js";import"./Button-BKP5ADZQ.js";import"./small-cross-D8svfqd3.js";import"./ActionButton-quaqHEPu.js";import"./Checkbox-D93Gj_vX.js";import"./useValueChanged-0avqLTHA.js";import"./CollapsiblePanel-DMLIpAbb.js";import"./MultiColumnSortDialog-DSV2K4Vg.js";import"./MenuTrigger-BcS9EnKj.js";import"./CompositeItem-BTE8y1pl.js";import"./ToolbarRootContext-U-LssyxT.js";import"./getDisabledMountTransitionStyles-C3IU8gic.js";import"./getPseudoElementBounds-BDhnbV4R.js";import"./chevron-down-DI7a3Uf5.js";import"./index-RhUwFwFJ.js";import"./error-BARMDzUn.js";import"./BaseCbacBanner-AwORgCyR.js";import"./makeExternalStore-BahKFFla.js";import"./Tooltip-1n8j-V5F.js";import"./PopoverPopup-DK71HW__.js";import"./debounce-CVh5FHmf.js";import"./useOsdkClient-CtzBUCwK.js";import"./tick-1CibzV_P.js";import"./DropdownField-Dgc8ONCk.js";import"./isEqual-BIAko7LF.js";import"./withOsdkMetrics-BcIRH2mN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

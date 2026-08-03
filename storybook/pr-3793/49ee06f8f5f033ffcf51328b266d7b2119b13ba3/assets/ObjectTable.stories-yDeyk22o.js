import{j as i}from"./iframe-B_yUu-cX.js";import{O as p}from"./object-table-BaXjLQRs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BB9_lYqX.js";import"./preload-helper-DcvxkMkX.js";import"./Table-BUBz74Aj.js";import"./index-XbE7DXxD.js";import"./Dialog-J2Svzxv6.js";import"./cross-C_lKmFAq.js";import"./svgIconContainer-DK4T2FGf.js";import"./useBaseUiId-B0dhadue.js";import"./InternalBackdrop-CvqXaCs7.js";import"./composite-ATDhx_ec.js";import"./index-CYicsPED.js";import"./index-Ct6MB3Hz.js";import"./index-hv5w3w6e.js";import"./useEventCallback-B5Mj_AiL.js";import"./SkeletonBar-CyqgIe6R.js";import"./LoadingCell-yLfxuT3F.js";import"./ColumnConfigDialog-BJLVGbGu.js";import"./DraggableList-B631PcPT.js";import"./search-CKP8uFrx.js";import"./Input-CiACNLL0.js";import"./useControlled-BZUXCsnn.js";import"./isEqual-DGvw4j76.js";import"./isObject-B5MSRvat.js";import"./Button-BYTNbaL9.js";import"./ActionButton-Bc9WEdCL.js";import"./Checkbox-BdldxRYp.js";import"./useValueChanged-B3OJyAcf.js";import"./CollapsiblePanel-e4u0SMbU.js";import"./MultiColumnSortDialog-BHeomoox.js";import"./MenuTrigger-BwtcDAUn.js";import"./CompositeItem-D2vovJ6U.js";import"./ToolbarRootContext-B_rfO5vo.js";import"./getDisabledMountTransitionStyles-BUo3ak9a.js";import"./getPseudoElementBounds-Bz6nmggm.js";import"./chevron-down-Dw25Lm-O.js";import"./index-q0iON3Ea.js";import"./error-BSusmaAF.js";import"./BaseCbacBanner-Beqx_Fwp.js";import"./makeExternalStore-CwdAeWiC.js";import"./Tooltip-tkp8oS-A.js";import"./PopoverPopup-Dp7-Ury3.js";import"./toNumber-L5F8Lvmb.js";import"./useOsdkClient-DoDbRZ-A.js";import"./tick-VhUAs6z-.js";import"./DropdownField-r7zk0GKI.js";import"./withOsdkMetrics-sJj72yX2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-nl_vu0vo.js";import{O as p}from"./object-table-CU0V_I6a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BMi3yiPw.js";import"./preload-helper-Dj6yhN1L.js";import"./Table-Bel8UQqy.js";import"./index-Bw4Di_Av.js";import"./Dialog-BscngXRU.js";import"./cross-BwLhOV3t.js";import"./svgIconContainer-dVj22x2p.js";import"./useBaseUiId-BIN8dWsl.js";import"./InternalBackdrop-BwYnyTy7.js";import"./composite-BrMY9sNC.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./index-B_91enxX.js";import"./useEventCallback-Clb2jbe4.js";import"./SkeletonBar-Cf0WHzle.js";import"./LoadingCell-FEWscMZb.js";import"./ColumnConfigDialog-DcAdSA97.js";import"./DraggableList-DRUU_dLr.js";import"./search-Cx3JC5DT.js";import"./Input-DsULXrnF.js";import"./useControlled-BwxmcO0L.js";import"./Button-B0tw-VeI.js";import"./small-cross-qF70xz6k.js";import"./ActionButton-DNw29PFB.js";import"./Checkbox-03YMgAog.js";import"./useValueChanged-D8sRyeVl.js";import"./CollapsiblePanel-CIkexinm.js";import"./MultiColumnSortDialog-BDuMndbx.js";import"./MenuTrigger-CR9XRxYf.js";import"./CompositeItem-ylAvuyxw.js";import"./ToolbarRootContext-C4XGK6eV.js";import"./getDisabledMountTransitionStyles-CTsc8Cvf.js";import"./getPseudoElementBounds-Dgz0mXJB.js";import"./chevron-down-Cg1zW2dH.js";import"./index-CvPJeLDe.js";import"./error-CXoZGWHU.js";import"./BaseCbacBanner-BUySb7tJ.js";import"./makeExternalStore-lr4yKVc-.js";import"./Tooltip-BDbtIfcD.js";import"./PopoverPopup-ClK3uhCd.js";import"./debounce-DmK_7Xqg.js";import"./useOsdkClient-D5Z564TK.js";import"./tick-C_3Us6Ua.js";import"./DropdownField-BU9E5XBo.js";import"./isEqual-BowIumRw.js";import"./withOsdkMetrics-DScTmPNl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

import{j as i}from"./iframe-DYuNygDT.js";import{O as p}from"./object-table-BGSywQPX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjPSK1Lx.js";import"./preload-helper-DNcVOp9p.js";import"./Table-Bd0SIFCS.js";import"./index-Z-VamNUn.js";import"./Dialog-DU71SPyH.js";import"./cross-BAgwegJv.js";import"./svgIconContainer-DW4S_s8v.js";import"./useBaseUiId-BcxI-vr3.js";import"./InternalBackdrop-DzbbdgPK.js";import"./composite-B8-6F05C.js";import"./index-CJc8tiXf.js";import"./index-B54hZF59.js";import"./index-BnKCXvWh.js";import"./useEventCallback-CTNFarTj.js";import"./SkeletonBar-CRx6wyYo.js";import"./LoadingCell-CcdHY3uR.js";import"./ColumnConfigDialog-Cn6RbG_i.js";import"./DraggableList-BREctNVP.js";import"./search-DIPEzkiP.js";import"./Input-CDNL1w7C.js";import"./useControlled-BuiEHDXU.js";import"./Button-BsHu9zTC.js";import"./small-cross-CdaaHxKR.js";import"./ActionButton-5OHeM4Pf.js";import"./Checkbox-C8evdvVx.js";import"./useValueChanged-BXHZKjZ0.js";import"./CollapsiblePanel-CfT5DkwQ.js";import"./MultiColumnSortDialog-zK16g6ZJ.js";import"./MenuTrigger-Oimw98t7.js";import"./CompositeItem-DAdd__ur.js";import"./ToolbarRootContext-BNqu3LLk.js";import"./getDisabledMountTransitionStyles-BLopcKSb.js";import"./getPseudoElementBounds-BZEvyE4s.js";import"./chevron-down-DwRyFZmE.js";import"./index-Bq3G2Qv2.js";import"./error-DXNNzXjG.js";import"./BaseCbacBanner-CuOxMcbL.js";import"./makeExternalStore-BtgLem_Q.js";import"./Tooltip-BoBbTl3T.js";import"./PopoverPopup-CviStnN-.js";import"./debounce-CKSVpS6C.js";import"./useOsdkClient-DT0yAhzW.js";import"./tick-vrNi4Iyx.js";import"./DropdownField-Dcj1OaRe.js";import"./isEqual-Dx3IzvLl.js";import"./withOsdkMetrics-DuapMseQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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

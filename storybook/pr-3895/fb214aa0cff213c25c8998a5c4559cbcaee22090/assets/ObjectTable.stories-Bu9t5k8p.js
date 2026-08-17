import{j as i}from"./iframe-BAIjVGVk.js";import{O as p}from"./object-table-CgRmp_wx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1nrnBGW.js";import"./preload-helper-DSHh_idH.js";import"./Table-DDAhnscq.js";import"./index-DXpX7Amm.js";import"./Dialog-DkpHA-m3.js";import"./cross-CMTVeRn5.js";import"./svgIconContainer-CyAzcMHP.js";import"./useBaseUiId-BWufarWX.js";import"./InternalBackdrop-CoKYeuWa.js";import"./composite-QKuz8rbt.js";import"./index-ClU-xGz3.js";import"./index-BsrAu5pi.js";import"./index-QT8bzbR-.js";import"./useEventCallback-CsCnypAM.js";import"./SkeletonBar-Bedjo_IK.js";import"./LoadingCell-15_H8fvU.js";import"./ColumnConfigDialog-CMLYXuJ3.js";import"./DraggableList-2Q7nVhxS.js";import"./search-CuXKgBVi.js";import"./Input-fl6Gg72N.js";import"./useControlled-DuNzm9BZ.js";import"./Button-YDlO7Iev.js";import"./small-cross-DhSNS2sx.js";import"./ActionButton-DTbF0D12.js";import"./Checkbox-B6DnqRZR.js";import"./useValueChanged-bKRsX5KW.js";import"./CollapsiblePanel-pLJveLE6.js";import"./MultiColumnSortDialog-4VLh05pQ.js";import"./MenuTrigger-BIzQg68D.js";import"./CompositeItem-D_qw6hBc.js";import"./ToolbarRootContext-cyL3JijA.js";import"./getDisabledMountTransitionStyles-DBk0gkcA.js";import"./getPseudoElementBounds-B2i1okA0.js";import"./chevron-down-CI5MTTqT.js";import"./index-BI7ItsTy.js";import"./error-BHvGZT3F.js";import"./BaseCbacBanner-BtTwoFWI.js";import"./makeExternalStore-BcjHsE3T.js";import"./Tooltip-DHp42P0G.js";import"./PopoverPopup-34srozDo.js";import"./debounce-DV255FUG.js";import"./useOsdkClient-BGAxcLse.js";import"./tick-CNbryE7H.js";import"./DropdownField-Z7SF_GUg.js";import"./isEqual-CNxzTEUo.js";import"./withOsdkMetrics-bmWg7v3w.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
